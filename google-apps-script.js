// Operix — Google Apps Script
// Deploy as: Web App → Execute as: Me → Access: Anyone
// Paste the deployment URL into contact.html → SHEETS_URL

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    let data = {};
    try {
      data = JSON.parse(e.postData.contents);
    } catch(parseErr) {
      // fallback: parse form params
      data = {};
      if (e.parameter) {
        for (const key in e.parameter) {
          data[key] = e.parameter[key];
        }
      }
    }

    // Check if headers exist, add if not
    const lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.appendRow([
        'Date', 'Name', 'Email', 'Company', 'Budget', 'Service', 'Message', 'Language', 'Source'
      ]);
    }

    sheet.appendRow([
      data.submitted_at ? new Date(data.submitted_at).toLocaleString('ru-RU', {timeZone:'Asia/Tashkent'}) : new Date().toLocaleString('ru-RU', {timeZone:'Asia/Tashkent'}),
      data.name    || '—',
      data.email   || '—',
      data.company || '—',
      data.budget  || '—',
      data.service || '—',
      data.message || '—',
      data.page_lang || 'en',
      data.source  || 'website'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'alive', message: 'Operix Leads endpoint is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
