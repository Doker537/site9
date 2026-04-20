import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(value: string): string {
  const raw = value.replace(/\D/g, '');
  let d = raw.startsWith('8') ? '7' + raw.slice(1) : raw.startsWith('7') ? raw : '7' + raw;
  d = d.slice(0, 11);
  if (!d) return '';
  let out = '+7';
  if (d.length < 2) return out;
  out += ' (' + d.slice(1, Math.min(4, d.length));
  if (d.length < 4) return out;
  out += ') ' + d.slice(4, Math.min(7, d.length));
  if (d.length < 7) return out;
  out += '-' + d.slice(7, Math.min(9, d.length));
  if (d.length < 9) return out;
  out += '-' + d.slice(9, 11);
  return out;
}

export function isValidPhone(phone: string): boolean {
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
