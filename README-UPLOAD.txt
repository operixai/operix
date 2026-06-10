OPERIX FULL CLEANUP — SECOND PACKAGE

Что это исправляет:
- Полностью заменяет index/services/pricing/cases/about/blog/contact/privacy/terms.
- Убирает fake-looking кейсы и testimonials.
- Cases теперь честно называются demo workflows, не выдуманные клиенты.
- Blog больше не выглядит как фейковые статьи без ссылок: теперь это planned playbooks / coming soon.
- Pricing переписан под нормальные классы и адаптив.
- Privacy приведён к Formspree: больше нет ложной фразы, что данные не проходят через third-party.
- Contact переписан без старых Google Sheets комментариев и оставлен Formspree endpoint.
- Добавлен js/page-copy.js для нормального EN/RU на переписанных страницах.
- Добавлен css/content-clean.css для чистого слоя страниц.
- layout.js обновлён: подключает fixes.css, content-clean.css и site-fixes.js с новым cache-busting.

Как залить:
1. Распакуй ZIP.
2. Открой repo: operixai/operix
3. Add file → Upload files
4. Перетащи ВСЁ содержимое архива в GitHub.
5. Согласись на Replace existing files.
6. Commit message: Full cleanup pages and honest content
7. Commit changes.
8. Через пару минут открой сайт в инкогнито:
   https://operixai.github.io/operix/

Важно:
- Загружай именно содержимое архива, не папку operix-full-cleanup целиком.
- Если браузер держит кеш, открой Incognito или добавь ?v=20260610-clean2 к URL.
