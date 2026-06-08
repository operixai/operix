// ═══════════════════════════════════════════════════════════
// OPERIX — Google Apps Script для Google Sheets
// ═══════════════════════════════════════════════════════════
//
// ИНСТРУКЦИЯ (5 минут):
//
// 1. Открой sheets.google.com → создай таблицу "Operix Leads"
//
// 2. В строке 1 добавь заголовки (по одному в каждую ячейку):
//    A1: Дата
//    B1: Имя
//    C1: Email
//    D1: Компания
//    E1: Бюджет
//    F1: Услуга
//    G1: Сообщение
//
// 3. Расширения → Apps Script
//    Удали весь код → вставь код ниже → Ctrl+S
//
// 4. Нажми "Развернуть" → "Новое развёртывание"
//    - Тип: Веб-приложение
//    - Выполнять как: Я
//    - Доступ: Все
//    → Нажми "Развернуть"
//    → Разреши доступ (первый раз попросит войти в Google)
//    → Скопируй URL вида: https://script.google.com/macros/s/XXXXX/exec
//
// 5. В файле contact.html найди строку:
//    const GOOGLE_SHEETS_URL = 'ВСТАВЬ_ТВОЙ_URL_ЗДЕСЬ';
//    Замени на свой URL → сохрани → залей на GitHub
//
// Готово! Все заявки будут появляться в таблице автоматически.
// ═══════════════════════════════════════════════════════════

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data  = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' }),
      data.name    || '—',
      data.email   || '—',
      data.company || '—',
      data.budget  || '—',
      data.service || '—',
      data.message || '—'
    ]);

    // Опционально: подсветить новую строку жёлтым
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 7)
      .setBackground('#fff9c4');

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Тест — можно запустить вручную в Apps Script
function testSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date().toLocaleString('ru-RU'),
    'Тест Имя',
    'test@example.com',
    'Test Company',
    '$500 – $1,000',
    'AI Customer Support Bot',
    'Это тестовая заявка'
  ]);
  Logger.log('Тест успешен!');
}
