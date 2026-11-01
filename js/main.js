// ==================== State ====================
let currentCategory = 'html';
let currentTopic = null;
let isDarkMode = false;
let sidebarOpen = false;

// ==================== Init ====================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFooter();
  renderSidebar('html');
  loadTopic(HTML_DATA.topics[0]);
  initSearch();
  initMobileMenu();
});

// ==================== Theme ====================
function initTheme() {
  const saved = localStorage.getItem('theme');
  // الموقع يفتح على اللايت مود دايماً، ولو المستخدم اختار الدارك مود يتم تفعيله
  isDarkMode = saved === 'dark';
  applyTheme();
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.title = isDarkMode ? 'التبديل إلى الوضع النهاري (Light)' : 'التبديل إلى الوضع الليلي (Dark)';
    btn.setAttribute('aria-label', isDarkMode ? 'التبديل إلى الوضع النهاري' : 'التبديل إلى الوضع الليلي');
  }
}

// ==================== Footer ====================
function initFooter() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ==================== Sidebar ====================
// ==================== Sidebar ====================
function getCategoryIconHtml(category) {
  switch (category) {
    case 'html': return '<i class="fa-brands fa-html5"></i>';
    case 'css': return '<i class="fa-brands fa-css3-alt"></i>';
    case 'js': return '<i class="fa-brands fa-js"></i>';
    case 'dart': return '<i class="fa-solid fa-bullseye"></i>';
    case 'flutter': return '<i class="fa-brands fa-flutter"></i>';
    default: return '<i class="fa-solid fa-code"></i>';
  }
}

function renderSidebar(category) {
  currentCategory = category;
  let data = HTML_DATA;
  if (category === 'css') data = CSS_DATA;
  else if (category === 'js') data = JS_DATA;
  else if (category === 'dart' && typeof DART_DATA !== 'undefined') data = DART_DATA;
  else if (category === 'flutter' && typeof FLUTTER_DATA !== 'undefined') data = FLUTTER_DATA;
  const list = document.getElementById('topicsList');
  const catTitle = document.getElementById('categoryTitle');
  const catIcon = document.getElementById('categoryIcon');

  if (catTitle) catTitle.textContent = data.category;
  if (catIcon) catIcon.innerHTML = getCategoryIconHtml(category);

  list.innerHTML = '';
  data.topics.forEach(topic => {
    const li = document.createElement('li');
    li.className = 'topic-item';
    li.dataset.id = topic.id;
    li.innerHTML = `
      <span class="topic-icon">${topic.icon}</span>
      <span class="topic-title">${topic.title}</span>
    `;
    li.addEventListener('click', () => {
      loadTopic(topic);
      closeMobileMenu();
    });
    list.appendChild(li);
  });

  // Update nav tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === category);
  });
}

function switchCategory(cat) {
  renderSidebar(cat);
  let data = HTML_DATA;
  if (cat === 'css') data = CSS_DATA;
  else if (cat === 'js') data = JS_DATA;
  else if (cat === 'dart' && typeof DART_DATA !== 'undefined') data = DART_DATA;
  else if (cat === 'flutter' && typeof FLUTTER_DATA !== 'undefined') data = FLUTTER_DATA;
  loadTopic(data.topics[0]);
}

// ==================== Topic Loading ====================
function loadTopic(topic) {
  currentTopic = topic;

  // Update active state in sidebar
  document.querySelectorAll('.topic-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === topic.id);
  });

  // Render content
  const main = document.getElementById('mainContent');
  main.innerHTML = `
    <div class="topic-header">
      <span class="topic-header-icon">${topic.icon}</span>
      <div>
        <h1 class="topic-title-main">${topic.title}</h1>
        <p class="topic-desc">${topic.description}</p>
      </div>
    </div>
    <div class="content-body">
      ${topic.content}
    </div>
    ${topic.example ? renderExampleSection(topic) : ''}
  `;

  // Scroll to top
  main.scrollTop = 0;
  window.scrollTo(0, 0);

  // Update breadcrumb
  const breadcrumbEl = document.getElementById('breadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.textContent = `${currentCategory.toUpperCase()} > ${topic.title}`;
  }

  // Highlight code
  highlightCode();
}

