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
    btn.textContent = isDarkMode ? '☀️' : '🌙';
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
function renderSidebar(category) {
  currentCategory = category;
  const data = category === 'html' ? HTML_DATA : CSS_DATA;
  const list = document.getElementById('topicsList');
  const catTitle = document.getElementById('categoryTitle');
  const catIcon = document.getElementById('categoryIcon');

  catTitle.textContent = data.category;
  catIcon.textContent = data.icon;

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
  const data = cat === 'html' ? HTML_DATA : CSS_DATA;
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
  document.getElementById('breadcrumb').textContent =
    `${currentCategory.toUpperCase()} > ${topic.title}`;

  // Highlight code
  highlightCode();
}

function renderExampleSection(topic) {
  return `
    <div class="example-section">
      <div class="example-header">
        <span>🔥 مثال تفاعلي</span>
        <div class="example-tabs">
          <button class="ex-tab active" onclick="showTab('preview', this)">👁️ معاينة</button>
          <button class="ex-tab" onclick="showTab('code', this)">💻 الكود</button>
        </div>
      </div>
      <div class="tab-content active" id="tab-preview">
        <iframe id="previewFrame" srcdoc="${escapeHtml(topic.example.html)}" sandbox="allow-scripts"></iframe>
      </div>
      <div class="tab-content" id="tab-code">
        <div class="code-toolbar">
          <span>HTML</span>
          <button onclick="copyCode('${topic.id}')" class="copy-btn" id="copyBtn-${topic.id}">📋 نسخ</button>
        </div>
        <pre class="code-block"><code id="code-${topic.id}">${escapeHtmlCode(topic.example.html)}</code></pre>
      </div>
    </div>
  `;
}

function showTab(tabName, btn) {
  const preview = document.getElementById('tab-preview');
  const code = document.getElementById('tab-code');
  document.querySelectorAll('.ex-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  if (tabName === 'preview') {
    preview.classList.add('active');
    code.classList.remove('active');
  } else {
    code.classList.add('active');
    preview.classList.remove('active');
  }
}

function copyCode(topicId) {
  const codeEl = document.getElementById(`code-${topicId}`);
  const btn = document.getElementById(`copyBtn-${topicId}`);
  if (!codeEl) return;
  const text = codeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ تم النسخ!';
    btn.style.background = 'var(--success)';
    setTimeout(() => {
      btn.textContent = '📋 نسخ';
      btn.style.background = '';
    }, 2000);
  });
}

function highlightCode() {
  document.querySelectorAll('.content-body pre code, .code-block').forEach(el => {
    el.innerHTML = syntaxHighlight(el.innerHTML, el.className);
  });
}

// ==================== Search ====================
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) {
      results.classList.remove('active');
      return;
    }
    const allTopics = [...HTML_DATA.topics, ...CSS_DATA.topics];
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
}

function renderSearchResults(matches, container, query) {
  if (matches.length === 0) {
    container.innerHTML = `<div class="no-results">🔍 لا توجد نتائج لـ "${query}"</div>`;
    container.classList.add('active');
    return;
  }
  container.innerHTML = matches.map(topic => {
    const cat = HTML_DATA.topics.includes(topic) ? 'HTML' : 'CSS';
    const catColor = cat === 'HTML' ? 'var(--primary)' : 'var(--accent)';
    const hl = (text) => text.replace(new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      m => `<mark>${m}</mark>`);
    return `
      <div class="search-result-item" onclick="selectSearchResult('${topic.id}', '${cat}')">
        <span class="res-icon">${topic.icon}</span>
        <div class="res-info">
          <div class="res-title">${hl(topic.title)}</div>
          <div class="res-desc">${hl(topic.description)}</div>
        </div>
        <span class="res-cat" style="color:${catColor}">${cat}</span>
      </div>
    `;
  }).join('');
  container.classList.add('active');
}

function selectSearchResult(topicId, cat) {
  const category = cat === 'HTML' ? 'html' : 'css';
  const data = category === 'html' ? HTML_DATA : CSS_DATA;
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

// Simple syntax highlighter
function syntaxHighlight(code, className) {
  if (!className || !className.includes('lang-')) return code;
  const isCSS = className.includes('css');
  const isHTML = className.includes('html');

  let result = code;

  if (isHTML) {
    result = result
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="syn-comment">$1</span>')
      .replace(/(&lt;\/?)([\w-]+)/g, '<span class="syn-bracket">$1</span><span class="syn-tag">$2</span>')
      .replace(/(\s)([\w-]+)(=)(&quot;[^"]*&quot;|&#39;[^']*&#39;)/g,
        ' <span class="syn-attr">$2</span>$3<span class="syn-string">$4</span>')
      .replace(/(&gt;)([^<]+)(&lt;)/g, (m, a, content, c) =>
        `${a}<span class="syn-text">${content}</span>${c}`);
  }

  if (isCSS) {
    result = result
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="syn-comment">$1</span>')
      .replace(/([.#@:]?[\w-]+)\s*\{/g, '<span class="syn-selector">$1</span> {')
      .replace(/([\w-]+)\s*:/g, '<span class="syn-prop">$1</span>:')
      .replace(/:\s*([^;{}\n]+)/g, ': <span class="syn-value">$1</span>');
  }

  return result;
}

// ==================== Scroll to Top ====================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
