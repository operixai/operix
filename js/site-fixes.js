// Operix site fixes.
// Upload this file to: js/site-fixes.js
// It patches old hardcoded page text, service translations, haptics, and small UX issues.

(function(){
  const serviceCopy = {
    en: {
      chatbots: {
        label: '01 — AI Customer Support',
        title: 'Never miss a customer again.',
        desc: 'We build intelligent conversational AI that handles customer inquiries, qualifies leads, books appointments, and escalates complex cases to your team — all automatically, in any language, around the clock.',
        features: [
          'Multi-language support (English, Russian, Spanish + more)',
          'Telegram, WhatsApp, website widget integration',
          'CRM sync — every conversation logged automatically',
          'Smart escalation to human agents when needed',
          'Conversation analytics dashboard'
        ],
        cta: 'Get started — from $300'
      },
      automation: {
        label: '02 — Workflow Automation',
        title: 'Kill the busywork. Keep the results.',
        desc: 'We map your most time-consuming processes and replace them with AI-powered workflows. Data entry, report generation, email follow-ups, invoice processing — if it is repetitive, we automate it.',
        features: [
          'Process mapping and bottleneck audit included',
          'Integration with 200+ tools via API',
          'Automated reporting and alerts',
          'Error handling and fallback logic built-in'
        ],
        cta: 'Get started — from $500'
      },
      leads: {
        label: '03 — AI Lead Generation',
        title: 'Your sales pipeline. On autopilot.',
        desc: 'We build automated prospecting systems that find your ideal customers, craft personalized outreach, and nurture them until they are ready to buy — without lifting a finger.',
        features: [
          'AI-powered prospect research and scoring',
          'Personalized outreach at scale',
          'Follow-up sequences fully automated',
          'Lead qualification before reaching your team'
        ],
        cta: 'Get started — from $400'
      },
      analytics: {
        label: '04 — AI Analytics & Reporting',
        title: 'Data that actually drives decisions.',
        desc: 'We build AI systems that collect, process, and surface the insights that matter — automatically delivered to you every morning, so you always know what is working.',
        features: [
          'Automated daily and weekly performance reports',
          'Plain-English AI explanation of your data',
          'Anomaly detection and instant alerts',
          'Connects to your existing data sources'
        ],
        cta: 'Get started — from $600'
      },
      content: {
        label: '05 — AI Content Machine',
        title: 'Content that never stops publishing.',
        desc: 'We build fully automated content pipelines that research topics, generate on-brand posts, write email campaigns, and schedule everything — while your team focuses on strategy.',
        features: [
          '30 social posts per month — zero manual effort',
          'Email newsletter automation',
          'Product description generation at scale',
          'Brand voice training included'
        ],
        cta: 'Get started — from $200/mo'
      },
      agents: {
        label: '06 — Custom AI Agents',
        title: 'A digital employee built for your business.',
        desc: 'Need something that does not fit a template? We build fully custom AI agents that reason, plan, and act on multi-step tasks — integrated deeply with your existing stack.',
        features: [
          'Custom reasoning and planning capabilities',
          'Connects to your internal databases and APIs',
          'Multi-step task execution autonomously',
          'Full audit trail and transparency logs'
        ],
        cta: 'Get started — from $1,000'
      }
    },
    ru: {
      chatbots: {
        label: '01 — AI поддержка клиентов',
        title: 'Больше никаких пропущенных клиентов.',
        desc: 'Создаём разговорный AI, который отвечает на запросы, квалифицирует лиды, записывает на встречи и передаёт сложные случаи команде — автоматически, на любом языке и круглосуточно.',
        features: [
          'Поддержка нескольких языков: английский, русский, испанский и другие',
          'Интеграция с Telegram, WhatsApp и виджетом сайта',
          'Синхронизация с CRM — каждый диалог логируется автоматически',
          'Умная передача сложных запросов живому менеджеру',
          'Дашборд аналитики переписок'
        ],
        cta: 'Начать — от $300'
      },
      automation: {
        label: '02 — Автоматизация процессов',
        title: 'Уберите рутину. Оставьте результат.',
        desc: 'Разбираем самые затратные процессы и заменяем их AI-воркфлоу. Ввод данных, отчёты, follow-up письма, счета — если задача повторяется, мы её автоматизируем.',
        features: [
          'Карта процессов и аудит узких мест включены',
          'Интеграция с 200+ инструментами через API',
          'Автоматические отчёты и уведомления',
          'Обработка ошибок и резервная логика'
        ],
        cta: 'Начать — от $500'
      },
      leads: {
        label: '03 — AI генерация лидов',
        title: 'Ваши продажи — на автопилоте.',
        desc: 'Строим системы, которые находят целевых клиентов, готовят персонализированные сообщения и ведут follow-up до готовности купить.',
        features: [
          'AI поиск и скоринг потенциальных клиентов',
          'Персонализированный outreach в масштабе',
          'Автоматизированные follow-up цепочки',
          'Квалификация лидов до передачи команде'
        ],
        cta: 'Начать — от $400'
      },
      analytics: {
        label: '04 — AI аналитика и отчёты',
        title: 'Данные, которые реально влияют на решения.',
        desc: 'Создаём AI-системы, которые собирают данные, подсвечивают важные инсайты и автоматически присылают понятные отчёты.',
        features: [
          'Ежедневные и еженедельные отчёты',
          'AI объясняет данные простым языком',
          'Поиск аномалий и мгновенные уведомления',
          'Подключение к вашим текущим источникам данных'
        ],
        cta: 'Начать — от $600'
      },
      content: {
        label: '05 — AI контент-машина',
        title: 'Контент, который не останавливается.',
        desc: 'Строим контент-конвейеры, которые исследуют темы, генерируют посты, пишут email-кампании и планируют публикации в вашем стиле.',
        features: [
          '30 постов в месяц без ручной работы',
          'Автоматизация email-рассылок',
          'Массовая генерация описаний товаров',
          'Обучение голосу бренда включено'
        ],
        cta: 'Начать — от $200/мес'
      },
      agents: {
        label: '06 — Кастомные AI агенты',
        title: 'Цифровой сотрудник для вашего бизнеса.',
        desc: 'Строим кастомных AI-агентов, которые рассуждают, планируют и выполняют многошаговые задачи внутри вашего текущего стека.',
        features: [
          'Кастомная логика рассуждения и планирования',
          'Подключение к внутренним базам данных и API',
          'Автономное выполнение многошаговых задач',
          'Прозрачные логи и история действий'
        ],
        cta: 'Начать — от $1,000'
      }
    }
  };

  function currentLang(){
    return localStorage.getItem('operix_lang') || document.documentElement.lang || 'en';
  }

  function setFeatureText(item, text){
    const svg = item.querySelector('svg');
    item.textContent = '';
    if (svg) item.appendChild(svg);
    item.appendChild(document.createTextNode(text));
  }

  function patchServices(){
    const lang = currentLang() === 'ru' ? 'ru' : 'en';
    Object.entries(serviceCopy[lang]).forEach(([id, data]) => {
      const root = document.getElementById(id);
      if (!root) return;

      const label = root.querySelector('.service-detail-meta .label');
      if (label) label.textContent = data.label;

      const title = root.querySelector('.service-detail-meta h2');
      if (title) title.textContent = data.title;

      const desc = root.querySelector('.service-detail-meta p');
      if (desc) desc.textContent = data.desc;

      const features = root.querySelectorAll('.feature-item');
      features.forEach((item, i) => {
        if (data.features[i]) setFeatureText(item, data.features[i]);
      });

      const cta = root.querySelector('.service-detail-meta .btn-primary');
      if (cta) cta.textContent = data.cta;
    });
  }

  function patchCommon(){
    // Remove outdated UTC copy if it appears anywhere.
    document.querySelectorAll('*').forEach(el => {
      if (el.children.length) return;
      const text = el.textContent || '';
      if (/UTC\s*\+?\s*5/i.test(text)) {
        el.textContent = text.replace(/\(?UTC\s*\+?\s*5\)?/ig, '').replace(/\s{2,}/g, ' ').trim();
      }
    });

    // Make all external links safer.
    document.querySelectorAll('a[target="_blank"]').forEach(a => {
      a.rel = 'noopener noreferrer';
    });

    // Ensure haptic feedback on industry tags too.
    document.querySelectorAll('.niche-tag').forEach(tag => {
      if (tag.dataset.hapticBound) return;
      tag.dataset.hapticBound = '1';
      tag.addEventListener('pointerdown', () => {
        if (navigator.vibrate) navigator.vibrate(10);
      });
    });

    // Add active class to current nav link.
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
      a.classList.toggle('active', href === current);
    });
  }

  function run(){
    patchServices();
    patchCommon();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  // Re-run after main.js language switching.
  document.addEventListener('click', (e) => {
    if (e.target.closest('.lang-btn')) {
      setTimeout(run, 70);
      setTimeout(run, 220);
    }
  });

  // Re-run after Industries render.
  setTimeout(run, 300);
  setTimeout(run, 900);
})();