// Extract pure code for specific language
function getTopicCode(topic, category) {
  if (topic.example && topic.example.code) {
    return topic.example.code;
  }
  const html = topic.example ? (topic.example.html || '') : '';
  if (category === 'css') {
    const m = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    return m ? m[1].trim() : html;
  }
  if (category === 'js') {
    const m = html.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    return m ? m[1].trim() : html;
  }
  if (category === 'html') {
    return html;
  }
  if (category === 'dart' || category === 'flutter') {
    return topic.example && topic.example.code ? topic.example.code : '// كود Dart / Flutter';
  }
  return html;
}

// Render Example Section
function renderExampleSection(topic) {
  const isDart = currentCategory === 'dart';
  const isFlutter = currentCategory === 'flutter';
  const isJS = currentCategory === 'js';
  const isCSS = currentCategory === 'css';

  if (isDart || isFlutter) {
    const code = getTopicCode(topic, isFlutter ? 'flutter' : 'dart');
    const output = topic.example.output || '// لا توجد مخرجات مسجلة';
    const catClass = isFlutter ? 'cat-flutter' : 'cat-dart';
    const envTitle = isFlutter ? 'بيئة تشغيل وتجربة Flutter الحية (Flutter DevTools & Engine)' : 'بيئة تشغيل Dart التفاعلية (DartPad & Terminal)';
    const badgeText = isFlutter ? '<i class="fa-brands fa-flutter"></i> Flutter' : '<i class="fa-solid fa-bullseye"></i> Dart 3.x';
    const tabCodeTitle = isFlutter ? 'كود Flutter' : 'كود Dart';
    const filePath = isFlutter ? 'lib/main.dart' : 'bin/main.dart';
    const copyLabel = isFlutter ? 'نسخ كود Flutter' : 'نسخ كود Dart';

    return `
      <div class="example-section" id="exSec-${topic.id}">
        <div class="example-header ${catClass}">
          <div class="example-header-title">
            <i class="fa-solid fa-laptop-code"></i>
            <span>${envTitle}</span>
            <span class="lang-badge">${badgeText}</span>
          </div>
          <div class="example-tabs">
            <button class="ex-tab active" id="tabBtnCode-${topic.id}" onclick="showDartTab('code', this, '${topic.id}')">
              <i class="fa-solid fa-code"></i> ${tabCodeTitle}
            </button>
            <button class="ex-tab" id="tabBtnTerm-${topic.id}" onclick="showDartTab('terminal', this, '${topic.id}')">
              <i class="fa-solid fa-terminal"></i> مخرجات الكونسول والتشغيل
            </button>
            <button class="ex-tab split-toggle" id="splitBtn-${topic.id}" onclick="toggleSplitView('${topic.id}', this)" title="عرض الكود والمخرجات معاً جنباً إلى جنب">
              <i class="fa-solid fa-table-columns"></i> عرض متجاور
            </button>
          </div>
        </div>

        <!-- Tabbed Container -->
        <div class="tabbed-view-container" id="tabbedView-${topic.id}">
          <!-- Code Tab -->
          <div class="tab-content active" id="tab-code-${topic.id}">
            <div class="code-toolbar">
              <div class="code-toolbar-start">
                <span class="code-toolbar-lang"><i class="fa-solid fa-file-code"></i> ${filePath}</span>
              </div>
              <div class="code-toolbar-actions">
                <button onclick="runDartSimulation('${topic.id}', true)" class="run-action-btn" title="تشغيل الكود والانتقال للكونسول">
                  <i class="fa-solid fa-play"></i> تشغيل وشاهد النتيجة
                </button>
                <button onclick="copyCode('${topic.id}')" class="copy-btn" id="copyBtn-${topic.id}">
                  <i class="fa-regular fa-copy"></i> ${copyLabel}
                </button>
              </div>
            </div>
            <pre class="code-block"><code class="lang-dart" id="code-${topic.id}">${escapeHtmlCode(code)}</code></pre>
          </div>

          <!-- Terminal Tab -->
          <div class="tab-content" id="tab-terminal-${topic.id}">
            ${renderDartTerminalHtml(topic, output)}
          </div>
        </div>

        <!-- Split View Container (Initially Hidden) -->
        <div class="split-view-container" id="splitView-${topic.id}" style="display: none;">
          <div class="split-view-col">
            <div class="code-toolbar">
              <span class="code-toolbar-lang"><i class="fa-solid fa-file-code"></i> ${filePath}</span>
              <button onclick="copyCode('${topic.id}')" class="copy-btn">
                <i class="fa-regular fa-copy"></i> نسخ
              </button>
            </div>
            <pre class="code-block"><code class="lang-dart">${escapeHtmlCode(code)}</code></pre>
          </div>
          <div class="split-view-col">
            ${renderDartTerminalHtml(topic, output, true)}
          </div>
        </div>
      </div>
    `;
  }

  // HTML / CSS / JS Examples
  let catClass = 'cat-html';
  let langLabel = 'HTML5 Structure';
  let langClass = 'lang-html';
  let langIcon = '<i class="fa-brands fa-html5"></i>';

  if (isJS) {
    catClass = 'cat-js';
    langLabel = 'JavaScript Code';
    langClass = 'lang-js';
    langIcon = '<i class="fa-brands fa-js"></i>';
  } else if (isCSS) {
    catClass = 'cat-css';
    langLabel = 'CSS3 Stylesheet';
    langClass = 'lang-css';
    langIcon = '<i class="fa-brands fa-css3-alt"></i>';
  }

  const pureCode = getTopicCode(topic, currentCategory);

  return `
    <div class="example-section">
      <div class="example-header ${catClass}">
        <div class="example-header-title">
          ${langIcon}
          <span>مثال تطبيقي ومعاينة تفاعلية</span>
          <span class="lang-badge">${currentCategory.toUpperCase()}</span>
        </div>
        <div class="example-tabs">
          <button class="ex-tab active" onclick="showWebTab('preview', this, '${topic.id}')">
            <i class="fa-regular fa-eye"></i> المعاينة التفاعلية
          </button>
          <button class="ex-tab" onclick="showWebTab('code', this, '${topic.id}')">
            <i class="fa-solid fa-code"></i> كود ${currentCategory.toUpperCase()}
          </button>
        </div>
      </div>
      <div class="tab-content active" id="tab-preview-${topic.id}">
        <iframe id="previewFrame" srcdoc="${escapeHtml(topic.example.html || '')}" sandbox="allow-scripts allow-modals"></iframe>
      </div>
      <div class="tab-content" id="tab-code-${topic.id}">
        <div class="code-toolbar">
          <div class="code-toolbar-start">
            <span class="code-toolbar-lang">${langIcon} ${langLabel}</span>
          </div>
          <div class="code-toolbar-actions">
            <button onclick="copyCode('${topic.id}')" class="copy-btn" id="copyBtn-${topic.id}">
              <i class="fa-regular fa-copy"></i> نسخ الكود
            </button>
          </div>
        </div>
        <pre class="code-block"><code class="${langClass}" id="code-${topic.id}">${escapeHtmlCode(pureCode)}</code></pre>
      </div>
    </div>
  `;
}

