import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const EXPERTISE_OPTIONS = [
  'Судебная экспертиза',
  'Строительная экспертиза',
  'Автотехническая экспертиза',
  'Оценочная экспертиза',
  'Землеустроительная экспертиза',
  'Пожарно-техническая экспертиза',
  'Другое',
];

function formatPhone(local: string): string {
  let result = '+7';
  if (local.length > 0) result += ' ' + local.slice(0, 3);
  if (local.length > 3) result += '-' + local.slice(3, 6);
  if (local.length > 6) result += '-' + local.slice(6, 8);
  if (local.length > 8) result += '-' + local.slice(8, 10);
  return result;
}

// Custom combobox that always opens downward
function ExpertiseCombobox({
  value,
  onChange,
  overlayStyle = false,
}: {
  value: string;
  onChange: (v: string) => void;
  overlayStyle?: boolean;
}) {
  const [query, setQuery] = React.useState(value);
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const filtered = query
    ? EXPERTISE_OPTIONS.filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : EXPERTISE_OPTIONS;

  React.useEffect(() => { setQuery(value); }, [value]);

  // Close on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const inputClass = overlayStyle
    ? "w-full bg-white/10 border border-white/20 p-[10px] pr-8 text-[12px] text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
    : "flex h-10 w-full rounded-none border border-input bg-slate-50 px-3 py-2 pr-8 text-sm focus:outline-none focus:border-accent";

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        value={query}
        onChange={e => {
          const val = e.target.value;
          setQuery(val);
          onChange(val);
          setOpen(val.length > 0);
        }}
        placeholder="Вид экспертизы (начните вводить…)"
        className={inputClass}
        autoComplete="off"
      />
      <ChevronDown
        className={cn(
          "absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none transition-transform duration-200",
          overlayStyle ? "text-white/50" : "text-muted-foreground",
          open && "rotate-180"
        )}
      />
      {open && query.length > 0 && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-[999] bg-white border border-[#E2E8F0] shadow-xl max-h-[180px] overflow-y-auto mt-0.5">
          {filtered.map(opt => (
            <button
              key={opt}
              type="button"
              className="w-full text-left px-3 py-2.5 text-[13px] text-slate-700 hover:bg-primary hover:text-white transition-colors border-b border-[#F1F5F9] last:border-0"
              onMouseDown={e => {
                e.preventDefault();
                setQuery(opt);
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ContactForm({ isOverlay = false }: { isOverlay?: boolean }) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [phone, setPhone] = React.useState('+7 ');
  const [phoneTouched, setPhoneTouched] = React.useState(false);
  const [expertiseType, setExpertiseType] = React.useState('');

  const isPhoneComplete = phone.replace(/\D/g, '').length === 11;
  const showPhoneError = phoneTouched && !isPhoneComplete;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allDigits = e.target.value.replace(/\D/g, '');
    const normalized = (allDigits.startsWith('7') ? allDigits : '7' + allDigits).slice(0, 11);
    setPhone(formatPhone(normalized.slice(1)));
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPhone('+7 ');
    setPhoneTouched(false);
    setExpertiseType('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneTouched(true);
    if (!isPhoneComplete) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className={cn(
        "rounded-none",
        isOverlay ? "bg-primary border-none text-white p-6" : "border-primary/20 bg-primary/5"
      )}>
        <CardContent className="pt-10 pb-10 text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl">✓</div>
          <CardTitle className={isOverlay ? "text-white" : ""}>Заявка принята!</CardTitle>
          <CardDescription className={isOverlay ? "text-white/70" : ""}>
            Наш эксперт свяжется с вами в ближайшее время.
          </CardDescription>
          <Button variant={isOverlay ? "secondary" : "outline"} onClick={handleReset} className="w-full mt-4">
            Отправить еще одну
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (isOverlay) {
    return (
      <Card className="bg-primary text-white p-[25px] rounded-[8px] border-none shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        <h3 className="text-[16px] font-bold mb-[15px] text-white">Заявка на консультацию</h3>
        <form onSubmit={handleSubmit} className="space-y-[10px]">
          <input
            type="text"
            placeholder="Ваше ФИО"
            className="w-full bg-white/10 border border-white/20 p-[10px] text-[12px] text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
            required
          />
          <div>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => setPhoneTouched(true)}
              placeholder="+7 999-336-77-00"
              className={cn(
                "w-full bg-white/10 border p-[10px] text-[12px] text-white focus:outline-none focus:border-accent",
                showPhoneError ? "border-red-400" : "border-white/20"
              )}
              required
            />
            {showPhoneError && (
              <p className="text-red-300 text-[10px] mt-1">Введите полный номер: +7 999-999-99-99</p>
            )}
          </div>
          <ExpertiseCombobox value={expertiseType} onChange={setExpertiseType} overlayStyle />
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 border-none text-white p-3 font-bold uppercase text-[12px] transition-colors cursor-pointer mt-2"
          >
            ОТПРАВИТЬ ЗАПРОС
          </button>
        </form>
      </Card>
    );
  }

  return (
    <Card className="rounded-none border-border">
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-bold">Оставить заявку</CardTitle>
        <CardDescription className="text-sm">Заполните форму, и мы проконсультируем вас бесплатно.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase text-muted-foreground tracking-wider">Ваше ФИО</label>
            <Input placeholder="Иванов Иван Иванович" required className="rounded-none border-border bg-slate-50" />
          </div>
          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase text-muted-foreground tracking-wider">Телефон</label>
            <Input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => setPhoneTouched(true)}
              placeholder="+7 999-336-77-00"
              required
              className={cn(
                "rounded-none bg-slate-50",
                showPhoneError ? "border-destructive focus-visible:ring-destructive/20" : "border-border"
              )}
            />
            {showPhoneError && (
              <p className="text-[11px] text-destructive">Неверный формат. Введите полный номер: +7 999-999-99-99</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase text-muted-foreground tracking-wider">Тип экспертизы</label>
            <ExpertiseCombobox value={expertiseType} onChange={setExpertiseType} />
          </div>
          {expertiseType === 'Другое' && (
            <div className="space-y-2">
              <label className="text-[12px] font-bold uppercase text-muted-foreground tracking-wider">Опишите вашу задачу</label>
              <Textarea
                placeholder="Расскажите подробнее о вашей ситуации…"
                className="rounded-none border-border bg-slate-50 resize-none min-h-[100px]"
              />
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-[12px] rounded-sm h-12"
          >
            Получить бесплатную консультацию
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