// ── CLEAN2 HONESTY PATCHES ──
(function(){
  const honest = {
    en: {
      proof: 'Practical AI automation systems for service businesses.',
      outcomeLabel: 'Example outcomes',
      outcomeTitle: 'Automation examples, not fake client claims.',
      outcomeDesc: 'Public pages now show demo workflows and implementation scenarios unless a client approves a real case study.'
    },
    ru: {
      proof: 'Практичные AI-автоматизации для сервисных бизнесов.',
      outcomeLabel: 'Примеры результатов',
      outcomeTitle: 'Примеры автоматизаций, а не выдуманные кейсы.',
      outcomeDesc: 'Публичные страницы теперь показывают demo-workflows и сценарии внедрения, пока клиент не одобрил реальный кейс.'
    }
  };

  function lang(){ return localStorage.getItem('operix_lang') === 'ru' ? 'ru' : 'en'; }

  function patchHomepageHonesty(){
    const l = lang();
    const proofText = document.querySelector('.proof-text span');
    if (proofText) proofText.innerHTML = honest[l].proof;

    const avatars = document.querySelectorAll('.proof-avatar');
    const labels = ['AI','OPS','CRM','API','24/7'];
    avatars.forEach((el, i) => {
      el.textContent = labels[i] || 'AI';
      el.removeAttribute('style');
    });

    const testLabel = document.querySelector('[data-t="test_label"]');
    if (testLabel) testLabel.textContent = honest[l].outcomeLabel;

    const testTitle = document.querySelector('[data-t="test_title"]');
    if (testTitle) testTitle.textContent = honest[l].outcomeTitle;

    const quotes = document.querySelectorAll('.testimonial-quote');
    const names = document.querySelectorAll('.author-name');
    const roles = document.querySelectorAll('.author-role');

    const data = l === 'ru'
      ? [
          ['AI-бот может принимать заявки, задавать уточняющие вопросы и передавать горячие лиды менеджеру без задержки.', 'Lead intake workflow', 'Demo scenario'],
          ['Поддержка может автоматически отвечать на частые вопросы, статусы заказов и возвраты, оставляя команде только сложные случаи.', 'Support automation', 'Demo scenario'],
          ['Контент-пайплайн может готовить черновики постов, email и описаний товаров по вашему tone of voice.', 'Content workflow', 'Demo scenario']
        ]
      : [
          ['An AI bot can capture inquiries, ask qualifying questions, and route warm leads to your team without delay.', 'Lead intake workflow', 'Demo scenario'],
          ['Support automation can answer FAQs, order status questions, and return requests while your team handles complex cases.', 'Support automation', 'Demo scenario'],
          ['A content pipeline can draft posts, emails, and product descriptions in your brand voice.', 'Content workflow', 'Demo scenario']
        ];

    quotes.forEach((q, i) => { if (data[i]) q.textContent = data[i][0]; });
    names.forEach((n, i) => { if (data[i]) n.textContent = data[i][1]; });
    roles.forEach((r, i) => { if (data[i]) r.textContent = data[i][2]; });
  }

  function runClean2(){
    patchHomepageHonesty();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runClean2);
  } else {
    runClean2();
  }
  document.addEventListener('click', (e) => {
    if (e.target.closest('.lang-btn')) {
      setTimeout(runClean2, 80);
      setTimeout(runClean2, 240);
    }
  });
  setTimeout(runClean2, 500);
})();
