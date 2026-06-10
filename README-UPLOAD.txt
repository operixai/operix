OPERIX LOOPFIX SEAMLESS MOTION

База:
- Я работал именно с твоим прикреплённым ZIP: operix-smooth-hq-motion(1).zip
- Структуру сайта не переделывал.

Что исправлено:
1. Видео теперь зациклены через ping-pong loop:
   forward → reverse → forward.
   Поэтому последний кадр совпадает с первым и loop не должен дёргаться.
2. Desktop и mobile получают одну свежую версию:
   loopfix1
3. Добавлен css/motion-loopfix.css:
   - desktop 16:9
   - mobile 4:5
   - video ровно лежит в блоке
   - overlay-текст остаётся поверх и переводится RU/EN
4. MP4 остались 1920×1080 / 60 FPS.
5. Текст внутри самих видео не добавлялся.
6. На desktop видео не должно паузиться mobile-скриптом.

Как залить:
1. Распакуй ZIP.
2. Открой repo: operixai/operix
3. Add file → Upload files
4. Перетащи ВСЁ содержимое архива в корень repo.
5. Согласись на Replace existing files.
6. Commit message:
   Fix seamless motion loops desktop mobile
7. Проверка:
   https://operixai.github.io/operix/?v=loopfix1

Если на ПК старая версия:
- DevTools → Network → Disable cache → Ctrl+F5
- или Incognito
- прямой тест:
  https://operixai.github.io/operix/assets/motion/home.mp4?v=loopfix1

Проверка видео:

home.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
services.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
pricing.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
cases.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
about.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384
contact.mp4: 1920×1080 / 60/1 / duration 6.400000 / frames 384