// Generate Dart Terminal HTML
function renderDartTerminalHtml(topic, outputText, isSplit = false) {
  const termId = isSplit ? `termOut-split-${topic.id}` : `termOut-${topic.id}`;
  const statusId = isSplit ? `termStatus-split-${topic.id}` : `termStatus-${topic.id}`;

  return `
    <div class="dart-terminal-card">
      <div class="dart-terminal-header">
        <div class="terminal-controls">
          <span class="term-dot red"></span>
          <span class="term-dot yellow"></span>
          <span class="term-dot green"></span>
        </div>
        <div class="terminal-title">
          <i class="fa-solid fa-terminal"></i>
          <span>dart-vm@codetech: ~/projects/dart_app</span>
          <span class="terminal-sdk-badge"><i class="fa-solid fa-bullseye"></i> Dart SDK 3.4.0 (AOT/JIT)</span>
        </div>
        <div class="terminal-actions">
          <button class="term-btn btn-run-primary" onclick="runDartSimulation('${topic.id}', false)">
            <i class="fa-solid fa-play"></i> تشغيل
          </button>
          <button class="term-btn" onclick="copyTerminalOutput('${topic.id}')">
            <i class="fa-regular fa-copy"></i> نسخ الخرج
          </button>
          <button class="term-btn" onclick="clearTerminal('${topic.id}')">
            <i class="fa-solid fa-trash-can"></i> مسح
          </button>
        </div>
      </div>
      <div class="dart-terminal-body">
        <div class="terminal-command-line">
          <span class="terminal-prompt-symbol">$</span>
          <span>dart run bin/main.dart</span>
        </div>
        <div class="terminal-output-content" id="${termId}">${escapeHtml(outputText)}</div>
        <div class="terminal-status-bar" id="${statusId}">
          <span class="terminal-exit-code"><i class="fa-solid fa-circle-check"></i> Process finished with exit code 0</span>
          <span>Dart VM execution completed</span>
        </div>
      </div>
    </div>
  `;
}

