OPERIX MP4 MOTION MOBILE READY

Это тот же пакет с MP4 motion, но с отдельной доводкой под mobile/tablet.

Что добавлено:
- css/mobile-smooth.css
- js/mobile-smooth.js
- обновлён js/layout.js
- все HTML подключают mobile-smooth layer напрямую

Что чинит:
1. Видео на мобильных:
   - playsinline/muted/autoplay-safe
   - если видео вне экрана на телефоне — оно ставится на pause
   - если пользователь включил reduced motion — видео отключается

2. Mobile layout:
   - нет горизонтального скролла
   - hero/page-header нормально ужимаются
   - кнопки full-width на телефоне
   - карточки/блоки не вылезают
   - таблицы pricing скроллятся горизонтально безопасно

3. Burger/menu:
   - меню закрывается после клика по ссылке
   - высота меню безопасная для 100dvh

4. Анимации:
   - быстрее и легче на mobile
   - fallback, если IntersectionObserver не сработал

Как залить:
1. Распакуй ZIP.
2. Открой repo: operixai/operix
3. Add file → Upload files
4. Перетащи ВСЁ содержимое архива в корень repo.
5. Согласись на Replace existing files.
6. Commit message:
   Mobile optimize MP4 motion site
7. Проверка:
   https://operixai.github.io/operix/?v=mobile1

Проверяй обязательно:
- Chrome desktop
- Incognito
- mobile responsive mode 390px
- реальный телефон
