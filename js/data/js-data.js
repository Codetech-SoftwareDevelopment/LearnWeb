const JS_DATA = {
  category: "JavaScript",
  icon: "⚡",
  description: "لغة البرمجة التفاعلية للويب - المنطق، التحكم بالعناصر، والاتصال بالخوادم",
  topics: [
    {
      id: "js-intro",
      title: "مقدمة في JavaScript",
      tags: ["مقدمة", "أساسيات", "intro", "script", "console", "تعريف"],
      icon: "⚡",
      description: "ما هي لغة JavaScript، أين تعمل، وكيف نكتب أول كود",
      content: `
        <h2>ما هي لغة JavaScript؟</h2>
        <p><strong>JavaScript (JS)</strong> هي لغة البرمجة الأكثر شعبية واستخداماً في عالم تطوير الويب. بينما يُعطي HTML الصفحة <em>الهيكل (Structure)</em>، ويُعطي CSS الصفحة <em>الشكل والتصميم (Styling)</em>، فإن JavaScript هي المسؤولة عن إعطاء الصفحة <strong>الحياة والتفاعل والمنطق (Behavior & Logic)</strong>.</p>
        
        <div class="info-box">
          <strong>💡 حقيقة هامة:</strong> JavaScript لغة تعمل على جانب العميل (Client-Side) داخل المتصفح مباشرة، وتعمل أيضاً على جانب الخادم (Server-Side) بواسطة بيئات تشغيل مثل Node.js و Deno.
        </div>

        <h3>أين نكتب كود JavaScript؟</h3>
        <table class="data-table">
          <tr><th>الطريقة</th><th>المكان</th><th>الوصف والاستخدام</th></tr>
          <tr><td>ملف خارجي (External)</td><td><code>&lt;script src="main.js"&gt;&lt;/script&gt;</code></td><td>✅ الطريقة القياسية والأفضل لتنظيم المشروع وإعادة الاستخدام</td></tr>
          <tr><td>داخل الصفحة (Internal)</td><td>داخل وسم <code>&lt;script&gt; ... &lt;/script&gt;</code></td><td>مفيدة للتجارب السريعة أو الأكواد المخصصة لصفحة واحدة</td></tr>
          <tr><td>داخل العنصر (Inline)</td><td><code>onclick="alert('مرحباً')"</code></td><td>غير محبذة في المشاريع الاحترافية لفصل الاهتمامات (Separation of Concerns)</td></tr>
        </table>

        <h3>مكان وضع وسم &lt;script&gt;</h3>
        <p>يُفضل وضع وسم السكربت في نهاية وسم <code>&lt;body&gt;</code> لضمان تحميل عناصر الـ HTML بالكامل قبل تنفيذ الكود، أو وضعها في <code>&lt;head&gt;</code> مع استخدام الخاصية <code>defer</code>:</p>
        
        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- في الـ head مع defer لتحميل غير معطل --&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;

&lt;!-- أو في نهاية الـ body --&gt;
&lt;body&gt;
  &lt;h1&gt;مرحبا بالعالم&lt;/h1&gt;
  &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
        </div>

        <h3>أول برنامج لك في JavaScript</h3>
        <div class="code-example">
          <pre><code class="lang-js">// طباعة رسالة في كونسول المتصفح (Developer Console)
console.log("مرحباً بك في عالم جافاسكريبت!");

// إظهار نافذة تنبيه للمستخدم
alert("أهلاً بك في CodeTech!");</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; text-align: center; padding: 25px; background: #0f172a; color: #f8fafc; }
    .card { background: #1e293b; border-radius: 16px; padding: 24px; max-width: 450px; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.4); border: 1px solid #334155; }
    h2 { color: #facc15; margin-bottom: 8px; }
    p { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }
    .btn { background: #facc15; color: #0f172a; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 14px; margin: 5px; }
    .btn:hover { background: #eab308; transform: translateY(-2px); }
    .output-box { margin-top: 20px; padding: 12px; background: #090d16; border-radius: 8px; border: 1px solid #475569; font-family: monospace; color: #38bdf8; min-height: 24px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>⚡ مرحباً بك في JavaScript</h2>
    <p>اضغط على الأزرار لتشغيل أول أوامر برمجية تفاعلية:</p>
    <button class="btn" onclick="sayHello()">👋 طباعة تحية</button>
    <button class="btn" onclick="showTime()">⏰ الوقت الحالي</button>
    <button class="btn" onclick="clearOutput()">🧹 مسح</button>
    <div class="output-box" id="output">اضغط على زر لعرض النتيجة...</div>
  </div>

  <script>
    function sayHello() {
      document.getElementById('output').textContent = '🌟 أهلاً بك في JavaScript! الكود يعمل بنجاح.';
    }
    function showTime() {
      const now = new Date().toLocaleTimeString('ar-EG');
      document.getElementById('output').textContent = '⌚ الوقت الآن: ' + now;
    }
    function clearOutput() {
      document.getElementById('output').textContent = 'تم مسح المخرجات.';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-output",
      title: "طرق الإخراج والعرض (Output)",
      tags: ["طباعة", "output", "console", "innerHTML", "document.write", "alert"],
      icon: "📢",
      description: "الطرق الأربعة لعرض وإخراج البيانات في JavaScript",
      content: `
        <h2>طرق إخراج البيانات في JavaScript</h2>
        <p>لا تحتوي JavaScript على دوال طباعة مدمجة مثل لغات أخرى، ولكنها تتيح 4 طرق رئيسية لإخراج البيانات للمستخدم والمطور:</p>

        <table class="data-table">
          <tr><th>الدالة / الخاصية</th><th>الاستخدام الرئيسي</th><th>بيئة العمل</th></tr>
          <tr><td><code>console.log()</code></td><td>الطباعة في نافذة المطورين (Console)</td><td>فحص الأخطاء والتطوير (Debugging)</td></tr>
          <tr><td><code>element.innerHTML</code></td><td>الكتابة داخل عنصر HTML وتغيير محتواه</td><td>تحديث واجهة المستخدم (UI)</td></tr>
          <tr><td><code>window.alert()</code></td><td>إظهار صندوق تنبيه منبثق للمستخدم</td><td>تنبيهات فورية للمستخدم</td></tr>
          <tr><td><code>document.write()</code></td><td>الكتابة مباشرة في مستند الصفحة</td><td>للاختبار فقط (تجنبها في الإنتاج)</td></tr>
        </table>

        <div class="warning-box">
          <strong>⚠️ تحذير بخصوص <code>document.write()</code>:</strong> إذا تم استدعاء <code>document.write()</code> بعد اكتمال تحميل الصفحة بالكامل، فإنها ستقوم بحذف ومسح كل محتويات صفحة HTML واستبدالها بما كتبته! لذلك لا تُستخدم في المواقع الحقيقية.
        </div>

        <h3>أمثلة برمجية لكل طريقة</h3>
        <div class="code-example">
          <pre><code class="lang-js">// 1. الطباعة في كونسول المتصفح (F12)
console.log("رسالة عادية");
console.warn("تحذير برتقالي!");
console.error("خطأ أحمر!");
console.table([{ name: "أحمد", age: 25 }, { name: "سارة", age: 22 }]);

// 2. تحديث عنصر في الصفحة
document.getElementById("demo").innerHTML = "محتوى &lt;strong&gt;جديد&lt;/strong&gt;";

// 3. نافذة تنبيه
alert("تم حفظ البيانات بنجاح!");</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .container { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 25px; border-radius: 16px; border: 1px solid #334155; }
    .btn-group { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 20px 0; }
    button { padding: 10px 16px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; font-family: 'Cairo'; }
    .btn-inner { background: #38bdf8; color: #0f172a; }
    .btn-console { background: #a855f7; color: white; }
    .btn-alert { background: #f43f5e; color: white; }
    .display-screen { background: #0f172a; border: 2px dashed #475569; padding: 20px; border-radius: 12px; min-height: 60px; font-size: 16px; color: #4ade80; }
    .console-mock { background: #000; color: #e2e8f0; text-align: left; direction: ltr; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 13px; margin-top: 15px; max-height: 100px; overflow-y: auto; }
  </style>
</head>
<body>
  <div class="container">
    <h3>📢 اختبار طرق الإخراج في JS</h3>
    <div class="btn-group">
      <button class="btn-inner" onclick="testInnerHTML()">استخدام innerHTML</button>
      <button class="btn-console" onclick="testConsole()">استخدام console.log</button>
      <button class="btn-alert" onclick="testAlert()">استخدام alert</button>
    </div>
    <div class="display-screen" id="targetElement">هنا سيظهر ناتج innerHTML</div>
    <div class="console-mock" id="consoleOutput">&gt; افتح Console (F12) لمشاهدة المخرجات الحقيقية</div>
  </div>

  <script>
    function testInnerHTML() {
      document.getElementById('targetElement').innerHTML = '✅ تم تعديل الـ DOM بواسطة <b>innerHTML</b>!';
    }
    function testConsole() {
      console.log('رسالة من console.log: تم الضغط على الزر بنجاح!');
      const mock = document.getElementById('consoleOutput');
      mock.innerHTML += '<br>&gt; [console.log]: تم تسجيل الرسالة بنجاح!';
    }
    function testAlert() {
      alert('هذا تنبيه من window.alert()!');
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-variables",
      title: "المتغيرات (var, let, const)",
      tags: ["متغيرات", "var", "let", "const", "scope", "hoisting", "نطاق"],
      icon: "📦",
      description: "التصريح عن المتغيرات والفروق الجوهرية بين var و let و const",
      content: `
        <h2>المتغيرات في JavaScript</h2>
        <p>المتغيرات هي حاويات (Containers) لتخزين البيانات والقيم التي نحتاج إلى استخدامها والتعديل عليها في البرنامج. هناك 3 كلمات محجوزة للتصريح عن المتغيرات في JavaScript:</p>

        <table class="data-table">
          <tr><th>الكلمة</th><th>النطاق (Scope)</th><th>إعادة الإسناد (Reassign)</th><th>إعادة التصريح (Redeclare)</th><th>الرفع (Hoisting)</th></tr>
          <tr><td><code>var</code></td><td>Function Scope</td><td>نعم مسموح</td><td>نعم مسموح (يسبب مشاكل)</td><td>يُرفع مع قيمة <code>undefined</code></td></tr>
          <tr><td><code>let</code></td><td>Block Scope { }</td><td>نعم مسموح</td><td>❌ ممنوع في نفس النطاق</td><td>يُرفع بدون تهيئة (TDZ)</td></tr>
          <tr><td><code>const</code></td><td>Block Scope { }</td><td>❌ قيمة ثابتة لا تتغير</td><td>❌ ممنوع في نفس النطاق</td><td>يُرفع بدون تهيئة (TDZ)</td></tr>
        </table>

        <div class="info-box">
          <strong>💡 القاعدة الذهبية الحديثة:</strong>
          <br>1. استخدم <strong><code>const</code></strong> دائماً كخيار افتراضي لكل المتغيرات.
          <br>2. استخدم <strong><code>let</code></strong> فقط إذا كنت متأكداً أن قيمة المتغير ستتغير لاحقاً (مثل العدادات في الحلقات).
          <br>3. <strong>تجنب استخدام <code>var</code> تماماً</strong> في الكود الحديث لتجنب أخطاء النطاق والتسريب.
        </div>

        <h3>مفهوم نطاق الكتلة (Block Scope)</h3>
        <p>أي كود يقع داخل أقواس معقوفة <code>{ }</code> (مثل داخل <code>if</code> أو <code>for</code>) يُسمى Block. متغيرات <code>let</code> و <code>const</code> تعيش فقط داخل هذا الـ Block ولا تخرج خارجه:</p>

        <div class="code-example">
          <pre><code class="lang-js">{
  let x = 10;
  const y = 20;
  var z = 30;
}
console.log(z); // 30 (var تسربت خارج القوس!)
console.log(x); // ReferenceError: x is not defined (محمية بواسطة Block Scope)</code></pre>
        </div>

        <h3>ملاحظة هامة حول const مع الكائنات والمصفوفات</h3>
        <p><code>const</code> تمنع إعادة إسناد المتغير إلى قيمة جديدة، ولكنها <strong>لا تجعل محتويات الكائن أو المصفوفة غير قابلة للتعديل</strong>:</p>
        <div class="code-example">
          <pre><code class="lang-js">const user = { name: "مصطفى", age: 25 };
user.age = 26; // ✅ مسموح تماماً لأننا نعدل خاصية داخل الكائن
// user = { name: "علي" }; // ❌ TypeError: Assignment to constant variable</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
    input { width: 100%; box-sizing: border-box; padding: 10px; margin: 10px 0; border-radius: 8px; border: 1px solid #475569; background: #0f172a; color: white; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; }
    .res { margin-top: 15px; padding: 12px; background: #090d16; border-radius: 8px; border-right: 4px solid #38bdf8; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>📦 تجربة المتغيرات الحية</h3>
    <label>الاسم (قيمة ثابتة لا تتغير):</label>
    <input type="text" id="nameInput" value="مصطفى جمال">
    <button onclick="runScopeDemo()">تنفيذ الحسابات والمتغيرات</button>
    <div class="res" id="resultBox">اضغط على الزر للمعاينة...</div>
  </div>

  <script>
    function runScopeDemo() {
      const fixedName = document.getElementById('nameInput').value;
      let counter = 0;
      counter += 5;
      counter *= 2;

      let scopeMsg = "";
      {
        let secret = "🔒 بيانات داخل Block Scope";
        var leaked = "🔓 بيانات تسربت بواسطة var";
        scopeMsg = "داخل البلوك: " + secret;
      }

      document.getElementById('resultBox').innerHTML = 
        '<strong>const fixedName:</strong> ' + fixedName + '<br>' +
        '<strong>let counter:</strong> ' + counter + '<br>' +
        '<strong>رسالة البلوك:</strong> ' + scopeMsg + '<br>' +
        '<strong>var تسربت للخارج:</strong> ' + leaked;
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-datatypes",
      title: "أنواع البيانات (Data Types)",
      tags: ["أنواع", "datatypes", "string", "number", "boolean", "null", "undefined", "symbol", "typeof"],
      icon: "🧩",
      description: "أنواع البيانات الأولية والمرجعية وكيفية فحصها والتحويل بينها",
      content: `
        <h2>أنواع البيانات في JavaScript</h2>
        <p>تنقسم أنواع البيانات في JavaScript إلى فئتين رئيسيتين: <strong>الأنواع الأولية (Primitive Types)</strong> و <strong>الأنواع المرجعية (Reference Types / Objects)</strong>.</p>

        <h3>1. الأنواع الأولية (Primitive Types)</h3>
        <p>تُخزن القيمة الفعلية مباشرة في الذاكرة (Stack)، وهي غير قابلة للتغيير الداخلي (Immutable):</p>
        <table class="data-table">
          <tr><th>النوع</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>String</code></td><td>نصوص محاطة بعلامات تنصيص</td><td><code>"مرحبا"</code> أو <code>'كود'</code> أو <code>\`نص\`</code></td></tr>
          <tr><td><code>Number</code></td><td>أرقام صحيحة أو عشرية</td><td><code>42</code> أو <code>3.14</code></td></tr>
          <tr><td><code>BigInt</code></td><td>أرقام صحيحة ضخمة جداً تتجاوز حد Number</td><td><code>9007199254740991n</code></td></tr>
          <tr><td><code>Boolean</code></td><td>قيمة منطقية نعم أو لا</td><td><code>true</code> أو <code>false</code></td></tr>
          <tr><td><code>Undefined</code></td><td>متغير تم التصريح عنه ولكن لم يُعطَ قيمة</td><td><code>let a; // undefined</code></td></tr>
          <tr><td><code>Null</code></td><td>قيمة فارغة مقصودة (عدم وجود كائن)</td><td><code>let user = null;</code></td></tr>
          <tr><td><code>Symbol</code></td><td>معرّف فريد لا يتكرر أبداً (ES6)</td><td><code>Symbol("id")</code></td></tr>
        </table>

        <h3>2. الأنواع المرجعية (Reference Types)</h3>
        <p>تُخزن في الذاكرة المعقدة (Heap) ويشير المتغير إلى عنوانها المرجعي في الذاكرة:</p>
        <ul>
          <li><strong>Object (الكائنات):</strong> <code>{ name: "علي", age: 30 }</code></li>
          <li><strong>Array (المصفوفات):</strong> <code>[10, 20, 30]</code> (تُعتبر نوعاً فرعياً من الكائنات)</li>
          <li><strong>Function (الدوال):</strong> <code>function() {}</code></li>
        </ul>

        <h3>فحص نوع البيانات باستخدام <code>typeof</code></h3>
        <div class="code-example">
          <pre><code class="lang-js">typeof "كود"       // "string"
typeof 123          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" ⚠️ (خطأ تاريخي مشهور في JS)
typeof [1, 2, 3]    // "object" (المصفوفات كائنات)
typeof { a: 1 }     // "object"
typeof function(){} // "function"</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { max-width: 520px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    select, button { padding: 10px; border-radius: 8px; border: 1px solid #475569; background: #0f172a; color: white; font-family: 'Cairo'; margin: 8px 0; width: 100%; box-sizing: border-box; }
    button { background: #10b981; font-weight: bold; cursor: pointer; border: none; }
    .card-out { background: #090d16; padding: 15px; border-radius: 8px; border: 1px solid #334155; margin-top: 15px; font-family: monospace; font-size: 14px; }
  </style>
</head>
<body>
  <div class="box">
    <h3>🔍 فاحص أنواع البيانات (typeof)</h3>
    <label>اختر قيمة لفحص نوعها:</label>
    <select id="valSelect">
      <option value='"مرحباً بالعالم"'>String: "مرحباً بالعالم"</option>
      <option value="99.95">Number: 99.95</option>
      <option value="true">Boolean: true</option>
      <option value="undefined">Undefined</option>
      <option value="null">Null</option>
      <option value="[1, 2, 3]">Array: [1, 2, 3]</option>
      <option value='{"name": "سارة"}'>Object: { name: "سارة" }</option>
    </select>
    <button onclick="checkType()">فحص النوع برمجياً</button>
    <div class="card-out" id="typeResult">النتيجة ستظهر هنا...</div>
  </div>

  <script>
    function checkType() {
      const val = document.getElementById('valSelect').value;
      let evaluated;
      try {
        evaluated = eval(val);
      } catch (e) {
        evaluated = val;
      }
      const type = typeof evaluated;
      const isArr = Array.isArray(evaluated);
      document.getElementById('typeResult').innerHTML = 
        'القيمة: <span style="color:#facc15">' + val + '</span><br>' +
        'النوع عبر typeof: <span style="color:#38bdf8">' + type + '</span><br>' +
        'هل هي مصفوفة Array.isArray؟: <span style="color:#4ade80">' + isArr + '</span>';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-operators",
      title: "المعاملات والعمليات (Operators)",
      tags: ["معاملات", "operators", "مقارنة", "حسابية", "منطقية", "strict equality"],
      icon: "➕",
      description: "المعاملات الحسابية، معاملات المقارنة، والمنطقية، والفرق الجوهري بين == و ===",
      content: `
        <h2>المعاملات في JavaScript</h2>
        <p>المعاملات هي رموز تُستخدم لإجراء العمليات على المتغيرات والقيم.</p>

        <h3>1. المعاملات الحسابية (Arithmetic Operators)</h3>
        <table class="data-table">
          <tr><th>المعامل</th><th>العملية</th><th>مثال</th><th>الناتج</th></tr>
          <tr><td><code>+</code></td><td>الجمع / دمج النصوص</td><td><code>10 + 5</code> أو <code>"أ" + "ب"</code></td><td>15 أو "أب"</td></tr>
          <tr><td><code>-</code></td><td>الطرح</td><td><code>10 - 4</code></td><td>6</td></tr>
          <tr><td><code>*</code></td><td>الضرب</td><td><code>6 * 7</code></td><td>42</td></tr>
          <tr><td><code>/</code></td><td>القسمة</td><td><code>20 / 4</code></td><td>5</td></tr>
          <tr><td><code>%</code></td><td>باقي القسمة (Modulus)</td><td><code>10 % 3</code></td><td>1</td></tr>
          <tr><td><code>**</code></td><td>الأس (Exponentiation)</td><td><code>2 ** 3</code></td><td>8</td></tr>
        </table>

        <h3>2. معاملات المقارنة (Comparison) والفرق بين == و ===</h3>
        <div class="warning-box">
          <strong>⚠️ الفرق الأخطر في جافاسكريبت:</strong>
          <br>• <strong><code>==</code> (المقارنة الفضفاضة - Loose Equality):</strong> تقارن القيم فقط وتقوم بتحويل النوع تلقائياً (Type Coercion). مثلاً <code>5 == "5"</code> ينتج <strong>true</strong>!
          <br>• <strong><code>===</code> (المقارنة الصارمة - Strict Equality):</strong> تقارن القيمة والنوع معاً دون تحويل. مثلاً <code>5 === "5"</code> ينتج <strong>false</strong> لأن أحدهما Number والآخر String.
          <br>✅ <strong>دائماً استخدم <code>===</code> و <code>!==</code> في كل مشاريعك!</strong>
        </div>

        <h3>3. المعاملات المنطقية (Logical Operators)</h3>
        <ul>
          <li><strong><code>&&</code> (AND):</strong> ترجع true فقط إذا كان كلا الطرفين true.</li>
          <li><strong><code>||</code> (OR):</strong> ترجع true إذا كان أحد الطرفين على الأقل true.</li>
          <li><strong><code>!</code> (NOT):</strong> تعكس القيمة المنطقية (true تصبح false والعكس).</li>
          <li><strong><code>??</code> (Nullish Coalescing):</strong> ترجع الطرف الأيمن فقط إذا كان الأيسر <code>null</code> أو <code>undefined</code> (تتجاهل 0 و "" و false).</li>
        </ul>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .box { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .row { display: flex; gap: 10px; margin: 15px 0; }
    input { flex: 1; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; text-align: center; }
    button { background: #f59e0b; color: #0f172a; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }
    .out { background: #090d16; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: right; font-family: monospace; }
  </style>
</head>
<body>
  <div class="box">
    <h3>⚖️ مقارنة الأرقام والنصوص (== مقابل ===)</h3>
    <div class="row">
      <input type="text" id="op1" value="5">
      <span style="line-height:40px">مقابل</span>
      <input type="text" id="op2" value="5">
    </div>
    <button onclick="compareValues()">قارن الآن</button>
    <div class="out" id="cmpResult">اضغط لمعاينة الفرق الدقيق...</div>
  </div>

  <script>
    function compareValues() {
      const val1 = 5;
      const val2 = "5";
      const loose = (val1 == val2);
      const strict = (val1 === val2);

      document.getElementById('cmpResult').innerHTML = 
        'القيمة الأولى: 5 (نوعها Number)<br>' +
        'القيمة الثانية: "5" (نوعها String)<br><br>' +
        'المقارنة الفضفاضة (5 == "5"): <strong style="color:#4ade80">' + loose + '</strong> (حوّلت النوع تلقائياً!)<br>' +
        'المقارنة الصارمة (5 === "5"): <strong style="color:#ef4444">' + strict + '</strong> (لأن الأنواع مختلفة تماماً!)';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-conditionals",
      title: "الجمل الشرطية (Conditionals)",
      tags: ["شروط", "if", "else", "switch", "ternary", "شرط"],
      icon: "🔀",
      description: "اتخاذ القرارات البرمجية عبر if-else والمعامل الثلاثي و switch-case",
      content: `
        <h2>الجمل الشرطية في JavaScript</h2>
        <p>تُمكنك الجمل الشرطية من تنفيذ أكواد مختلفة بناءً على تحقق شروط معينة.</p>

        <h3>1. جملة <code>if...else if...else</code></h3>
        <div class="code-example">
          <pre><code class="lang-js">let score = 85;

if (score >= 90) {
  console.log("امتياز 🏆");
} else if (score >= 75) {
  console.log("جيد جداً 🌟");
} else if (score >= 50) {
  console.log("ناجح 👍");
} else {
  console.log("راسب ❌");
}</code></pre>
        </div>

        <h3>2. المعامل الشرطي الثلاثي (Ternary Operator)</h3>
        <p>طريقة مختصرة لكتابة <code>if...else</code> في سطر واحد، ممتازة لإسناد القيم:</p>
        <div class="code-example">
          <pre><code class="lang-js">// الشرط ? القيمة لو تحقق : القيمة لو لم يتحقق
let age = 20;
let canDrive = age >= 18 ? "مؤهل للقيادة 🚗" : "غير مؤهل 🚸";</code></pre>
        </div>

        <h3>3. جملة <code>switch...case</code></h3>
        <p>تُستخدم عندما تقارن متغيراً واحداً بعدة قيم محددة وثابتة:</p>
        <div class="code-example">
          <pre><code class="lang-js">let day = "الأحد";

switch (day) {
  case "الجمعة":
  case "السبت":
    console.log("عطلة نهاية الأسبوع 🎉");
    break;
  case "الأحد":
    console.log("بداية أسبوع العمل 💼");
    break;
  default:
    console.log("يوم عمل عادي");
}</code></pre>
        </div>
        <div class="warning-box">
          <strong>⚠️ لا تنسَ <code>break</code>:</strong> إذا نسيت كتابة <code>break</code> في نهاية أي حالة case، فسيستمر المتصفح في تنفيذ الحالات التالية تلقائياً حتى لو لم يتحقق شرطها (Fall-through)!
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .box { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 25px; border-radius: 14px; border: 1px solid #334155; }
    input { width: 100%; box-sizing: border-box; padding: 12px; margin: 15px 0; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 8px; font-size: 16px; }
    button { background: #6366f1; color: white; border: none; padding: 12px; width: 100%; border-radius: 8px; font-weight: bold; font-size: 15px; cursor: pointer; }
    .badge { margin-top: 20px; padding: 15px; border-radius: 8px; font-size: 18px; font-weight: bold; display: none; }
  </style>
</head>
<body>
  <div class="box">
    <h3>🔀 حاسبة التقدير الدراسي</h3>
    <label>أدخل درجتك من 100:</label>
    <input type="number" id="gradeInput" placeholder="مثال: 88" min="0" max="100">
    <button onclick="calcGrade()">حساب التقدير</button>
    <div id="gradeResult" class="badge"></div>
  </div>

  <script>
    function calcGrade() {
      const score = Number(document.getElementById('gradeInput').value);
      const res = document.getElementById('gradeResult');
      res.style.display = 'block';

      if (score > 100 || score < 0 || isNaN(score)) {
        res.style.background = '#ef4444';
        res.textContent = '❌ يرجى إدخال درجة صحيحة بين 0 و 100!';
      } else if (score >= 90) {
        res.style.background = '#22c55e';
        res.textContent = '🏆 ممتاز (A) - أداء رائع جداً!';
      } else if (score >= 80) {
        res.style.background = '#3b82f6';
        res.textContent = '🌟 جيد جداً (B) - أحسنت!';
      } else if (score >= 65) {
        res.style.background = '#eab308';
        res.textContent = '👍 جيد (C) - يمكنك التحسن أكثر.';
      } else if (score >= 50) {
        res.style.background = '#f97316';
        res.textContent = '⚠️ مقبول (D) - على الحافة!';
      } else {
        res.style.background = '#dc2626';
        res.textContent = '💔 راسب (F) - حاول مجدداً.';
      }
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-loops",
      title: "حلقات التكرار (Loops)",
      tags: ["تكرار", "loops", "for", "while", "do while", "for of", "for in", "break"],
      icon: "🔁",
      description: "حلقات التكرار for و while و do-while و for-of و for-in للتعامل مع البيانات المتكررة",
      content: `
        <h2>حلقات التكرار في JavaScript</h2>
        <p>تُستخدم حلقات التكرار لتنفيذ نفس الكود عدة مرات طالما أن هناك شرطاً معيناً لا يزال محققاً، مما يوفر الجهد ويمنع تكرار الكود.</p>

        <h3>1. حلقة <code>for</code> الكلاسيكية</h3>
        <p>الأكثر استخداماً عندما تعرف مسبقاً عدد مرات التكرار المطلوبة:</p>
        <div class="code-example">
          <pre><code class="lang-js">// البدء ; الشرط ; خطوة الزيادة
for (let i = 1; i <= 5; i++) {
  console.log("رقم: " + i);
}</code></pre>
        </div>

        <h3>2. حلقة <code>while</code> و <code>do...while</code></h3>
        <ul>
          <li><strong><code>while</code>:</strong> تفحص الشرط أولاً، فإذا كان true تنفذ، وإلا لا تنفذ أبداً.</li>
          <li><strong><code>do...while</code>:</strong> تنفذ الكود <strong>مرة واحدة على الأقل</strong> أولاً ثم تفحص الشرط.</li>
        </ul>

        <h3>3. الحلقات الحديثة: <code>for...of</code> مقابل <code>for...in</code></h3>
        <table class="data-table">
          <tr><th>الحلقة</th><th>المجال الرئيسي</th><th>ما ترجعه</th></tr>
          <tr><td><code>for...of</code></td><td>المصفوفات والنصوص (Iterables)</td><td>ترجع <strong>القيم (Values)</strong> مباشرة</td></tr>
          <tr><td><code>for...in</code></td><td>الكائنات (Objects)</td><td>ترجع <strong>المفاتيح والخصائص (Keys)</strong></td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-js">const colors = ["أحمر", "أخضر", "أزرق"];
for (const color of colors) {
  console.log(color); // يطبع القيم
}

const user = { name: "مصطفى", role: "مطور" };
for (const key in user) {
  console.log(key + ": " + user[key]); // يطبع المفاتيح وقيمها
}</code></pre>
        </div>

        <h3>التحكم بالحلقة: <code>break</code> و <code>continue</code></h3>
        <ul>
          <li><strong><code>break</code>:</strong> توقف الحلقة وتخرج منها نهائياً على الفور.</li>
          <li><strong><code>continue</code>:</strong> تتخطى الدورة الحالية فقط وتقفز للدورة التالية مباشرة.</li>
        </ul>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .controls { display: flex; gap: 10px; margin-bottom: 15px; }
    input { flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #475569; background: #0f172a; color: white; text-align: center; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; }
    .list { background: #090d16; padding: 15px; border-radius: 8px; max-height: 200px; overflow-y: auto; font-family: monospace; }
    .list-item { padding: 4px 8px; border-bottom: 1px solid #1e293b; color: #facc15; }
  </style>
</head>
<body>
  <div class="box">
    <h3>🔁 مولّد جدول الضرب التفاعلي</h3>
    <div class="controls">
      <input type="number" id="numInput" value="7" min="1" max="100">
      <button onclick="generateTable()">توليد الجدول</button>
    </div>
    <div class="list" id="tableOutput">اضغط لعرض جدول الضرب...</div>
  </div>

  <script>
    function generateTable() {
      const n = Number(document.getElementById('numInput').value);
      const out = document.getElementById('tableOutput');
      out.innerHTML = '';

      for (let i = 1; i <= 10; i++) {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.textContent = n + ' × ' + i + ' = ' + (n * i);
        out.appendChild(item);
      }
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-functions",
      title: "الدوال (Functions)",
      tags: ["دوال", "functions", "arrow functions", "parameters", "return", "إرجاع"],
      icon: "⚙️",
      description: "أنواع الدوال: العادية، التعبيرية، والأسهم السريعة (Arrow Functions)",
      content: `
        <h2>الدوال في JavaScript</h2>
        <p>الدالة هي كتلة برمجية مستقلة تُكتب مرة واحدة ويمكن استدعاؤها وإعادة استخدامها آلاف المرات لتنفيذ مهمة محددة مع مدخلات مختلفة.</p>

        <h3>1. الدالة المعلنة (Function Declaration)</h3>
        <p>الطريقة الكلاسيكية، وتتميز بأنها قابلة للرفع (Hoisted) أي يمكن استدعاؤها حتى قبل سطر تعريفها:</p>
        <div class="code-example">
          <pre><code class="lang-js">function greet(name) {
  return "أهلاً وسهلاً يا " + name;
}
console.log(greet("مصطفى"));</code></pre>
        </div>

        <h3>2. دوال الأسهم الحديثة (Arrow Functions - ES6)</h3>
        <p>صيغة عصرية ومختصرة جداً شائعة الاستخدام في الكود الحديث:</p>
        <div class="code-example">
          <pre><code class="lang-js">// الدالة التقليدية
const addOld = function(a, b) { return a + b; };

// دالة السهم (Arrow Function)
const add = (a, b) => a + b; // إذا كان سطر واحد، كلمة return وأقواس {} اختيارية!

// إذا كانت هناك معلمة واحدة فقط
const square = x => x * x;</code></pre>
        </div>

        <h3>3. المعاملات الافتراضية (Default Parameters)</h3>
        <p>تحديد قيمة افتراضية للمعامل في حال لم يرسلها المستخدم عند الاستدعاء:</p>
        <div class="code-example">
          <pre><code class="lang-js">function createUser(name = "مستخدم مجهول", role = "عضو") {
  return \`الاسم: \${name} | الرتبة: \${role}\`;
}</code></pre>
        </div>

        <h3>4. معاملات الباقي (Rest Parameters - <code>...args</code>)</h3>
        <p>تسمح للدالة باستقبال أي عدد غير محدود من المعاملات وتجميعها في مصفوفة واحدة:</p>
        <div class="code-example">
          <pre><code class="lang-js">function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sumAll(1, 2, 3, 4, 5); // 15</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .inputs { display: flex; gap: 8px; margin: 15px 0; }
    input { flex: 1; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; text-align: center; }
    .btns { display: flex; gap: 8px; }
    button { flex: 1; background: #8b5cf6; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    button:hover { background: #7c3aed; }
    .res { margin-top: 15px; padding: 15px; background: #090d16; border-radius: 8px; color: #38bdf8; font-size: 16px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h3>⚙️ حاسبة الدوال والأسهم (Arrow Functions)</h3>
    <div class="inputs">
      <input type="number" id="numA" value="12">
      <input type="number" id="numB" value="8">
    </div>
    <div class="btns">
      <button onclick="execute('add')">جمع (+)</button>
      <button onclick="execute('multiply')">ضرب (×)</button>
      <button onclick="execute('power')">أس (^)</button>
    </div>
    <div class="res" id="calcOutput">النتيجة: جاهز للحساب</div>
  </div>

  <script>
    // دوال أسهم Arrow Functions
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;
    const power = (a, b) => a ** b;

    function execute(op) {
      const a = Number(document.getElementById('numA').value);
      const b = Number(document.getElementById('numB').value);
      let r = 0;
      if (op === 'add') r = add(a, b);
      if (op === 'multiply') r = multiply(a, b);
      if (op === 'power') r = power(a, b);

      document.getElementById('calcOutput').textContent = 'النتيجة المحسوبة بدالة السهم: ' + r;
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-scope-closures",
      title: "النطاق والـ Closures",
      tags: ["نطاق", "scope", "closure", "lexical", "closures", "نطاق المتغيرات"],
      icon: "🔒",
      description: "فهم سلسلة النطاقات (Scope Chain) والـ Closures وأهميتها في الحفاظ على خصوصية البيانات",
      content: `
        <h2>النطاق والـ Closures في JavaScript</h2>
        <p>يُعد الـ <strong>Scope</strong> والـ <strong>Closure</strong> من أهم المفاهيم البرمجية التي تُميز المطور المحترف في مقابلات العمل والمشاريع الضخمة.</p>

        <h3>1. أنواع النطاق (Scope)</h3>
        <ul>
          <li><strong>Global Scope (النطاق العام):</strong> أي متغير يُعرّف خارج كل الدوال والأقواس يكون متاحاً في أي مكان في التطبيق.</li>
          <li><strong>Function Scope (نطاق الدالة):</strong> المتغيرات المعرفة داخل دالة تكون خاصة بها فقط ولا يمكن الوصول إليها من الخارج.</li>
          <li><strong>Block Scope (نطاق الكتلة):</strong> المتغيرات المعرفة بـ <code>let</code> و <code>const</code> داخل <code>{ }</code> لا تعيش إلا داخلها.</li>
        </ul>

        <h3>2. ما هو الـ Closure (الإغلاق المعجمي)؟</h3>
        <p>الـ <strong>Closure</strong> يحدث عندما تحتفظ الدالة الداخلية بالوصول إلى متغيرات الدالة الخارجية (Lexical Environment) حتى <strong>بعد انتهاء تنفيذ الدالة الخارجية وحذفها من الـ Call Stack</strong>!</p>

        <div class="code-example">
          <pre><code class="lang-js">function createCounter() {
  let count = 0; // متغير خاص (Private Variable)

  return function() {
    count++; // الدالة تتذكر count دائماً
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3</code></pre>
        </div>

        <div class="info-box">
          <strong>💡 لماذا الـ Closures مهمة؟</strong>
          <br>1. تمكننا من حماية البيانات (Data Encapsulation / Private Variables) حتى لا يعبث بها أي كود خارجي.
          <br>2. تُستخدم بكثرة في إنشاء الدوال المصنعية (Factory Functions) ومكتبات إدارة الحالة مثل Redux و React Hooks.
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .box { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .counter-display { font-size: 48px; font-weight: bold; color: #38bdf8; margin: 15px 0; }
    .btns { display: flex; gap: 10px; justify-content: center; }
    button { padding: 10px 20px; border-radius: 8px; border: none; font-weight: bold; cursor: pointer; }
    .btn-inc { background: #22c55e; color: #0f172a; }
    .btn-dec { background: #ef4444; color: white; }
    .btn-reset { background: #64748b; color: white; }
    p { color: #94a3b8; font-size: 13px; }
  </style>
</head>
<body>
  <div class="box">
    <h3>🔒 عداد محمي بواسطة الـ Closure</h3>
    <p>المتغير count معزول تماماً ومخفي عن أي تدخل خارجي!</p>
    <div class="counter-display" id="cntVal">0</div>
    <div class="btns">
      <button class="btn-inc" onclick="myCounter.increment()">+ زيادة</button>
      <button class="btn-dec" onclick="myCounter.decrement()">- نقصان</button>
      <button class="btn-reset" onclick="myCounter.reset()">إعادة تعيين</button>
    </div>
  </div>

  <script>
    // إنشاء الـ Closure
    function makeCounter() {
      let count = 0; // خاص وغير متاح في window
      return {
        increment: function() {
          count++;
          updateUI(count);
        },
        decrement: function() {
          count--;
          updateUI(count);
        },
        reset: function() {
          count = 0;
          updateUI(count);
        }
      };
    }

    const myCounter = makeCounter();
    function updateUI(v) {
      document.getElementById('cntVal').textContent = v;
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-arrays",
      title: "المصفوفات (Arrays)",
      tags: ["مصفوفات", "arrays", "push", "pop", "splice", "slice", "مصفوفة"],
      icon: "📚",
      description: "إنشاء المصفوفات والتعامل مع عناصرها وأشهر ميثودات التعديل والإضافة والحذف",
      content: `
        <h2>المصفوفات في JavaScript</h2>
        <p>المصفوفة (Array) هي قائمة مرتبة من العناصر يمكنها تخزين عدة قيم بأنواع بيانات مختلفة تحت اسم متغير واحد.</p>

        <h3>إنشاء المصفوفات والوصول للعناصر</h3>
        <div class="code-example">
          <pre><code class="lang-js">const fruits = ["تفاح", "موز", "برتقال"];

console.log(fruits[0]); // تفاح (الفهرس يبدأ دائماً من 0)
console.log(fruits.length); // 3 (عدد العناصر)
console.log(fruits[fruits.length - 1]); // برتقال (العنصر الأخير)</code></pre>
        </div>

        <h3>أهم ميثودات تعديل المصفوفة الأساسية</h3>
        <table class="data-table">
          <tr><th>الميثود</th><th>المهمة</th><th>تعديل المصفوفة الأصلية؟</th></tr>
          <tr><td><code>push(item)</code></td><td>إضافة عنصر في نهاية المصفوفة</td><td>نعم</td></tr>
          <tr><td><code>pop()</code></td><td>حذف آخر عنصر من المصفوفة وإرجاعه</td><td>نعم</td></tr>
          <tr><td><code>unshift(item)</code></td><td>إضافة عنصر في بداية المصفوفة</td><td>نعم</td></tr>
          <tr><td><code>shift()</code></td><td>حذف أول عنصر من المصفوفة وإرجاعه</td><td>نعم</td></tr>
          <tr><td><code>splice(start, count, items)</code></td><td>حذف أو استبدال أو إدراج عناصر في أي مكان</td><td>نعم</td></tr>
          <tr><td><code>slice(start, end)</code></td><td>نسخ جزء من المصفوفة دون التأثير على الأصلية</td><td>❌ لا</td></tr>
          <tr><td><code>includes(val)</code></td><td>فحص وجود عنصر وترجع true أو false</td><td>❌ لا</td></tr>
          <tr><td><code>indexOf(val)</code></td><td>إرجاع فهرس العنصر (أو -1 إذا لم يوجد)</td><td>❌ لا</td></tr>
          <tr><td><code>join(separator)</code></td><td>تحويل كل عناصر المصفوفة إلى نص واحد</td><td>❌ لا</td></tr>
        </table>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .add-row { display: flex; gap: 8px; margin: 15px 0; }
    input { flex: 1; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; }
    button { padding: 10px 14px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-add { background: #38bdf8; color: #0f172a; }
    .btn-pop { background: #ef4444; color: white; }
    .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; }
    .tag { background: #334155; padding: 6px 12px; border-radius: 20px; font-size: 14px; border: 1px solid #64748b; }
  </style>
</head>
<body>
  <div class="card">
    <h3>📚 معمل المصفوفات التفاعلي</h3>
    <div class="add-row">
      <input type="text" id="itemIn" placeholder="اسم العنصر الجديد...">
      <button class="btn-add" onclick="addItem()">إضافة (push)</button>
      <button class="btn-pop" onclick="popItem()">حذف الأخير (pop)</button>
    </div>
    <div style="font-size:13px; color:#94a3b8">محتويات المصفوفة الحالية:</div>
    <div class="tags" id="arrayBox"></div>
  </div>

  <script>
    let myArr = ["JavaScript", "HTML", "CSS", "React"];
    function render() {
      const box = document.getElementById('arrayBox');
      box.innerHTML = '';
      myArr.forEach((item, idx) => {
        const el = document.createElement('div');
        el.className = 'tag';
        el.textContent = idx + ': ' + item;
        box.appendChild(el);
      });
    }
    function addItem() {
      const val = document.getElementById('itemIn').value.trim();
      if (val) {
        myArr.push(val);
        document.getElementById('itemIn').value = '';
        render();
      }
    }
    function popItem() {
      myArr.pop();
      render();
    }
    render();
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-array-iteration",
      title: "ميثودات المصفوفات المتقدمة (ES6 Iteration)",
      tags: ["map", "filter", "reduce", "forEach", "find", "some", "every", "تكرار المصفوفات"],
      icon: "⚡",
      description: "الميثودات عالية الرتبة (Higher-Order Methods): map و filter و reduce و find",
      content: `
        <h2>ميثودات المصفوفات المتقدمة (Higher-Order Methods)</h2>
        <p>تستقبل هذه الميثودات دالة كمعامل (Callback Function) وتُنفذها على كل عنصر في المصفوفة، وتُعد حجر الأساس للبرمجة الدالية (Functional Programming) في JavaScript.</p>

        <table class="data-table">
          <tr><th>الميثود</th><th>الفكرة والهدف</th><th>الناتج المسترجع</th></tr>
          <tr><td><code>forEach()</code></td><td>المرور على كل عنصر لتنفيذ أمر (مثل الطباعة)</td><td><code>undefined</code> (لا ترجع مصفوفة جديدة)</td></tr>
          <tr><td><code>map()</code></td><td>تحويل كل عنصر عبر دالة معينة</td><td><strong>مصفوفة جديدة بنفس الطول</strong> بالقيم المعدلة</td></tr>
          <tr><td><code>filter()</code></td><td>تصفية العناصر التي تحقق شرطاً معيناً فقط</td><td><strong>مصفوفة جديدة</strong> بالعناصر المطابقة فقط</td></tr>
          <tr><td><code>reduce()</code></td><td>تجميع كل عناصر المصفوفة في قيمة واحدة نهائية</td><td><strong>قيمة واحدة</strong> (رقم، نص، كائن، إلخ)</td></tr>
          <tr><td><code>find()</code></td><td>إرجاع أول عنصر يطابق الشرط</td><td>أول عنصر فقط (أو <code>undefined</code>)</td></tr>
          <tr><td><code>some()</code></td><td>هل يوجد عنصر واحد على الأقل يطابق الشرط؟</td><td><code>true</code> أو <code>false</code></td></tr>
          <tr><td><code>every()</code></td><td>هل كل عناصر المصفوفة بدون استثناء تطابق الشرط؟</td><td><code>true</code> أو <code>false</code></td></tr>
        </table>

        <h3>أمثلة كود احترافية</h3>
        <div class="code-example">
          <pre><code class="lang-js">const numbers = [1, 2, 3, 4, 5, 6];

// 1. المضاعفة باستخدام map
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10, 12]

// 2. التصفية باستخدام filter (الأرقام الزوجية فقط)
const evens = numbers.filter(n => n % 2 === 0); // [2, 4, 6]

// 3. التجميع باستخدام reduce (حساب المجموع الكلي)
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 21

// 4. البحث عن أول عنصر أكبر من 3
const firstBig = numbers.find(n => n > 3); // 4</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 520px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .products { display: flex; flex-direction: column; gap: 8px; margin: 15px 0; }
    .product-row { display: flex; justify-content: space-between; background: #0f172a; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; }
    .btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 15px; }
    button { flex: 1; padding: 9px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 13px; }
    .btn-all { background: #64748b; color: white; }
    .btn-filter { background: #f59e0b; color: #0f172a; }
    .btn-double { background: #3b82f6; color: white; }
    .total-box { background: #090d16; padding: 12px; border-radius: 8px; font-weight: bold; color: #4ade80; text-align: center; border: 1px solid #22c55e; }
  </style>
</head>
<body>
  <div class="card">
    <h3>⚡ ميثودات المصفوفات على سلة المنتجات</h3>
    <div class="btn-row">
      <button class="btn-all" onclick="resetList()">الكل (Reset)</button>
      <button class="btn-filter" onclick="filterExpensive()">تصفية الأغلى من 100$ (filter)</button>
      <button class="btn-double" onclick="applyDiscount()">خصم 20% (map)</button>
    </div>
    <div class="products" id="prodList"></div>
    <div class="total-box" id="totalBox">المجموع الكلي: $0</div>
  </div>

  <script>
    const initial = [
      { name: "شاشة 4K", price: 300 },
      { name: "ماوس جيمنج", price: 50 },
      { name: "كيبورد ميكانيكي", price: 120 },
      { name: "سماعة رأس", price: 80 }
    ];
    let current = [...initial];

    function render() {
      const list = document.getElementById('prodList');
      list.innerHTML = '';
      current.forEach(p => {
        const row = document.createElement('div');
        row.className = 'product-row';
        row.innerHTML = '<span>' + p.name + '</span><strong style="color:#facc15">$' + p.price + '</strong>';
        list.appendChild(row);
      });
      // حساب الإجمالي باستخدام reduce
      const total = current.reduce((sum, item) => sum + item.price, 0);
      document.getElementById('totalBox').textContent = 'المجموع الكلي عبر reduce(): $' + total;
    }

    function resetList() { current = [...initial]; render(); }
    function filterExpensive() { current = initial.filter(p => p.price > 100); render(); }
    function applyDiscount() { current = current.map(p => ({ ...p, price: Math.round(p.price * 0.8) })); render(); }

    render();
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-objects",
      title: "الكائنات (Objects)",
      tags: ["كائنات", "objects", "properties", "methods", "this", "destructuring", "تفكيك"],
      icon: "📦",
      description: "الكائنات في جافاسكريبت، الخصائص والميثودات، الكلمة this، وتفكيك الكائنات (Destructuring)",
      content: `
        <h2>الكائنات في JavaScript</h2>
        <p>الكائن (Object) هو هيكل بيانات مركب لتخزين مجموعات من البيانات المرتبطة على هيئة أزواج من <strong>المفاتيح والقيم (Key-Value Pairs)</strong>.</p>

        <h3>إنشاء الكائنات والوصول للخصائص</h3>
        <div class="code-example">
          <pre><code class="lang-js">const user = {
  name: "مصطفى جمال",
  age: 26,
  isInstructor: true,
  skills: ["JavaScript", "HTML", "CSS"],
  greet: function() {
    return \`مرحباً، أنا \${this.name}\`; // this تشير للكائن الحالي
  }
};

// طرق الوصول:
console.log(user.name);       // Dot Notation: "مصطفى جمال"
console.log(user["age"]);     // Bracket Notation: 26
console.log(user.greet());    // استدعاء الميثود</code></pre>
        </div>

        <h3>تفكيك الكائنات (Object Destructuring - ES6)</h3>
        <p>استخراج الخصائص من الكائن وتخزينها في متغيرات مباشرة بسهولة تامة:</p>
        <div class="code-example">
          <pre><code class="lang-js">const person = { fullName: "أحمد علي", city: "القاهرة", job: "مبرمج" };

// بدلاً من person.fullName و person.city
const { fullName, city, job } = person;
console.log(fullName, city); // "أحمد علي" "القاهرة"</code></pre>
        </div>

        <h3>معامل الانتشار (Spread Operator <code>...</code>) للكائنات</h3>
        <div class="code-example">
          <pre><code class="lang-js">const baseUser = { id: 101, username: "dev99" };
// دمج ونسخ الكائنات
const fullProfile = { ...baseUser, role: "Admin", active: true };</code></pre>
        </div>

        <h3>ميثودات الكائن الثابتة (Object Methods)</h3>
        <ul>
          <li><code>Object.keys(obj)</code>: ترجع مصفوفة بأسماء كل المفاتيح.</li>
          <li><code>Object.values(obj)</code>: ترجع مصفوفة بقيم كل الخصائص.</li>
          <li><code>Object.entries(obj)</code>: ترجع مصفوفة ثنائية تحتوي على كل <code>[key, value]</code>.</li>
        </ul>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .profile-card { background: #0f172a; border-radius: 8px; padding: 15px; margin-top: 15px; border-right: 4px solid #38bdf8; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; }
    .row { display: flex; justify-content: space-between; margin: 6px 0; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>👤 إدارة كائنات المستخدمين</h3>
    <button onclick="updateUser()">تحديث الكائن وتفكيكه (Destructuring)</button>
    <div class="profile-card" id="userCard">
      <div class="row"><span>الاسم:</span> <strong id="uName">مصطفى</strong></div>
      <div class="row"><span>المستوى:</span> <strong id="uLevel">Junior</strong></div>
      <div class="row"><span>النقاط:</span> <strong id="uPoints">150</strong></div>
      <div class="row"><span>الرسالة:</span> <strong id="uMsg" style="color:#facc15">-</strong></div>
    </div>
  </div>

  <script>
    let dev = {
      name: "مصطفى جمال",
      level: "Senior Full-Stack",
      points: 950,
      speak: function() {
        return "كود نظيف = موقع فائق السرعة! 🚀";
      }
    };

    function updateUser() {
      // تفكيك الكائن Destructuring
      const { name, level, points } = dev;
      document.getElementById('uName').textContent = name;
      document.getElementById('uLevel').textContent = level;
      document.getElementById('uPoints').textContent = points;
      document.getElementById('uMsg').textContent = dev.speak();
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-strings-numbers",
      title: "النصوص والأرقام والرياضيات (Built-in Objects)",
      tags: ["نصوص", "أرقام", "math", "string methods", "template literals", "رياضيات"],
      icon: "🔢",
      description: "ميثودات معالجة النصوص، القوالب النصية Template Literals، ومكتبة الرياضيات Math",
      content: `
        <h2>معالجة النصوص والأرقام في JavaScript</h2>

        <h3>1. أهم ميثودات النصوص (String Methods)</h3>
        <table class="data-table">
          <tr><th>الميثود</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>length</code></td><td>خاصية تعطي عدد حروف النص</td><td><code>"كود".length // 3</code></td></tr>
          <tr><td><code>toUpperCase() / toLowerCase()</code></td><td>تحويل الحروف إلى كبيرة / صغيرة</td><td><code>"js".toUpperCase() // "JS"</code></td></tr>
          <tr><td><code>trim()</code></td><td>حذف المسافات الفارغة من بداية ونهاية النص</td><td><code>"  نص  ".trim() // "نص"</code></td></tr>
          <tr><td><code>includes(word)</code></td><td>فحص وجود كلمة في النص (true/false)</td><td><code>"تعلم js".includes("js")</code></td></tr>
          <tr><td><code>replace(a, b)</code></td><td>استبدال كلمة بأخرى</td><td><code>"أحب html".replace("html", "js")</code></td></tr>
          <tr><td><code>split(separator)</code></td><td>تقطيع النص إلى مصفوفة</td><td><code>"أ,ب,ج".split(",") // ["أ","ب","ج"]</code></td></tr>
          <tr><td><code>slice(start, end)</code></td><td>اقتطاع جزء محدد من النص</td><td><code>"JavaScript".slice(0, 4) // "Java"</code></td></tr>
        </table>

        <h3>2. القوالب النصية (Template Literals - ES6)</h3>
        <p>باستخدام علامة الباك تيك <code>\`...\`</code> يمكن دمج المتغيرات وكتابة نصوص على عدة أسطر بكل سهولة عبر <code>\${variable}</code>:</p>
        <div class="code-example">
          <pre><code class="lang-js">const user = "علي";
const count = 5;
console.log(\`مرحباً يا \${user}، لديك \${count} رسائل جديدة.\`);</code></pre>
        </div>

        <h3>3. كائن الرياضيات (Math Object)</h3>
        <div class="code-example">
          <pre><code class="lang-js">Math.round(4.7);   // 5 (تقريب لأقرب صحيح)
Math.floor(4.9);   // 4 (تقريب للأسفل دائماً)
Math.ceil(4.1);    // 5 (تقريب للأعلى دائماً)
Math.abs(-25);     // 25 (القيمة المطلقة الموجبة)
Math.min(5, 10, 2);// 2 (الأصغر)
Math.max(5, 10, 2);// 10 (الأكبر)
Math.random();     // رقم عشوائي بين 0 و 1 (مثلاً 0.7423)</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    input { width: 100%; box-sizing: border-box; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; margin-bottom: 12px; }
    button { background: #ec4899; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .out { background: #090d16; padding: 12px; border-radius: 8px; margin-top: 15px; text-align: right; font-size: 14px; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🔢 محلل النصوص ومولد الأرقام</h3>
    <input type="text" id="strIn" value="  أهلاً بك في عالم البرمجة مع JavaScript  ">
    <button onclick="analyze()">تحليل النص وتوليد رقم حظ</button>
    <div class="out" id="strRes">النتائج ستظهر هنا...</div>
  </div>

  <script>
    function analyze() {
      const original = document.getElementById('strIn').value;
      const clean = original.trim();
      const wordsCount = clean.split(' ').length;
      const luckyNumber = Math.floor(Math.random() * 100) + 1; // رقم عشوائي من 1 إلى 100

      document.getElementById('strRes').innerHTML = 
        '• الطول الأصلي (مع المسافات): <b>' + original.length + '</b><br>' +
        '• الطول بعد trim(): <b>' + clean.length + '</b><br>' +
        '• عدد الكلمات: <b>' + wordsCount + '</b><br>' +
        '• هل يحتوي كلمة "JavaScript"؟ <b>' + (clean.includes("JavaScript") ? "نعم ✅" : "لا ❌") + '</b><br>' +
        '• رقم الحظ العشوائي (Math.random): <b style="color:#facc15">' + luckyNumber + '</b>';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dates",
      title: "التاريخ والوقت (Date Object)",
      tags: ["تاريخ", "date", "time", "ساعة", "وقت", "توقيت"],
      icon: "⏰",
      description: "كائن التاريخ Date وحساب الأوقات والفروق الزمنية بالمللي ثانية",
      content: `
        <h2>كائن التاريخ والوقت في JavaScript</h2>
        <p>يُستخدم كائن <code>Date</code> للتعامل مع التواريخ والأوقات، ويقيس الوقت بالمللي ثانية منذ 1 يناير 1970 (Unix Epoch).</p>

        <h3>إنشاء كائن تاريخ</h3>
        <div class="code-example">
          <pre><code class="lang-js">const now = new Date(); // التاريخ والوقت الحالي تماماً
const specific = new Date("2025-01-01"); // تاريخ محدد
const byParts = new Date(2025, 0, 15, 10, 30); // سنة، شهر (0=يناير)، يوم، ساعة، دقيقة</code></pre>
        </div>

        <div class="warning-box">
          <strong>⚠️ تنبيه بخصوص الشهور:</strong> ترقيم الشهور في جافاسكريبت يبدأ من <strong>0</strong> (يناير = 0، ديسمبر = 11)، بينما الأيام تبدأ من 1!
        </div>

        <h3>أهم ميثودات جلب معلومات التاريخ (Getters)</h3>
        <table class="data-table">
          <tr><th>الميثود</th><th>القيمة المرجعة</th><th>المجال</th></tr>
          <tr><td><code>getFullYear()</code></td><td>السنة الحالية بـ 4 أرقام</td><td>مثال: 2025</td></tr>
          <tr><td><code>getMonth()</code></td><td>الشهر</td><td>0 إلى 11</td></tr>
          <tr><td><code>getDate()</code></td><td>يوم الشهر</td><td>1 إلى 31</td></tr>
          <tr><td><code>getDay()</code></td><td>يوم الأسبوع (0=الأحد)</td><td>0 إلى 6</td></tr>
          <tr><td><code>getHours()</code></td><td>الساعة</td><td>0 إلى 23</td></tr>
          <tr><td><code>getMinutes()</code></td><td>الدقائق</td><td>0 إلى 59</td></tr>
          <tr><td><code>getSeconds()</code></td><td>الثواني</td><td>0 إلى 59</td></tr>
          <tr><td><code>getTime()</code></td><td>المللي ثانية منذ 1970</td><td>رقم ضخم ممتاز للمقارنات</td></tr>
        </table>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .clock-card { max-width: 450px; margin: 0 auto; background: #1e293b; padding: 25px; border-radius: 16px; border: 1px solid #334155; }
    .digital-clock { font-size: 38px; font-weight: bold; color: #38bdf8; font-family: monospace; margin: 15px 0; background: #090d16; padding: 10px; border-radius: 8px; border: 1px solid #0284c7; }
    .date-str { color: #facc15; font-size: 16px; }
  </style>
</head>
<body>
  <div class="clock-card">
    <h3>⏰ ساعة حية متزامنة بالـ JavaScript</h3>
    <div class="digital-clock" id="liveClock">00:00:00</div>
    <div class="date-str" id="liveDate">تحميل التاريخ...</div>
  </div>

  <script>
    function updateClock() {
      const now = new Date();
      document.getElementById('liveClock').textContent = now.toLocaleTimeString('ar-EG');
      document.getElementById('liveDate').textContent = now.toLocaleDateString('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    updateClock();
    setInterval(updateClock, 1000); // تحديث كل ثانية
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-oop",
      title: "البرمجة كائنية التوجه (OOP & Classes)",
      tags: ["oop", "classes", "وراثة", "constructor", "extends", "super", "كلاسات"],
      icon: "🏗️",
      description: "البرمجة كائنية التوجه، الكلاسات (Classes)، المُنشئ Constructor، والوراثة (Inheritance)",
      content: `
        <h2>البرمجة كائنية التوجه (OOP) في JavaScript</h2>
        <p>البرمجة كائنية التوجه هي أسلوب برمجي لتنظيم الكود في قوالب تُدعى <strong>Classes (فئات)</strong>، يُنشأ منها كائنات متعددة تشترك في نفس الخصائص والوظائف.</p>

        <h3>1. تعريف الكلاس ودالة المُنشئ (Constructor)</h3>
        <div class="code-example">
          <pre><code class="lang-js">class Car {
  // دالة تُستدعى تلقائياً لحظة إنشاء كائن جديد
  constructor(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;
  }

  // ميثود خاصة بالسيارة
  accelerate() {
    this.speed += 10;
    return \`تسارعت \${this.brand} إلى \${this.speed} كم/س\`;
  }
}

// إنشاء كائنات جديدة (Instances)
const car1 = new Car("تويوتا", "أبيض", 80);
console.log(car1.accelerate()); // "تسارعت تويوتا إلى 90 كم/س"</code></pre>
        </div>

        <h3>2. الوراثة (Inheritance via <code>extends</code> & <code>super</code>)</h3>
        <p>تتيح لك فئة جديدة أن ترث كل خصائص وميثودات فئة رئيسية وتضيف عليها خصائصها الخاصة:</p>
        <div class="code-example">
          <pre><code class="lang-js">class ElectricCar extends Car {
  constructor(brand, color, speed, battery) {
    super(brand, color, speed); // استدعاء مُنشئ الفئة الأب (Car)
    this.battery = battery;
  }

  charge() {
    this.battery = 100;
    return "تم شحن البطارية بالكامل ⚡";
  }
}

const tesla = new ElectricCar("تسلا", "أحمر", 100, 85);
console.log(tesla.accelerate()); // ورثت ميثود التسارع من Car
console.log(tesla.charge());     // ميثود مخصصة للسيارات الكهربائية</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .btn-group { display: flex; gap: 8px; margin: 15px 0; }
    button { flex: 1; padding: 10px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-acc { background: #38bdf8; color: #0f172a; }
    .btn-brk { background: #ef4444; color: white; }
    .btn-chg { background: #22c55e; color: #0f172a; }
    .status { background: #090d16; padding: 15px; border-radius: 8px; border: 1px solid #334155; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🏗️ تجربة كلاس ElectricCar</h3>
    <div class="btn-group">
      <button class="btn-acc" onclick="tesla.accelerate()">+ زيادة السرعة</button>
      <button class="btn-brk" onclick="tesla.brake()">- فرامل</button>
      <button class="btn-chg" onclick="tesla.charge()">⚡ شحن البطارية</button>
    </div>
    <div class="status" id="carStatus">الحالة ستظهر هنا...</div>
  </div>

  <script>
    class Car {
      constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
      }
      accelerate() {
        this.speed += 15;
        this.updateUI();
      }
      brake() {
        this.speed = Math.max(0, this.speed - 15);
        this.updateUI();
      }
    }

    class ElectricCar extends Car {
      constructor(brand, speed, battery) {
        super(brand, speed);
        this.battery = battery;
      }
      charge() {
        this.battery = 100;
        this.updateUI();
      }
      updateUI() {
        document.getElementById('carStatus').innerHTML = 
          'السيارة: <b>' + this.brand + '</b><br>' +
          'السرعة الحالية: <strong style="color:#38bdf8">' + this.speed + ' كم/س</strong><br>' +
          'شحن البطارية: <strong style="color:#4ade80">' + this.battery + '%</strong>';
      }
    }

    const tesla = new ElectricCar("Tesla Model S", 0, 80);
    tesla.updateUI();
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-errors",
      title: "معالجة الأخطاء (Error Handling)",
      tags: ["أخطاء", "try catch", "throw", "finally", "error", "معالجة الأخطاء"],
      icon: "🛡️",
      description: "حماية التطبيق من الانهيار باستخدام try...catch...finally ورمي الأخطاء المخصصة",
      content: `
        <h2>معالجة الأخطاء في JavaScript</h2>
        <p>بدون معالجة الأخطاء، يؤدي حدوث أي خطأ برمجي غير متوقع إلى توقف التطبيق بالكامل وانهيار الصفحة. تتيح لنا بنية <code>try...catch</code> التقاط الخطأ والتعامل معه بذكاء دون إيقاف تشغيل البرنامج.</p>

        <h3>بنية <code>try...catch...finally</code></h3>
        <div class="code-example">
          <pre><code class="lang-js">try {
  // الكود المشكوك في إمكانية حدوث خطأ أثناء تنفيذه
  let result = riskyOperation();
} catch (error) {
  // يُنفذ فقط إذا حدث خطأ داخل كتلة try
  console.error("اسم الخطأ:", error.name);
  console.error("رسالة الخطأ:", error.message);
} finally {
  // يُنفذ دائماً وبلا استثناء سواء حدث خطأ أو نجح الكود!
  console.log("اكتملت العملية، إغلاق المؤشرات أو التحميل.");
}</code></pre>
        </div>

        <h3>رمي أخطاء مخصصة بواسطة <code>throw</code></h3>
        <p>يمكنك التحقق من شروطك ورمي خطأ مخصص إذا لم تتحقق المدخلات المطلوبة:</p>
        <div class="code-example">
          <pre><code class="lang-js">function withdraw(amount, balance) {
  if (amount > balance) {
    throw new Error("رصيدك غير كافٍ لإتمام عملية السحب!");
  }
  return balance - amount;
}</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    input { width: 100%; box-sizing: border-box; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; margin: 10px 0; }
    button { background: #f59e0b; color: #0f172a; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; }
    .msg { margin-top: 15px; padding: 12px; border-radius: 8px; font-size: 14px; display: none; }
    .success { background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #4ade80; }
    .error { background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #f87171; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🛡️ مدقق العمر والبيانات الآمن</h3>
    <label>أدخل عمرك للتسجيل (بين 18 و 100):</label>
    <input type="text" id="ageInput" placeholder="أدخل رقم...">
    <button onclick="validateAge()">فحص العمر مع try/catch</button>
    <div class="msg" id="msgBox"></div>
  </div>

  <script>
    function validateAge() {
      const val = document.getElementById('ageInput').value;
      const msg = document.getElementById('msgBox');
      msg.style.display = 'block';

      try {
        if (val.trim() === '') throw new Error('الحقل فارغ! يرجى إدخال عمرك.');
        const age = Number(val);
        if (isNaN(age)) throw new Error('القيمة المدخلة ليست رقماً صالحاً!');
        if (age < 18) throw new Error('عذراً، يجب أن يكون عمرك 18 سنة على الأقل.');
        if (age > 100) throw new Error('الرقم المدخل غير منطقي!');

        msg.className = 'msg success';
        msg.textContent = '✅ مرحباً بك! عمرك (' + age + ' سنة) مؤهل للتسجيل بنجاح.';
      } catch (err) {
        msg.className = 'msg error';
        msg.textContent = '❌ تم التقاط خطأ: ' + err.message;
      }
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dom-intro",
      title: "مقدمة الـ DOM واختيار العناصر",
      tags: ["dom", "selectors", "querySelector", "getElementById", "تحديد العناصر", "شجرة العناصر"],
      icon: "🌳",
      description: "ما هو Document Object Model، وكيف نحدد ونصل لأي عنصر في الصفحة",
      content: `
        <h2>ما هو الـ DOM (Document Object Model)؟</h2>
        <p>عندما يفتح المتصفح صفحة ويب، يقوم بتحويل كود الـ HTML بالكامل إلى شجرة من الكائنات البرمجية تُسمى <strong>DOM Tree</strong>. من خلال الـ DOM، تستطيع JavaScript الوصول إلى كل تاج، نص، خاصية، وتنسيق، والتحكم بها لحظياً استجابةً لتفاعل المستخدم.</p>

        <h3>طرق اختيار العناصر في JavaScript</h3>
        <table class="data-table">
          <tr><th>الميثود</th><th>طريقة التحديد</th><th>ما ترجعه</th></tr>
          <tr><td><code>document.getElementById("id")</code></td><td>عبر الـ ID المباشر</td><td>عنصر واحد فريد (أو <code>null</code>)</td></tr>
          <tr><td><code>document.querySelector("selector")</code></td><td>بأي محدد CSS (كلاس، id، تاج)</td><td><strong>أول عنصر يطابق فقط</strong> (الأكثر استخداماً)</td></tr>
          <tr><td><code>document.querySelectorAll("selector")</code></td><td>بأي محدد CSS</td><td><strong>مجموعة عناصر (NodeList)</strong> مطابقة</td></tr>
          <tr><td><code>document.getElementsByClassName("cls")</code></td><td>باسم الـ Class</td><td>HTMLCollection حيّة</td></tr>
        </table>

        <div class="info-box">
          <strong>💡 المعيار الحديث:</strong> يُفضل دائماً استخدام <strong><code>querySelector</code></strong> و <strong><code>querySelectorAll</code></strong> لأنهما يدعمان نفس محددات CSS القوية التي تستخدمها بالفعل (مثل <code>.class</code> أو <code>#id</code> أو <code>ul > li:first-child</code>).
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .items { display: flex; flex-direction: column; gap: 8px; margin: 15px 0; }
    .item { padding: 10px; background: #0f172a; border-radius: 6px; border: 1px solid #334155; transition: 0.3s; }
    .highlight { background: #6366f1 !important; border-color: #818cf8; transform: translateX(-5px); }
    .btns { display: flex; gap: 8px; flex-wrap: wrap; }
    button { flex: 1; padding: 10px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; background: #38bdf8; color: #0f172a; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🌳 اختبار محددات الـ DOM</h3>
    <div class="items">
      <div class="item" id="firstItem">العنصر الأول (#firstItem)</div>
      <div class="item card-special">العنصر الثاني (.card-special)</div>
      <div class="item card-special">العنصر الثالث (.card-special)</div>
    </div>
    <div class="btns">
      <button onclick="selectById()">تحديد بالـ ID</button>
      <button onclick="selectOneQuery()">تحديد أول كلاس (querySelector)</button>
      <button onclick="selectAllQuery()">تحديد كل الكلاسات (querySelectorAll)</button>
    </div>
  </div>

  <script>
    function clearHighlights() {
      document.querySelectorAll('.item').forEach(el => el.classList.remove('highlight'));
    }
    function selectById() {
      clearHighlights();
      document.getElementById('firstItem').classList.add('highlight');
    }
    function selectOneQuery() {
      clearHighlights();
      document.querySelector('.card-special').classList.add('highlight');
    }
    function selectAllQuery() {
      clearHighlights();
      document.querySelectorAll('.card-special').forEach(el => el.classList.add('highlight'));
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dom-content",
      title: "تعديل المحتوى والخصائص (DOM Content & Attributes)",
      tags: ["محتوى", "innerHTML", "textContent", "setAttribute", "getAttribute", "dataset", "خصائص"],
      icon: "✏️",
      description: "تغيير نصوص وصفحات HTML، والتحكم بخصائص التاجات كـ src و href و data-*",
      content: `
        <h2>تعديل المحتوى والخصائص في الـ DOM</h2>

        <h3>1. تعديل النصوص والمحتوى الداخلي</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف والسلوك</th><th>الأمان</th></tr>
          <tr><td><code>textContent</code></td><td>تغيير وقراءة النص الصافي فقط بدون تفسير أي تاجات</td><td>🛡️ آمن جداً ويمنع هجمات XSS</td></tr>
          <tr><td><code>innerHTML</code></td><td>قراءة وتعيين كود HTML بالكامل (تفسير التاجات)</td><td>⚠️ انتبه عند استخدامه مع مدخلات المستخدمين</td></tr>
        </table>

        <h3>2. التحكم بالخصائص (Attributes)</h3>
        <p>لقراءة وتعديل أي خاصية داخل تاج HTML (مثل <code>src</code> للصور، <code>href</code> للروابط، أو <code>disabled</code> للأزرار):</p>
        <div class="code-example">
          <pre><code class="lang-js">const link = document.querySelector("a");

// قراءة قيمة الخاصية
console.log(link.getAttribute("href"));

// تغيير قيمة الخاصية
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");

// فحص وجود الخاصية
if (link.hasAttribute("target")) {
  console.log("الرابط يفتح في صفحة جديدة");
}

// حذف الخاصية
link.removeAttribute("target");</code></pre>
        </div>

        <h3>3. خصائص البيانات المخصصة (Dataset - <code>data-*</code>)</h3>
        <p>تُتيح لك تخزين بيانات مخصصة داخل العنصر في HTML والوصول إليها عبر <code>element.dataset</code>:</p>
        <div class="code-example">
          <pre><code class="lang-html">&lt;button id="buyBtn" data-product-id="458" data-price="99"&gt;شراء&lt;/button&gt;</code></pre>
          <pre><code class="lang-js">const btn = document.getElementById("buyBtn");
console.log(btn.dataset.productId); // "458"
console.log(btn.dataset.price);     // "99"</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .preview-box { background: #0f172a; border: 2px dashed #475569; padding: 15px; border-radius: 8px; margin: 15px 0; min-height: 50px; }
    .btn-row { display: flex; gap: 8px; flex-wrap: wrap; }
    button { flex: 1; padding: 9px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; background: #facc15; color: #0f172a; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>✏️ اختبار textContent مقابل innerHTML</h3>
    <div class="preview-box" id="contentTarget">النص الابتدائي هنا</div>
    <div class="btn-row">
      <button onclick="setText()">تعيين بـ textContent</button>
      <button onclick="setHTML()">تعيين بـ innerHTML</button>
      <button onclick="toggleLinkAttr()">تغيير خصائص الرابط</button>
    </div>
    <p style="margin-top:15px"><a id="demoLink" href="#" style="color:#38bdf8">رابط تجريبي</a></p>
  </div>

  <script>
    function setText() {
      document.getElementById('contentTarget').textContent = '<b>هذا نص صافٍ: لن يتم تفعيل تاج b!</b>';
    }
    function setHTML() {
      document.getElementById('contentTarget').innerHTML = '<span style="color:#4ade80; font-size:18px">🔥 تم تفعيل كود HTML وتلوين النص بنجاح!</span>';
    }
    function toggleLinkAttr() {
      const link = document.getElementById('demoLink');
      link.setAttribute('href', 'https://w3schools.com');
      link.setAttribute('target', '_blank');
      link.textContent = 'رابط تم تغييره ليشير إلى W3Schools (يفتح في تبويب جديد)';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dom-styles",
      title: "تعديل التنسيقات والـ Classes (DOM Styles)",
      tags: ["css", "style", "classList", "add", "remove", "toggle", "تنسيق", "ستايل"],
      icon: "🎨",
      description: "التحكم بـ CSS عبر خاصية style وإضافة وحذف وتبديل الكلاسات عبر classList",
      content: `
        <h2>التحكم بتنسيقات CSS من خلال JavaScript</h2>
        <p>هناك طريقتان رئيسيتان لتغيير شكل وتصميم العناصر بالـ JS:</p>

        <h3>1. تعديل التنسيقات المباشرة (Inline Styles عبر <code>element.style</code>)</h3>
        <p>يتم كتابة أسماء خصائص الـ CSS بصيغة <strong>camelCase</strong> (مثلاً <code>background-color</code> تصبح <code>backgroundColor</code>):</p>
        <div class="code-example">
          <pre><code class="lang-js">const box = document.getElementById("box");
box.style.backgroundColor = "crimson";
box.style.fontSize = "22px";
box.style.borderRadius = "12px";
box.style.display = "none"; // لإخفاء العنصر</code></pre>
        </div>

        <h3>2. الطريقة الاحترافية: كائن <code>element.classList</code></h3>
        <p>بدلاً من كتابة خصائص CSS في كود JS، الأفضل هو تعريف كلاس في ملف الـ CSS والتحكم فيه عبر JS:</p>
        <table class="data-table">
          <tr><th>الميثود</th><th>المهمة</th></tr>
          <tr><td><code>classList.add("active")</code></td><td>إضافة كلاس جديد للعنصر</td></tr>
          <tr><td><code>classList.remove("active")</code></td><td>حذف كلاس من العنصر</td></tr>
          <tr><td><code>classList.toggle("active")</code></td><td>إذا كان الكلاس موجوداً يحذفه، وإن لم يكن موجوداً يضيفه! (ممتاز للأزرار والقوائم)</td></tr>
          <tr><td><code>classList.contains("active")</code></td><td>فحص هل العنصر يملك هذا الكلاس (ترجع true أو false)</td></tr>
        </table>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .interactive-box { width: 120px; height: 120px; margin: 20px auto; background: #38bdf8; border-radius: 12px; transition: all 0.4s ease; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #0f172a; }
    .is-circle { border-radius: 50% !important; }
    .is-active { background: #f43f5e !important; color: white !important; transform: scale(1.15) rotate(15deg); box-shadow: 0 10px 25px rgba(244,63,94,0.5); }
    .btn-row { display: flex; gap: 8px; }
    button { flex: 1; padding: 10px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; background: #6366f1; color: white; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🎨 التحكم بالكلاسات والتنسيقات</h3>
    <div class="interactive-box" id="demoBox">صندوق</div>
    <div class="btn-row">
      <button onclick="toggleCircle()">تبديل دائرة (toggle)</button>
      <button onclick="toggleActive()">تفعيل/إلغاء النشاط</button>
      <button onclick="randomColor()">لون عشوائي (style)</button>
    </div>
  </div>

  <script>
    const box = document.getElementById('demoBox');
    function toggleCircle() {
      box.classList.toggle('is-circle');
    }
    function toggleActive() {
      box.classList.toggle('is-active');
    }
    function randomColor() {
      const colors = ['#f59e0b', '#10b981', '#ec4899', '#8b5cf6', '#3b82f6'];
      const chosen = colors[Math.floor(Math.random() * colors.length)];
      box.style.backgroundColor = chosen;
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dom-elements",
      title: "إنشاء وحذف العناصر (Create & Remove Elements)",
      tags: ["عناصر", "createElement", "appendChild", "remove", "prepend", "إنشاء عناصر"],
      icon: "➕",
      description: "بناء عناصر جديدة من الصفر في الذاكرة وإدراجها أو إزالتها من الـ DOM ديناميكياً",
      content: `
        <h2>إنشاء وحذف العناصر برمجياً في الـ DOM</h2>
        <p>تتيح لك JavaScript إضافة وحذف أي عنصر في الصفحة ديناميكياً استجابةً لأفعال المستخدم (مثل إضافة مهمة في قائمة To-Do List).</p>

        <h3>1. خطوات إنشاء عنصر جديد</h3>
        <ol>
          <li>إنشاء العنصر بالذاكرة: <code>const el = document.createElement("tagName");</code></li>
          <li>إضافة النصوص أو الكلاسات له: <code>el.textContent = "نص"; el.className = "item";</code></li>
          <li>إدراجه في الصفحة داخل عنصر أب: <code>parent.appendChild(el);</code></li>
        </ol>

        <div class="code-example">
          <pre><code class="lang-js">// إنشاء عنصر فقرة جديدة
const p = document.createElement("p");
p.textContent = "هذه فقرة تمت إضافتها بالجافاسكريبت!";
p.classList.add("alert-box");

// إدراجها داخل الحاوية
const container = document.getElementById("myContainer");
container.appendChild(p);       // إدراج في نهاية الأب
// container.prepend(p);         // أو إدراج في بداية الأب</code></pre>
        </div>

        <h3>2. حذف العناصر من الصفحة</h3>
        <ul>
          <li><strong>حذف العنصر مباشرة (الأسلوب الحديث):</strong> <code>element.remove();</code></li>
          <li><strong>حذف ابن بواسطة الأب:</strong> <code>parent.removeChild(child);</code></li>
        </ul>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .input-row { display: flex; gap: 8px; margin-bottom: 15px; }
    input { flex: 1; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; }
    button { padding: 10px 16px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; background: #22c55e; color: #0f172a; }
    .todo-list { list-style: none; padding: 0; margin: 0; }
    .todo-item { display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 10px 14px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #334155; }
    .del-btn { background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>📝 تطبيق قائمة المهام (To-Do List)</h3>
    <div class="input-row">
      <input type="text" id="taskInput" placeholder="اكتب مهمة جديدة...">
      <button onclick="addTask()">إضافة مهمة</button>
    </div>
    <ul class="todo-list" id="tasksList"></ul>
  </div>

  <script>
    function addTask() {
      const input = document.getElementById('taskInput');
      const text = input.value.trim();
      if (!text) return;

      // 1. createElement
      const li = document.createElement('li');
      li.className = 'todo-item';

      const span = document.createElement('span');
      span.textContent = text;

      const delBtn = document.createElement('button');
      delBtn.className = 'del-btn';
      delBtn.textContent = 'حذف ✕';
      delBtn.onclick = function() {
        li.remove(); // حذف العنصر
      };

      li.appendChild(span);
      li.appendChild(delBtn);

      // 2. appendChild
      document.getElementById('tasksList').appendChild(li);
      input.value = '';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dom-traversal",
      title: "التنقل في شجرة الـ DOM (DOM Traversal)",
      tags: ["شجرة", "parent", "children", "siblings", "تنقل", "nextElementSibling"],
      icon: "🧭",
      description: "التنقل صعوداً وهبوطاً وجانبياً بين العناصر الآباء والأبناء والإخوة",
      content: `
        <h2>التنقل بين عناصر شجرة الـ DOM</h2>
        <p>لا تحتاج دائماً للبحث عن العنصر بواسطة كلاس أو آي دي؛ بل يمكنك التنقل من أي عنصر حالي إلى العنصر الأب أو الأبناء أو العناصر المجاورة (الإخوة) مباشرة.</p>

        <table class="data-table">
          <tr><th>الاتجاه</th><th>الخاصية</th><th>المعنى والوظيفة</th></tr>
          <tr><td>صعوداً (الأب)</td><td><code>element.parentElement</code></td><td>يرجع العنصر الأب المباشر</td></tr>
          <tr><td>صعوداً (أقرب سلف)</td><td><code>element.closest(".selector")</code></td><td>يبحث للأعلى عن أقرب عنصر يطابق محدد CSS</td></tr>
          <tr><td>هبوطاً (الأبناء)</td><td><code>element.children</code></td><td>مجموعة كل العناصر الأبناء المباشرين</td></tr>
          <tr><td>هبوطاً (أول/آخر ابن)</td><td><code>element.firstElementChild</code> / <code>lastElementChild</code></td><td>أول أو آخر عنصر ابن</td></tr>
          <tr><td>جانبياً (التالي)</td><td><code>element.nextElementSibling</code></td><td>العنصر الأخ التالي مباشرة</td></tr>
          <tr><td>جانبياً (السابق)</td><td><code>element.previousElementSibling</code></td><td>العنصر الأخ السابق مباشرة</td></tr>
        </table>

        <div class="info-box">
          <strong>💡 نصيحة احترافية:</strong> استخدم دائماً الخصائص التي تنتهي بكلمة <code>Element</code> (مثل <code>firstElementChild</code> وليس <code>firstChild</code>) لتتجاهل المسافات الفارغة والنصوص وتتعامل مع تاجات الـ HTML الحقيقية فقط.
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .tree-box { background: #0f172a; padding: 15px; border-radius: 8px; border: 1px solid #334155; margin-bottom: 15px; }
    .node { padding: 8px 12px; margin: 6px 0; background: #1e293b; border-radius: 6px; border: 1px solid #475569; }
    .current { border: 2px solid #facc15 !important; }
    .target { background: #38bdf8 !important; color: #0f172a !important; font-weight: bold; }
    .btns { display: flex; gap: 6px; flex-wrap: wrap; }
    button { flex: 1; padding: 8px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; background: #6366f1; color: white; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🧭 محاكي التنقل في الـ DOM</h3>
    <div class="tree-box" id="parentContainer">
      <div class="node" id="n1">1. الأخ الأول</div>
      <div class="node current" id="targetNode">2. العنصر الحالي (الأوسط) ⭐</div>
      <div class="node" id="n3">3. الأخ التالي</div>
    </div>
    <div class="btns">
      <button onclick="navParent()">العنصر الأب (parentElement)</button>
      <button onclick="navNext()">الأخ التالي (nextElementSibling)</button>
      <button onclick="navPrev()">الأخ السابق (previousElementSibling)</button>
      <button onclick="resetTree()">إعادة ضبط</button>
    </div>
  </div>

  <script>
    const current = document.getElementById('targetNode');
    function clearHighlight() {
      document.querySelectorAll('.node, .tree-box').forEach(el => el.classList.remove('target'));
    }
    function navParent() {
      clearHighlight();
      current.parentElement.classList.add('target');
    }
    function navNext() {
      clearHighlight();
      if (current.nextElementSibling) current.nextElementSibling.classList.add('target');
    }
    function navPrev() {
      clearHighlight();
      if (current.previousElementSibling) current.previousElementSibling.classList.add('target');
    }
    function resetTree() { clearHighlight(); }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-dom-events",
      title: "الأحداث ومستمعات الأحداث (DOM Events)",
      tags: ["أحداث", "events", "addEventListener", "click", "submit", "preventDefault", "stopPropagation"],
      icon: "🎯",
      description: "التفاعل مع المستخدم عبر addEventListener وأهم الأحداث كـ click و input و submit و منع السلوك الافتراضي",
      content: `
        <h2>الأحداث ومستمعات الأحداث (Events)</h2>
        <p>الحدث (Event) هو إشارة يُطلقها المتصفح عند قيام المستخدم بفعل معين (مثل النقر بالماوس، الكتابة في حقل، تحريك الفأرة، أو إرسال نموذج).</p>

        <h3>إضافة مستمع حدث (<code>addEventListener</code>)</h3>
        <div class="code-example">
          <pre><code class="lang-js">const btn = document.querySelector("#myBtn");

// element.addEventListener("event_type", callbackFunction);
btn.addEventListener("click", function(event) {
  console.log("تم النقر على الزر!");
  console.log("العنصر المنقور:", event.target);
});</code></pre>
        </div>

        <h3>أشهر أنواع الأحداث (Event Types)</h3>
        <table class="data-table">
          <tr><th>الفئة</th><th>الحدث</th><th>متى يحدث؟</th></tr>
          <tr><td>الماوس</td><td><code>click</code>, <code>dblclick</code>, <code>mouseenter</code>, <code>mouseleave</code></td><td>النقر والتحويم بالماوس</td></tr>
          <tr><td>لوحة المفاتيح</td><td><code>keydown</code>, <code>keyup</code></td><td>الضغط على أي زر في الكيبورد</td></tr>
          <tr><td>النماذج (Forms)</td><td><code>submit</code>, <code>input</code>, <code>change</code>, <code>focus</code>, <code>blur</code></td><td>إرسال النموذج أو الكتابة الفورية أو مغادرة الحقل</td></tr>
          <tr><td>المستند</td><td><code>DOMContentLoaded</code>, <code>scroll</code>, <code>resize</code></td><td>اكتمال تحميل الـ DOM أو التمرير أو تغيير أبعاد النافذة</td></tr>
        </table>

        <h3>مفاهيم جوهرية مع كائن الحدث (Event Object)</h3>
        <ul>
          <li><strong><code>event.preventDefault()</code>:</strong> يمنع السلوك الافتراضي للمتصفح (مثل منع تحديث الصفحة عند إرسال الـ Form أو منع الرابط من الانتقال).</li>
          <li><strong><code>event.stopPropagation()</code>:</strong> يمنع صعود الحدث للعناصر الآباء (Event Bubbling).</li>
        </ul>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    input { width: 100%; box-sizing: border-box; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; margin-bottom: 12px; }
    .live-mirror { background: #090d16; padding: 12px; border-radius: 8px; color: #38bdf8; min-height: 24px; font-weight: bold; margin-bottom: 15px; }
    button { background: #10b981; color: #0f172a; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🎯 معمل الأحداث الحي (Event Listeners)</h3>
    <form id="testForm">
      <label>حدث الكتابة المباشر (input event):</label>
      <input type="text" id="liveInput" placeholder="اكتب أي شيء هنا وسينعكس فوراً...">
      <div class="live-mirror" id="mirrorBox">ما تكتبه سيظهر هنا في اللحظة...</div>
      <button type="submit">إرسال النموذج (submit event)</button>
    </form>
  </div>

  <script>
    const input = document.getElementById('liveInput');
    const mirror = document.getElementById('mirrorBox');
    const form = document.getElementById('testForm');

    // 1. حدث الكتابة اللحظي
    input.addEventListener('input', function(e) {
      mirror.textContent = e.target.value || 'ما تكتبه سيظهر هنا في اللحظة...';
    });

    // 2. حدث الإرسال مع preventDefault
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // منع الصفحة من إعادة التحميل!
      alert('🚀 تم استقبال إرسال النموذج بنجاح بدون إعادة تحميل الصفحة! القيمة: ' + input.value);
    });
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-bom-window-timers",
      title: "كائن النافذة والمؤقتات (BOM Window & Timers)",
      tags: ["bom", "window", "setTimeout", "setInterval", "مؤقتات", "timers", "clearTimeout"],
      icon: "🪟",
      description: "كائن window العام، أبعاد النافذة، والمؤقتات الزمنية setTimeout و setInterval",
      content: `
        <h2>ما هو الـ BOM (Browser Object Model)؟</h2>
        <p>الـ <strong>BOM</strong> هو نموذج كائنات المتصفح؛ وهو يُمثل كل ما يحيط بصفحة الويب من أدوات يوفرها المتصفح نفسه (كشريط العناوين، السجل، الشاشة، التخزين المحلي، والتوقيت). الكائن الرئيسي في الـ BOM هو <strong><code>window</code></strong>، وهو الكائن العام الشامل (Global Object) في بيئة المتصفح.</p>

        <h3>أهم خصائص وميثودات كائن <code>window</code></h3>
        <ul>
          <li><code>window.innerWidth</code> / <code>window.innerHeight</code>: العرض والارتفاع الداخلي لمساحة الرؤية (Viewport) بالبكسل.</li>
          <li><code>window.scrollTo({ top: 0, behavior: 'smooth' })</code>: التمرير السلس إلى أعلى الصفحة.</li>
          <li><code>window.open(url)</code> / <code>window.close()</code>: فتح وإغلاق النوافذ والتبويبات.</li>
        </ul>

        <h3>المؤقتات الزمنية في JavaScript (Timers)</h3>
        <table class="data-table">
          <tr><th>المؤقت</th><th>آلية العمل</th><th>دالة الإيقاف والإلغاء</th></tr>
          <tr><td><code>setTimeout(callback, delayMs)</code></td><td>تنفيذ الكود <strong>مرة واحدة فقط</strong> بعد مرور عدد معين من المللي ثانية</td><td><code>clearTimeout(timerId)</code></td></tr>
          <tr><td><code>setInterval(callback, delayMs)</code></td><td>تنفيذ الكود <strong>بشكل متكرر دورياً</strong> كل فترة زمنية محددة</td><td><code>clearInterval(intervalId)</code></td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-js">// تشغيل بعد 3 ثوانٍ مرة واحدة
const timer = setTimeout(() => {
  console.log("مرت 3 ثوانٍ!");
}, 3000);

// إلغاء المؤقت قبل تنفيذه
clearTimeout(timer);

// تشغيل متكرر كل ثانية
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("ثانية: " + count);
  if (count === 5) clearInterval(interval); // إيقاف عند الوصول لـ 5
}, 1000);</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .stopwatch { font-size: 44px; font-weight: bold; color: #facc15; font-family: monospace; margin: 15px 0; }
    .btns { display: flex; gap: 8px; justify-content: center; }
    button { padding: 10px 18px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 14px; }
    .btn-start { background: #22c55e; color: #0f172a; }
    .btn-stop { background: #ef4444; color: white; }
    .btn-reset { background: #64748b; color: white; }
  </style>
</head>
<body>
  <div class="card">
    <h3>⏱️ ساعة إيقاف بدقة (setInterval)</h3>
    <div class="stopwatch" id="watchDisplay">0.0 ثانية</div>
    <div class="btns">
      <button class="btn-start" onclick="startTimer()">بدء (setInterval)</button>
      <button class="btn-stop" onclick="stopTimer()">إيقاف (clearInterval)</button>
      <button class="btn-reset" onclick="resetTimer()">تصفير</button>
    </div>
  </div>

  <script>
    let timerId = null;
    let tenths = 0;

    function startTimer() {
      if (timerId !== null) return;
      timerId = setInterval(() => {
        tenths++;
        document.getElementById('watchDisplay').textContent = (tenths / 10).toFixed(1) + ' ثانية';
      }, 100);
    }
    function stopTimer() {
      clearInterval(timerId);
      timerId = null;
    }
    function resetTimer() {
      stopTimer();
      tenths = 0;
      document.getElementById('watchDisplay').textContent = '0.0 ثانية';
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-bom-screen-location",
      title: "الروابط والشاشة والسجل (Location & History & Screen)",
      tags: ["location", "history", "screen", "url", "bom", "إعادة التوجيه", "شاشة"],
      icon: "🌐",
      description: "التحكم في عنوان URL وإعادة التوجيه، سجل التصفح، وأبعاد شاشة جهاز المستخدم",
      content: `
        <h2>كائنات BOM: Location و History و Screen</h2>

        <h3>1. كائن <code>window.location</code> (عنوان الصفحة والروابط)</h3>
        <p>يمنحك السيطرة الكاملة على رابط الصفحة الحالية وإمكانية إعادة توجيه الزائر:</p>
        <div class="code-example">
          <pre><code class="lang-js">// قراءة أجزاء الرابط
console.log(location.href);     // الرابط الكامل
console.log(location.hostname); // اسم النطاق مثل "example.com"
console.log(location.pathname); // المسار بعد النطاق مثل "/products"
console.log(location.search);   // معلمات البحث بعد علامة الاستفهام مثل "?id=5"

// إعادة توجيه المستخدم لصفحة أخرى
// location.href = "https://google.com";

// إعادة تحميل الصفحة
// location.reload();</code></pre>
        </div>

        <h3>2. كائن <code>window.history</code> (سجل التصفح)</h3>
        <p>التحكم في التنقل بين الصفحات التي زارها المستخدم في نفس التبويب:</p>
        <div class="code-example">
          <pre><code class="lang-js">history.back();    // الرجوع صفحة للخلف (مثل زر الرجوع بالمتصفح)
history.forward(); // التقدم صفحة للأمام
history.go(-2);    // الرجوع صفحتين للوراء</code></pre>
        </div>

        <h3>3. كائن <code>window.screen</code> (شاشة الجهاز)</h3>
        <p>يعطيك معلومات عن دقة شاشة العرض الفعلية لجهاز المستخدم:</p>
        <ul>
          <li><code>screen.width</code> / <code>screen.height</code>: العرض والارتفاع الكامل لشاشة الجهاز بالبكسل.</li>
          <li><code>screen.availWidth</code> / <code>screen.availHeight</code>: المساحة المتاحة بعد خصم شريط مهام نظام التشغيل.</li>
        </ul>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .info-list { background: #090d16; padding: 15px; border-radius: 8px; border: 1px solid #334155; line-height: 2; font-size: 14px; font-family: monospace; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🌐 بيانات كائنات Location و Screen</h3>
    <div class="info-list" id="infoBox">جاري القراءة من المتصفح...</div>
  </div>

  <script>
    document.getElementById('infoBox').innerHTML = 
      '• بروتوكول الرابط: <b style="color:#38bdf8">' + location.protocol + '</b><br>' +
      '• اسم المضيف (Host): <b style="color:#38bdf8">' + (location.host || "بيئة محلية/iframe") + '</b><br>' +
      '• أبعاد مساحة الرؤية: <b style="color:#facc15">' + window.innerWidth + ' × ' + window.innerHeight + ' px</b><br>' +
      '• دقة شاشة جهازك الفعلية: <b style="color:#4ade80">' + screen.width + ' × ' + screen.height + ' px</b><br>' +
      '• عمق الألوان: <b style="color:#ec4899">' + screen.colorDepth + ' bit</b>';
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-bom-navigator",
      title: "معلومات المتصفح وإمكانياته (Navigator Object)",
      tags: ["navigator", "متصفح", "clipboard", "online", "geolocation", "الحافظة"],
      icon: "🧭",
      description: "كائن navigator لفحص حالة الاتصال بالإنترنت والنسخ للحافظة وتحديد موقع المستخدم",
      content: `
        <h2>كائن <code>window.navigator</code></h2>
        <p>يحتوي كائن <code>navigator</code> على معلومات شاملة حول المتصفح ونظام التشغيل وإمكانيات الجهاز الحديثة (Web APIs).</p>

        <h3>أهم استخدامات Navigator العملية</h3>
        <table class="data-table">
          <tr><th>الخاصية / الـ API</th><th>المهمة والاستخدام</th></tr>
          <tr><td><code>navigator.onLine</code></td><td>معرفة هل المستخدم متصل حالياً بالإنترنت (true/false)</td></tr>
          <tr><td><code>navigator.userAgent</code></td><td>نص يوضح نوع المتصفح وإصداره ونظام التشغيل</td></tr>
          <tr><td><code>navigator.language</code></td><td>لغة المتصفح الأساسية (مثل "ar" أو "en-US")</td></tr>
          <tr><td><code>navigator.clipboard.writeText(text)</code></td><td>نسخ أي نص تلقائياً لحافظة الجهاز (Clipboard API)</td></tr>
          <tr><td><code>navigator.geolocation</code></td><td>تحديد الموقع الجغرافي (GPS) بعد موافقة المستخدم</td></tr>
        </table>

        <h3>النسخ للحافظة الحديث (Clipboard API)</h3>
        <div class="code-example">
          <pre><code class="lang-js">async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("تم النسخ بنجاح للحافظة! 📋");
  } catch (err) {
    console.error("فشل النسخ:", err);
  }
}</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .status-badge { display: inline-block; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 13px; margin: 10px 0; }
    .online { background: rgba(34,197,94,0.2); color: #4ade80; border: 1px solid #22c55e; }
    .copy-box { display: flex; gap: 8px; margin-top: 15px; }
    input { flex: 1; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🧭 فاحص Navigator والنسخ للحافظة</h3>
    <div>حالة الاتصال بالإنترنت:</div>
    <div class="status-badge online" id="netStatus">متصل بالإنترنت ✅</div>
    
    <div style="margin-top:15px; font-size:14px">تجربة النسخ للحافظة (Clipboard API):</div>
    <div class="copy-box">
      <input type="text" id="copyInput" value="كود خصم سري: CODEDEV2025">
      <button onclick="doCopy()" id="copyBtn">📋 نسخ الكود</button>
    </div>
  </div>

  <script>
    // فحص الاتصال
    function updateNet() {
      const isOnline = navigator.onLine;
      const el = document.getElementById('netStatus');
      el.textContent = isOnline ? 'متصل بالإنترنت ✅' : 'غير متصل بالإنترنت ❌';
      el.className = 'status-badge ' + (isOnline ? 'online' : 'offline');
    }
    window.addEventListener('online', updateNet);
    window.addEventListener('offline', updateNet);
    updateNet();

    // النسخ للحافظة
    function doCopy() {
      const text = document.getElementById('copyInput').value;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBtn');
        btn.textContent = '✅ تم النسخ!';
        btn.style.background = '#22c55e';
        setTimeout(() => {
          btn.textContent = '📋 نسخ الكود';
          btn.style.background = '#38bdf8';
        }, 2000);
      });
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-bom-storage",
      title: "التخزين المحلي والجلسات (Web Storage)",
      tags: ["تخزين", "storage", "localStorage", "sessionStorage", "json", "حفظ البيانات"],
      icon: "💾",
      description: "حفظ بيانات المستخدم في المتصفح عبر localStorage و sessionStorage والتعامل مع JSON",
      content: `
        <h2>التخزين المحلي (Web Storage API)</h2>
        <p>تتيح لك تقنية Web Storage حفظ البيانات في متصفح المستخدم دون الحاجة لقاعدة بيانات خلفية، وتستمر حتى لو أغلق المتصفح.</p>

        <h3>مقارنة بين LocalStorage و SessionStorage</h3>
        <table class="data-table">
          <tr><th>نوع التخزين</th><th>مدة بقاء البيانات</th><th>المساحة التخزينية</th><th>النطاق</th></tr>
          <tr><td><code>localStorage</code></td><td><strong>دائمة للأبد</strong> حتى يحذفها المستخدم أو الكود</td><td>حوالي 5 إلى 10 ميجابايت</td><td>مشتركة بين كل تبويبات الموقع</td></tr>
          <tr><td><code>sessionStorage</code></td><td><strong>مؤقتة</strong> تُحذف فور إغلاق التبويب الحالي</td><td>حوالي 5 ميجابايت</td><td>خاصة بالتبويب المفتوح فقط</td></tr>
        </table>

        <h3>الميثودات الأربعة الأساسية لـ Storage</h3>
        <div class="code-example">
          <pre><code class="lang-js">// 1. حفظ قيمة (مفتاح وقيمة كنصوص)
localStorage.setItem("theme", "dark");

// 2. قراءة القيمة
const currentTheme = localStorage.getItem("theme"); // "dark"

// 3. حذف مفتاح محدد
localStorage.removeItem("theme");

// 4. مسح كل البيانات المخزنة للموقع
localStorage.clear();</code></pre>
        </div>

        <h3>تخزين المصفوفات والكائنات عبر JSON</h3>
        <div class="warning-box">
          <strong>⚠️ تنبيه فائق الأهمية:</strong> LocalStorage لا تخزن إلا <strong>نصوصاً (Strings)</strong> فقط! إذا حاولت تخزين كائن أو مصفوفة مباشرة فستتحول إلى <code>[object Object]</code>. لحل ذلك نستخدم دائمًا <code>JSON.stringify()</code> عند الحفظ و <code>JSON.parse()</code> عند القراءة:
        </div>
        <div class="code-example">
          <pre><code class="lang-js">const userSettings = { volume: 80, theme: "dark" };

// حفظ كائن: تحويله لنص JSON
localStorage.setItem("settings", JSON.stringify(userSettings));

// استرجاع الكائن: تحويل النص لكائن JavaScript حقيقي
const saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.volume); // 80</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    input { width: 100%; box-sizing: border-box; padding: 10px; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 6px; margin: 10px 0; }
    .btns { display: flex; gap: 8px; }
    button { flex: 1; padding: 10px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-save { background: #22c55e; color: #0f172a; }
    .btn-clear { background: #ef4444; color: white; }
    .display { background: #090d16; padding: 14px; border-radius: 8px; margin-top: 15px; border-right: 4px solid #38bdf8; font-size: 15px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>💾 تجربة LocalStorage الحية</h3>
    <label>اكتب اسمك ليتم حفظه حتى بعد إغلاق الصفحة:</label>
    <input type="text" id="storageNameInput" placeholder="اكتب اسمك...">
    <div class="btns">
      <button class="btn-save" onclick="saveName()">حفظ في LocalStorage</button>
      <button class="btn-clear" onclick="clearName()">مسح التخزين</button>
    </div>
    <div class="display" id="storageDisplay">جاري فحص الذاكرة...</div>
  </div>

  <script>
    function loadName() {
      const saved = localStorage.getItem('demo_username');
      const box = document.getElementById('storageDisplay');
      if (saved) {
        box.innerHTML = 'مرحباً بعودتك يا <strong style="color:#facc15">' + saved + '</strong>! (تم جلب الاسم من LocalStorage)';
      } else {
        box.textContent = 'لا توجد بيانات محفوظة بعد.';
      }
    }
    function saveName() {
      const val = document.getElementById('storageNameInput').value.trim();
      if (val) {
        localStorage.setItem('demo_username', val);
        loadName();
      }
    }
    function clearName() {
      localStorage.removeItem('demo_username');
      document.getElementById('storageNameInput').value = '';
      loadName();
    }
    loadName();
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-async-promises",
      title: "البرمجة غير المتزامنة والـ Promises",
      tags: ["async", "promises", "then", "catch", "callbacks", "وعد", "غير متزامن"],
      icon: "⏳",
      description: "مفهوم Synchronous مقابل Asynchronous، حل مشكلة Callback Hell، وكائن الـ Promise",
      content: `
        <h2>البرمجة غير المتزامنة والـ Promises</h2>
        <p>جافاسكريبت لغة أحادية المسار (Single-Threaded)، أي أنها تنفذ أمراً واحداً في كل لحظة. العمليات الثقيلة (مثل طلب بيانات من السيرفر أو قراءة ملف) لو نُفذت بشكل متزامن (Synchronous) فستجعل المتصفح <strong>يتجمد تماماً</strong>! لحل ذلك، نستخدم العمليات غير المتزامنة (Asynchronous).</p>

        <h3>ما هو الـ Promise (الوعد)؟</h3>
        <p>الـ <strong>Promise</strong> هو كائن يمثل نتيجة مستقبلية لعملية غير متزامنة، وله 3 حالات:</p>
        <ul>
          <li><strong>Pending (معلق):</strong> العملية ما زالت جارية ولم تكتمل بعد.</li>
          <li><strong>Fulfilled / Resolved (تم بنجاح):</strong> نجحت العملية وتم الحصول على البيانات عبر <code>.then()</code>.</li>
          <li><strong>Rejected (فشل):</strong> حدث خطأ وتم التقاطه عبر <code>.catch()</code>.</li>
        </ul>

        <h3>بنية إنشاء واستخدام الـ Promise</h3>
        <div class="code-example">
          <pre><code class="lang-js">// إنشاء الوعد
const fetchData = new Promise((resolve, reject) => {
  let isSuccess = true;

  setTimeout(() => {
    if (isSuccess) {
      resolve("بيانات المستخدم وصلت بنجاح ✅");
    } else {
      reject("حدث خطأ في الخادم ❌");
    }
  }, 2000);
});

// استهلاك الوعد
fetchData
  .then(data => {
    console.log(data); // "بيانات المستخدم وصلت بنجاح ✅"
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("اكتملت العملية سواء نجحت أو فشلت.");
  });</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { max-width: 480px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    button { background: #6366f1; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px; margin-top: 10px; }
    .status-card { margin-top: 15px; padding: 15px; border-radius: 8px; background: #090d16; border: 1px solid #334155; font-family: monospace; min-height: 50px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>⏳ محاكي الـ Promise والطلبات البعيدة</h3>
    <p>اضغط لبدء عملية استرجاع وهمية تستغرق ثانيتين:</p>
    <button onclick="simulatePromise()" id="pBtn">بدء تشغيل الـ Promise</button>
    <div class="status-card" id="promiseOutput">جاهز للبدء...</div>
  </div>

  <script>
    function simulatePromise() {
      const out = document.getElementById('promiseOutput');
      const btn = document.getElementById('pBtn');
      btn.disabled = true;
      out.innerHTML = '⏳ [الحالة: Pending] جاري الاتصال بالخادم... انتظر 2 ثانية';

      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const ok = Math.random() > 0.3; // فرصة 70% للنجاح
          if (ok) resolve("🎉 تم استلام البيانات بنجاح: { status: 200, user: 'أحمد' }");
          else reject("⚠️ فشل الاتصال: كود 500 خطأ في السيرفر");
        }, 2000);
      });

      myPromise
        .then(res => {
          out.innerHTML = '<span style="color:#4ade80">' + res + '</span>';
        })
        .catch(err => {
          out.innerHTML = '<span style="color:#ef4444">' + err + '</span>';
        })
        .finally(() => {
          btn.disabled = false;
        });
    }
  </script>
</body>
</html>`
      }
    },
    {
      id: "js-async-fetch",
      title: "الـ Async/Await و Fetch API",
      tags: ["async await", "fetch", "api", "json", "طلبات الشبكة", "خادم", "ajax"],
      icon: "🚀",
      description: "الكتابة الحديثة والمنظمة عبر async/await وجلب البيانات الحقيقية من الـ APIs بواسطة Fetch",
      content: `
        <h2>الـ Async / Await و Fetch API</h2>
        <p>جاءت <strong><code>async / await</code></strong> في ES2017 لتجعل كتابة الكود غير المتزامن تبدو وكأنها كود متزامن عادي وبسيط، مما جعل قراءة ومعالجة البيانات أسهل وأنظف بكثير من <code>.then()</code>.</p>

        <h3>1. قواعد <code>async</code> و <code>await</code></h3>
        <ul>
          <li><strong><code>async</code>:</strong> كلمة تُوضع قبل الدالة لتجعلها ترجع Promise تلقائياً.</li>
          <li><strong><code>await</code>:</strong> كلمة تُوضع فقط داخل دوال <code>async</code> قبل أي Promise لتنتظر انتهاءه وحصوله على القيمة قبل الانتقال للسطر التالي.</li>
        </ul>

        <h3>2. جلب البيانات باستخدام <code>fetch()</code></h3>
        <p>دالة مدمجة في المتصفح لإرسال طلبات الشبكة (HTTP Requests) واستقبال البيانات بتنسيق JSON:</p>
        <div class="code-example">
          <pre><code class="lang-js">async function loadUser() {
  try {
    // 1. إرسال الطلب والانتظار حتى يجيب السيرفر
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    
    // التحقق من نجاح الاستجابة (status 200-299)
    if (!response.ok) {
      throw new Error(\`خطأ في الخادم: \${response.status}\`);
    }

    // 2. فك تشفير استجابة الـ JSON
    const data = await response.json();
    console.log("اسم المستخدم:", data.name);
    console.log("البريد:", data.email);
  } catch (error) {
    console.error("فشل جلب البيانات:", error.message);
  }
}</code></pre>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; font-size: 14px; }
    .post-box { background: #0f172a; padding: 15px; border-radius: 8px; margin-top: 15px; border-right: 4px solid #38bdf8; min-height: 80px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🚀 جلب مقال حقيقي بـ Fetch و Async/Await</h3>
    <button onclick="fetchPost()" id="fBtn">جلب مقال عشوائي عبر API</button>
    <div class="post-box" id="postRes">اضغط على الزر لجلب البيانات مباشرة عبر الإنترنت...</div>
  </div>

  <script>
    async function fetchPost() {
      const box = document.getElementById('postRes');
      const btn = document.getElementById('fBtn');
      btn.disabled = true;
      box.innerHTML = '⏳ جاري الاتصال بـ jsonplaceholder.typicode.com...';

      try {
        const randomId = Math.floor(Math.random() * 20) + 1;
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + randomId);
        if (!res.ok) throw new Error('فشل الاستجابة: ' + res.status);
        const data = await res.json();

        box.innerHTML = 
          '<div style="font-size:12px; color:#94a3b8">رقم المقال: #' + data.id + '</div>' +
          '<h4 style="color:#facc15; margin:6px 0">' + data.title + '</h4>' +
          '<p style="color:#cbd5e1; font-size:13px; margin:0">' + data.body + '</p>';
      } catch (err) {
        box.innerHTML = '<span style="color:#ef4444">❌ تعذر الاتصال أو حدث خطأ: ' + err.message + '</span>';
      } finally {
        btn.disabled = false;
      }
    }
  </script>
</body>
</html>`
      }
    }
  ]
};