// Tab switcher for Dart
function showDartTab(tabName, btn, topicId) {
  const codeTab = document.getElementById(`tab-code-${topicId}`);
  const termTab = document.getElementById(`tab-terminal-${topicId}`);
  const splitContainer = document.getElementById(`splitView-${topicId}`);
  const tabbedContainer = document.getElementById(`tabbedView-${topicId}`);
  const splitBtn = document.getElementById(`splitBtn-${topicId}`);

  if (splitContainer) splitContainer.style.display = 'none';
  if (tabbedContainer) tabbedContainer.style.display = 'block';
  if (splitBtn) splitBtn.classList.remove('active');

  const tabsGroup = btn.closest('.example-tabs');
  if (tabsGroup) {
    tabsGroup.querySelectorAll('.ex-tab').forEach(t => t.classList.remove('active'));
  }
  btn.classList.add('active');

  if (tabName === 'code') {
    if (codeTab) codeTab.classList.add('active');
    if (termTab) termTab.classList.remove('active');
  } else {
    if (termTab) termTab.classList.add('active');
    if (codeTab) codeTab.classList.remove('active');
  }
}

// Toggle Split View for Dart
function toggleSplitView(topicId, btn) {
  const tabbedContainer = document.getElementById(`tabbedView-${topicId}`);
  const splitContainer = document.getElementById(`splitView-${topicId}`);
  if (!tabbedContainer || !splitContainer) return;

  const isCurrentlySplit = splitContainer.style.display === 'grid' || splitContainer.style.display === 'block';

  if (isCurrentlySplit) {
    // Switch back to tabbed view
    splitContainer.style.display = 'none';
    tabbedContainer.style.display = 'block';
    btn.classList.remove('active');
    const codeBtn = document.getElementById(`tabBtnCode-${topicId}`);
    if (codeBtn) codeBtn.classList.add('active');
  } else {
    // Switch to split view
    tabbedContainer.style.display = 'none';
    splitContainer.style.display = 'grid';
    const tabsGroup = btn.closest('.example-tabs');
    if (tabsGroup) {
      tabsGroup.querySelectorAll('.ex-tab').forEach(t => t.classList.remove('active'));
    }
    btn.classList.add('active');
  }
}

// Tab switcher for Web (HTML/CSS/JS)
function showWebTab(tabName, btn, topicId) {
  const preview = document.getElementById(`tab-preview-${topicId}`);
  const code = document.getElementById(`tab-code-${topicId}`);
  const tabsGroup = btn.closest('.example-tabs');
  if (tabsGroup) {
    tabsGroup.querySelectorAll('.ex-tab').forEach(t => t.classList.remove('active'));
  }
  btn.classList.add('active');
  if (tabName === 'preview') {
    if (preview) preview.classList.add('active');
    if (code) code.classList.remove('active');
  } else {
    if (code) code.classList.add('active');
    if (preview) preview.classList.remove('active');
  }
}

// Run Dart Simulation with compiling animation
function runDartSimulation(topicId, switchToTab = false) {
  const topic = currentTopic && currentTopic.id === topicId ? currentTopic :
    (typeof DART_DATA !== 'undefined' ? DART_DATA.topics.find(t => t.id === topicId) : null);
  if (!topic || !topic.example) return;

  if (switchToTab) {
    const termBtn = document.getElementById(`tabBtnTerm-${topicId}`);
    if (termBtn) {
      showDartTab('terminal', termBtn, topicId);
    }
  }

  const outEls = [
    document.getElementById(`termOut-${topicId}`),
    document.getElementById(`termOut-split-${topicId}`)
  ].filter(Boolean);

  const statusEls = [
    document.getElementById(`termStatus-${topicId}`),
    document.getElementById(`termStatus-split-${topicId}`)
  ].filter(Boolean);

  outEls.forEach(el => {
    el.innerHTML = '<span style="color:#a855f7;"><i class="fa-solid fa-spinner fa-spin"></i> [Dart VM Compiling & Initializing Runtime...]</span>';
  });

  statusEls.forEach(el => {
    el.innerHTML = '<span class="terminal-running-spinner"><i class="fa-solid fa-gear fa-spin"></i> جاري التنفيذ...</span>';
  });

  setTimeout(() => {
    const rawOutput = topic.example.output || '// Finished without output';
    outEls.forEach(el => {
      el.textContent = rawOutput;
    });
    statusEls.forEach(el => {
      el.innerHTML = `
        <span class="terminal-exit-code"><i class="fa-solid fa-circle-check"></i> Process finished with exit code 0</span>
        <span style="color:#10b981;">Execution time: ~${Math.floor(Math.random() * 25) + 30}ms</span>
      `;
    });
  }, 350);
}

