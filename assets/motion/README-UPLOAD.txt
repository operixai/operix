OPERIX VIDEO AUTOPLAY LOOP ONLY

База:
- Работал строго с твоим ZIP: operix-loopfix-seamless(2)(2).zip
- Структуру сайта/дизайн/страницы не переделывал.

Что исправлено:
1. Убрал poster из motion video HTML.
2. Видео теперь:
   autoplay
   muted
   loop
   playsinline
   preload="auto"
3. При скролле видео запускается заранее, когда блок близко к viewport.
4. На mobile видео может ставиться на pause только когда далеко вне экрана, но при приближении сразу стартует.
5. Постеры/JPG больше не используются в video tag.
6. Добавлен css/video-autoplay-loop.css — без картинок внутри motion-блока.
7. Desktop и mobile получают новую версию autoplayloop1.
8. Overlay-текст остаётся HTML поверх видео и переводится RU/EN.

Важно:
- Файлы .jpg могут физически оставаться в папке, но video tag их больше не использует.
- Если хочешь удалить .jpg из repo полностью, это нужно делать отдельным delete commit в GitHub.

Как залить:
1. Распакуй ZIP.
2. Открой repo: operixai/operix
3. Add file → Upload files
4. Перетащи ВСЁ содержимое архива в корень repo.
5. Согласись на Replace existing files.
6. Commit message:
   Autoplay loop videos without posters
7. Проверка:
   https://operixai.github.io/operix/?v=autoplayloop1

Если ПК держит старое:
- Incognito
- DevTools → Network → Disable cache → Ctrl+F5
- прямой тест:
  https://operixai.github.io/operix/assets/motion/home.mp4?v=autoplayloop1

Проверка:
poster attr left in video-motion.js: False

about.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
cases.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
contact.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
home.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
pricing.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
services.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384