OPERIX SEAMLESS HQ MOTION

База:
- Взял именно твой прикреплённый ZIP: operix-mp4-motion-mobile-ready.

Что исправлено:
1. Оставлена старая рабочая логика MP4 motion-блоков.
2. Overlay-текст остаётся HTML поверх видео и переводится RU/EN.
3. Текст внутри самих видео убран полностью.
4. Видео пересобраны заново:
   - 1920×1080
   - 60 FPS
   - 4 секунды
   - loop-friendly motion через sin/cos, без резкого reset в конце
5. Фон стал чище: warm cream / dark warm / terra-cotta.
6. Desktop и mobile получают новые версии через cache-busting seamless1.
7. Mobile остаётся 4:5, desktop 16:9.

Почему раньше дёргалось:
- старые видео были 640×360 / 18 FPS;
- часть движений имела reset, поэтому браузер резко прыгал с последнего кадра на первый;
- desktop мог держать старый JS/CSS из кеша, пока mobile показывал новое.

Как залить:
1. Распакуй ZIP.
2. Открой repo: operixai/operix
3. Add file → Upload files
4. Перетащи ВСЁ содержимое архива в корень repo.
5. Согласись на Replace existing files.
6. Commit message:
   Add seamless 1080p 60fps motion videos
7. Проверка:
   https://operixai.github.io/operix/?v=seamless1

Если на ПК старая версия, а на телефоне новая:
- это desktop cache.
- открой Incognito или DevTools → Network → Disable cache → Ctrl+F5.
- прямой тест:
  https://operixai.github.io/operix/assets/motion/home.mp4?v=seamless1

Видео:

about.mp4: 1920 / 1080 / 60/1 / 60/1 / 4.000000 / 240
cases.mp4: 1920 / 1080 / 60/1 / 60/1 / 4.000000 / 240
contact.mp4: 1920 / 1080 / 60/1 / 60/1 / 4.000000 / 240
home.mp4: 1920 / 1080 / 60/1 / 60/1 / 4.000000 / 240
pricing.mp4: 1920 / 1080 / 60/1 / 60/1 / 4.000000 / 240
services.mp4: 1920 / 1080 / 60/1 / 60/1 / 4.000000 / 240