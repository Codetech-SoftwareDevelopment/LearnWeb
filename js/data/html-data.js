const HTML_DATA = {
  category: "HTML",
  icon: "🌐",
  description: "لغة ترميز النص التشعبي - اللغة الأساسية لبناء صفحات الويب",
  topics: [
    {
      id: "html-intro",
      title: "مقدمة في HTML",
      tags: ["مقدمة", "أساسيات", "intro"],
      icon: "📖",
      description: "ما هو HTML وكيف يعمل",
      content: `
        <h2>ما هو HTML؟</h2>
        <p><strong>HTML</strong> (HyperText Markup Language) هي لغة ترميز تُستخدم لإنشاء وتنظيم محتوى صفحات الويب. تخبر المتصفح كيف يعرض النصوص والصور والروابط وغيرها من العناصر.</p>
        
        <div class="info-box">
          <strong>💡 معلومة:</strong> HTML ليست لغة برمجة، بل هي لغة <em>ترميز</em> — تصف هيكل المحتوى وليس السلوك.
        </div>

        <h3>مكونات HTML الأساسية</h3>
        <ul>
          <li><strong>العناصر (Elements):</strong> وحدات البناء الأساسية مثل &lt;p&gt;, &lt;h1&gt;, &lt;div&gt;</li>
          <li><strong>التاجات (Tags):</strong> تُغلف المحتوى بين تاج فتح وتاج إغلاق</li>
          <li><strong>الخصائص (Attributes):</strong> معلومات إضافية داخل التاج مثل class, id, src</li>
        </ul>

        <h3>هيكل صفحة HTML أساسية</h3>
        <div class="code-example">
          <pre><code class="lang-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ar"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;عنوان الصفحة&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;مرحبا بالعالم!&lt;/h1&gt;
    &lt;p&gt;هذه فقرة نصية.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه HTML مش لغة برمجة، وإيه الفرق الجوهري بينها وبين لغات البرمجة الحقيقية؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأنها لغة ترميز وتوصيف (Markup Language) مفيهاش منطق برمجي (Logic) ولا شروط (if/else) ولا حلقات تكرار (loops) ولا عمليات حسابية؛ وظيفتها فقط هيكلة وتوصيف المحتوى للمتصفح عشان يعرف ده عنوان ولا فقرة ولا صورة.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>أول صفحة</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 20px; background: #f0f4ff; }
    h1 { color: #1a73e8; }
    p { color: #555; font-size: 18px; }
    .box { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: inline-block; }
  </style>
</head>
<body>
  <div class="box">
    <h1>🌍 مرحبا بالعالم!</h1>
    <p>هذه أول صفحة HTML</p>
    <p><em>تعلم HTML خطوة بخطوة</em></p>
  </div>
</body>
</html>`
      }
    },
    {
      id: "html-headings",
      title: "العناوين - Headings",
      tags: ["h1", "h2", "h3", "h4", "h5", "h6", "عناوين", "headings"],
      icon: "📰",
      description: "تاجات العناوين من h1 إلى h6",
      content: `
        <h2>العناوين في HTML</h2>
        <p>HTML يوفر 6 مستويات من العناوين من <code>&lt;h1&gt;</code> (الأكبر والأهم) إلى <code>&lt;h6&gt;</code> (الأصغر).</p>

        <div class="info-box">
          <strong>⚠️ مهم لـ SEO:</strong> استخدم <code>&lt;h1&gt;</code> مرة واحدة فقط في الصفحة كعنوان رئيسي.
        </div>

        <h3>التاجات المتاحة</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>الاستخدام</th><th>الأهمية</th></tr>
          <tr><td><code>&lt;h1&gt;</code></td><td>العنوان الرئيسي</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td><code>&lt;h2&gt;</code></td><td>عناوين الأقسام</td><td>⭐⭐⭐⭐</td></tr>
          <tr><td><code>&lt;h3&gt;</code></td><td>عناوين فرعية</td><td>⭐⭐⭐</td></tr>
          <tr><td><code>&lt;h4&gt;</code></td><td>عناوين أصغر</td><td>⭐⭐</td></tr>
          <tr><td><code>&lt;h5&gt;</code></td><td>نادر الاستخدام</td><td>⭐</td></tr>
          <tr><td><code>&lt;h6&gt;</code></td><td>الأصغر</td><td>⭐</td></tr>
        </table>

        <h3>مثال على الكود</h3>
        <div class="code-example">
          <pre><code class="lang-html">&lt;h1&gt;عنوان من المستوى الأول&lt;/h1&gt;
&lt;h2&gt;عنوان من المستوى الثاني&lt;/h2&gt;
&lt;h3&gt;عنوان من المستوى الثالث&lt;/h3&gt;
&lt;h4&gt;عنوان من المستوى الرابع&lt;/h4&gt;
&lt;h5&gt;عنوان من المستوى الخامس&lt;/h5&gt;
&lt;h6&gt;عنوان من المستوى السادس&lt;/h6&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه مينفعش نكرر تاج &lt;h1&gt; أكتر من مرة في الصفحة الواحدة؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأن محركات البحث (SEO) وقارئات الشاشة للمكفوفين (Screen Readers) بتعتبر &lt;h1&gt; هو العنوان الرئيسي الأوحد اللي بيعبر عن محتوى الصفحة كلها. تكراره بيشتت خوارزميات جوجل ويضعف ترتيب الصفحة في نتائج البحث.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; background: #f8f9fa; direction: rtl; }
    h1 { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 8px; }
    h2 { color: #0d47a1; }
    h3 { color: #1565c0; }
    h4 { color: #1976d2; }
    h5 { color: #42a5f5; }
    h6 { color: #90caf9; }
    .sizes { font-size: 11px; color: #999; }
  </style>
</head>
<body>
  <h1>h1 - العنوان الرئيسي (أكبر حجم)</h1>
  <h2>h2 - عنوان القسم</h2>
  <h3>h3 - عنوان فرعي</h3>
  <h4>h4 - عنوان أصغر</h4>
  <h5>h5 - عنوان مصغر</h5>
  <h6>h6 - أصغر عنوان</h6>
</body>
</html>`
      }
    },
    {
      id: "html-paragraphs",
      title: "الفقرات - Paragraphs",
      tags: ["p", "فقرات", "paragraphs", "br", "hr"],
      icon: "📝",
      description: "تاج الفقرة p وعناصر النص الأساسية",
      content: `
        <h2>الفقرات في HTML</h2>
        <p>تاج <code>&lt;p&gt;</code> يُستخدم لتعريف فقرة نصية. المتصفح يضيف تلقائياً هامشاً قبل وبعد كل فقرة.</p>

        <h3>العناصر المرتبطة</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>الوصف</th></tr>
          <tr><td><code>&lt;p&gt;</code></td><td>فقرة نصية</td></tr>
          <tr><td><code>&lt;br&gt;</code></td><td>سطر جديد (بدون إغلاق)</td></tr>
          <tr><td><code>&lt;hr&gt;</code></td><td>خط فاصل أفقي</td></tr>
          <tr><td><code>&lt;pre&gt;</code></td><td>نص منسق مسبقاً (يحتفظ بالمسافات)</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;p&gt;هذه فقرة نصية عادية.&lt;/p&gt;

&lt;p&gt;هذه فقرة بها&lt;br&gt;سطر جديد في المنتصف.&lt;/p&gt;

&lt;hr&gt;

&lt;p&gt;فقرة بعد الخط الفاصل.&lt;/p&gt;

&lt;pre&gt;
  هذا النص
    يحتفظ   بالمسافات
&lt;/pre&gt;</code></pre>
        </div>

        <div class="warning-box">
          <strong>⚠️ تنبيه:</strong> المتصفح يتجاهل المسافات الزائدة والأسطر الجديدة داخل <code>&lt;p&gt;</code>. استخدم <code>&lt;br&gt;</code> لفرض سطر جديد.
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه الفرق بين إنك تحط نصوص جوة &lt;p&gt; أو تحطها جوة &lt;div&gt; مع &lt;br&gt;؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> تاج &lt;p&gt; عنصر دلالي (Semantic) بيعرف المتصفح إن دي فقرة نصية مستقلة وبيديها هوامش (Margin) طبيعية من فوق وتحت ويسهل قراءتها لأدوات الـ Accessibility، بينما &lt;div&gt; و &lt;br&gt; عناصر غير دلالية مخصصة للتقسيم ولا تعطي أي معنى لغوياً.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f8f9fa; }
    p { font-size: 16px; line-height: 1.8; color: #333; background: white; padding: 10px 15px; border-radius: 8px; margin-bottom: 10px; }
    hr { border: none; border-top: 2px solid #1a73e8; margin: 20px 0; }
    pre { background: #1e1e1e; color: #4fc3f7; padding: 15px; border-radius: 8px; font-size: 14px; }
  </style>
</head>
<body>
  <p>هذه فقرة نصية عادية بها محتوى مهم وملفت للانتباه.</p>
  <p>هذه فقرة بها سطر جديد<br>🔹 هنا بدأ السطر الجديد بعد br</p>
  <hr>
  <p>فقرة ظهرت بعد الخط الفاصل ↑</p>
  <pre>  هذا نص منسق مسبقاً
    يحتفظ   بكل المسافات
      والأسطر الجديدة
  باستخدام تاج pre</pre>
</body>
</html>`
      }
    },
    {
      id: "html-links",
      title: "الروابط - Links",
      tags: ["a", "href", "روابط", "links", "target", "anchor"],
      icon: "🔗",
      description: "إنشاء الروابط والتنقل بين الصفحات",
      content: `
        <h2>الروابط في HTML</h2>
        <p>تاج <code>&lt;a&gt;</code> (anchor) يُستخدم لإنشاء روابط تشعبية للتنقل بين الصفحات أو المواقع.</p>

        <h3>الخصائص الأساسية</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>href</code></td><td>عنوان URL للرابط</td><td><code>href="https://example.com"</code></td></tr>
          <tr><td><code>target</code></td><td>كيفية فتح الرابط</td><td><code>target="_blank"</code></td></tr>
          <tr><td><code>title</code></td><td>نص يظهر عند التمرير</td><td><code>title="وصف الرابط"</code></td></tr>
          <tr><td><code>download</code></td><td>تحميل الملف بدل فتحه</td><td><code>download="file.pdf"</code></td></tr>
        </table>

        <h3>قيم target</h3>
        <table class="data-table">
          <tr><th>القيمة</th><th>الوصف</th></tr>
          <tr><td><code>_blank</code></td><td>فتح في تبويب جديد</td></tr>
          <tr><td><code>_self</code></td><td>فتح في نفس التبويب (افتراضي)</td></tr>
          <tr><td><code>_parent</code></td><td>فتح في الإطار الأب</td></tr>
          <tr><td><code>_top</code></td><td>فتح في النافذة الكاملة</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- رابط خارجي --&gt;
&lt;a href="https://google.com" target="_blank"&gt;اذهب إلى جوجل&lt;/a&gt;

&lt;!-- رابط داخلي --&gt;
&lt;a href="about.html"&gt;صفحة عنّا&lt;/a&gt;

&lt;!-- رابط بريد إلكتروني --&gt;
&lt;a href="mailto:info@example.com"&gt;راسلنا&lt;/a&gt;

&lt;!-- رابط هاتف --&gt;
&lt;a href="tel:+201234567890"&gt;اتصل بنا&lt;/a&gt;

&lt;!-- رابط للقسم في نفس الصفحة --&gt;
&lt;a href="#section1"&gt;اذهب للقسم الأول&lt;/a&gt;
&lt;div id="section1"&gt;هنا القسم الأول&lt;/div&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه الثغرة الأمنية الخطيرة لما تستخدم target='_blank' وإزاي تحمي موقعك منها؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الصفحة الجديدة اللي اتفتحت بتقدر توصل للصفحة الأصلية وتتحكم فيها عبر كائن window.opener (ثغرة Tabnabbing). الحماية الحتمية هي إضافة: rel='noopener noreferrer' عشان تمنع أي تواصل أمني خبيث بين الصفحتين.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    .link-card { background: white; border-radius: 10px; padding: 15px; margin: 10px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    a { display: inline-block; padding: 8px 16px; background: #1a73e8; color: white; text-decoration: none; border-radius: 6px; margin: 5px; transition: all 0.3s; }
    a:hover { background: #0d47a1; transform: translateY(-2px); }
    a.email { background: #34a853; }
    a.phone { background: #ea4335; }
    a.section-link { background: #fbbc04; color: #333; }
    .section { background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 20px; border-right: 4px solid #34a853; }
  </style>
</head>
<body>
  <div class="link-card">
    <strong>رابط خارجي:</strong><br>
    <a href="https://google.com" target="_blank">🔗 افتح جوجل في تبويب جديد</a>
  </div>
  <div class="link-card">
    <strong>رابط بريد وهاتف:</strong><br>
    <a class="email" href="mailto:info@example.com">📧 راسلنا</a>
    <a class="phone" href="tel:+201234567890">📞 اتصل بنا</a>
  </div>
  <div class="link-card">
    <strong>رابط لقسم:</strong><br>
    <a class="section-link" href="#mysection">⬇️ اذهب للقسم</a>
  </div>
  <div id="mysection" class="section">
    <h3>📍 وصلت للقسم!</h3>
    <p>هذا هو القسم الذي يشير إليه الرابط بالـ id.</p>
  </div>
</body>
</html>`
      }
    },
    {
      id: "html-images",
      title: "الصور - Images",
      tags: ["img", "src", "alt", "صور", "images", "width", "height"],
      icon: "🖼️",
      description: "إضافة وتنسيق الصور في HTML",
      content: `
        <h2>الصور في HTML</h2>
        <p>تاج <code>&lt;img&gt;</code> يُستخدم لعرض الصور. هو تاج ذاتي الإغلاق (لا يحتاج تاج إغلاق).</p>

        <h3>الخصائص الأساسية</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>src</code></td><td>مسار أو URL الصورة</td><td><code>src="photo.jpg"</code></td></tr>
          <tr><td><code>alt</code></td><td>نص بديل (مهم للـ SEO)</td><td><code>alt="وصف الصورة"</code></td></tr>
          <tr><td><code>width</code></td><td>عرض الصورة</td><td><code>width="300"</code></td></tr>
          <tr><td><code>height</code></td><td>ارتفاع الصورة</td><td><code>height="200"</code></td></tr>
          <tr><td><code>loading</code></td><td>تحميل كسول</td><td><code>loading="lazy"</code></td></tr>
          <tr><td><code>title</code></td><td>تلميح عند التمرير</td><td><code>title="وصف"</code></td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- صورة من ملف محلي --&gt;
&lt;img src="photo.jpg" alt="صورة جميلة" width="300"&gt;

&lt;!-- صورة من الإنترنت --&gt;
&lt;img src="https://example.com/image.png" alt="شعار" loading="lazy"&gt;

&lt;!-- صورة مع رابط --&gt;
&lt;a href="https://example.com"&gt;
  &lt;img src="logo.png" alt="الشعار" width="100"&gt;
&lt;/a&gt;

&lt;!-- صورة responsive --&gt;
&lt;img src="photo.jpg" alt="صورة" style="max-width:100%; height:auto;"&gt;</code></pre>
        </div>

        <div class="info-box">
          <strong>💡 نصيحة:</strong> دائماً أضف خاصية <code>alt</code> للصور. تساعد محركات البحث وتُستخدم عند فشل تحميل الصورة وللمكفوفين.
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه خاصية alt في تاج &lt;img&gt; إجبارية في معايير الويب العالمية، وإيه الفرق بينها وبين title؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> خاصية alt هي النص البديل اللي بيتقرأ للمكفوفين عبر قارئات الشاشة وبيظهر لو الصورة منزلتش، وهو أساسي في الـ SEO. بينما title هو مجرد تلميح (Tooltip) بيظهر لما المستخدم يقف بالماوس على الصورة ولا يغني أبداً عن alt.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    .img-card { background: white; border-radius: 12px; padding: 15px; margin: 10px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: inline-block; }
    img { border-radius: 8px; display: block; }
    .broken { background: #ffe0e0; border: 2px dashed #ea4335; border-radius: 8px; padding: 15px; color: #ea4335; display: inline-block; }
    h3 { color: #1a73e8; }
  </style>
</head>
<body>
  <h3>صورة من الإنترنت:</h3>
  <div class="img-card">
    <img src="https://picsum.photos/300/150?random=1" alt="صورة عشوائية جميلة" width="300">
    <p style="margin:5px 0 0; color:#666; font-size:13px;">alt="صورة عشوائية جميلة"</p>
  </div>
  
  <br>
  <h3>عند فشل تحميل الصورة يظهر الـ alt:</h3>
  <div class="broken">
    🖼️ [صورة مكسورة - الـ alt="صورة غير موجودة"]
  </div>
  
  <br>
  <h3>صورة مع رابط:</h3>
  <div class="img-card">
    <a href="https://picsum.photos" target="_blank">
      <img src="https://picsum.photos/300/100?random=5" alt="اضغط للذهاب للموقع" width="300">
    </a>
    <p style="margin:5px 0 0; color:#666; font-size:13px;">اضغط على الصورة - هي رابط!</p>
  </div>
</body>
</html>`
      }
    },
    {
      id: "html-lists",
      title: "القوائم - Lists",
      tags: ["ul", "ol", "li", "dl", "قوائم", "lists", "nested"],
      icon: "📋",
      description: "القوائم المرتبة وغير المرتبة والقوائم التعريفية",
      content: `
        <h2>القوائم في HTML</h2>
        <p>HTML يوفر ثلاثة أنواع من القوائم لتنظيم العناصر.</p>

        <h3>أنواع القوائم</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>النوع</th><th>الاستخدام</th></tr>
          <tr><td><code>&lt;ul&gt;</code></td><td>قائمة غير مرتبة</td><td>عناصر لا ترتيب لها (نقاط ●)</td></tr>
          <tr><td><code>&lt;ol&gt;</code></td><td>قائمة مرتبة</td><td>عناصر لها ترتيب (1, 2, 3...)</td></tr>
          <tr><td><code>&lt;dl&gt;</code></td><td>قائمة تعريفية</td><td>مصطلحات وتعريفاتها</td></tr>
          <tr><td><code>&lt;li&gt;</code></td><td>عنصر قائمة</td><td>يُستخدم داخل ul أو ol</td></tr>
        </table>

        <h3>خصائص ol المهمة</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>القيم</th></tr>
          <tr><td><code>type</code></td><td>1, A, a, I, i (نوع الترقيم)</td></tr>
          <tr><td><code>start</code></td><td>رقم البداية مثل start="5"</td></tr>
          <tr><td><code>reversed</code></td><td>عكس الترتيب</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- قائمة غير مرتبة --&gt;
&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- قائمة مرتبة --&gt;
&lt;ol type="A" start="1"&gt;
  &lt;li&gt;الخطوة الأولى&lt;/li&gt;
  &lt;li&gt;الخطوة الثانية&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- قائمة متداخلة --&gt;
&lt;ul&gt;
  &lt;li&gt;الفاكهة
    &lt;ul&gt;
      &lt;li&gt;تفاح&lt;/li&gt;
      &lt;li&gt;موز&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إمتى تستخدم &lt;ul&gt; وإمتى &lt;ol&gt;، وإيه هي القوائم الوصفية &lt;dl&gt;؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> بنستخدم &lt;ol&gt; لما يكون ترتيب الخطوات فارق (زي وصفة طبخ أو خطوات دفع)، و &lt;ul&gt; لما الترتيب ميكونش فارق (زي قائمة مميزات أو شريط تنقل). أما &lt;dl&gt; (Description List) فبتستخدم للمصطلحات وتعريفاتها عبر &lt;dt&gt; للمصطلح و &lt;dd&gt; للشرح.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    .card { background: white; border-radius: 10px; padding: 15px 20px; margin: 10px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    h3 { color: #1a73e8; margin: 0 0 10px; }
    ul, ol { margin: 5px 0; padding-right: 20px; }
    li { padding: 3px 0; color: #444; }
    ul li::marker { color: #1a73e8; font-size: 1.2em; }
    ol li::marker { color: #ea4335; font-weight: bold; }
    dt { font-weight: bold; color: #1a73e8; margin-top: 8px; }
    dd { color: #555; margin-right: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>📌 قائمة غير مرتبة (ul)</h3>
    <ul>
      <li>HTML - هيكل الصفحة</li>
      <li>CSS - التصميم والألوان</li>
      <li>JavaScript - التفاعل والحركة</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>🔢 قائمة مرتبة (ol)</h3>
    <ol>
      <li>تعلم HTML الأساسيات</li>
      <li>تعلم CSS التصميم</li>
      <li>تعلم JavaScript البرمجة</li>
      <li>ابن مشاريعك الأولى</li>
    </ol>
  </div>
  
  <div class="card">
    <h3>📖 قائمة متداخلة</h3>
    <ul>
      <li>الفاكهة 🍎
        <ul>
          <li>تفاح</li>
          <li>موز</li>
          <li>برتقال</li>
        </ul>
      </li>
      <li>الخضار 🥦
        <ul>
          <li>خيار</li>
          <li>طماطم</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="card">
    <h3>📚 قائمة تعريفية (dl)</h3>
    <dl>
      <dt>HTML</dt>
      <dd>لغة ترميز النص التشعبي</dd>
      <dt>CSS</dt>
      <dd>أوراق الأنماط المتتالية للتصميم</dd>
      <dt>API</dt>
      <dd>واجهة برمجة التطبيقات</dd>
    </dl>
  </div>
</body>
</html>`
      }
    },
    {
      id: "html-tables",
      title: "الجداول - Tables",
      tags: ["table", "tr", "td", "th", "thead", "tbody", "tfoot", "جداول", "tables", "colspan", "rowspan"],
      icon: "📊",
      description: "إنشاء وتنسيق الجداول في HTML",
      content: `
        <h2>الجداول في HTML</h2>
        <p>الجداول تُستخدم لعرض البيانات بشكل منظم في صفوف وأعمدة.</p>

        <h3>تاجات الجداول</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>الوصف</th></tr>
          <tr><td><code>&lt;table&gt;</code></td><td>يُعرّف الجدول</td></tr>
          <tr><td><code>&lt;thead&gt;</code></td><td>مجموعة رأس الجدول</td></tr>
          <tr><td><code>&lt;tbody&gt;</code></td><td>مجموعة جسم الجدول</td></tr>
          <tr><td><code>&lt;tfoot&gt;</code></td><td>مجموعة تذييل الجدول</td></tr>
          <tr><td><code>&lt;tr&gt;</code></td><td>صف في الجدول</td></tr>
          <tr><td><code>&lt;th&gt;</code></td><td>خلية رأس (بالخط العريض)</td></tr>
          <tr><td><code>&lt;td&gt;</code></td><td>خلية بيانات عادية</td></tr>
          <tr><td><code>&lt;caption&gt;</code></td><td>عنوان الجدول</td></tr>
        </table>

        <h3>دمج الخلايا</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>colspan</code></td><td>دمج أعمدة</td><td><code>colspan="2"</code></td></tr>
          <tr><td><code>rowspan</code></td><td>دمج صفوف</td><td><code>rowspan="3"</code></td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;table border="1"&gt;
  &lt;caption&gt;بيانات الطلاب&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;الاسم&lt;/th&gt;
      &lt;th&gt;المادة&lt;/th&gt;
      &lt;th&gt;الدرجة&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;أحمد&lt;/td&gt;
      &lt;td&gt;رياضيات&lt;/td&gt;
      &lt;td&gt;95&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;إجمالي&lt;/td&gt;
      &lt;td&gt;95&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه كان تصميم المواقع بالجداول زمان (Table-based layout) كارثة وتم حظرها في معايير الويب الحديثة؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأنها بتدمر معايير الـ Accessibility، وبتبطئ تحميل الصفحة جداً، وصعبة جداً في عمل الـ Responsive Design للموبايل، وتخالف مبدأ فصل المحتوى (HTML) عن الشكل والتنسيق (CSS).</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    table { width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    caption { font-size: 18px; font-weight: bold; color: #1a73e8; margin-bottom: 10px; }
    th { background: #1a73e8; color: white; padding: 12px; text-align: right; }
    td { padding: 10px 12px; border-bottom: 1px solid #e0e0e0; color: #444; }
    tr:last-child td { border-bottom: none; }
    tr:hover td { background: #f0f7ff; }
    .total { background: #e8f5e9; font-weight: bold; }
    .grade-high { color: #34a853; font-weight: bold; }
    .grade-mid { color: #fbbc04; font-weight: bold; }
  </style>
</head>
<body>
  <table>
    <caption>📊 نتائج الطلاب - الفصل الأول</caption>
    <thead>
      <tr>
        <th>الاسم</th>
        <th>الرياضيات</th>
        <th>العلوم</th>
        <th>العربي</th>
        <th>المجموع</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>أحمد محمد</td>
        <td class="grade-high">95</td>
        <td class="grade-high">88</td>
        <td class="grade-high">92</td>
        <td class="grade-high">275</td>
      </tr>
      <tr>
        <td>سارة علي</td>
        <td class="grade-high">78</td>
        <td class="grade-mid">70</td>
        <td class="grade-high">85</td>
        <td class="grade-mid">233</td>
      </tr>
      <tr>
        <td>محمود حسن</td>
        <td class="grade-mid">65</td>
        <td class="grade-high">90</td>
        <td class="grade-mid">72</td>
        <td class="grade-mid">227</td>
      </tr>
      <tr class="total">
        <td colspan="4">📈 متوسط الفصل</td>
        <td>245</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
      }
    },
    {
      id: "html-forms",
      title: "النماذج - Forms",
      tags: ["form", "input", "button", "select", "textarea", "label", "نماذج", "forms", "action", "method"],
      icon: "📋",
      description: "إنشاء نماذج HTML لجمع بيانات المستخدم",
      content: `
        <h2>النماذج في HTML</h2>
        <p>النماذج تُستخدم لجمع البيانات من المستخدمين وإرسالها للخادم.</p>

        <h3>تاجات النماذج الأساسية</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>الوصف</th></tr>
          <tr><td><code>&lt;form&gt;</code></td><td>يُعرّف النموذج</td></tr>
          <tr><td><code>&lt;input&gt;</code></td><td>حقل إدخال (أنواع متعددة)</td></tr>
          <tr><td><code>&lt;label&gt;</code></td><td>تسمية لحقل الإدخال</td></tr>
          <tr><td><code>&lt;textarea&gt;</code></td><td>منطقة نص متعدد الأسطر</td></tr>
          <tr><td><code>&lt;select&gt;</code></td><td>قائمة منسدلة</td></tr>
          <tr><td><code>&lt;option&gt;</code></td><td>خيار في القائمة المنسدلة</td></tr>
          <tr><td><code>&lt;button&gt;</code></td><td>زر</td></tr>
          <tr><td><code>&lt;fieldset&gt;</code></td><td>تجميع عناصر النموذج</td></tr>
        </table>

        <h3>أنواع input</h3>
        <table class="data-table">
          <tr><th>النوع</th><th>الوصف</th></tr>
          <tr><td><code>text</code></td><td>نص عادي</td></tr>
          <tr><td><code>password</code></td><td>كلمة مرور (مخفية)</td></tr>
          <tr><td><code>email</code></td><td>بريد إلكتروني</td></tr>
          <tr><td><code>number</code></td><td>أرقام فقط</td></tr>
          <tr><td><code>date</code></td><td>تاريخ</td></tr>
          <tr><td><code>checkbox</code></td><td>خانة اختيار</td></tr>
          <tr><td><code>radio</code></td><td>اختيار واحد من متعدد</td></tr>
          <tr><td><code>file</code></td><td>رفع ملف</td></tr>
          <tr><td><code>range</code></td><td>شريط تمرير</td></tr>
          <tr><td><code>color</code></td><td>اختيار لون</td></tr>
          <tr><td><code>submit</code></td><td>زر إرسال</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;form action="/submit" method="POST"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;معلومات شخصية&lt;/legend&gt;
    
    &lt;label for="name"&gt;الاسم:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" placeholder="أدخل اسمك" required&gt;
    
    &lt;label for="email"&gt;البريد:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;label&gt;الجنس:&lt;/label&gt;
    &lt;input type="radio" name="gender" value="male"&gt; ذكر
    &lt;input type="radio" name="gender" value="female"&gt; أنثى
    
    &lt;label for="country"&gt;الدولة:&lt;/label&gt;
    &lt;select id="country" name="country"&gt;
      &lt;option value="eg"&gt;مصر&lt;/option&gt;
      &lt;option value="sa"&gt;السعودية&lt;/option&gt;
    &lt;/select&gt;
    
    &lt;button type="submit"&gt;إرسال&lt;/button&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق الجوهري بين إرسال الفورم بطريقة GET وبطريقة POST؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> طريقة GET بتبعت البيانات مكشوفة في شريط الرابط (URL Query Params) ولها حد أقصى للحجم وبتتحفظ في الـ History (تستخدم للبحث والفلترة). أما POST فتبعت البيانات داخل جسم الطلب (Request Body) مشفرة ومحمية وبدون حد أقصى (تستخدم لتسجيل الدخول والبيانات الحساسة).</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    form { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 450px; margin: auto; }
    h2 { color: #1a73e8; text-align: center; margin-bottom: 20px; }
    .form-group { margin-bottom: 15px; }
    label { display: block; color: #555; font-size: 14px; margin-bottom: 5px; font-weight: 500; }
    input[type="text"], input[type="email"], input[type="password"], select, textarea {
      width: 100%; padding: 10px 12px; border: 2px solid #e0e0e0; border-radius: 8px;
      font-size: 14px; transition: border 0.3s; box-sizing: border-box;
    }
    input:focus, select:focus, textarea:focus { outline: none; border-color: #1a73e8; }
    .radio-group { display: flex; gap: 20px; }
    .radio-group label { display: flex; align-items: center; gap: 5px; cursor: pointer; }
    input[type="range"] { width: 100%; }
    button { width: 100%; padding: 12px; background: #1a73e8; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: all 0.3s; margin-top: 10px; }
    button:hover { background: #0d47a1; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(26,115,232,0.4); }
  </style>
</head>
<body>
  <form>
    <h2>📝 نموذج التسجيل</h2>
    <div class="form-group">
      <label>👤 الاسم الكامل:</label>
      <input type="text" placeholder="أدخل اسمك الكامل">
    </div>
    <div class="form-group">
      <label>📧 البريد الإلكتروني:</label>
      <input type="email" placeholder="example@email.com">
    </div>
    <div class="form-group">
      <label>🔒 كلمة المرور:</label>
      <input type="password" placeholder="••••••••">
    </div>
    <div class="form-group">
      <label>🌍 الدولة:</label>
      <select>
        <option>مصر 🇪🇬</option>
        <option>السعودية 🇸🇦</option>
        <option>الإمارات 🇦🇪</option>
        <option>الأردن 🇯🇴</option>
      </select>
    </div>
    <div class="form-group">
      <label>الجنس:</label>
      <div class="radio-group">
        <label><input type="radio" name="g" value="m"> ذكر</label>
        <label><input type="radio" name="g" value="f"> أنثى</label>
      </div>
    </div>
    <div class="form-group">
      <label>📊 مستوى الخبرة: <span id="rangeVal">5</span>/10</label>
      <input type="range" min="1" max="10" value="5" oninput="document.getElementById('rangeVal').textContent=this.value">
    </div>
    <div class="form-group">
      <label>💬 نبذة عنك:</label>
      <textarea rows="3" placeholder="اكتب نبذة مختصرة عنك..."></textarea>
    </div>
    <button type="submit">🚀 إنشاء الحساب</button>
  </form>
</body>
</html>`
      }
    },
    {
      id: "html-semantic",
      title: "العناصر الدلالية - Semantic HTML",
      tags: ["header", "nav", "main", "footer", "section", "article", "aside", "figure", "دلالي", "semantic"],
      icon: "🏗️",
      description: "العناصر الدلالية لهيكل الصفحة بشكل صحيح",
      content: `
        <h2>العناصر الدلالية في HTML5</h2>
        <p>العناصر الدلالية تُخبر المتصفح ومحركات البحث بمعنى المحتوى، مما يحسن الـ SEO وإمكانية الوصول.</p>

        <h3>العناصر الدلالية الرئيسية</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>الوصف</th></tr>
          <tr><td><code>&lt;header&gt;</code></td><td>رأس الصفحة أو القسم</td></tr>
          <tr><td><code>&lt;nav&gt;</code></td><td>شريط التنقل والروابط</td></tr>
          <tr><td><code>&lt;main&gt;</code></td><td>المحتوى الرئيسي للصفحة</td></tr>
          <tr><td><code>&lt;section&gt;</code></td><td>قسم مستقل من المحتوى</td></tr>
          <tr><td><code>&lt;article&gt;</code></td><td>محتوى مستقل (مقال، تدوينة)</td></tr>
          <tr><td><code>&lt;aside&gt;</code></td><td>محتوى جانبي (sidebar)</td></tr>
          <tr><td><code>&lt;footer&gt;</code></td><td>تذييل الصفحة</td></tr>
          <tr><td><code>&lt;figure&gt;</code></td><td>صورة أو رسم مع تعليق</td></tr>
          <tr><td><code>&lt;figcaption&gt;</code></td><td>تعليق على الصورة</td></tr>
          <tr><td><code>&lt;time&gt;</code></td><td>تاريخ أو وقت</td></tr>
          <tr><td><code>&lt;mark&gt;</code></td><td>نص مميز/مظلل</td></tr>
          <tr><td><code>&lt;details&gt;</code></td><td>محتوى قابل للطي</td></tr>
          <tr><td><code>&lt;summary&gt;</code></td><td>عنوان عنصر details</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;a href="/"&gt;الرئيسية&lt;/a&gt;
      &lt;a href="/about"&gt;عنّا&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;section&gt;
      &lt;article&gt;
        &lt;h2&gt;عنوان المقال&lt;/h2&gt;
        &lt;time datetime="2025-01-01"&gt;1 يناير 2025&lt;/time&gt;
        &lt;p&gt;محتوى المقال...&lt;/p&gt;
        &lt;figure&gt;
          &lt;img src="img.jpg" alt="صورة"&gt;
          &lt;figcaption&gt;وصف الصورة&lt;/figcaption&gt;
        &lt;/figure&gt;
      &lt;/article&gt;
    &lt;/section&gt;
    &lt;aside&gt;محتوى جانبي&lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2025 شركتي&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ليه التاجات الدلالية (Semantic HTML5) زي &lt;article&gt; و &lt;section&gt; أهم بمليون مرة من الـ &lt;div&gt;؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأنها بتشرح بوضوح معنى المحتوى للمتصفح، ولمحركات البحث (SEO Ranking)، ولقارئات الشاشة لذوي الهمم. استخدام Semantic Tags بيخلي كودك نظيف وسهل الصيانة وقابل للأرشفة السريعة في جوجل.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial; direction: rtl; background: #f0f4ff; font-size: 14px; }
    header { background: #1a73e8; color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
    header h1 { font-size: 18px; }
    nav a { color: rgba(255,255,255,0.85); text-decoration: none; margin-right: 15px; transition: color 0.3s; }
    nav a:hover { color: white; }
    .container { display: flex; gap: 15px; padding: 15px; max-width: 800px; margin: auto; }
    main { flex: 1; }
    article { background: white; border-radius: 10px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    article h2 { color: #1a73e8; font-size: 16px; margin-bottom: 8px; }
    time { font-size: 12px; color: #999; display: block; margin-bottom: 8px; }
    figure { margin-top: 10px; }
    figure img { width: 100%; border-radius: 8px; height: 120px; object-fit: cover; }
    figcaption { font-size: 12px; color: #777; text-align: center; margin-top: 5px; }
    aside { width: 180px; }
    .aside-card { background: white; border-radius: 10px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 10px; }
    .aside-card h3 { font-size: 13px; color: #1a73e8; margin-bottom: 8px; }
    .tag { display: inline-block; background: #e8f4ff; color: #1a73e8; padding: 3px 8px; border-radius: 4px; font-size: 11px; margin: 2px; }
    mark { background: #fff176; padding: 0 3px; border-radius: 3px; }
    details { background: #f8f9fa; border-radius: 6px; padding: 8px 12px; margin-top: 8px; }
    summary { cursor: pointer; font-weight: bold; color: #1a73e8; font-size: 13px; }
    footer { background: #1e1e2e; color: #aaa; text-align: center; padding: 12px; font-size: 13px; }
  </style>
</head>
<body>
  <header>
    <h1>🌐 موقعي</h1>
    <nav>
      <a href="#">الرئيسية</a>
      <a href="#">المقالات</a>
      <a href="#">عنّا</a>
    </nav>
  </header>
  
  <div class="container">
    <main>
      <article>
        <h2>🚀 تعلم HTML في أسبوع</h2>
        <time datetime="2025-01-15">15 يناير 2025</time>
        <p>HTML هي اللبنة الأساسية لأي موقع ويب. تعلمها بشكل صحيح يضمن لك أساساً قوياً في تطوير الويب. <mark>الأساسيات مهمة جداً</mark> قبل الانتقال للمتقدم.</p>
        <figure>
          <img src="https://picsum.photos/400/120?random=10" alt="تعلم البرمجة">
          <figcaption>📸 رحلة تعلم البرمجة</figcaption>
        </figure>
        <details>
          <summary>قراءة المزيد...</summary>
          <p style="margin-top:8px;color:#555;">ابدأ بتعلم HTML ثم CSS ثم JavaScript لتكون مطور ويب محترف!</p>
        </details>
      </article>
    </main>
    
    <aside>
      <div class="aside-card">
        <h3>🏷️ الوسوم</h3>
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">JS</span>
        <span class="tag">ويب</span>
      </div>
      <div class="aside-card">
        <h3>📌 روابط مهمة</h3>
        <p style="font-size:12px;color:#555;line-height:1.8;">
          • MDN Docs<br>
          • W3Schools<br>
          • CSS Tricks
        </p>
      </div>
    </aside>
  </div>
  
  <footer>
    <p>© 2025 موقعي - جميع الحقوق محفوظة</p>
  </footer>
</body>
</html>`
      }
    },
    {
      id: "html-div-span",
      title: "div و span",
      tags: ["div", "span", "container", "inline", "block"],
      icon: "📦",
      description: "حاويات عامة للمحتوى - div للكتل وspan للنص المضمّن",
      content: `
        <h2>div و span في HTML</h2>
        <p>هما أكثر التاجات شيوعاً للتجميع وتنسيق المحتوى باستخدام CSS وJavaScript.</p>

        <h3>الفرق بينهما</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>&lt;div&gt;</th><th>&lt;span&gt;</th></tr>
          <tr><td>نوع العرض</td><td>block (سطر كامل)</td><td>inline (مضمّن في النص)</td></tr>
          <tr><td>الاستخدام</td><td>تجميع مقاطع كبيرة</td><td>تنسيق جزء من النص</td></tr>
          <tr><td>يبدأ سطراً جديداً</td><td>✅ نعم</td><td>❌ لا</td></tr>
          <tr><td>المعنى الدلالي</td><td>لا يوجد</td><td>لا يوجد</td></tr>
        </table>

        <div class="info-box">
          <strong>💡 نصيحة:</strong> استخدم العناصر الدلالية (header, main, article...) بدلاً من div كلما أمكن. استخدم div فقط عند الحاجة للتجميع بدون معنى دلالي.
        </div>

        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- div - حاوية كتلة --&gt;
&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    &lt;h2&gt;عنوان البطاقة&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;p&gt;محتوى البطاقة&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- span - تنسيق جزء من النص --&gt;
&lt;p&gt;
  هذا نص عادي و
  &lt;span style="color: red; font-weight: bold;"&gt;هذا الجزء مميز&lt;/span&gt;
  وهذا عادي مرة أخرى.
&lt;/p&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه الفرق بين عناصر الـ Block وعناصر الـ Inline، وهل ينفع نحط &lt;div&gt; جوة &lt;span&gt;؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ Block (زي &lt;div&gt;) بيبدأ سطر جديد وبياخد عرض الصفحة كامل ويقبل width و height. أما الـ Inline (زي &lt;span&gt;) بياخد فقط مساحة محتواه ولا يبدأ سطر جديد. لا يجوز وضع Block جوة Inline وفق معايير W3C القياسية.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    /* div examples */
    .card { background: white; border-radius: 12px; margin: 10px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden; }
    .card-header { background: linear-gradient(135deg, #1a73e8, #0d47a1); color: white; padding: 15px 20px; }
    .card-header h3 { margin: 0; font-size: 16px; }
    .card-body { padding: 15px 20px; }
    .card-footer { background: #f8f9fa; padding: 10px 20px; font-size: 13px; color: #666; border-top: 1px solid #e0e0e0; }
    /* span examples */
    p { font-size: 16px; line-height: 2; color: #444; }
    .highlight { background: #fff176; padding: 2px 5px; border-radius: 3px; }
    .important { color: #ea4335; font-weight: bold; }
    .success { color: #34a853; font-weight: bold; }
    .badge { background: #1a73e8; color: white; font-size: 11px; padding: 2px 8px; border-radius: 10px; }
  </style>
</head>
<body>
  <h3>📦 مثال div - تجميع كتل:</h3>
  <div class="card">
    <div class="card-header">
      <h3>🌟 بطاقة معلومات</h3>
    </div>
    <div class="card-body">
      <p>هذا المحتوى داخل div.card-body الذي يمنحه التنسيق المناسب.</p>
    </div>
    <div class="card-footer">📅 آخر تحديث: اليوم</div>
  </div>

  <h3>🔤 مثال span - تنسيق داخل النص:</h3>
  <p>
    هذا نص عادي لكن 
    <span class="highlight">هذا الجزء مظلل</span>
    و<span class="important">هذا مهم</span>
    و<span class="success">هذا ناجح ✓</span>
    وهذا عادي مجدداً.
    <span class="badge">جديد</span>
  </p>
</body>
</html>`
      }
    },
    {
      id: "html-meta",
      title: "تاجات الـ Meta",
      tags: ["meta", "head", "charset", "viewport", "title", "description", "seo", "og"],
      icon: "⚙️",
      description: "تاجات meta في head لتحسين SEO والتحكم في الصفحة",
      content: `
        <h2>تاجات Meta في HTML</h2>
        <p>تاجات <code>&lt;meta&gt;</code> تُوفر معلومات عن الصفحة للمتصفح ومحركات البحث.</p>

        <h3>أهم تاجات Meta</h3>
        <table class="data-table">
          <tr><th>التاج</th><th>الوصف</th></tr>
          <tr><td><code>charset="UTF-8"</code></td><td>تشفير الحروف (يدعم العربية)</td></tr>
          <tr><td><code>name="viewport"</code></td><td>ضبط العرض للموبايل</td></tr>
          <tr><td><code>name="description"</code></td><td>وصف الصفحة لمحركات البحث</td></tr>
          <tr><td><code>name="keywords"</code></td><td>كلمات مفتاحية للـ SEO</td></tr>
          <tr><td><code>name="author"</code></td><td>اسم مؤلف الصفحة</td></tr>
          <tr><td><code>http-equiv="refresh"</code></td><td>تحديث الصفحة تلقائياً</td></tr>
          <tr><td><code>property="og:title"</code></td><td>Open Graph للسوشيال ميديا</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;head&gt;
  &lt;!-- أساسي وضروري --&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;عنوان الصفحة | اسم الموقع&lt;/title&gt;
  
  &lt;!-- SEO --&gt;
  &lt;meta name="description" content="وصف الصفحة هنا (150-160 حرف)"&gt;
  &lt;meta name="keywords" content="كلمة1, كلمة2, كلمة3"&gt;
  &lt;meta name="author" content="اسمك"&gt;
  &lt;meta name="robots" content="index, follow"&gt;
  
  &lt;!-- Open Graph (للمشاركة في السوشيال) --&gt;
  &lt;meta property="og:title" content="عنوان الصفحة"&gt;
  &lt;meta property="og:description" content="وصف الصفحة"&gt;
  &lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
  &lt;meta property="og:url" content="https://example.com"&gt;
  
  &lt;!-- تحديث تلقائي كل 30 ثانية --&gt;
  &lt;meta http-equiv="refresh" content="30"&gt;
&lt;/head&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه وظيفة سطر meta viewport، وإيه هي تاجات الـ Open Graph (OG)؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> سطر viewport هو المسؤول عن تفعيل التجاوب مع شاشات الموبايل (Responsive) بدون تصغير الخطوط لدرجة المجهر. أما تاجات OG فتحدد الصورة والعنوان والوصف اللي بيظهروا لما تاخد رابط موقعك وتشاركه على فيسبوك أو واتساب أو لينكد إن.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مثال على تاجات Meta</title>
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #0f0f1a; color: #e0e0e0; }
    .meta-card { background: #1e1e2e; border: 1px solid #333; border-radius: 10px; padding: 15px; margin: 10px 0; }
    .meta-tag { display: flex; align-items: flex-start; gap: 10px; margin: 8px 0; }
    .tag-icon { font-size: 20px; min-width: 30px; }
    .tag-name { color: #4fc3f7; font-family: monospace; font-size: 13px; margin-bottom: 3px; }
    .tag-desc { color: #aaa; font-size: 13px; }
    h2 { color: #4fc3f7; text-align: center; }
    .importance { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; margin-right: 5px; }
    .high { background: #ea4335; }
    .med { background: #fbbc04; color: #333; }
  </style>
</head>
<body>
  <h2>⚙️ تاجات Meta الأهم</h2>
  
  <div class="meta-card">
    <div class="meta-tag">
      <div class="tag-icon">🔤</div>
      <div>
        <div class="tag-name">&lt;meta charset="UTF-8"&gt;</div>
        <div class="tag-desc"><span class="importance high">ضروري</span> تحديد تشفير الحروف، يجعل العربية تعمل بشكل صحيح</div>
      </div>
    </div>
    <div class="meta-tag">
      <div class="tag-icon">📱</div>
      <div>
        <div class="tag-name">&lt;meta name="viewport" content="width=device-width"&gt;</div>
        <div class="tag-desc"><span class="importance high">ضروري</span> يجعل الصفحة responsive على الموبايل</div>
      </div>
    </div>
    <div class="meta-tag">
      <div class="tag-icon">🔍</div>
      <div>
        <div class="tag-name">&lt;meta name="description" content="..."&gt;</div>
        <div class="tag-desc"><span class="importance med">مهم SEO</span> يظهر في نتائج البحث تحت العنوان</div>
      </div>
    </div>
    <div class="meta-tag">
      <div class="tag-icon">📤</div>
      <div>
        <div class="tag-name">&lt;meta property="og:image"&gt;</div>
        <div class="tag-desc"><span class="importance med">سوشيال</span> الصورة التي تظهر عند مشاركة الرابط في فيسبوك/تويتر</div>
      </div>
    </div>
  </div>
  
  <div class="meta-card" style="border-color: #1a73e8;">
    <p style="color: #4fc3f7; font-size: 13px;">💡 <strong>تذكر:</strong> تاجي charset و viewport يجب أن يكونا في كل صفحة HTML تبنيها!</p>
  </div>
</body>
</html>`
      }
    },
    {
      id: "html-media",
      title: "الوسائط - Audio & Video",
      tags: ["video", "audio", "source", "controls", "autoplay", "loop", "مقاطع", "صوت", "فيديو", "media"],
      icon: "🎬",
      description: "إضافة الصوت والفيديو لصفحات HTML",
      content: `
        <h2>الوسائط في HTML5</h2>
        <p>HTML5 يدعم تضمين الصوت والفيديو مباشرة بدون Flash أو plugins خارجية.</p>

        <h3>تاج Video</h3>
        <table class="data-table">
          <tr><th>الخاصية</th><th>الوصف</th></tr>
          <tr><td><code>src</code></td><td>مسار الفيديو</td></tr>
          <tr><td><code>controls</code></td><td>أزرار التحكم (تشغيل/إيقاف)</td></tr>
          <tr><td><code>autoplay</code></td><td>التشغيل التلقائي</td></tr>
          <tr><td><code>muted</code></td><td>كتم الصوت</td></tr>
          <tr><td><code>loop</code></td><td>إعادة التشغيل</td></tr>
          <tr><td><code>poster</code></td><td>صورة معاينة قبل التشغيل</td></tr>
          <tr><td><code>width/height</code></td><td>أبعاد الفيديو</td></tr>
        </table>

        <h3>صيغ مدعومة</h3>
        <table class="data-table">
          <tr><th>الصيغة</th><th>الامتداد</th><th>الدعم</th></tr>
          <tr><td>MP4/H.264</td><td>.mp4</td><td>✅ جميع المتصفحات</td></tr>
          <tr><td>WebM</td><td>.webm</td><td>✅ Chrome, Firefox</td></tr>
          <tr><td>Ogg</td><td>.ogg</td><td>⚠️ Firefox فقط</td></tr>
          <tr><td>MP3</td><td>.mp3</td><td>✅ صوت - جميع المتصفحات</td></tr>
          <tr><td>WAV</td><td>.wav</td><td>✅ صوت - معظم المتصفحات</td></tr>
        </table>

        <div class="code-example">
          <pre><code class="lang-html">&lt;!-- فيديو --&gt;
&lt;video width="640" height="360" controls poster="thumbnail.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  &lt;p&gt;متصفحك لا يدعم الفيديو.&lt;/p&gt;
&lt;/video&gt;

&lt;!-- صوت --&gt;
&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  &lt;source src="audio.ogg" type="audio/ogg"&gt;
  &lt;p&gt;متصفحك لا يدعم الصوت.&lt;/p&gt;
&lt;/audio&gt;

&lt;!-- يوتيوب باستخدام iframe --&gt;
&lt;iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560" height="315"
  allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إزاي تضمن تشغيل الفيديو والصوت على كل المتصفحات القديمة والحديثة بكفاءة؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> عن طريق توفير تاجات &lt;source&gt; متعددة بصيغ مختلفة (MP4 مع H.264، و WebM، و Ogg) داخل تاج &lt;video&gt;، مع كتابة نص بديل للمتصفحات القديمة التي لا تدعم HTML5 Media.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #0f0f1a; color: white; }
    h2 { color: #4fc3f7; }
    .media-card { background: #1e1e2e; border-radius: 12px; padding: 20px; margin: 15px 0; border: 1px solid #333; }
    .demo-player { background: #111; border-radius: 8px; padding: 20px; text-align: center; }
    .play-btn { width: 60px; height: 60px; background: #1a73e8; border: none; border-radius: 50%; color: white; font-size: 24px; cursor: pointer; transition: all 0.3s; }
    .play-btn:hover { background: #0d47a1; transform: scale(1.1); }
    .progress { background: #333; height: 4px; border-radius: 2px; margin: 15px 0; }
    .progress-fill { background: #1a73e8; height: 100%; width: 35%; border-radius: 2px; }
    .time { display: flex; justify-content: space-between; font-size: 12px; color: #aaa; }
    .format-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
    .format { background: #252540; border-radius: 6px; padding: 8px 12px; text-align: center; font-size: 13px; }
    .supported { border-right: 3px solid #34a853; }
    .partial { border-right: 3px solid #fbbc04; }
    iframe { width: 100%; border-radius: 8px; border: none; }
  </style>
</head>
<body>
  <h2>🎬 الوسائط في HTML5</h2>
  
  <div class="media-card">
    <h3>🎵 مشغل صوت ديمو</h3>
    <div class="demo-player">
      <button class="play-btn" onclick="this.textContent = this.textContent==='▶' ? '⏸' : '▶'">▶</button>
      <div class="progress">
        <div class="progress-fill" id="prog"></div>
      </div>
      <div class="time">
        <span>1:23</span>
        <span>3:45</span>
      </div>
      <p style="color:#aaa; font-size:13px; margin-top:5px;">🎶 اضغط على ▶ لتشغيل الصوت</p>
    </div>
  </div>
  
  <div class="media-card">
    <h3>📺 فيديو يوتيوب مضمّن (iframe)</h3>
    <iframe 
      src="https://www.youtube.com/embed/qz0aGYrrlhU" 
      height="200" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
      allowfullscreen>
    </iframe>
  </div>

  <div class="media-card">
    <h3>📋 الصيغ المدعومة</h3>
    <div class="format-grid">
      <div class="format supported">✅ MP4 - .mp4</div>
      <div class="format supported">✅ MP3 - .mp3</div>
      <div class="format supported">✅ WebM - .webm</div>
      <div class="format partial">⚠️ OGG - .ogg</div>
    </div>
  </div>
</body>
</html>`
      }
    },
    {
      id: "html-input-types",
      title: "أنواع Input المتقدمة",
      tags: ["input", "date", "color", "range", "search", "tel", "number", "file", "checkbox", "radio"],
      icon: "🎛️",
      description: "جميع أنواع حقول الإدخال في HTML5",
      content: `
        <h2>أنواع Input في HTML5</h2>
        <p>HTML5 أضاف أنواعاً جديدة لتاج <code>&lt;input&gt;</code> تحسّن تجربة المستخدم وتُسهّل التحقق من البيانات.</p>

        <h3>جميع أنواع Input</h3>
        <table class="data-table">
          <tr><th>النوع</th><th>الوصف</th><th>مثال</th></tr>
          <tr><td><code>text</code></td><td>نص عادي</td><td>الاسم، المدينة</td></tr>
          <tr><td><code>password</code></td><td>كلمة مرور مخفية</td><td>كلمة السر</td></tr>
          <tr><td><code>email</code></td><td>بريد إلكتروني + تحقق</td><td>test@email.com</td></tr>
          <tr><td><code>tel</code></td><td>رقم هاتف</td><td>+20123456789</td></tr>
          <tr><td><code>number</code></td><td>أرقام مع min/max</td><td>العمر</td></tr>
          <tr><td><code>range</code></td><td>شريط تمرير</td><td>0-100</td></tr>
          <tr><td><code>date</code></td><td>تاريخ</td><td>2025-01-15</td></tr>
          <tr><td><code>time</code></td><td>وقت</td><td>14:30</td></tr>
          <tr><td><code>datetime-local</code></td><td>تاريخ + وقت</td><td>2025-01-15T14:30</td></tr>
          <tr><td><code>color</code></td><td>منتقي الألوان</td><td>#1a73e8</td></tr>
          <tr><td><code>file</code></td><td>رفع ملف</td><td>accept=".pdf,.jpg"</td></tr>
          <tr><td><code>checkbox</code></td><td>مربع اختيار</td><td>الموافقة</td></tr>
          <tr><td><code>radio</code></td><td>اختيار واحد</td><td>الجنس</td></tr>
          <tr><td><code>search</code></td><td>حقل بحث</td><td>🔍</td></tr>
          <tr><td><code>url</code></td><td>رابط URL</td><td>https://example.com</td></tr>
          <tr><td><code>hidden</code></td><td>حقل مخفي</td><td>لا يظهر للمستخدم</td></tr>
        </table>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">إيه الفائدة العملية لاستخدام type='email' أو type='tel' بدلاً من type='text' العادي؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> فائدتين عظيمتين: 1) تفعيل لوحة المفاتيح المخصصة في الموبايل تلقائياً (إظهار علامة @ في الإيميل ولوحة أرقام في الهاتف). 2) تفعيل التحقق التلقائي المدمج في المتصفح (Built-in Client Validation) قبل إرسال الفورم.</div>
        </div>
      `,
      example: {
        html: `<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; padding: 20px; direction: rtl; background: #f0f4ff; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .input-card { background: white; border-radius: 10px; padding: 12px 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    label { display: block; font-size: 12px; color: #666; margin-bottom: 5px; }
    label span { font-family: monospace; color: #1a73e8; }
    input { width: 100%; padding: 8px 10px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 13px; box-sizing: border-box; }
    input:focus { outline: none; border-color: #1a73e8; }
    input[type="color"] { height: 40px; padding: 2px; cursor: pointer; }
    input[type="range"] { padding: 0; }
    input[type="checkbox"], input[type="radio"] { width: auto; }
    h2 { color: #1a73e8; text-align: center; }
    .range-val { font-size: 18px; font-weight: bold; color: #1a73e8; text-align: center; }
  </style>
</head>
<body>
  <h2>🎛️ أنواع Input في HTML5</h2>
  <div class="grid">
    <div class="input-card">
      <label><span>type="text"</span> - نص</label>
      <input type="text" placeholder="اكتب هنا...">
    </div>
    <div class="input-card">
      <label><span>type="password"</span> - كلمة مرور</label>
      <input type="password" placeholder="••••••••">
    </div>
    <div class="input-card">
      <label><span>type="email"</span> - بريد إلكتروني</label>
      <input type="email" placeholder="user@email.com">
    </div>
    <div class="input-card">
      <label><span>type="number"</span> - رقم (1-100)</label>
      <input type="number" min="1" max="100" value="25">
    </div>
    <div class="input-card">
      <label><span>type="date"</span> - تاريخ</label>
      <input type="date">
    </div>
    <div class="input-card">
      <label><span>type="time"</span> - وقت</label>
      <input type="time">
    </div>
    <div class="input-card">
      <label><span>type="color"</span> - اختيار لون</label>
      <input type="color" value="#1a73e8">
    </div>
    <div class="input-card">
      <label><span>type="range"</span> - شريط تمرير: <span id="rv">50</span>%</label>
      <input type="range" min="0" max="100" value="50" oninput="document.getElementById('rv').textContent=this.value">
    </div>
    <div class="input-card">
      <label><span>type="file"</span> - رفع ملف</label>
      <input type="file" accept=".jpg,.pdf,.png">
    </div>
    <div class="input-card">
      <label><span>type="search"</span> - بحث</label>
      <input type="search" placeholder="🔍 ابحث هنا...">
    </div>
    <div class="input-card" style="grid-column: 1/-1;">
      <label><span>type="checkbox"</span> و <span>type="radio"</span></label>
      <div style="display:flex; gap:15px; flex-wrap:wrap; margin-top:5px;">
        <label><input type="checkbox" checked> HTML ✓</label>
        <label><input type="checkbox"> CSS</label>
        <label><input type="checkbox"> JavaScript</label>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <label><input type="radio" name="level"> مبتدئ</label>
        <label><input type="radio" name="level" checked> متوسط</label>
        <label><input type="radio" name="level"> متقدم</label>
      </div>
    </div>
  </div>
</body>
</html>`
      }
    }
  ]
};