// Copy Terminal Output
function copyTerminalOutput(topicId) {
  const termOut = document.getElementById(`termOut-${topicId}`) || document.getElementById(`termOut-split-${topicId}`);
  if (!termOut) return;
  navigator.clipboard.writeText(termOut.textContent).then(() => {
    const btn = event.target.closest('button');
    if (btn) {
      const origHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ!';
      btn.style.color = '#10b981';
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.style.color = '';
      }, 1800);
    }
  });
}

// Clear Terminal Output
function clearTerminal(topicId) {
  const outEls = [
    document.getElementById(`termOut-${topicId}`),
    document.getElementById(`termOut-split-${topicId}`)
  ].filter(Boolean);

  outEls.forEach(el => {
    el.innerHTML = '<span style="color:#64748b;">// تيرمينال فارغ - اضغط على "تشغيل" لتشغيل الكود مرة أخرى</span>';
  });
}

// Copy Code
function copyCode(topicId) {
  const codeEl = document.getElementById(`code-${topicId}`);
  const btn = document.getElementById(`copyBtn-${topicId}`);
  if (!codeEl) return;
  const text = codeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const origHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ!';
      btn.style.background = 'var(--success)';
      btn.style.color = '#ffffff';
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.style.background = '';
        btn.style.color = '';
      }, 2000);
    }
  });
}

function highlightCode() {
  document.querySelectorAll('.content-body pre code, .code-block code').forEach(el => {
    el.innerHTML = syntaxHighlight(el.textContent, el.className);
  });
}

// ==================== Search ====================
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) {
      results.classList.remove('active');
      return;
    }
    const allTopics = [
      ...HTML_DATA.topics,
      ...CSS_DATA.topics,
      ...(typeof JS_DATA !== 'undefined' ? JS_DATA.topics : []),
      ...(typeof DART_DATA !== 'undefined' ? DART_DATA.topics : []),
      ...(typeof FLUTTER_DATA !== 'undefined' ? FLUTTER_DATA.topics : [])
    ];
    const matches = allTopics.filter(t =>
      t.title.toLowerCase().includes(q) ||
      (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q))) ||
      t.description.toLowerCase().includes(q)
    );
    renderSearchResults(matches, results, q);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      results.classList.remove('active');
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      results.classList.remove('active');
      input.value = '';
    }
  });

  // Global shortcut: Ctrl+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
}

function renderSearchResults(matches, container, query) {
  if (matches.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fa-solid fa-magnifying-glass"></i> لا توجد نتائج مطابقة لـ "${query}"</div>`;
    container.classList.add('active');
    return;
  }
  container.innerHTML = matches.map(topic => {
    let cat = 'JS';
    let catColor = '#f59e0b';
    if (HTML_DATA.topics.includes(topic)) {
      cat = 'HTML';
      catColor = 'var(--primary)';
    } else if (CSS_DATA.topics.includes(topic)) {
      cat = 'CSS';
      catColor = 'var(--accent)';
    } else if (typeof DART_DATA !== 'undefined' && DART_DATA.topics.includes(topic)) {
      cat = 'Dart';
      catColor = '#0081cb';
    } else if (typeof FLUTTER_DATA !== 'undefined' && FLUTTER_DATA.topics.includes(topic)) {
      cat = 'Flutter';
      catColor = '#0175c2';
    }
    const hl = (text) => text.replace(new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      m => `<mark>${m}</mark>`);
    return `
      <div class="search-result-item" onclick="selectSearchResult('${topic.id}', '${cat}')">
        <span class="res-icon">${topic.icon}</span>
        <div class="res-info">
          <div class="res-title">${hl(topic.title)}</div>
          <div class="res-desc">${hl(topic.description)}</div>
        </div>
        <span class="res-cat" style="color:${catColor}; background:${catColor}18">
          ${getCategoryIconHtml(cat.toLowerCase())} ${cat}
        </span>
      </div>
    `;
  }).join('');
  container.classList.add('active');
}

