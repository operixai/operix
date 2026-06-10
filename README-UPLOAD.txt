OPERIX FORCE FAVICON UPDATE

Почему не менялось:
- favicon.ico в репо уже новый.
- Но HTML ссылается на favicon.ico без ?v=...
- Браузеры очень жёстко кэшируют favicon, поэтому старое лого может висеть даже после замены файла.

Что делает этот пакет:
- Добавляет cache-busting ко всем страницам:
  /operix/favicon.ico?v=20260610-fav3
- Добавляет shortcut icon.
- Добавляет PNG favicon 16/32.
- Добавляет apple-touch-icon.
- Добавляет site.webmanifest.
- Кладёт все favicon файлы в корень repo.

Как залить:
1. Распакуй ZIP.
2. Открой repo: operixai/operix
3. Add file → Upload files
4. Перетащи ВСЁ содержимое архива в корень repo.
5. Согласись на Replace existing files.
6. Commit message: Force favicon cache update
7. Commit changes.
8. Открой в Incognito:
   https://operixai.github.io/operix/pricing.html?v=fav3

Если старое всё ещё видно:
- Закрой вкладку.
- Открой Incognito.
- Или напрямую открой:
  https://operixai.github.io/operix/favicon.ico?v=20260610-fav3
Если там новая иконка — сайт уже обновлён, старое держит кэш браузера.
