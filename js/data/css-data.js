const CSS_DATA = {
  category: "CSS",
  icon: "🎨",
  description: "أوراق الأنماط المتتالية - للتصميم والتنسيق والجماليات",
  topics: [
    {
      id: "css-intro",
      title: "مقدمة في CSS",
      tags: ["مقدمة", "أساسيات", "intro", "selector", "property", "value"],
      icon: "🎨",
      description: "ما هو CSS وكيف يعمل",
      content: `
        <h2>ما هو CSS؟</h2>
        <p><strong>CSS</strong> (Cascading Style Sheets) هي لغة الأنماط المستخدمة لتنسيق وتجميل صفحات HTML. تتحكم في الألوان والخطوط والمسافات والتخطيط وكل ما يتعلق بالمظهر البصري.</p>

        <h3>طرق إضافة CSS</h3>
        <table class="data-table">
          <tr><th>الطريقة</th><th>المكان</th><th>الاستخدام</th></tr>
          <tr><td>Inline</td><td>داخل التاج</td><td>تنسيق عنصر واحد فقط</td></tr>
          <tr><td>Internal</td><td>داخل &lt;style&gt;</td><td>تنسيق صفحة واحدة</td></tr>
          <tr><td>External</td><td>ملف .css منفصل</td><td>✅ الأفضل - تنسيق كل الصفحات</td></tr>
        </table>

        <h3>بنية قاعدة CSS</h3>
        <div class="code-example">
          <pre><code class="lang-css">/* المحدد { الخاصية: القيمة; } */
h1 {
  color: blue;          /* لون النص */
  font-size: 32px;      /* حجم الخط */
  text-align: center;   /* محاذاة النص */
  margin-bottom: 20px;  /* هامش سفلي */
}

/* طريقة Inline */
&lt;p style="color: red; font-size: 16px;"&gt;نص&lt;/p&gt;

/* طريقة Internal - داخل head */
&lt;style&gt;
  p { color: green; }
&lt;/style&gt;

/* طريقة External - ربط ملف */
&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
        </div>

        <div class="info-box">
          <strong>💡 معنى Cascading:</strong> CSS تُطبّق بترتيب متتالٍ (cascade). إذا تعارضت قواعد، تُطبّق الأحدث أو الأكثر تحديداً.
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه الفرق بين Inline و Internal و External CSS، وليه External هو الأفضل دائماً؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ External CSS بيفصل التنسيق تماماً في ملف .css خارجي، وده بيسمح للمتصفح بتخزينه في الكاش (Browser Cache) فيتحمل الموقع فورياً في الزيارات التالية، بالإضافة لسهولة صيانة وتطبيق الثيم على آلاف الصفحات دفعة واحدة.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    /* CSS Internal - Internal Style */
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    
    .card { background: white; border-radius: 12px; padding: 20px; margin: 10px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    
    .method-inline { background: #fff3e0; border-radius: 8px; padding: 10px 15px; margin: 5px 0; border-right: 4px solid #ff9800; }
    .method-internal { background: #e8f5e9; border-radius: 8px; padding: 10px 15px; margin: 5px 0; border-right: 4px solid #34a853; }
    .method-external { background: #e3f2fd; border-radius: 8px; padding: 10px 15px; margin: 5px 0; border-right: 4px solid #1a73e8; }
    
    h2 { color: #1a73e8; text-align: center; }
    code { background: #f1f3f4; padding: 2px 6px; border-radius: 4px; font-size: 13px; color: #c62828; }
  </style>
</head>
<body>
  <h2>🎨 طرق إضافة CSS</h2>
  
  <div class="card">
    <!-- Inline CSS -->
    <div class="method-inline">
      <strong>1. Inline CSS</strong><br>
      <code>&lt;p style="color:red"&gt;</code><br>
      <p style="color:#ff6b35; font-size: 15px; margin: 5px 0;">هذا النص تنسيقه Inline مباشرة في التاج</p>
    </div>
    
    <!-- Internal CSS (هذا الملف نفسه) -->
    <div class="method-internal">
      <strong>2. Internal CSS</strong><br>
      <code>&lt;style&gt; في head &lt;/style&gt;</code><br>
      <p style="color:#34a853; font-size: 15px; margin: 5px 0;">هذا النص تنسيقه من &lt;style&gt; في نفس الملف</p>
    </div>
    
    <!-- External CSS -->
    <div class="method-external">
      <strong>3. External CSS ✅ الأفضل</strong><br>
      <code>&lt;link rel="stylesheet" href="style.css"&gt;</code><br>
      <p style="color:#1a73e8; font-size: 15px; margin: 5px 0;">ملف CSS منفصل يُستخدم لكل صفحات الموقع</p>
    </div>
  </div>
  
  <div class="card" style="background: linear-gradient(135deg, #1a73e8, #0d47a1); color: white;">
    <h3 style="margin: 0 0 10px;">🏆 أولوية CSS (من الأعلى للأدنى)</h3>
    <ol style="margin: 0; padding-right: 20px; line-height: 2;">
      <li>!important (الأقوى)</li>
      <li>Inline Style</li>
      <li>ID Selector (#id)</li>
      <li>Class Selector (.class)</li>
      <li>Element Selector (h1, p)</li>
    </ol>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-selectors",
      title: "المحددات - Selectors",
      tags: ["selector", "class", "id", "pseudo", "محدد", "اختيار", "nth-child", "hover", "attribute"],
      icon: "🎯",
      description: "جميع أنواع محددات CSS لاستهداف العناصر",
      content: `
        <h2>محددات CSS</h2>
        <p>المحددات تُحدد أي العناصر ستُطبّق عليها قواعد CSS.</p>

        <h3>أنواع المحددات الأساسية</h3>
        <table class="data-table">
          <tr><th>المحدد</th><th>المثال</th><th>الوصف</th></tr>
          <tr><td>العنصر</td><td><code>p { }</code></td><td>جميع فقرات &lt;p&gt;</td></tr>
          <tr><td>الكلاس</td><td><code>.btn { }</code></td><td>العناصر ذات class="btn"</td></tr>
          <tr><td>الـ ID</td><td><code>#header { }</code></td><td>العنصر ذو id="header"</td></tr>
          <tr><td>الكل</td><td><code>* { }</code></td><td>جميع العناصر</td></tr>
          <tr><td>المجموعة</td><td><code>h1, h2, p { }</code></td><td>عدة عناصر معاً</td></tr>
          <tr><td>الابن المباشر</td><td><code>div > p { }</code></td><td>p ابن مباشر لـ div</td></tr>
          <tr><td>الحفيد</td><td><code>div p { }</code></td><td>كل p داخل div</td></tr>
          <tr><td>الأخ المجاور</td><td><code>h1 + p { }</code></td><td>p مباشرة بعد h1</td></tr>
          <tr><td>الخاصية</td><td><code>[type="email"] { }</code></td><td>عناصر بخاصية معينة</td></tr>
        </table>

        <h3>المحددات الزائفة (Pseudo)</h3>
        <table class="data-table">
          <tr><th>المحدد</th><th>الوصف</th></tr>
          <tr><td><code>:hover</code></td><td>عند مرور الماوس</td></tr>
          <tr><td><code>:focus</code></td><td>عند التركيز على العنصر</td></tr>
          <tr><td><code>:active</code></td><td>لحظة الضغط</td></tr>
          <tr><td><code>:first-child</code></td><td>أول ابن</td></tr>
          <tr><td><code>:last-child</code></td><td>آخر ابن</td></tr>
          <tr><td><code>:nth-child(n)</code></td><td>الابن رقم n</td></tr>
          <tr><td><code>:not(selector)</code></td><td>كل ما عدا المحدد</td></tr>
          <tr><td><code>::before</code></td><td>محتوى قبل العنصر</td></tr>
          <tr><td><code>::after</code></td><td>محتوى بعد العنصر</td></tr>
          <tr><td><code>::placeholder</code></td><td>نص الـ placeholder</td></tr>
        </table>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إزاي المتصفح بيحسب أولوية المحددات (CSS Specificity) لما يحصل تعارض بين القواعد؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> بنظام النقاط الرباعي: !important يكتسح الكل، ثم Inline Style (1000 نقطة)، ثم الـ ID (100 نقطة)، ثم الـ Class والـ Pseudo-class (10 نقاط)، وأخيراً الـ Element Tags (نقطة واحدة). ولو تساوت النقاط تفوز القاعدة المكتوبة في الأسفل.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 15px; direction: rtl; background: #0f1117; color: #e0e0e0; }
    h2 { color: #4fc3f7; text-align: center; }
    
    /* محدد العنصر */
    p.el-selector { color: #81c784; padding: 8px; margin: 4px 0; border-radius: 6px; background: rgba(129,199,132,0.1); }
    
    /* محدد الكلاس */
    .class-selector { color: #ffb74d; background: rgba(255,183,77,0.1); padding: 8px; margin: 4px 0; border-radius: 6px; }
    
    /* محدد ID */
    #id-selector { color: #f48fb1; background: rgba(244,143,177,0.1); padding: 8px; margin: 4px 0; border-radius: 6px; border-right: 3px solid #f48fb1; }
    
    /* محدد الابن */
    .parent > .direct-child { color: #80cbc4; background: rgba(128,203,196,0.1); padding: 8px; margin: 4px 0; border-radius: 6px; }
    
    /* hover */
    .hover-demo { background: #1e1e2e; padding: 10px 15px; border-radius: 6px; cursor: pointer; transition: all 0.3s; margin: 4px 0; border: 1px solid #333; }
    .hover-demo:hover { background: #1a73e8; transform: translateX(-5px); border-color: #1a73e8; }
    
    /* nth-child */
    .list-demo li:nth-child(odd) { background: rgba(26,115,232,0.15); }
    .list-demo li:nth-child(even) { background: rgba(52,168,83,0.15); }
    .list-demo li { padding: 6px 12px; border-radius: 4px; margin: 3px 0; list-style: none; }
    
    /* ::before و ::after */
    .before-after { color: #ce93d8; padding: 8px 0; margin: 4px 0; }
    .before-after::before { content: "← "; color: #ffb74d; }
    .before-after::after { content: " →"; color: #80cbc4; }
    
    .card { background: #1e1e2e; border-radius: 10px; padding: 15px; margin: 10px 0; border: 1px solid #333; }
    h3 { color: #4fc3f7; margin: 0 0 8px; font-size: 14px; }
    code { background: #252540; padding: 2px 6px; border-radius: 3px; font-size: 12px; color: #a5d6a7; }
  </style>
</head>
<body>
  <h2>🎯 أنواع محددات CSS</h2>
  
  <div class="card">
    <h3>📌 محدد العنصر: <code>p { color: green }</code></h3>
    <p class="el-selector">✅ هذه فقرة &lt;p&gt; تأثر بها محدد العنصر</p>
  </div>
  
  <div class="card">
    <h3>📌 محدد الكلاس: <code>.class-selector { }</code></h3>
    <div class="class-selector">✅ هذا div فيه class="class-selector"</div>
  </div>
  
  <div class="card">
    <h3>📌 محدد ID: <code>#id-selector { }</code></h3>
    <div id="id-selector">✅ هذا div فيه id="id-selector"</div>
  </div>
  
  <div class="card">
    <h3>📌 محدد :hover - مرر الماوس:</h3>
    <div class="hover-demo">🖱️ مرر الماوس عليّ لتري التأثير!</div>
    <div class="hover-demo">🖱️ وعليّ أنا كمان!</div>
  </div>
  
  <div class="card">
    <h3>📌 محدد :nth-child - صفوف متبادلة:</h3>
    <ul class="list-demo">
      <li>العنصر الأول (odd - فردي)</li>
      <li>العنصر الثاني (even - زوجي)</li>
      <li>العنصر الثالث (odd - فردي)</li>
      <li>العنصر الرابع (even - زوجي)</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>📌 محدد ::before و ::after:</h3>
    <p class="before-after">هذا النص فيه محتوى من CSS قبله وبعده</p>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-colors",
      title: "الألوان - Colors",
      tags: ["color", "background-color", "rgb", "rgba", "hex", "hsl", "gradient", "ألوان", "تدرج"],
      icon: "🌈",
      description: "جميع طرق تحديد الألوان في CSS",
      content: `
        <h2>الألوان في CSS</h2>
        <p>CSS يدعم تحديد الألوان بعدة طرق مختلفة، لكل منها مميزاتها.</p>

        <h3>طرق تحديد الألوان</h3>
        <table class="data-table">
          <tr><th>الطريقة</th><th>المثال</th><th>الوصف</th></tr>
          <tr><td>اسم اللون</td><td><code>color: red</code></td><td>أسماء إنجليزية (147 لون)</td></tr>
          <tr><td>HEX</td><td><code>color: #ff0000</code></td><td>ست أرقام سداسية عشرية</td></tr>
          <tr><td>RGB</td><td><code>color: rgb(255,0,0)</code></td><td>أحمر، أخضر، أزرق (0-255)</td></tr>
          <tr><td>RGBA</td><td><code>color: rgba(255,0,0,0.5)</code></td><td>RGB + الشفافية (0-1)</td></tr>
          <tr><td>HSL</td><td><code>color: hsl(0,100%,50%)</code></td><td>تدرج، تشبع، إضاءة</td></tr>
          <tr><td>HSLA</td><td><code>color: hsla(0,100%,50%,0.5)</code></td><td>HSL + الشفافية</td></tr>
        </table>

        <h3>خصائص الألوان والخلفية</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th></tr>
          <tr><td><code>color</code></td><td>لون النص</td></tr>
          <tr><td><code>background-color</code></td><td>لون الخلفية</td></tr>
          <tr><td><code>background-image</code></td><td>صورة خلفية</td></tr>
          <tr><td><code>background: linear-gradient()</code></td><td>تدرج خطي</td></tr>
          <tr><td><code>background: radial-gradient()</code></td><td>تدرج دائري</td></tr>
          <tr><td><code>opacity</code></td><td>شفافية العنصر كاملاً (0-1)</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-css">/* أسماء الألوان */
color: red;
color: royalblue;

/* HEX - سداسي عشري */
color: #ff0000;    /* أحمر */
color: #1a73e8;    /* أزرق جوجل */
color: #fff;       /* أبيض (اختصار) */

/* RGB */
color: rgb(255, 0, 0);
color: rgb(26, 115, 232);

/* RGBA - مع شفافية */
color: rgba(0, 0, 0, 0.5);    /* أسود 50% شفاف */
background: rgba(26,115,232, 0.1);  /* أزرق فاتح جداً */

/* HSL */
color: hsl(220, 80%, 50%);

/* تدرجات Gradients */
background: linear-gradient(to right, #1a73e8, #0d47a1);
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
background: radial-gradient(circle, #1a73e8, #0d47a1);</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه المطورين المحترفين بيفضلوا نظام HSL على HEX و RGB في بناء أنظمة الألوان الحديثة؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأن HSL (درجة اللون، التشبع، الإضاءة) منطقي للبشر جداً؛ تقدر تعمل درجات Hover، والوضع الليلي (Dark Mode)، والظلال بمجرد تغيير رقم الـ Lightness فقط بدون تغيير كود اللون الأساسي.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #1a1a2e; }
    h2 { color: white; text-align: center; margin-bottom: 15px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px; }
    .color-box { border-radius: 10px; padding: 15px; text-align: center; font-size: 13px; color: white; font-weight: bold; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
    h3 { color: #aaa; margin: 15px 0 8px; font-size: 14px; }
    .gradient-box { border-radius: 10px; padding: 20px; text-align: center; color: white; margin: 8px 0; font-weight: bold; }
    code { background: rgba(255,255,255,0.15); padding: 2px 6px; border-radius: 3px; font-size: 11px; }
  </style>
</head>
<body>
  <h2>🌈 الألوان في CSS</h2>
  
  <div class="grid">
    <div class="color-box" style="background: #ff5252;">
      #ff5252<br><code>HEX</code>
    </div>
    <div class="color-box" style="background: rgb(26, 115, 232);">
      rgb(26,115,232)<br><code>RGB</code>
    </div>
    <div class="color-box" style="background: rgba(52, 168, 83, 0.8);">
      rgba(52,168,83,0.8)<br><code>RGBA</code>
    </div>
    <div class="color-box" style="background: hsl(280, 70%, 50%);">
      hsl(280,70%,50%)<br><code>HSL</code>
    </div>
  </div>

  <h3>🎨 التدرجات - Gradients</h3>
  
  <div class="gradient-box" style="background: linear-gradient(to right, #1a73e8, #00c853);">
    linear-gradient(to right, #1a73e8, #00c853)
  </div>
  
  <div class="gradient-box" style="background: linear-gradient(135deg, #667eea, #764ba2);">
    linear-gradient(135deg, #667eea, #764ba2)
  </div>
  
  <div class="gradient-box" style="background: linear-gradient(to bottom, #f72585, #7209b7, #3a0ca3);">
    linear-gradient - ثلاثة ألوان
  </div>
  
  <div class="gradient-box" style="background: radial-gradient(circle, #1a73e8, #0d47a1);">
    radial-gradient(circle, #1a73e8, #0d47a1)
  </div>
  
  <h3>🔲 الشفافية - Opacity</h3>
  <div style="display:flex; gap:10px; flex-wrap:wrap;">
    <div style="background:#1a73e8; opacity:1; padding:12px 20px; border-radius:8px; color:white; font-weight:bold;">opacity: 1</div>
    <div style="background:#1a73e8; opacity:0.7; padding:12px 20px; border-radius:8px; color:white; font-weight:bold;">opacity: 0.7</div>
    <div style="background:#1a73e8; opacity:0.4; padding:12px 20px; border-radius:8px; color:white; font-weight:bold;">opacity: 0.4</div>
    <div style="background:#1a73e8; opacity:0.15; padding:12px 20px; border-radius:8px; color:white; font-weight:bold;">opacity: 0.15</div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-box-model",
      title: "نموذج الصندوق - Box Model",
      tags: ["box-model", "margin", "padding", "border", "width", "height", "هامش", "حشوة", "إطار"],
      icon: "📦",
      description: "فهم نموذج الصندوق الأساسي في CSS",
      content: `
        <h2>نموذج الصندوق في CSS</h2>
        <p>كل عنصر HTML هو صندوق مكون من أربعة طبقات: المحتوى، الحشوة، الإطار، والهامش.</p>

        <div class="info-box">
          <strong>📦 الطبقات من الداخل للخارج:</strong><br>
          Content → Padding → Border → Margin
        </div>

        <h3>خصائص Box Model</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>width / height</code></td><td>عرض وارتفاع المحتوى</td><td><code>width: 300px</code></td></tr>
          <tr><td><code>padding</code></td><td>الحشوة الداخلية</td><td><code>padding: 20px</code></td></tr>
          <tr><td><code>border</code></td><td>الإطار</td><td><code>border: 1px solid #000</code></td></tr>
          <tr><td><code>margin</code></td><td>الهامش الخارجي</td><td><code>margin: 10px auto</code></td></tr>
          <tr><td><code>box-sizing</code></td><td>كيفية حساب العرض</td><td><code>box-sizing: border-box</code></td></tr>
        </table>

        <h3>اختصارات padding و margin</h3>
        <table class="data-table">
          <tr><th>القيم</th><th>الوصف</th></tr>
          <tr><td><code>padding: 10px</code></td><td>نفس القيمة للأربع جهات</td></tr>
          <tr><td><code>padding: 10px 20px</code></td><td>أعلى/أسفل | يمين/يسار</td></tr>
          <tr><td><code>padding: 10px 20px 15px</code></td><td>أعلى | يمين/يسار | أسفل</td></tr>
          <tr><td><code>padding: 10px 20px 15px 5px</code></td><td>أعلى | يمين | أسفل | يسار (عقارب الساعة)</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-css">.box {
  /* المحتوى */
  width: 300px;
  height: 150px;
  
  /* الحشوة الداخلية */
  padding: 20px;
  padding: 10px 20px;       /* أعلى/أسفل | يمين/يسار */
  padding-top: 10px;
  padding-right: 20px;
  
  /* الإطار */
  border: 2px solid #1a73e8;
  border-radius: 10px;      /* زوايا مستديرة */
  
  /* الهامش الخارجي */
  margin: 20px;
  margin: 0 auto;           /* توسيط أفقي */
  
  /* مهم جداً - يشمل padding في العرض */
  box-sizing: border-box;
}

/* إعادة تعيين عامة */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق الجوهري بين box-sizing: content-box و border-box، وليه بنحط border-box لكل العناصر؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> في content-box (الافتراضي القديم)، لما تديلك width: 200px وتضيف عليه padding: 20px، العرض الحقيقي بيكبر ويبقى 240px ويبوظ التصميم! أما border-box فبيخلي الـ 200px شاملة الـ padding والـ border، فالتصميم ميبوظش أبداً.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; direction: rtl; background: #1a1a2e; color: white; }
    h2 { text-align: center; color: #4fc3f7; }
    
    .box-demo {
      margin: 20px auto;
      width: 300px;
      /* هذا هو الهامش الخارجي - margin */
      background: rgba(255,193,7,0.15);
      border: 3px dashed #ffc107;
      border-radius: 4px;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #ffc107;
    }
    
    .border-box {
      background: rgba(26,115,232,0.15);
      border: 3px solid #1a73e8;
      border-radius: 4px;
      padding: 20px;
      color: #4fc3f7;
      font-size: 12px;
    }
    
    .padding-box {
      background: rgba(76,175,80,0.15);
      border: 3px dashed #4caf50;
      padding: 20px;
      color: #81c784;
      font-size: 12px;
    }
    
    .content-box {
      background: rgba(233,30,99,0.3);
      padding: 10px;
      font-size: 13px;
      color: #f48fb1;
      border-radius: 2px;
    }
    
    .labels { display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0; }
    .label { padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; }
    
    .interactive { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
    .prop-demo { background: #1e1e2e; border-radius: 8px; padding: 12px; border: 1px solid #333; }
    label { font-size: 12px; color: #aaa; display: block; margin-bottom: 4px; }
    input[type="range"] { width: 100%; }
    .preview { background: #1a73e8; border-radius: 6px; margin-top: 8px; text-align: center; font-size: 12px; color: white; transition: all 0.3s; height: 40px; display: flex; align-items: center; justify-content: center; }
  </style>
</head>
<body>
  <h2>📦 نموذج الصندوق - Box Model</h2>
  
  <div class="box-demo">
    🔶 MARGIN - الهامش الخارجي
    <div class="border-box">
      🔵 BORDER - الإطار
      <div class="padding-box">
        🟢 PADDING - الحشوة الداخلية
        <div class="content-box">
          🔴 CONTENT - المحتوى
        </div>
      </div>
    </div>
  </div>
  
  <div class="labels">
    <span class="label" style="background:#ffc107;color:#333;">MARGIN</span>
    <span class="label" style="background:#1a73e8;">BORDER</span>
    <span class="label" style="background:#4caf50;">PADDING</span>
    <span class="label" style="background:#e91e63;">CONTENT</span>
  </div>
  
  <div class="interactive">
    <div class="prop-demo">
      <label>Padding: <strong id="pv">20px</strong></label>
      <input type="range" min="0" max="40" value="20" oninput="
        document.getElementById('pv').textContent=this.value+'px';
        document.getElementById('pbox').style.padding=this.value+'px';
      ">
      <div class="preview" id="pbox" style="padding:20px;">محتوى</div>
    </div>
    <div class="prop-demo">
      <label>Border-radius: <strong id="rv">8px</strong></label>
      <input type="range" min="0" max="50" value="8" oninput="
        document.getElementById('rv').textContent=this.value+'px';
        document.getElementById('rbox').style.borderRadius=this.value+'px';
      ">
      <div class="preview" id="rbox" style="border-radius:8px;">محتوى</div>
    </div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-flexbox",
      title: "Flexbox - المرونة",
      tags: ["flexbox", "flex", "display", "justify-content", "align-items", "flex-direction", "gap", "مرونة", "تخطيط"],
      icon: "🔄",
      description: "نظام Flexbox لترتيب العناصر بمرونة",
      content: `
        <h2>Flexbox في CSS</h2>
        <p>Flexbox هو نظام تخطيط أحادي البُعد يُسهّل توزيع العناصر ومحاذاتها في صف أو عمود.</p>

        <h3>تفعيل Flexbox</h3>
        <div class="code-example">
          <pre><code class="lang-css">.container {
  display: flex; /* هذا يُفعّل Flexbox */
}</code></pre>
        </div>

        <h3>خصائص الحاوية (Container)</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>القيم</th><th>الوصف</th></tr>
          <tr><td><code>flex-direction</code></td><td>row | column | row-reverse</td><td>اتجاه العناصر</td></tr>
          <tr><td><code>justify-content</code></td><td>flex-start | center | space-between | space-around | space-evenly</td><td>توزيع على المحور الرئيسي</td></tr>
          <tr><td><code>align-items</code></td><td>flex-start | center | flex-end | stretch | baseline</td><td>محاذاة على المحور الثانوي</td></tr>
          <tr><td><code>flex-wrap</code></td><td>nowrap | wrap | wrap-reverse</td><td>هل تلتف العناصر؟</td></tr>
          <tr><td><code>gap</code></td><td>10px | 10px 20px</td><td>المسافة بين العناصر</td></tr>
        </table>

        <h3>خصائص العنصر (Item)</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th></tr>
          <tr><td><code>flex: 1</code></td><td>يأخذ المساحة المتاحة</td></tr>
          <tr><td><code>flex-grow</code></td><td>نسبة التمدد</td></tr>
          <tr><td><code>flex-shrink</code></td><td>نسبة التقلص</td></tr>
          <tr><td><code>flex-basis</code></td><td>الحجم الأساسي</td></tr>
          <tr><td><code>align-self</code></td><td>محاذاة فردية للعنصر</td></tr>
          <tr><td><code>order</code></td><td>ترتيب العنصر</td></tr>
        </table>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما هو الفرق بين justify-content و align-items، وكيف يؤثر flex-direction عليهما؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> خاصية justify-content بتتحكم في المحاذاة على المحور الرئيسي (Main Axis)، بينما align-items بتتحكم في المحور العمودي (Cross Axis). لما تغير flex-direction إلى column، المحاور بتتعكس تماماً فيصبح justify-content رأسياً و align-items أفقياً!</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 15px; direction: rtl; background: #0f1117; color: white; }
    h2 { color: #4fc3f7; text-align: center; }
    h3 { color: #81c784; font-size: 13px; margin: 15px 0 8px; }
    .card { background: #1e1e2e; border-radius: 10px; padding: 15px; margin: 10px 0; border: 1px solid #333; }
    .flex-container { display: flex; background: rgba(26,115,232,0.1); border: 2px dashed #1a73e8; border-radius: 8px; padding: 10px; min-height: 60px; }
    .flex-item { background: #1a73e8; color: white; padding: 10px 16px; border-radius: 6px; font-size: 13px; font-weight: bold; margin: 3px; }
    .flex-item:nth-child(2) { background: #0d47a1; }
    .flex-item:nth-child(3) { background: #1565c0; }
    code { background: #252540; padding: 2px 6px; border-radius: 3px; font-size: 12px; color: #a5d6a7; }
    
    .demo-label { font-size: 12px; color: #666; margin-bottom: 6px; }
    
    /* مثال توسيط */
    .centered { justify-content: center; align-items: center; height: 80px; }
    
    /* space-between */
    .spaced { justify-content: space-between; align-items: center; }
    
    /* wrap */
    .wrapped { flex-wrap: wrap; }
    
    /* column */
    .column-dir { flex-direction: column; }
    .column-dir .flex-item { width: 100%; text-align: center; }
    
    /* grow */
    .grow-demo { }
    .grow-1 { flex: 1; }
    .grow-2 { flex: 2; }
    .grow-3 { flex: 3; }
  </style>
</head>
<body>
  <h2>🔄 Flexbox التفاعلي</h2>
  
  <div class="card">
    <h3>justify-content: center + align-items: center</h3>
    <p class="demo-label"><code>display:flex; justify-content:center; align-items:center;</code></p>
    <div class="flex-container centered">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
  </div>
  
  <div class="card">
    <h3>justify-content: space-between</h3>
    <p class="demo-label"><code>justify-content: space-between;</code></p>
    <div class="flex-container spaced">
      <div class="flex-item">الأول</div>
      <div class="flex-item">الأوسط</div>
      <div class="flex-item">الأخير</div>
    </div>
  </div>
  
  <div class="card">
    <h3>flex: 1, 2, 3 - توزيع النسب</h3>
    <p class="demo-label"><code>flex: 1 | flex: 2 | flex: 3</code></p>
    <div class="flex-container grow-demo" style="gap:5px;">
      <div class="flex-item grow-1">flex:1</div>
      <div class="flex-item grow-2" style="background:#e91e63;">flex:2</div>
      <div class="flex-item grow-3" style="background:#9c27b0;">flex:3</div>
    </div>
  </div>
  
  <div class="card">
    <h3>flex-wrap: wrap - التفاف العناصر</h3>
    <p class="demo-label"><code>flex-wrap: wrap; gap: 8px;</code></p>
    <div class="flex-container wrapped" style="gap:8px;">
      <div class="flex-item">عنصر 1</div>
      <div class="flex-item">عنصر 2</div>
      <div class="flex-item">عنصر 3</div>
      <div class="flex-item">عنصر 4</div>
      <div class="flex-item">عنصر 5</div>
      <div class="flex-item">عنصر 6</div>
    </div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-grid",
      title: "CSS Grid - الشبكة",
      tags: ["grid", "grid-template", "grid-column", "grid-row", "شبكة", "تخطيط", "layout", "fr"],
      icon: "🔲",
      description: "نظام CSS Grid لتصميم تخطيطات ثنائية الأبعاد",
      content: `
        <h2>CSS Grid</h2>
        <p>CSS Grid هو نظام تخطيط ثنائي الأبعاد يُتيح التحكم في الصفوف والأعمدة معاً.</p>

        <h3>تفعيل Grid</h3>
        <div class="code-example">
          <pre><code class="lang-css">.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 أعمدة متساوية */
  grid-template-rows: auto;
  gap: 20px;
}</code></pre>
        </div>

        <h3>خصائص الحاوية</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>grid-template-columns</code></td><td>تعريف الأعمدة</td><td><code>1fr 2fr 1fr</code></td></tr>
          <tr><td><code>grid-template-rows</code></td><td>تعريف الصفوف</td><td><code>100px auto</code></td></tr>
          <tr><td><code>gap</code></td><td>المسافة بين الخلايا</td><td><code>20px</code></td></tr>
          <tr><td><code>column-gap</code></td><td>المسافة بين الأعمدة</td><td><code>20px</code></td></tr>
          <tr><td><code>row-gap</code></td><td>المسافة بين الصفوف</td><td><code>10px</code></td></tr>
          <tr><td><code>place-items</code></td><td>محاذاة العناصر</td><td><code>center</code></td></tr>
        </table>

        <h3>خصائص العنصر</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>grid-column</code></td><td>امتداد الأعمدة</td><td><code>1 / 3</code></td></tr>
          <tr><td><code>grid-row</code></td><td>امتداد الصفوف</td><td><code>1 / 3</code></td></tr>
          <tr><td><code>grid-column: span 2</code></td><td>يشغل عمودين</td><td><code>span 2</code></td></tr>
        </table>

        <h3>وحدة fr (fraction)</h3>
        <p>وحدة <code>fr</code> تُوزّع المساحة المتاحة بالنسب:</p>
        <div class="code-example">
          <pre><code class="lang-css">/* 3 أعمدة متساوية */
grid-template-columns: 1fr 1fr 1fr;
/* نفسه بـ repeat */
grid-template-columns: repeat(3, 1fr);

/* عمود ثابت + عمودان متساويان */
grid-template-columns: 250px 1fr 1fr;

/* Responsive تلقائي */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إمتى تختار CSS Grid وإمتى تكتفي بـ Flexbox في مشروع حقيقي؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> القاعدة الذهبية: Flexbox مصمم للتعامل مع بُعد واحد (1D) إما صف أفقي أو عمود رأسي (زي شريط القوائم أو صف أزرار). بينما Grid مصمم للتعامل مع بُعدين (2D) صفوف وأعمدة معاً في نفس الوقت (زي تخطيط الصفحة الكاملة ومعارض الصور والمنتجات).</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 15px; direction: rtl; background: #0f1117; color: white; }
    h2 { color: #4fc3f7; text-align: center; }
    h3 { color: #81c784; font-size: 13px; margin: 15px 0 8px; }
    .card { background: #1e1e2e; border-radius: 10px; padding: 15px; margin: 10px 0; border: 1px solid #333; }
    .grid-item { background: #1a73e8; color: white; padding: 12px; border-radius: 8px; text-align: center; font-size: 13px; font-weight: bold; }
    .grid-item:nth-child(2) { background: #0d47a1; }
    .grid-item:nth-child(3) { background: #1565c0; }
    .grid-item:nth-child(4) { background: #1e88e5; }
    .grid-item:nth-child(5) { background: #2196f3; }
    code { background: #252540; padding: 2px 6px; border-radius: 3px; font-size: 11px; color: #a5d6a7; }
    .demo-label { font-size: 12px; color: #666; margin-bottom: 8px; }
  </style>
</head>
<body>
  <h2>🔲 CSS Grid</h2>
  
  <div class="card">
    <h3>3 أعمدة متساوية: <code>repeat(3, 1fr)</code></h3>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
    </div>
  </div>
  
  <div class="card">
    <h3>تخطيط الصفحة: <code>250px 1fr</code></h3>
    <div style="display:grid; grid-template-columns:120px 1fr; gap:8px; height:120px;">
      <div class="grid-item" style="display:flex;align-items:center;justify-content:center;">Sidebar</div>
      <div class="grid-item" style="background:#1565c0;display:flex;align-items:center;justify-content:center;">Main Content</div>
    </div>
  </div>
  
  <div class="card">
    <h3>امتداد الخلايا: <code>grid-column: span 2</code></h3>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
      <div class="grid-item" style="grid-column:span 2;">span 2 أعمدة 🔥</div>
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item" style="grid-column:span 2; background:#e91e63;">span 2 أيضاً</div>
      <div class="grid-item" style="background:#9c27b0;">3</div>
    </div>
  </div>
  
  <div class="card">
    <h3>Responsive تلقائي: <code>auto-fit, minmax()</code></h3>
    <p class="demo-label"><code>grid-template-columns: repeat(auto-fit, minmax(80px, 1fr))</code></p>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(80px, 1fr)); gap:8px;">
      <div class="grid-item">A</div>
      <div class="grid-item">B</div>
      <div class="grid-item">C</div>
      <div class="grid-item">D</div>
      <div class="grid-item">E</div>
    </div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-typography",
      title: "الخطوط والنصوص - Typography",
      tags: ["font-family", "font-size", "font-weight", "line-height", "text-align", "text-decoration", "google-fonts", "خط", "نص"],
      icon: "✍️",
      description: "التحكم في الخطوط والنصوص في CSS",
      content: `
        <h2>الخطوط والنصوص في CSS</h2>
        <p>CSS يوفر خصائص شاملة للتحكم في شكل ومظهر النصوص.</p>

        <h3>خصائص الخط</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>font-family</code></td><td>نوع الخط</td><td><code>'Arial', sans-serif</code></td></tr>
          <tr><td><code>font-size</code></td><td>حجم الخط</td><td><code>16px | 1rem | 1.2em</code></td></tr>
          <tr><td><code>font-weight</code></td><td>سماكة الخط</td><td><code>normal | bold | 400 | 700</code></td></tr>
          <tr><td><code>font-style</code></td><td>نمط الخط</td><td><code>normal | italic | oblique</code></td></tr>
          <tr><td><code>line-height</code></td><td>ارتفاع السطر</td><td><code>1.5 | 24px</code></td></tr>
          <tr><td><code>letter-spacing</code></td><td>المسافة بين الحروف</td><td><code>2px</code></td></tr>
          <tr><td><code>word-spacing</code></td><td>المسافة بين الكلمات</td><td><code>4px</code></td></tr>
        </table>

        <h3>خصائص النص</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>القيم</th></tr>
          <tr><td><code>text-align</code></td><td>left | right | center | justify</td></tr>
          <tr><td><code>text-decoration</code></td><td>none | underline | line-through | overline</td></tr>
          <tr><td><code>text-transform</code></td><td>uppercase | lowercase | capitalize</td></tr>
          <tr><td><code>text-shadow</code></td><td>x y blur color</td></tr>
          <tr><td><code>white-space</code></td><td>normal | nowrap | pre</td></tr>
          <tr><td><code>overflow</code></td><td>visible | hidden | scroll | auto</td></tr>
          <tr><td><code>text-overflow</code></td><td>clip | ellipsis</td></tr>
        </table>

        <h3>Google Fonts</h3>
        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- في head --&gt;
&lt;link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet"&gt;

&lt;style&gt;
  body { font-family: 'Cairo', sans-serif; }
&lt;/style&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه الفرق بين وحدتي rem و em، وليه rem هي المعيار القياسي لتحديد أحجام الخطوط؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> وحدة rem تنسب دائماً لعنصر الجذر &lt;html&gt; (Root Element)، فبيفضل مقاس الخط مستقر ومناسب لإعدادات تكبير الشاشة لذوي الهمم. بينما em تنسب لعنصر الأب المباشر، وممكن تتضاعف وتكبر بشكل غير متوقع (Compounding Issue).</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Cairo', Arial, sans-serif; padding: 20px; direction: rtl; background: #0f1117; color: white; }
    h2 { color: #4fc3f7; text-align: center; }
    .card { background: #1e1e2e; border-radius: 10px; padding: 15px; margin: 10px 0; border: 1px solid #333; }
    .demo { padding: 8px 0; border-bottom: 1px solid #333; }
    .demo:last-child { border: none; }
    code { background: #252540; padding: 2px 6px; border-radius: 3px; font-size: 11px; color: #a5d6a7; margin-left: 8px; }
    .label { color: #666; font-size: 12px; margin-bottom: 4px; }
    
    .ellipsis-demo { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 250px; background: #252540; padding: 8px 12px; border-radius: 6px; color: #ffb74d; }
    .shadow-demo { text-shadow: 2px 2px 8px rgba(26,115,232,0.8), 0 0 20px rgba(26,115,232,0.4); color: white; font-size: 22px; text-align: center; padding: 10px; }
    .gradient-text { background: linear-gradient(135deg, #4fc3f7, #1a73e8, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 24px; font-weight: 900; text-align: center; }
  </style>
</head>
<body>
  <h2>✍️ Typography في CSS</h2>
  
  <div class="card">
    <div class="demo">
      <div class="label"><code>font-weight: 300</code></div>
      <span style="font-weight:300; font-size:18px;">نص خفيف الوزن Light</span>
    </div>
    <div class="demo">
      <div class="label"><code>font-weight: 400 (normal)</code></div>
      <span style="font-weight:400; font-size:18px;">نص عادي Normal</span>
    </div>
    <div class="demo">
      <div class="label"><code>font-weight: 700 (bold)</code></div>
      <span style="font-weight:700; font-size:18px;">نص عريض Bold</span>
    </div>
    <div class="demo">
      <div class="label"><code>font-weight: 900 (black)</code></div>
      <span style="font-weight:900; font-size:18px;">نص أعرض Black</span>
    </div>
  </div>
  
  <div class="card">
    <div class="demo">
      <div class="label"><code>font-style: italic</code></div>
      <span style="font-style:italic; font-size:18px; color:#81c784;">نص مائل Italic ✨</span>
    </div>
    <div class="demo">
      <div class="label"><code>text-decoration: line-through | underline</code></div>
      <span style="text-decoration:line-through; margin-left:15px; color:#ef9a9a; font-size:16px;">سعر قديم 200 جنيه</span>
      <span style="color:#81c784; font-size:16px; font-weight:bold;">100 جنيه فقط!</span>
    </div>
    <div class="demo">
      <div class="label"><code>letter-spacing: 4px</code></div>
      <span style="letter-spacing:4px; color:#80cbc4; font-size:16px;">م ت ب ا ع د</span>
    </div>
    <div class="demo">
      <div class="label"><code>line-height: 2</code></div>
      <p style="line-height:2; font-size:14px; color:#aaa; margin:0;">هذا نص بـ line-height مضاعف.<br>فاصل السطور ضعف حجم الخط.<br>يُحسّن قراءة النص الطويل كثيراً.</p>
    </div>
  </div>
  
  <div class="card">
    <div class="label">text-overflow: ellipsis - القص مع نقاط:</div>
    <div class="ellipsis-demo">هذا نص طويل جداً سيُقطع بنقاط عند الحدود وهذا هو المحتوى الإضافي</div>
  </div>
  
  <div class="card">
    <p class="shadow-demo">✨ نص مع ظل إضاءة text-shadow</p>
    <p class="gradient-text">نص بتدرج لوني جميل!</p>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-animations",
      title: "الحركات والانتقالات - Animations",
      tags: ["animation", "transition", "keyframes", "transform", "hover", "حركة", "انتقال", "translate", "rotate", "scale"],
      icon: "🎭",
      description: "إضافة الحركات والتأثيرات البصرية بـ CSS",
      content: `
        <h2>الحركات في CSS</h2>
        <p>CSS يوفر طريقتين للحركة: <strong>Transitions</strong> للتأثيرات البسيطة، و<strong>Animations</strong> للحركات المتكررة.</p>

        <h3>Transition - الانتقالات</h3>
        <div class="code-example">
          <pre><code class="lang-css">.btn {
  background: blue;
  /* property | duration | timing | delay */
  transition: all 0.3s ease;
  transition: background 0.3s ease, transform 0.2s linear;
}

.btn:hover {
  background: darkblue;
  transform: scale(1.05);
}

/* خصائص timing */
/* ease | linear | ease-in | ease-out | ease-in-out */
/* cubic-bezier(0.25, 0.1, 0.25, 1) */</code></pre>
        </div>

        <h3>Transform - التحويلات</h3>
        <table class="data-table">
          <tr><th>الدالة</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>translate(x, y)</code></td><td>نقل العنصر</td><td><code>translate(50px, 0)</code></td></tr>
          <tr><td><code>scale(n)</code></td><td>تكبير/تصغير</td><td><code>scale(1.2)</code></td></tr>
          <tr><td><code>rotate(deg)</code></td><td>تدوير</td><td><code>rotate(45deg)</code></td></tr>
          <tr><td><code>skew(x, y)</code></td><td>إمالة</td><td><code>skew(10deg)</code></td></tr>
        </table>

        <h3>Animation - الحركات المتكررة</h3>
        <div class="code-example">
          <pre><code class="lang-css">/* تعريف الحركة */
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-100px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* تطبيق الحركة */
.element {
  animation: slideIn 0.5s ease forwards;
  animation: pulse 1s ease infinite;
  /* name | duration | timing | delay | iteration | direction */
  animation: slideIn 0.5s ease 0s 1 normal forwards;
}</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه تحريك العناصر باستخدام transform: translate() أفضل بمليون مرة في الأداء من تحريكها بـ top/left؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأن transform بيتعالج مباشرة على كارت الشاشة (GPU Compositing) بدون ما يجبر المتصفح يعيد حساب المقاسات (Reflow) أو يعيد رسم الشاشة (Repaint)، فالحركة بتفضل ناعمة ومستقرة بـ 60/120 فريم في الثانية بدون أي تقطيع.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; direction: rtl; background: #0f1117; color: white; }
    h2 { color: #4fc3f7; text-align: center; }
    .card { background: #1e1e2e; border-radius: 10px; padding: 15px; margin: 10px 0; border: 1px solid #333; }
    h3 { color: #81c784; font-size: 13px; margin-bottom: 12px; }
    
    /* Transition Examples */
    .trans-btn { padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-family: Arial; margin: 5px; }
    .t1 { background: #1a73e8; color: white; transition: all 0.3s ease; }
    .t1:hover { background: #0d47a1; transform: scale(1.1); box-shadow: 0 8px 25px rgba(26,115,232,0.5); }
    .t2 { background: #e91e63; color: white; transition: all 0.4s ease; }
    .t2:hover { transform: translateY(-5px) rotate(3deg); box-shadow: 0 10px 30px rgba(233,30,99,0.5); }
    .t3 { background: #9c27b0; color: white; transition: border-radius 0.4s, background 0.3s; }
    .t3:hover { border-radius: 50%; background: #4caf50; }
    .t4 { background: transparent; color: #1a73e8; border: 2px solid #1a73e8; transition: all 0.3s; }
    .t4:hover { background: #1a73e8; color: white; }
    
    /* Animation Examples */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(26,115,232,0.4); }
      50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(26,115,232,0); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    @keyframes rainbow {
      0% { background: #ea4335; }
      25% { background: #fbbc04; }
      50% { background: #34a853; }
      75% { background: #1a73e8; }
      100% { background: #ea4335; }
    }
    
    .anim-demo { display: flex; gap: 15px; flex-wrap: wrap; align-items: center; justify-content: center; }
    
    .anim-box { width: 70px; height: 70px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 12px; text-align: center; color: white; font-weight: bold; }
    
    .a1 { background: #1a73e8; animation: pulse 2s ease infinite; }
    .a2 { background: #ea4335; animation: bounce 1s ease infinite; }
    .a3 { background: #9c27b0; animation: spin 2s linear infinite; border-radius: 50%; font-size: 24px; }
    .a4 { animation: rainbow 3s linear infinite; }
    .a5 { background: #00bcd4; animation: fadeInUp 0.8s ease forwards; }
    
    code { background: #252540; padding: 1px 5px; border-radius: 3px; font-size: 11px; color: #a5d6a7; }
  </style>
</head>
<body>
  <h2>🎭 الحركات في CSS</h2>
  
  <div class="card">
    <h3>Transition - مرر الماوس على الأزرار:</h3>
    <button class="trans-btn t1">hover: scale + shadow</button>
    <button class="trans-btn t2">hover: move + rotate</button>
    <button class="trans-btn t3">hover: → دائري</button>
    <button class="trans-btn t4">hover: fill effect</button>
  </div>
  
  <div class="card">
    <h3>Animation - @keyframes:</h3>
    <div class="anim-demo">
      <div>
        <div class="anim-box a1">pulse</div>
        <div style="text-align:center;font-size:10px;color:#666;margin-top:4px;"><code>pulse</code></div>
      </div>
      <div>
        <div class="anim-box a2">bounce</div>
        <div style="text-align:center;font-size:10px;color:#666;margin-top:4px;"><code>bounce</code></div>
      </div>
      <div>
        <div class="anim-box a3">🔄</div>
        <div style="text-align:center;font-size:10px;color:#666;margin-top:4px;"><code>spin</code></div>
      </div>
      <div>
        <div class="anim-box a4">rainbow</div>
        <div style="text-align:center;font-size:10px;color:#666;margin-top:4px;"><code>rainbow</code></div>
      </div>
      <div>
        <div class="anim-box a5">fadeIn</div>
        <div style="text-align:center;font-size:10px;color:#666;margin-top:4px;"><code>fadeInUp</code></div>
      </div>
    </div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-responsive",
      title: "التصميم المتجاوب - Responsive",
      tags: ["responsive", "media-query", "mobile", "viewport", "breakpoint", "متجاوب", "موبايل", "min-width", "max-width"],
      icon: "📱",
      description: "جعل المواقع تعمل على جميع أحجام الشاشات",
      content: `
        <h2>التصميم المتجاوب - Responsive Design</h2>
        <p>التصميم المتجاوب يجعل موقعك يبدو ممتازاً على الموبايل والتابلت والديسكتوب معاً.</p>

        <h3>نقاط الكسر الشائعة (Breakpoints)</h3>
        <table class="data-table">
          <tr><th>الجهاز</th><th>العرض</th><th>الكود</th></tr>
          <tr><td>موبايل صغير</td><td>< 576px</td><td><code>max-width: 575px</code></td></tr>
          <tr><td>موبايل</td><td>576px+</td><td><code>min-width: 576px</code></td></tr>
          <tr><td>تابلت</td><td>768px+</td><td><code>min-width: 768px</code></td></tr>
          <tr><td>لابتوب</td><td>992px+</td><td><code>min-width: 992px</code></td></tr>
          <tr><td>ديسكتوب</td><td>1200px+</td><td><code>min-width: 1200px</code></td></tr>
        </table>

        <h3>Media Queries</h3>
        <div class="code-example">
          <pre><code class="lang-css">/* Mobile First - ابدأ بالموبايل */
.container {
  width: 100%;
  padding: 15px;
}

/* تابلت */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 20px;
  }
}

/* ديسكتوب */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* شاشة عريضة */
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* اتجاه أفقي */
@media (orientation: landscape) { }

/* طباعة */
@media print {
  .no-print { display: none; }
}</code></pre>
        </div>

        <h3>أدوات Responsive مهمة</h3>
        <table class="data-table">
          <tr><th>الأداة</th><th>الكود</th></tr>
          <tr><td>صورة متجاوبة</td><td><code>img { max-width: 100%; height: auto; }</code></td></tr>
          <tr><td>خط متجاوب</td><td><code>font-size: clamp(14px, 2vw, 18px)</code></td></tr>
          <tr><td>عرض viewport</td><td><code>width: 100vw</code></td></tr>
          <tr><td>ارتفاع viewport</td><td><code>height: 100vh</code></td></tr>
        </table>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">يعني إيه مبدأ Mobile-First Design وليه بنكتب Media Queries بـ min-width مش max-width؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> مبدأ Mobile-First يعني بنكتب الاستايل الأساسي لشاشات الموبايل الخفيفة الأول بدون media queries، وبعدين نوسع تدريجياً للشاشات الكبيرة بـ min-width. ده بيضمن أسرع وقت تحميل لأجهزة الموبايل الضعيفة ويتبع معايير Google Core Web Vitals.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial; direction: rtl; background: #0f1117; color: white; }
    
    .responsive-demo { padding: 15px; }
    h2 { color: #4fc3f7; text-align: center; padding: 15px; }
    
    /* Mobile First */
    .grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
    
    /* Tablet */
    @media (min-width: 600px) {
      .grid { grid-template-columns: 1fr 1fr; }
    }
    
    /* Desktop */
    @media (min-width: 900px) {
      .grid { grid-template-columns: 1fr 1fr 1fr; }
    }
    
    .card { background: #1e1e2e; border-radius: 10px; padding: 20px; border: 1px solid #333; text-align: center; }
    .card h3 { color: #1a73e8; margin-bottom: 8px; }
    .card p { color: #aaa; font-size: 14px; line-height: 1.6; }
    .card .icon { font-size: 36px; margin-bottom: 10px; }
    
    /* Responsive font */
    .hero-text { font-size: clamp(20px, 4vw, 40px); color: #4fc3f7; text-align: center; padding: 20px; font-weight: bold; }
    
    /* Screen size indicator */
    .screen-indicator { background: #252540; border-radius: 8px; padding: 10px; text-align: center; margin-bottom: 15px; font-size: 13px; }
    .mobile-show { color: #ea4335; font-weight: bold; }
    .tablet-show { display: none; color: #fbbc04; font-weight: bold; }
    .desktop-show { display: none; color: #34a853; font-weight: bold; }
    
    @media (min-width: 600px) {
      .mobile-show { display: none; }
      .tablet-show { display: inline; }
    }
    @media (min-width: 900px) {
      .tablet-show { display: none; }
      .desktop-show { display: inline; }
    }
  </style>
</head>
<body>
  <div class="responsive-demo">
    <h2>📱 التصميم المتجاوب</h2>
    
    <div class="screen-indicator">
      أنت الآن ترى: 
      <span class="mobile-show">📱 تخطيط الموبايل (عمود واحد)</span>
      <span class="tablet-show">📟 تخطيط التابلت (عمودان)</span>
      <span class="desktop-show">🖥️ تخطيط الديسكتوب (3 أعمدة)</span>
    </div>
    
    <p class="hero-text">حجم الخط يتغير مع الشاشة! (clamp)</p>
    
    <div class="grid">
      <div class="card">
        <div class="icon">📱</div>
        <h3>الموبايل</h3>
        <p>عمود واحد، حجم خط أصغر، قوائم مخفية</p>
      </div>
      <div class="card">
        <div class="icon">📟</div>
        <h3>التابلت</h3>
        <p>عمودان، تخطيط هجين بين الموبايل والديسكتوب</p>
      </div>
      <div class="card">
        <div class="icon">🖥️</div>
        <h3>الديسكتوب</h3>
        <p>ثلاثة أعمدة، تخطيط كامل، كل شيء مرئي</p>
      </div>
    </div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "css-variables",
      title: "المتغيرات - CSS Variables",
      tags: ["variables", "custom properties", "--color", "var()", "متغيرات", "dark mode"],
      icon: "🔧",
      description: "استخدام متغيرات CSS للتحكم في التصميم بسهولة",
      content: `
        <h2>متغيرات CSS (Custom Properties)</h2>
        <p>متغيرات CSS تُتيح تخزين قيم وإعادة استخدامها في أي مكان، مما يُسهّل الصيانة وتغيير التصميم.</p>

        <h3>تعريف واستخدام المتغيرات</h3>
        <div class="code-example">
          <pre><code class="lang-css">/* تعريف في :root (متاح لكل الصفحة) */
:root {
  --primary-color: #1a73e8;
  --secondary-color: #0d47a1;
  --text-color: #333;
  --bg-color: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --border-radius: 12px;
  --font-size-base: 16px;
  --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* الاستخدام */
.btn {
  background: var(--primary-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow);
}

/* Dark Mode بسهولة */
[data-theme="dark"] {
  --text-color: #e0e0e0;
  --bg-color: #1a1a2e;
}

/* تغيير متغير محلي */
.special-section {
  --primary-color: #e91e63; /* يؤثر على هذا القسم فقط */
}

/* var مع قيمة افتراضية */
color: var(--accent-color, #1a73e8);</code></pre>
        </div>

        <div class="info-box">
          <strong>💡 فائدة:</strong> لتغيير ثيم الموقع بالكامل، غيّر فقط المتغيرات في <code>:root</code>!
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه ميزة CSS Custom Properties (المتغيرات الأصلية) مقارنة بمتغيرات SASS/SCSS؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> متغيرات CSS الأصلية بتفضل حية في المتصفح في الـ Runtime؛ يعني تقدر تقرأها وتعدلها بالجافاسكريبت فوراً لتفعيل الثيم الليلي (Dark Mode) بدون إعادة كومبايل، وبتحترم الـ Cascading والـ Inheritance عبر شجرة العناصر.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <style>
    :root {
      --primary: #1a73e8;
      --primary-dark: #0d47a1;
      --secondary: #34a853;
      --danger: #ea4335;
      --bg: #0f1117;
      --card-bg: #1e1e2e;
      --text: #e0e0e0;
      --text-muted: #888;
      --border: #333;
      --radius: 12px;
      --shadow: 0 4px 20px rgba(0,0,0,0.3);
      --spacing: 16px;
    }
    
    /* Light Theme */
    [data-theme="light"] {
      --bg: #f0f4ff;
      --card-bg: #ffffff;
      --text: #1a1a1a;
      --text-muted: #666;
      --border: #e0e0e0;
      --shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    
    * { box-sizing: border-box; transition: background 0.3s, color 0.3s; }
    body { font-family: Arial; padding: var(--spacing); direction: rtl; background: var(--bg); color: var(--text); }
    h2 { color: var(--primary); text-align: center; margin-bottom: var(--spacing); }
    
    .card { background: var(--card-bg); border-radius: var(--radius); padding: var(--spacing); margin: 10px 0; border: 1px solid var(--border); box-shadow: var(--shadow); }
    
    .theme-toggle { display: flex; justify-content: center; gap: 10px; margin-bottom: 15px; }
    .btn { padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-family: Arial; font-weight: bold; transition: all 0.3s; }
    .btn-primary { background: var(--primary); color: white; }
    .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }
    .btn-success { background: var(--secondary); color: white; }
    .btn-danger { background: var(--danger); color: white; }
    
    .var-demo { font-family: monospace; font-size: 13px; padding: 10px; background: rgba(26,115,232,0.1); border-radius: 8px; border-right: 3px solid var(--primary); color: var(--text); }
    .var-name { color: var(--primary); }
    .var-value { color: var(--secondary); }
    
    p { color: var(--text-muted); line-height: 1.7; }
  </style>
</head>
<body>
  <h2>🔧 متغيرات CSS</h2>
  
  <div class="theme-toggle">
    <button class="btn btn-primary" onclick="document.documentElement.setAttribute('data-theme','dark')">🌙 Dark Mode</button>
    <button class="btn btn-success" onclick="document.documentElement.setAttribute('data-theme','light')">☀️ Light Mode</button>
  </div>
  
  <div class="card">
    <h3 style="color:var(--primary); margin-bottom:10px;">المتغيرات المعرّفة</h3>
    <div class="var-demo">
      <span class="var-name">--primary</span>: <span class="var-value">#1a73e8</span><br>
      <span class="var-name">--bg</span>: <span class="var-value">يتغير حسب الثيم ↑</span><br>
      <span class="var-name">--radius</span>: <span class="var-value">12px</span><br>
      <span class="var-name">--spacing</span>: <span class="var-value">16px</span>
    </div>
    <p style="margin-top:10px;">اضغط على Dark/Light لتغيير الثيم وشاهد كيف تتغير كل الألوان من مكان واحد!</p>
  </div>
  
  <div class="card">
    <h3 style="color:var(--primary); margin-bottom:10px;">أزرار تستخدم المتغيرات</h3>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <button class="btn btn-primary">زر رئيسي var(--primary)</button>
      <button class="btn btn-success">زر نجاح var(--secondary)</button>
      <button class="btn btn-danger">زر خطر var(--danger)</button>
    </div>
  </div>
</body>
</html>`
      }
    }
  ]
};