function selectSearchResult(topicId, cat) {
  const category = cat.toLowerCase();
  let data = HTML_DATA;
  if (category === 'css') data = CSS_DATA;
  else if (category === 'js') data = JS_DATA;
  else if (category === 'dart' && typeof DART_DATA !== 'undefined') data = DART_DATA;
  else if (category === 'flutter' && typeof FLUTTER_DATA !== 'undefined') data = FLUTTER_DATA;
  const topic = data.topics.find(t => t.id === topicId);
  if (!topic) return;

  if (currentCategory !== category) renderSidebar(category);
  loadTopic(topic);

  document.getElementById('searchResults').classList.remove('active');
  document.getElementById('searchInput').value = '';
}

// ==================== Mobile Menu ====================
function initMobileMenu() {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }
}

function toggleMobileMenu() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('open', sidebarOpen);
  overlay.classList.toggle('active', sidebarOpen);
}

function closeMobileMenu() {
  sidebarOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

// ==================== Utilities ====================
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeHtmlCode(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ==================== Syntax Highlighters (Single-Pass Tokenizers) ====================
function highlightDart(code) {
  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(@\w+)|('''[\s\S]*?'''|"""[\s\S]*?"""|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\b(?:void|int|double|num|bool|String|List|Map|Set|Future|Stream|StreamController|dynamic|Object|DateTime|Duration|RegExp|Exception|Error|Paint|Colors|PaintingStyle|Never|Null|Iterable|Runes|Symbol|Widget|BuildContext|StatelessWidget|StatefulWidget|State|Key|Scaffold|MaterialApp|AppBar|Container|Column|Row|Stack|Positioned|Expanded|Flexible|Center|SizedBox|Padding|Align|Card|Text|Icon|IconData|TextStyle|EdgeInsets|Color|Colors|Theme|ThemeData|ColorScheme|ListView|GridView|SliverAppBar|CustomScrollView|TextFormField|TextEditingController|GlobalKey|FormState|Form|Navigator|MaterialPageRoute|FutureBuilder|ChangeNotifier|ChangeNotifierProvider|Consumer|BlocProvider|BlocBuilder|Cubit|Bloc|Dio|SharedPreferences|Response|Uri|Curves|BorderRadius|BoxDecoration|BoxShadow|Offset|CircularProgressIndicator|ElevatedButton|IconButton|Badge|Drawer|NavigationBar|FloatingActionButton)\b)|(\b(?:class|abstract|extends|implements|with|mixin|enum|extension|on|factory|get|set|var|final|const|late|required|return|if|else|switch|case|break|continue|default|when|try|catch|finally|throw|rethrow|assert|async|await|yield|super|this|new|is|as|in|typedef|import|export|part|show|hide|null|true|false|base|interface|sealed)\b)|(\b(?:print|identical|debugPrint|runApp|setState|emit|notifyListeners)\b)|(\b\d+(?:\.\d+)?\b)/g;

  let lastIndex = 0;
  let out = '';
  let match;

  while ((match = tokenRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      out += escapeHtml(code.slice(lastIndex, match.index));
    }
    lastIndex = tokenRegex.lastIndex;

    const [full, comment, annotation, str, type, kw, builtin, num] = match;
    if (comment) {
      out += `<span class="syn-comment">${escapeHtml(comment)}</span>`;
    } else if (annotation) {
      out += `<span class="syn-annotation">${escapeHtml(annotation)}</span>`;
    } else if (str) {
      const escapedStr = escapeHtml(str).replace(/(\$([a-zA-Z0-9_]+)|\$\{([^}]+)\})/g, '<span class="syn-interpol">$1</span>');
      out += `<span class="syn-string">${escapedStr}</span>`;
    } else if (type) {
      out += `<span class="syn-type">${escapeHtml(type)}</span>`;
    } else if (kw) {
      out += `<span class="syn-keyword">${escapeHtml(kw)}</span>`;
    } else if (builtin) {
      out += `<span class="syn-builtin">${escapeHtml(builtin)}</span>`;
    } else if (num) {
      out += `<span class="syn-number">${escapeHtml(num)}</span>`;
    } else {
      out += escapeHtml(full);
    }
  }

  if (lastIndex < code.length) {
    out += escapeHtml(code.slice(lastIndex));
  }

  return out;
}

function highlightJS(code) {
  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\.|[^`\\])*`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|class|new|extends|super|this|async|await|import|export|default|null|undefined|true|false|typeof|instanceof|void|delete|in|of)\b)|(\b(?:console|document|window|Math|Date|Array|Object|String|Number|JSON|Promise|setTimeout|setInterval|clearInterval|clearTimeout|fetch)\b)|(\b\d+(?:\.\d+)?\b)/g;

  let lastIndex = 0;
  let out = '';
  let match;

  while ((match = tokenRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      out += escapeHtml(code.slice(lastIndex, match.index));
    }
    lastIndex = tokenRegex.lastIndex;

    const [full, comment, str, kw, builtin, num] = match;
    if (comment) {
      out += `<span class="syn-comment">${escapeHtml(comment)}</span>`;
    } else if (str) {
      out += `<span class="syn-string">${escapeHtml(str)}</span>`;
    } else if (kw) {
      out += `<span class="syn-keyword">${escapeHtml(kw)}</span>`;
    } else if (builtin) {
      out += `<span class="syn-builtin">${escapeHtml(builtin)}</span>`;
    } else if (num) {
      out += `<span class="syn-number">${escapeHtml(num)}</span>`;
    } else {
      out += escapeHtml(full);
    }
  }

  if (lastIndex < code.length) {
    out += escapeHtml(code.slice(lastIndex));
  }

  return out;
}

