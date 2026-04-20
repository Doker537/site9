#!/bin/bash

# Проверяем, передали ли мы текст коммита при запуске
# Если нет, берем текущую дату и время как текст по умолчанию
COMMIT_MSG=$1
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Автоматический коммит: $(date +'%Y-%m-%d %H:%M:%S')"
fi

echo "⏳ Добавляем файлы..."
git add .

echo "📝 Создаем коммит: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "🚀 Отправляем в GitLab..."
git push

echo "✅ Готово! Код успешно отправлен."