function highlightHTML(code) {
  const tokenRegex = /(<!--[\s\S]*?-->)|(<\/?)([a-zA-Z0-9-]+)((?:\s+[\w:-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*)(\/?>)/g;

  let lastIndex = 0;
  let out = '';
  let match;

  while ((match = tokenRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      out += escapeHtml(code.slice(lastIndex, match.index));
    }
    lastIndex = tokenRegex.lastIndex;

    const [full, comment, openB, tagName, attrs, closeB] = match;
    if (comment) {
      out += `<span class="syn-comment">${escapeHtml(comment)}</span>`;
    } else if (tagName) {
      let highlightedAttrs = '';
      if (attrs) {
        highlightedAttrs = attrs.replace(/([\w:-]+)(=)("[^"]*"|'[^']*'|[^\s>]+)/g, (m, aName, eq, aVal) => {
          return ` <span class="syn-attr">${escapeHtml(aName)}</span>${eq}<span class="syn-string">${escapeHtml(aVal)}</span>`;
        });
      }
      out += `<span class="syn-bracket">${escapeHtml(openB)}</span><span class="syn-tag">${escapeHtml(tagName)}</span>${highlightedAttrs}<span class="syn-bracket">${escapeHtml(closeB)}</span>`;
    } else {
      out += escapeHtml(full);
    }
  }

  if (lastIndex < code.length) {
    out += escapeHtml(code.slice(lastIndex));
  }

  return out;
}

function highlightCSS(code) {
  const tokenRegex = /(\/\*[\s\S]*?\*\/)|([.#@:]?[\w-]+(?=\s*\{))|([\w-]+(?=\s*:))|(:[ \t]*)([^;{}\n]+)/g;

  let lastIndex = 0;
  let out = '';
  let match;

  while ((match = tokenRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      out += escapeHtml(code.slice(lastIndex, match.index));
    }
    lastIndex = tokenRegex.lastIndex;

    const [full, comment, selector, prop, colon, val] = match;
    if (comment) {
      out += `<span class="syn-comment">${escapeHtml(comment)}</span>`;
    } else if (selector) {
      out += `<span class="syn-selector">${escapeHtml(selector)}</span>`;
    } else if (prop) {
      out += `<span class="syn-prop">${escapeHtml(prop)}</span>`;
    } else if (colon && val) {
      out += `${escapeHtml(colon)}<span class="syn-value">${escapeHtml(val)}</span>`;
    } else {
      out += escapeHtml(full);
    }
  }

  if (lastIndex < code.length) {
    out += escapeHtml(code.slice(lastIndex));
  }

  return out;
}

function syntaxHighlight(code, className) {
  if (!className || !className.includes('lang-')) return escapeHtml(code);
  if (className.includes('dart') || className.includes('flutter')) return highlightDart(code);
  if (className.includes('js') || className.includes('javascript')) return highlightJS(code);
  if (className.includes('html')) return highlightHTML(code);
  if (className.includes('css')) return highlightCSS(code);
  return escapeHtml(code);
}

// ==================== Scroll to Top ====================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
