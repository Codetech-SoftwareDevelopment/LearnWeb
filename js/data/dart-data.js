/**
 * Dart Language Reference Data - CodeTech
 * مرجع لغة دارت الشامل - الأساسيات والبرمجة كائنية التوجه (OOP)
 * إعداد: المهندس مصطفى جمال قابيل
 */

const DART_DATA = {
  "category": "Dart",
  "icon": "<i class=\"fa-solid fa-bullseye\"></i>",
  "description": "لغة برمجة عصرية وسريعة طورتها Google - مصممة خصيصاً لبناء واجهات فائقة السلاسة والمحرك الأساسي لـ Flutter",
  "topics": [
    {
      "id": "dart-intro",
      "title": "مقدمة في لغة Dart ومحرك Flutter",
      "tags": [
        "مقدمة",
        "dart",
        "flutter",
        "google",
        "main",
        "jit",
        "aot"
      ],
      "icon": "<i class=\"fa-solid fa-bullseye\"></i>",
      "description": "إيه هي Dart؟ وليه Google اختارتها لمحرك Flutter؟ وفكرة الـ JIT و AOT ودالة main",
      "content": `
        <h2>إيه هي لغة Dart؟</h2>
        <p>بص يا سيدي، <strong>Dart</strong> دي لغة برمجة مفتوحة المصدر طوّرتها شركة <strong>Google</strong>، والهدف الأساسي منها إنها تديك أسرع تجربة تطوير (Developer Experience) مع أعلى أداء ممكن (High Performance) على كل الأجهزة: موبايل، ويب، ديسكتوب، وسيرفر.</p>
        
        <div class="info-box">
          <strong>💡 ليه Google اختارت Dart بالذات لمحرك Flutter؟</strong>
          السؤال ده بيتسأل في كل المقابلات! الإجابة هي إن Dart بتجمع بين ميزتين كان مستحيل تلاقيهم مع بعض في أي لغة تانية:
          <ul>
            <li><strong>JIT (Just-In-Time Compilation):</strong> وأنت شغال بتكتب كود، Dart بتشغل الكود في Dart VM فوراً بدون ما تستنى كومبايل طويل. دي الميزة الساحرة اللي بتشغل <em>Hot Reload</em> في Flutter؛ بتعدل وتدوس Save وتشوف التعديل في أقل من ثانية بدون ما تفقد حالة التطبيق!</li>
            <li><strong>AOT (Ahead-Of-Time Compilation):</strong> لما تخلص التطبيق وتيجي تخرجه للمستخدمين (Release)، Dart بتحول الكود كله مباشرة لـ <em>Machine Code أصلي (ARM64 أو x64)</em>. مفيش وسيط ولا JavaScript Bridge ولا بطء؛ التطبيق بيفتح فوري وبيشتغل بـ 60 و 120 فريم في الثانية بسلاسة رهيبة!</li>
          </ul>
        </div>

        <h3>الهيكل الأساسي لأي برنامج Dart</h3>
        <p>كل تطبيق في دارت بيبدأ من نقطة انطلاق أساسية اسمها دالة <code>main()</code>. دي أول حاجة بتشتغل في البرنامج:</p>

        <div class="code-example">
          <pre><code class="lang-dart">// نقطة بداية البرنامج
void main() {
  // طباعة رسالة في الكونسول
  print('Welcome to professional Dart programming!');

  String framework = 'Flutter';
  int year = 2026;
  print('Learning Dart is the key to mastering $framework in $year');
}</code></pre>
        </div>

        <h3>مقارنة سريعة: أوضاع تشغيل دارت</h3>
        <table class="data-table">
          <tr><th>وضع التشغيل</th><th>التقنية المستخدمة</th><th>الفائدة في الشغل العملي</th></tr>
          <tr><td>التطوير (Development)</td><td><strong>JIT + Dart VM</strong></td><td>تعديل وتجربة لحظية في أقل من ثانية (Sub-second Hot Reload).</td></tr>
          <tr><td>الإنتاج (Production)</td><td><strong>AOT Native Compiler</strong></td><td>أداء خيالي وسرعة فتح فورية بدون أي لاج.</td></tr>
          <tr><td>الويب (Web Apps)</td><td><strong>dart2js & Wasm</strong></td><td>توليد كود JavaScript فائق السرعة أو كود WebAssembly عالي الكفاءة.</td></tr>
        </table>
      `,
      "example": {
        "code": `void main() {
  print('Welcome to Dart and Flutter!');
  
  String appName = 'CodeTech Mobile';
  double dartVersion = 3.4;
  bool isHotReloadReady = true;

  print('Application: $appName');
  print('Dart Version: $dartVersion');
  print('Hot Reload Support: \${isHotReloadReady ? "Active" : "Inactive"}');
  print('Dart compiles directly to native Machine Code!');
}`,
        "output": `Welcome to Dart and Flutter!
Application: CodeTech Mobile
Dart Version: 3.4
Hot Reload Support: Active
Dart compiles directly to native Machine Code!

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-variables",
      "title": "المتغيرات وأنواع البيانات الصارمة",
      "tags": [
        "متغيرات",
        "types",
        "var",
        "dynamic",
        "int",
        "double",
        "string",
        "bool"
      ],
      "icon": "<i class=\"fa-solid fa-cubes\"></i>",
      "description": "الأنواع الصريحة والفرق الجوهري بين var و dynamic و Object وفخاخ الـ Type Safety",
      "content": `
        <h2>المتغيرات في دارت: قوية وآمنة (Type Safe)</h2>
        <p>لغة Dart هي <strong>Statically Typed</strong>، يعني نوع كل متغير معروف ومحمي في وقت الكومبايل، وده بيمنع 90% من الأخطاء العبيطة اللي بتظهر فجأة في لغات تانية زي جافاسكريبت.</p>

        <h3>الأنواع الأساسية في Dart</h3>
        <ul>
          <li><code>int</code>: للأرقام الصحيحة (زي 10، -5، 2026).</li>
          <li><code>double</code>: للأرقام العشرية والكسور (زي 19.99، 3.14).</li>
          <li><code>num</code>: النوع الأب للاثنين، بيقبل أرقام صحيحة أو عشرية.</li>
          <li><code>String</code>: للنصوص، وبتقبل علامات تنصيص مفردة <code>'...'</code> أو مزدوجة <code>"..."</code>.</li>
          <li><code>bool</code>: للقيم المنطقية، وبتاخد يا إما <code>true</code> أو <code>false</code> فقط.</li>
        </ul>

        <div class="info-box">
          <strong>⚠️ الفخ الشهير: إيه الفرق بين var و dynamic؟</strong>
          <ul>
            <li><strong>var:</strong> دارت بتستنتج النوع أول مرة وتثبت عليه للأبد (Type Inference). لو كتبت <code>var x = "Mostafa";</code> دارت فهمت إن x نص، ولو جيت في السطر اللي بعده وقولت <code>x = 50;</code> الكومبايلر هيرفض ويطلع Error فوراً!</li>
            <li><strong>dynamic:</strong> بتعطل كل فحوصات النوع في Dart! المتغير ممكن يشيل نص وبعدين رقم وبعدين لستة، وده خطير جداً لأن أي خطأ في كتابة اسم دالة هيرمي كراش في وش المستخدم في الرن تايم! استخدمها فقط لما تكون مضطر (زي استلام داتا غير معروفة تماماً من شبكة).</li>
          </ul>
        </div>
      `,
      "example": {
        "code": `void main() {
  // 1. تعريف بأنواع صريحة
  int userAge = 25;
  double accountBalance = 15420.75;
  String clientName = 'Mostafa Qabeel';
  bool isVerified = true;

  // 2. استخدام var مع استنتاج النوع
  var organization = 'CodeTech Global';

  // 3. استخدام dynamic بحذر
  dynamic flexibleData = 'Initial Text';
  flexibleData = 100;

  print('=== User Data Card ===');
  print('Client Name: $clientName');
  print('Age: $userAge');
  print('Balance: \$$accountBalance USD');
  print('Verified Status: \${isVerified ? "Verified" : "Unverified"}');
  print('Organization: $organization');
  print('Current Dynamic Value: $flexibleData (Type: \${flexibleData.runtimeType})');
}`,
        "output": `=== User Data Card ===
Client Name: Mostafa Qabeel
Age: 25
Balance: $15420.75 USD
Verified Status: Verified
Organization: CodeTech Global
Current Dynamic Value: 100 (Type: int)

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-null-safety",
      "title": "الأمان ضد القيم الفارغة (Sound Null Safety)",
      "tags": [
        "null",
        "null-safety",
        "sound",
        "late",
        "optional"
      ],
      "icon": "<i class=\"fa-solid fa-shield-halved\"></i>",
      "description": "حماية التطبيق من الكراش الشهير NullPointerException باستخدام ?, !, late, ??, ??=",
      "content": `
        <h2>يعني إيه Null Safety؟</h2>
        <p>مخترع مفهوم الـ Null زمان سماه <em>"The Billion Dollar Mistake"</em>؛ لأن أكتر من نصف كراشات التطبيقات في العالم كانت بتحصل لما تحاول تقرأ خاصية من متغير فاضي (Null Pointer Exception).</p>
        <p>دارت من أول الإصدار 2.12 ومكملة في Dart 3 بتطبق <strong>Sound Null Safety</strong> بشكل صارم: افتراضياً، أي متغير بتعرّفه <strong>مستحيل</strong> يشيل <code>null</code> إلا لو أنت طلبت ده بنفسك صراحة!</p>

        <h3>أدوات التعامل مع الـ Null</h3>
        <table class="data-table">
          <tr><th>الأداة</th><th>المعنى</th><th>مثال من الشغل</th></tr>
          <tr><td><code>?</code></td><td>المتغير ده يقبل null اختياري</td><td><code>String? userPhone;</code></td></tr>
          <tr><td><code>?.</code></td><td>استدعاء آمن: نفذ الدالة بس لو مش null</td><td><code>userPhone?.toLowerCase()</code></td></tr>
          <tr><td><code>??</code></td><td>قيمة بديلة افتراضية لو المتغير فاضي</td><td><code>userPhone ?? 'No phone'</code></td></tr>
          <tr><td><code>??=</code></td><td>حط القيمة دي فقط لو كان المتغير فاضي</td><td><code>counter ??= 1;</code></td></tr>
          <tr><td><code>!</code></td><td>(Bang Operator) قسَم للكومبايلر إنه مش null</td><td><code>print(userPhone!)</code> (استخدمها بحذر!)</td></tr>
          <tr><td><code>late</code></td><td>تأجيل التعيين: بوعدك إني هديله قيمة قبل ما أقرأه</td><td><code>late String databaseUrl;</code></td></tr>
        </table>
      `,
      "example": {
        "code": `void main() {
  // متغير إجباري لا يقبل null أبداً
  String userEmail = 'dev@codetech.com';

  // متغير اختياري يقبل null بعلامة الاستفهام ?
  String? optionalBio;
  String? userCity = null;

  // استخدام ?? لوضع قيمة بديلة بأمان
  String finalBio = optionalBio ?? 'No bio provided yet';
  String finalCity = userCity ?? 'Cairo';

  // استخدام ??= لتعيين قيمة فقط إذا كان المتغير null
  int? loginRetries;
  loginRetries ??= 1;
  loginRetries ??= 5;

  // Safe Call ?.
  String? countryCode = 'eg';
  String? upperCode = countryCode?.toUpperCase();

  print('Email: $userEmail');
  print('Bio: $finalBio');
  print('City: $finalCity');
  print('Login Retries: $loginRetries');
  print('Upper Country Code: $upperCode');
}`,
        "output": `Email: dev@codetech.com
Bio: No bio provided yet
City: Cairo
Login Retries: 1
Upper Country Code: EG

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-constants",
      "title": "الثوابت في Dart (final مقابل const)",
      "tags": [
        "ثوابت",
        "final",
        "const",
        "memory",
        "compile-time"
      ],
      "icon": "<i class=\"fa-solid fa-lock\"></i>",
      "description": "إيه الفرق بين وقت الكومبايل ووقت الرن تايم؟ وليه const بتسرع فلاتر وتوفر استهلاك الرام؟",
      "content": `
        <h2>السؤال الأشهر في مقابلات العمل: final ولا const؟</h2>
        <p>الاثنين بيخلوا المتغير ثابت ومستحيل يتغير بعد تعيينه، بس الفرق الجوهري في <strong>توقيت معرفة القيمة والذاكرة</strong>:</p>

        <div class="info-box">
          <strong>💎 سر السرعة في Flutter:</strong>
          لما بتكتب <code>const</code> قبل الـ Widget في فلاتر (زي <code>const Text('Hello')</code>)، فلاتر بتعرف إن محتواها مش هيتغير، فبتحتفظ بنسخة واحدة منها في الذاكرة (Canonicalization) ومبتعيدش رسمها أبداً في الـ Rebuild! ده بيخلي تطبيقك سلس كالحرير ويقلل استهلاك البطارية.
        </div>

        <h3>مقارنة دقيقة بين final و const</h3>
        <table class="data-table">
          <tr><th>المقارنة</th><th>const</th><th>final</th></tr>
          <tr><td>وقت التعيين</td><td><strong>Compile-Time</strong> (لازم القيمة تكون معروفة وقت كتابة الكود).</td><td><strong>Run-Time</strong> (القيمة ممكن تتحدد وقت تشغيل التطبيق).</td></tr>
          <tr><td>استهلاك الذاكرة</td><td>نسخة واحدة مشتركة في الذاكرة لكل التطبيق.</td><td>كائن جديد في الذاكرة في كل مرة يتنفذ فيها.</td></tr>
          <tr><td>مثال واقعي</td><td>رابط ثابت: <code>const url = 'https://api...';</code></td><td>الوقت الحالي: <code>final now = DateTime.now();</code></td></tr>
        </table>
      `,
      "example": {
        "code": `void main() {
  // ثوابت وقت الكومبايل
  const String apiBaseUrl = 'https://api.codetech.dev/v1';
  const int maxPageSize = 20;
  const double vatTaxRate = 0.14;

  // ثوابت وقت التشغيل
  final DateTime appLaunchTime = DateTime.now();
  final String deviceGreeting = 'Application launched successfully at second: \${appLaunchTime.second}';

  print('=== System Configuration ===');
  print('Base URL: $apiBaseUrl');
  print('Max Page Size: $maxPageSize items');
  print('Tax Rate: \${vatTaxRate * 100}%');
  print('Launch Time: $appLaunchTime');
  print('Message: $deviceGreeting');
}`,
        "output": `=== System Configuration ===
Base URL: https://api.codetech.dev/v1
Max Page Size: 20 items
Tax Rate: 14.0%
Launch Time: 2026-10-24 14:00:00.000
Message: Application launched successfully at second: 0

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-operators",
      "title": "العمليات والمعاملات المتقدمة (Cascade & Spread)",
      "tags": [
        "operators",
        "cascade",
        "spread",
        "math",
        "is",
        "as"
      ],
      "icon": "<i class=\"fa-solid fa-calculator\"></i>",
      "description": "المعاملات الحسابية والمنطقية، فحص الأنواع بـ is و as، والـ Cascade (..) والـ Spread (...)",
      "content": `
        <h2>معاملات دارت الذكية</h2>
        <p>بالإضافة للعمليات الحسابية المعتادة (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>~/</code> للقسمة الصحيحة, <code>%</code> لباقي القسمة)، دارت بتقدم معاملات بتخلي كودك أقصر بكتير وأنظف:</p>

        <h3>1. معامل الـ Cascade (<code>..</code>)</h3>
        <p>بيسمحلك تنفذ سلسلة من العمليات وتعديل الخصائص على <strong>نفس الكائن</strong> ورا بعض من غير ما تعيد كتابة اسمه في كل سطر!</p>

        <h3>2. معامل الـ Spread (<code>...</code> و <code>...?</code>)</h3>
        <p>بيفك عناصر قائمة أو مجموعة ويدمجها جوة قائمة تانية في سطر واحد بدون ما تعمل Loops يدوية.</p>

        <h3>3. معاملات فحص وتحويل الأنواع (<code>is</code>, <code>is!</code>, <code>as</code>)</h3>
        <p><code>is</code> بتفحص هل الكائن من نوع معين؟ ودارت بتعمل بعدها <em>Smart Cast</em> تلقائي؛ يعني لو الشرط صح، دارت بتتعامل مع المتغير كأنه من النوع ده مباشرة بدون كاستنج يدوي!</p>
      `,
      "example": {
        "code": `class CustomerCart {
  List<String> items = [];
  double subtotal = 0.0;

  void addProduct(String title, double price) {
    items.add(title);
    subtotal += price;
    print('Added: $title for \$$price');
  }

  void applyPromoCode(double percent) {
    double discount = subtotal * (percent / 100);
    subtotal -= discount;
    print('Applied $percent% discount. New subtotal: \$$subtotal');
  }
}

void main() {
  // استخدام Cascade (..) لتعديل الكائن في خطوة واحدة
  var myCart = CustomerCart()
    ..addProduct('Pro Laptop', 1200.0)
    ..addProduct('Wireless Mouse', 45.0)
    ..applyPromoCode(10);

  print('Cart Items Count: \${myCart.items.length}');
  print('Total Amount: \$\${myCart.subtotal}');

  // استخدام Spread (...) لدمج القوائم
  List<String> gifts = ['Mouse Pad', 'Sticker Pack'];
  List<String> finalPackage = [...myCart.items, ...gifts];
  print('Final Package Contents: $finalPackage');
}`,
        "output": `Added: Pro Laptop for $1200.0
Added: Wireless Mouse for $45.0
Applied 10.0% discount. New subtotal: $1120.5
Cart Items Count: 2
Total Amount: $1120.5
Final Package Contents: [Pro Laptop, Wireless Mouse, Mouse Pad, Sticker Pack]

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-control-flow",
      "title": "الجمل الشرطية والـ Pattern Matching في Dart 3",
      "tags": [
        "if",
        "else",
        "switch",
        "dart3",
        "patterns",
        "when"
      ],
      "icon": "<i class=\"fa-solid fa-code-branch\"></i>",
      "description": "جمل if/else، وتعبيرات switch الحديثة في Dart 3 والشروط المتقدمة بـ when بدون break",
      "content": `
        <h2>التحكم في المسار: قوة Dart 3 الحديثة</h2>
        <p>الجمل الشرطية هي المخ اللي بيقرر التطبيق هيعمل إيه بناءً على حالة البيانات. في Dart 3، شركة Google طوّرت أسلوب الـ <code>switch</code> ليصبح واحداً من أقوى الأنظمة البرمجية بين كل لغات العالم!</p>

        <h3>Switch Expressions في Dart 3</h3>
        <p>زمان كنت بتكتب switch طويلة ومعقدة مع <code>case</code> و <code>break</code> كتير. في Dart 3، الـ switch بقت ترجع قيمة مباشرة وتكتبها في سطر واحد، وتقدر تحط شروط دقيقة اسمها <em>Guard Clauses</em> باستخدام كلمة <code>when</code>:</p>

        <div class="code-example">
          <pre><code class="lang-dart">var result = switch (status) {
  Status.loading => 'Loading data...',
  Status.success when data.isNotEmpty => 'Data received successfully',
  Status.success => 'Data is empty',
  Status.error => 'Network error occurred',
};</code></pre>
        </div>
      `,
      "example": {
        "code": `enum DeliveryStatus { pending, preparing, onTheWay, delivered, cancelled }

String trackOrder(DeliveryStatus status, double orderTotal) {
  // Switch Expression في Dart 3 مع Guard Clauses بـ when
  return switch (status) {
    DeliveryStatus.pending => 'Order is pending confirmation',
    DeliveryStatus.preparing when orderTotal >= 500 => 'High value order is being prepared carefully',
    DeliveryStatus.preparing => 'Order is being packed in the warehouse',
    DeliveryStatus.onTheWay => 'Courier is on the way to your address',
    DeliveryStatus.delivered => 'Order delivered successfully',
    DeliveryStatus.cancelled => 'Order was cancelled and refunded',
  };
}

void main() {
  var order1 = trackOrder(DeliveryStatus.preparing, 750.0);
  var order2 = trackOrder(DeliveryStatus.onTheWay, 45.0);
  var order3 = trackOrder(DeliveryStatus.delivered, 85.0);

  print('Order 1: $order1');
  print('Order 2: $order2');
  print('Order 3: $order3');
}`,
        "output": `Order 1: High value order is being prepared carefully
Order 2: Courier is on the way to your address
Order 3: Order delivered successfully

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-loops",
      "title": "حلقات التكرار والتحكم بالتدفق (Loops)",
      "tags": [
        "loops",
        "for",
        "while",
        "for-in",
        "break",
        "continue"
      ],
      "icon": "<i class=\"fa-solid fa-arrows-spin\"></i>",
      "description": "حلقات for العادية، for-in على القوائم، while، والتحكم بالتدفق بـ break و continue",
      "content": `
        <h2>حلقات التكرار في Dart</h2>
        <p>لما يكون عندك مجموعة بيانات وعايز تنفذ نفس العملية عليهم واحد واحد بدون تكرار الكود، بتلجأ للـ Loops.</p>
        <ul>
          <li><code>for-in</code>: الطريقة الأحدث والأنظف للمرور على عناصر القوائم والمجموعات مباشرة.</li>
          <li><code>for</code> التقليدية: مفيدة لو محتاج عداد ورقم الـ Index.</li>
          <li><code>while</code> و <code>do-while</code>: لتكرار العملية طالما شرط معين لسه متحقق (زي انتظار رد سيرفر).</li>
          <li><code>break</code>: للخروج من الحلقة فوراً وإنهاء التكرار.</li>
          <li><code>continue</code>: لتخطي العنصر الحالي فوراً والدخول في العنصر اللي بعده.</li>
        </ul>
      `,
      "example": {
        "code": `void main() {
  List<Map<String, dynamic>> examResults = [
    {'student': 'Mariam Ahmed', 'grade': 94},
    {'student': 'Hossam Fawzy', 'grade': 38},
    {'student': 'Nour El-Hoda', 'grade': 89},
    {'student': 'Ziad Kamal', 'grade': 72},
  ];

  print('=== Student Examination Results ===');
  for (var entry in examResults) {
    if (entry['grade'] < 50) {
      print('Skipping: \${entry['student']} (Low score: \${entry['grade']}%)');
      continue; // تخطي للدورة التالية
    }
    print('Congratulations: \${entry['student']} - Score: \${entry['grade']}% (Passed)');
  }

  // محاكاة مؤشر تحميل تطبيق باستخدام while
  int downloadProgress = 0;
  print('\\nDownloading update files:');
  while (downloadProgress < 100) {
    downloadProgress += 25;
    print('Progress: $downloadProgress%');
  }
  print('Download completed successfully.');
}`,
        "output": `=== Student Examination Results ===
Congratulations: Mariam Ahmed - Score: 94% (Passed)
Skipping: Hossam Fawzy (Low score: 38%)
Congratulations: Nour El-Hoda - Score: 89% (Passed)
Congratulations: Ziad Kamal - Score: 72% (Passed)

Downloading update files:
Progress: 25%
Progress: 50%
Progress: 75%
Progress: 100%
Download completed successfully.

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-functions",
      "title": "الدوال والباراميترات المتقدمة (Named & Optional)",
      "tags": [
        "functions",
        "named",
        "optional",
        "required",
        "arrow"
      ],
      "icon": "<i class=\"fa-solid fa-gears\"></i>",
      "description": "بناء الدوال في دارت، الفرق بين Positional و Named Parameters، وسر بناء الـ Widgets في Flutter",
      "content": `
        <h2>الدوال: عصب التطبيقات في Dart و Flutter</h2>
        <p>لو فهمت باراميترات الدوال في دارت، هتفهم كود Flutter بنسبة 100%! في دارت الدوال كائنات من الدرجة الأولى (First-Class Objects)، تقدر تمرر دالة كباراميتر لدالة تانية أو ترجع دالة من جوة دالة.</p>

        <h3>أنواع الباراميترات في Dart</h3>
        <ul>
          <li><strong>Positional Parameters:</strong> الباراميترات العادية اللي مكانها وترتيبها إجباري: <code>sum(int a, int b)</code>.</li>
          <li><strong>Named Parameters <code>{}</code>:</strong> بتستدعيها باسمها (نفس طريقة ويدجتس فلاتر بالضبط: <code>Text('Hello', style: TextStyle(...))</code>). تقدر تحط قبلها <code>required</code> لو إجبارية، أو تديها قيمة افتراضية لو اختيارية.</li>
          <li><strong>Arrow Functions <code>=></code>:</strong> دالة سهمية مختصرة لما تكون الدالة سطر واحد بس ترجع قيمة.</li>
        </ul>
      `,
      "example": {
        "code": `// دالة احترافية بباراميترات مسماة واختيارية
String sendPushNotification({
  required String recipient,
  required String messageTitle,
  String channel = 'general',
  bool playSound = true,
}) {
  return 'Notification to [$recipient] on channel ($channel): "$messageTitle" (Sound: \${playSound ? "Enabled" : "Muted"})';
}

// دالة سهمية لحساب السعر بعد إضافة الضريبة
double calculateNetPrice(double price, double taxRate) => price + (price * taxRate);

void main() {
  // الاستدعاء بالاسم بأي ترتيب
  var note1 = sendPushNotification(
    recipient: 'user_99',
    messageTitle: 'Monthly payroll deposited into your account',
    channel: 'finance',
  );

  var note2 = sendPushNotification(
    messageTitle: 'Up to 40% discount on all development courses',
    recipient: 'all_subscribers',
    playSound: false,
  );

  print(note1);
  print(note2);

  double priceWithTax = calculateNetPrice(120.0, 0.14);
  print('Final price for \$120 item after 14% tax: \$$priceWithTax');
}`,
        "output": `Notification to [user_99] on channel (finance): "Monthly payroll deposited into your account" (Sound: Enabled)
Notification to [all_subscribers] on channel (general): "Up to 40% discount on all development courses" (Sound: Muted)
Final price for $120 item after 14% tax: $136.8

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-lists",
      "title": "القوائم والمصفوفات (Lists & Collection Operators)",
      "tags": [
        "lists",
        "arrays",
        "map",
        "where",
        "reduce",
        "collection-if"
      ],
      "icon": "<i class=\"fa-solid fa-list-ol\"></i>",
      "description": "القوائم في دارت، ميزات Collection if و Collection for، والدوال السحرية map, where, reduce",
      "content": `
        <h2>القوائم في دارت: مرونة فائقة</h2>
        <p>الـ <code>List<T></code> هي المصفوفة اللي بنرتب فيها عناصرنا. دارت بتقدم إمكانيات خارقة في بناء القوائم بتسهل كتابة واجهات فلاتر بشكل لا يُصدق:</p>

        <h3>1. Collection if</h3>
        <p>تقدر تحط شرط <code>if</code> جوة القائمة مباشرة، والعنصر يتضاف بس لو الشرط اتحقق!</p>

        <h3>2. دوال المعالجة (Functional Programming)</h3>
        <ul>
          <li><code>.where((item) => condition)</code>: لفلترة القائمة واستخراج العناصر اللي بتطابق شرط معين.</li>
          <li><code>.map((item) => transform)</code>: لتحويل كل عنصر في القائمة لشكل تاني (زي تحويل قائمة نصوص لويدجت في فلاتر).</li>
          <li><code>.reduce((sum, item) => ...)</code>: لدمج كل عناصر القائمة في قيمة واحدة نهائية (زي حساب مجموع الأسعار).</li>
        </ul>
      `,
      "example": {
        "code": `void main() {
  bool isSuperUser = true;
  List<String> extraTools = ['Analytics Tool', 'PDF Export'];

  // بناء قائمة باستخدام Collection if و Spread (...)
  List<String> sidebarMenu = [
    'Home',
    'Profile',
    if (isSuperUser) 'Admin Dashboard',
    ...extraTools,
  ];

  print('Sidebar Menu Items: $sidebarMenu');

  // قائمة أسعار المنتجات
  List<double> itemPrices = [15.0, 48.0, 9.0, 120.0, 32.0];

  // 1. فلترة: المنتجات اللي سعرها فوق 20 بـ where
  var expensiveItems = itemPrices.where((p) => p > 20).toList();
  print('Items over \$20: $expensiveItems');

  // 2. تحويل: إضافة 10% مصاريف شحن لكل منتج بـ map
  var pricesWithShipping = itemPrices.map((p) => (p * 1.1).roundToDouble()).toList();
  print('Prices with 10% shipping: $pricesWithShipping');

  // 3. تجميع: إجمالي كل الأسعار بـ reduce
  double totalCart = itemPrices.reduce((total, price) => total + price);
  print('Cart Total: \$$totalCart');
}`,
        "output": `Sidebar Menu Items: [Home, Profile, Admin Dashboard, Analytics Tool, PDF Export]
Items over $20: [48.0, 120.0, 32.0]
Prices with 10% shipping: [17.0, 53.0, 10.0, 132.0, 35.0]
Cart Total: $224.0

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-sets-maps",
      "title": "المجموعات والقواميس (Sets & Maps)",
      "tags": [
        "sets",
        "maps",
        "json",
        "dictionary",
        "hashmap"
      ],
      "icon": "<i class=\"fa-solid fa-network-wired\"></i>",
      "description": "الـ Sets لمنع تكرار القيم، والـ Maps لتخزين أزواج Key-Value ومحاكاة الـ JSON القادم من الـ APIs",
      "content": `
        <h2>Sets و Maps في دارت</h2>
        <p>بجانب الـ Lists، دارت بتوفر بنيتين أساسيتين لتنظيم البيانات:</p>

        <h3>1. المجموعات (Sets)</h3>
        <p>الـ <code>Set<T></code> هي مجموعة عناصر <strong>مستحيل تتكرر فيها أي قيمة</strong>. لو حاولت تضيف عنصر موجود أصلاً، دارت هتتجاهله بهدوء. كمان فحص وجود عنصر بـ <code>.contains()</code> فيها سريع جداً بلحظات (O(1)) بفضل الـ Hash Table.</p>

        <h3>2. القواميس والخرائط (Maps)</h3>
        <p>الـ <code>Map<Key, Value></code> بتخزن البيانات في صورة (مفتاح وقيمة). دي الطريقة القياسية اللي بتمثل ملفات الـ JSON في Dart و Flutter، فغالباً كل استجابات السيرفر بتستقبلها كـ <code>Map<String, dynamic></code>.</p>
      `,
      "example": {
        "code": `void main() {
  // Set لمنع التكرار تلقائياً
  Set<String> userSkills = {'Dart', 'Flutter', 'Firebase', 'Flutter'};
  userSkills.add('Git');
  userSkills.add('Dart');

  print('Developer Skills (No duplicates): $userSkills');
  print('Mastered Flutter: \${userSkills.contains('Flutter') ? "Yes" : "No"}');

  // Map لمحاكاة استجابة API
  Map<String, dynamic> userProfileResponse = {
    'id': 1085,
    'fullName': 'Mostafa Qabeel',
    'title': 'Senior Mobile Architect',
    'isActive': true,
    'rating': 4.9,
    'contact': {
      'email': 'contact@codetech.dev',
      'phone': '+201090832443',
    },
    'tags': ['Flutter', 'Dart', 'NodeJS', 'Clean Architecture'],
  };

  print('\\n=== User Profile Response ===');
  print('Name: \${userProfileResponse['fullName']}');
  print('Title: \${userProfileResponse['title']}');
  print('Rating: \${userProfileResponse['rating']} / 5.0');
  print('Phone: \${userProfileResponse['contact']['phone']}');
  print('Tags: \${(userProfileResponse['tags'] as List).join(" | ")}');
}`,
        "output": `Developer Skills (No duplicates): {Dart, Flutter, Firebase, Git}
Mastered Flutter: Yes

=== User Profile Response ===
Name: Mostafa Qabeel
Title: Senior Mobile Architect
Rating: 4.9 / 5.0
Phone: +201090832443
Tags: Flutter | Dart | NodeJS | Clean Architecture

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-records-patterns",
      "title": "السجلات والأنماط في Dart 3 (Records & Patterns)",
      "tags": [
        "records",
        "patterns",
        "destructuring",
        "dart3",
        "multiple-return"
      ],
      "icon": "<i class=\"fa-solid fa-shapes\"></i>",
      "description": "ميزات Dart 3 الأحدث: ترجيع أكتر من قيمة من دالة واحدة وتفكيك البيانات Destructuring في سطر واحد",
      "content": `
        <h2>ثورة Dart 3: السجلات والأنماط</h2>
        <p>قبل Dart 3، لو كنت عايز دالة ترجع قيمتين في نفس الوقت (مثلاً خط العرض وخط الطول، أو رسالة الخطأ والبيانات)، كنت بتضطر تعمل كلاس كامل مخصوص أو ترجع List تفقد فيها أمان الأنواع.</p>

        <h3>1. السجلات (Records)</h3>
        <p>الـ Record هو قيمة مجمعة مجهولة الهوية وآمنة الأنواع 100%، بتكتبها بين قوسين عاديين <code>(...)</code> وتقدر تكون بباراميترات مرتبة أو مسماة.</p>

        <h3>2. تفكيك البيانات (Destructuring)</h3>
        <p>تقدر تفكك قيم الـ Record أو الـ Map أو الـ List في متغيرات مستقلة بسطر كود واحد أنيق وسريع!</p>
      `,
      "example": {
        "code": `// دالة ترجع Record فيه 3 قيم بأنواع مختلفة ومحمية
(String client, double currentBalance, bool isVip) fetchAccountSummary() {
  return ('Marwan El-Shafei', 18450.0, true);
}

// دالة ترجع Record بباراميترات مسماة
({double latitude, double longitude, String city}) getDeviceLocation() {
  return (latitude: 30.0444, longitude: 31.2357, city: 'Cairo');
}

void main() {
  // تفكيك السجل (Pattern Destructuring) في سطر واحد
  var (name, balance, isVip) = fetchAccountSummary();

  print('=== Record Destructuring ===');
  print('Client: $name');
  print('Balance: \$$balance');
  print('Tier: \${isVip ? "VIP Member" : "Standard Member"}');

  // استخدام السجل المسمى
  var loc = getDeviceLocation();
  print('\\nLocation: \${loc.city}');
  print('GPS Coordinates: (Lat: \${loc.latitude}, Long: \${loc.longitude})');
}`,
        "output": `=== Record Destructuring ===
Client: Marwan El-Shafei
Balance: $18450.0
Tier: VIP Member

Location: Cairo
GPS Coordinates: (Lat: 30.0444, Long: 31.2357)

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-exceptions",
      "title": "معالجة الأخطاء والاستثناءات (Exception Handling)",
      "tags": [
        "try",
        "catch",
        "throw",
        "finally",
        "exception",
        "errors"
      ],
      "icon": "<i class=\"fa-solid fa-triangle-exclamation\"></i>",
      "description": "إزاي تحمي تطبيقك من الانهيار عند حدوث أخطاء؟ try, catch, finally وصناعة Custom Exception احترافي",
      "content": `
        <h2>معالجة الأخطاء في العالم الحقيقي</h2>
        <p>في الشغل الحقيقي، وارد جداً النت يقطع، السيرفر يقع، أو المستخدم يدخل رقم في حقل نص. لو معالجتش الحالات دي، التطبيق هيكرش فوراً ويقفل في وش المستخدم.</p>

        <h3>أدوات صيد ومعالجة الأخطاء</h3>
        <ul>
          <li><code>try</code>: بنحط جواه الكود اللي شاكين إنه ممكن يفشل.</li>
          <li><code>on SpecificException</code>: للإمساك بنوع استثناء محدد بدقة (زي مشكلة رصيد غير كافي أو انقطاع شبكة).</li>
          <li><code>catch (e, stackTrace)</code>: للإمساك بالخطأ وطباعة مسار تتبعه عشان تعرف المشكلة حصلت في أنهي سطر بالظبط.</li>
          <li><code>finally</code>: كود بيتنفذ في جميع الأحوال (سواء حصل خطأ أو محصلش) عشان ينظف الموارد أو يقفل اللودينج.</li>
          <li><code>throw</code>: لرمي استثناء بنفسك لما شرط أمني يفشل.</li>
        </ul>
      `,
      "example": {
        "code": `// كلاس استثناء مخصص للعمليات المالية
class InsufficientFundsException implements Exception {
  final double requestedAmount;
  final double currentBalance;
  InsufficientFundsException(this.requestedAmount, this.currentBalance);

  @override
  String toString() => 'Current balance (\$$currentBalance) is insufficient for withdrawal (\$$requestedAmount)';
}

void processWithdrawal(double balance, double amount) {
  if (amount <= 0) {
    throw ArgumentError('Withdrawal amount must be greater than zero');
  }
  if (amount > balance) {
    throw InsufficientFundsException(amount, balance);
  }
  print('Withdrew \$$amount successfully. Remaining: \$\${balance - amount}');
}

void main() {
  double myAccountBalance = 2000.0;

  print('--- Attempt 1: Withdraw \$800 ---');
  try {
    processWithdrawal(myAccountBalance, 800.0);
  } catch (e) {
    print('Error: $e');
  }

  print('\\n--- Attempt 2: Withdraw \$3500 ---');
  try {
    processWithdrawal(myAccountBalance, 3500.0);
  } on InsufficientFundsException catch (e) {
    print('Captured Exception: $e');
  } catch (e) {
    print('General Error: $e');
  } finally {
    print('ATM transaction completed. Card returned to customer.');
  }
}`,
        "output": `--- Attempt 1: Withdraw $800 ---
Withdrew $800.0 successfully. Remaining: $1200.0

--- Attempt 2: Withdraw $3500 ---
Captured Exception: Current balance ($2000.0) is insufficient for withdrawal ($3500.0)
ATM transaction completed. Card returned to customer.

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-classes",
      "title": "مبادئ الـ OOP: الفئات والكائنات (Classes & Objects)",
      "tags": [
        "oop",
        "class",
        "object",
        "instance",
        "methods"
      ],
      "icon": "<i class=\"fa-solid fa-cube\"></i>",
      "description": "مدخل البرمجة كائنية التوجه، الفرق بين الـ Class والـ Object، وبناء كلاسات واقعية في Dart",
      "content": `
        <h2>مدخل إلى عالم البرمجة كائنية التوجه (OOP)</h2>
        <p>الـ OOP هي الطريقة اللي بننظم بيها مشاريعنا الكبيرة عشان تكون مفهومة وسهلة التطوير وقابلة للتوسع. في الـ OOP بنمثل كل كيان في التطبيق كـ "كائن" له خصائص وأفعال.</p>

        <h3>الفرق بين الـ Class والـ Object</h3>
        <ul>
          <li><strong>Class (الفئة):</strong> هو المخطط أو الـ Blueprint (زي تصميم رسم هندسي لعمارة سكنية في الورق).</li>
          <li><strong>Object (الكائن):</strong> هو العمارة الحقيقية اللي اتبنت في الواقع وخدت مكان في الذاكرة (Instance).</li>
          <li><strong>Fields (الخصائص):</strong> البيانات اللي بتوصف حالة الكائن (زي الاسم، السعر، اللون).</li>
          <li><strong>Methods (السلوكيات):</strong> الوظائف والدوال اللي الكائن يقدر ينفذها (زي تسجيل الدخول، الشحن، الحفظ).</li>
        </ul>
      `,
      "example": {
        "code": `class SmartPhone {
  // خصائص الكائن
  String brand;
  String model;
  int batteryLevel;
  bool isScreenLocked = true;

  // المشيد لبناء الكائن
  SmartPhone(this.brand, this.model, this.batteryLevel);

  // ميثودز وسلوكيات الكائن
  void unlockDevice() {
    isScreenLocked = false;
    print('Unlocked screen for $brand $model');
  }

  void chargeBattery(int addedPercent) {
    batteryLevel = (batteryLevel + addedPercent).clamp(0, 100);
    print('Charged $brand $model. Battery level: $batteryLevel%');
  }
}

void main() {
  // إنشاء كائنات مستقلة في الذاكرة من الكلاس
  var phone1 = SmartPhone('Samsung', 'Galaxy S25 Ultra', 50);
  var phone2 = SmartPhone('Apple', 'iPhone 16 Pro Max', 85);

  print('=== Testing Phone 1 ===');
  phone1.unlockDevice();
  phone1.chargeBattery(30);

  print('\\n=== Testing Phone 2 ===');
  print('Lock Status for \${phone2.model}: \${phone2.isScreenLocked ? "Locked" : "Unlocked"}');
  print('Battery Level for \${phone2.model}: \${phone2.batteryLevel}%');
}`,
        "output": `=== Testing Phone 1 ===
Unlocked screen for Samsung Galaxy S25 Ultra
Charged Samsung Galaxy S25 Ultra. Battery level: 80%

=== Testing Phone 2 ===
Lock Status for iPhone 16 Pro Max: Locked
Battery Level for iPhone 16 Pro Max: 85%

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-constructors",
      "title": "المشيدات بأنواعها (Constructors Masterclass)",
      "tags": [
        "constructors",
        "named",
        "factory",
        "const",
        "generative"
      ],
      "icon": "<i class=\"fa-solid fa-hammer\"></i>",
      "description": "المشيدات الافتراضية، المشيدات المسماة Named، مشيدات Factory لتحويل JSON، ومشيدات Const لتوفير الرام",
      "content": `
        <h2>المشيدات (Constructors) في Dart</h2>
        <p>المشيد هو أول دالة بتشتغل وقت ولادة الكائن في الذاكرة. دارت فيها أنواع مشيدات قوية ومختلفة عن باقي اللغات:</p>
        
        <h3>أنواع المشيدات الأساسية:</h3>
        <ul>
          <li><strong>Generative Constructor:</strong> المشيد البسيط المختصر باستخدام <code>this</code>: <code>User(this.name, this.email);</code>.</li>
          <li><strong>Named Constructors:</strong> كلاس واحد ممكن يكون له أكتر من طريقة إنشاء مسمّاة (زي <code>User.guest()</code> أو <code>User.fromPhone()</code>).</li>
          <li><strong>Factory Constructors:</strong> المشيد اللي بيستخدم كلمة <code>factory</code>، ومش بالضرورة يعمل كائن جديد كل مرة؛ ممكن يرجع كائن متسجل مسبقاً (Cache) أو يحول استجابة JSON لكائن.</li>
          <li><strong>Const Constructors:</strong> لبناء كائنات ثابتة في الذاكرة (وهي المفتاح الأهم في تسريع ويدجتس فلاتر).</li>
        </ul>
      `,
      "example": {
        "code": `class AppUser {
  final int id;
  final String displayName;
  final String role;

  // 1. المشيد الأساسي الثابت
  const AppUser({
    required this.id,
    required this.displayName,
    required this.role,
  });

  // 2. مشيد مسمى لحسابات الضيوف
  AppUser.anonymous()
      : id = 0,
        displayName = 'Guest User',
        role = 'guest';

  // 3. مشيد Factory لتحويل JSON
  factory AppUser.fromJson(Map<String, dynamic> json) {
    return AppUser(
      id: json['id'] as int,
      displayName: json['name'] as String,
      role: json['role'] as String? ?? 'member',
    );
  }

  void printDetails() {
    print('User: $displayName (#$id) - Role: $role');
  }
}

void main() {
  // بناء باستخدام المشيد العادي
  const admin = AppUser(id: 1, displayName: 'Mostafa Qabeel', role: 'SuperAdmin');
  admin.printDetails();

  // بناء باستخدام المشيد المسمى
  var guest = AppUser.anonymous();
  guest.printDetails();

  // بناء كائن من استجابة API
  var apiData = {'id': 104, 'name': 'Ahmed Abdullah', 'role': 'subscriber'};
  var apiUser = AppUser.fromJson(apiData);
  apiUser.printDetails();
}`,
        "output": `User: Mostafa Qabeel (#1) - Role: SuperAdmin
User: Guest User (#0) - Role: guest
User: Ahmed Abdullah (#104) - Role: subscriber

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-encapsulation",
      "title": "التغليف والخصائص (Encapsulation, Getters & Setters)",
      "tags": [
        "encapsulation",
        "private",
        "getters",
        "setters",
        "security"
      ],
      "icon": "<i class=\"fa-solid fa-user-shield\"></i>",
      "description": "حماية البيانات وجعل المتغيرات خاصة بـ _ واستخدام get و set للتحقق من صحة الدخل بأمان",
      "content": `
        <h2>التغليف (Encapsulation): حماية بياناتك</h2>
        <p>التغليف هو مبدأ إخفاء البيانات الحساسة داخل الكائن ومنع التعديل العشوائي عليها من برة، والسماح بالوصول إليها فقط عبر بوابات آمنة (Getters & Setters).</p>

        <div class="info-box">
          <strong>🔒 المتغيرات الخاصة (Private) في Dart:</strong>
          في دارت مفيش كلمات زي <code>private</code> أو <code>public</code>. عشان تخلي متغير أو دالة خاصة، بتبدأ اسمها بـ <strong>Underscore <code>_</code></strong> (زي <code>_balance</code>).
          <br>
          <em>ملحوظة ذهبية:</em> الخصوصية في دارت بتكون على مستوى <strong>الملف (Library-private)</strong> مش على مستوى الكلاس فقط؛ يعني لو كود تاني في نفس الملف هيقدر يشوفها، لكن أي ملف تاني مستحيل يقدر يوصلها مباشرة!
        </div>
      `,
      "example": {
        "code": `class BankWallet {
  final String walletId;
  String _customerName; // متغير خاص ومحمي
  double _balance = 0.0; // متغير خاص ومحمي

  BankWallet(this.walletId, this._customerName, double startBalance) {
    if (startBalance > 0) _balance = startBalance;
  }

  // Getter لقراءة الرصيد بأمان
  double get balance => _balance;

  // Getter لإخفاء جزء من الاسم
  String get maskedName => '\${_customerName.substring(0, 3)}***';

  // Setter لتغيير الاسم مع التحقق
  set customerName(String newName) {
    if (newName.trim().length >= 3) {
      _customerName = newName.trim();
      print('Updated wallet owner name to: \$_customerName');
    } else {
      print('Validation error: Name must have at least 3 characters');
    }
  }

  void addFunds(double amount) {
    if (amount <= 0) return print('Invalid deposit amount');
    _balance += amount;
    print('Deposited \\\$\$amount successfully. New balance: \\\$\$_balance');
  }
}

void main() {
  var wallet = BankWallet('WAL-2026', 'Saeed Mahmoud', 4000.0);
  print('Wallet ID: \${wallet.walletId}');
  print('Masked Name: \${wallet.maskedName}');
  print('Available Balance: \\\$\${wallet.balance}');

  wallet.addFunds(1500.0);
  wallet.customerName = 'S'; // هيفشل في التحقق
  wallet.customerName = 'Saeed Mahmoud Abdel-Aal'; // هينجح
}`,
        "output": `Wallet ID: WAL-2026
Masked Name: Sae***
Available Balance: $4000.0
Deposited $1500.0 successfully. New balance: $5500.0
Validation error: Name must have at least 3 characters
Updated wallet owner name to: Saeed Mahmoud Abdel-Aal

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-inheritance",
      "title": "الوراثة وتعدد الأشكال (Inheritance & Polymorphism)",
      "tags": [
        "inheritance",
        "extends",
        "super",
        "override",
        "polymorphism"
      ],
      "icon": "<i class=\"fa-solid fa-sitemap\"></i>",
      "description": "الوراثة بـ extends، استدعاء الأب بـ super، إعادة التعريف بـ @override، وتعدد الأشكال في Dart",
      "content": `
        <h2>الوراثة وتعدد الأشكال</h2>
        <p>الوراثة بتخليك تبني كلاس فرعي (Child) يورث كل صفات ودوال كلاس أساسي (Parent) باستخدام كلمة <code>extends</code>، وده بيمنع تكرار الكود نهائياً.</p>
        <ul>
          <li><code>super</code>: بنستخدمها لما نحب ننادي مشيد الكلاس الأب أو نستدعي دالة من الكلاس الأب.</li>
          <li><code>@override</code>: بنحطها فوق الدالة لما نحب نغير أو نعيد كتابة سلوك الدالة اللي ورثناها من الأب بشكل يناسب الابن.</li>
          <li><strong>Polymorphism (تعدد الأشكال):</strong> إنك تعامل كائنات من أبناء مختلفين كأنهم كائن من نفس النوع الأب المشترك بينهم.</li>
        </ul>
      `,
      "example": {
        "code": `// الكلاس الأساسي المشترك
abstract class Employee {
  final String name;
  final double baseSalary;

  Employee(this.name, this.baseSalary);

  // دالة مجردة كل ابن هيحسبها بطريقته الخاصة
  double calculateMonthlyPay();

  void showSummary() {
    print('Employee: $name | Total Compensation: \$\${calculateMonthlyPay()}');
  }
}

// كلاس فرعي: مهندس برمجيات
class SoftwareEngineer extends Employee {
  final double projectBonus;

  SoftwareEngineer(String name, double baseSalary, this.projectBonus)
      : super(name, baseSalary);

  @override
  double calculateMonthlyPay() => baseSalary + projectBonus;
}

// كلاس فرعي: مسؤول مبيعات
class SalesRepresentative extends Employee {
  final double commissionAmount;

  SalesRepresentative(String name, double baseSalary, this.commissionAmount)
      : super(name, baseSalary);

  @override
  double calculateMonthlyPay() => baseSalary + commissionAmount;
}

void main() {
  // تعدد الأشكال Polymorphism
  List<Employee> companyStaff = [
    SoftwareEngineer('Tarek Selim', 5000.0, 1500.0),
    SalesRepresentative('Kareem Radwan', 3000.0, 2200.0),
  ];

  print('=== Company Payroll Summary ===');
  for (var emp in companyStaff) {
    emp.showSummary();
  }
}`,
        "output": `=== Company Payroll Summary ===
Employee: Tarek Selim | Total Compensation: $6500.0
Employee: Kareem Radwan | Total Compensation: $5200.0

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-abstract-interfaces",
      "title": "الفئات المجردة والواجهات (Abstract Classes & Interfaces)",
      "tags": [
        "abstract",
        "interface",
        "implements",
        "clean-architecture",
        "contract"
      ],
      "icon": "<i class=\"fa-solid fa-file-contract\"></i>",
      "description": "عقود العمل البرمجية، الـ Abstract Class والـ Interface وفصل الاعتمادات لتسهيل الـ Testing",
      "content": `
        <h2>الكلاسات المجردة والإنترفيس</h2>
        <p>الـ <strong>Abstract Class</strong> هو كلاس لا يمكن إنشاء كائن منه بشكل مباشر؛ وظيفته إنه يشتغل كـ <em>عقد (Contract)</em> يحدد القواعد والدوال اللي لازم أي كلاس تاني ينفذها.</p>

        <div class="info-box">
          <strong>💡 ملحوظة هامة في Dart:</strong>
          دارت مفيهاش كلمة <code>interface</code> منفصلة؛ كل كلاس في دارت بيشتغل كـ Interface تلقائياً تقدر تستخدم معاه كلمة <strong><code>implements</code></strong> وتلتزم بتنفيذ كل دواله وخصائصه بدون ما تورث أكواده الداخلية!
        </div>
      `,
      "example": {
        "code": `// عقد بوابة الدفع في المتجر الإلكتروني
abstract class PaymentProvider {
  Future<bool> executePayment(double amount);
  String get providerDisplayName;
}

// تطبيق العقد للدفع ببطاقة فيزا
class StripeCardProvider implements PaymentProvider {
  @override
  String get providerDisplayName => 'Credit Card (Stripe Visa / Mastercard)';

  @override
  Future<bool> executePayment(double amount) async {
    print('[Stripe] Encrypting and authorizing charge of \\\$\$amount...');
    return true;
  }
}

// تطبيق العقد للدفع بالمحافظ الإلكترونية
class SmartWalletProvider implements PaymentProvider {
  @override
  String get providerDisplayName => 'Smart Wallet (Digital Payment)';

  @override
  Future<bool> executePayment(double amount) async {
    print('[Wallet] Sending push notification for \\\$\$amount charge...');
    return true;
  }
}

void main() async {
  // تبديل بوابة الدفع بكل سهولة
  PaymentProvider payment = StripeCardProvider();
  print('Current Gateway: \${payment.providerDisplayName}');
  await payment.executePayment(240.0);

  payment = SmartWalletProvider();
  print('\\nCurrent Gateway: \${payment.providerDisplayName}');
  await payment.executePayment(45.0);
}`,
        "output": `Current Gateway: Credit Card (Stripe Visa / Mastercard)
[Stripe] Encrypting and authorizing charge of $240.0...

Current Gateway: Smart Wallet (Digital Payment)
[Wallet] Sending push notification for $45.0 charge...

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-mixins",
      "title": "الميكسن والخلط السلوكي (Mixins & with)",
      "tags": [
        "mixin",
        "with",
        "multiple-inheritance",
        "composition",
        "flutter-animation"
      ],
      "icon": "<i class=\"fa-solid fa-blender\"></i>",
      "description": "إعادة استخدام السلوكيات عبر الكلاسات وحل مشكلة الوراثة المتعددة بكلمة mixin و with",
      "content": `
        <h2>إيه هو الـ Mixin؟</h2>
        <p>في لغات البرمجة، الوراثة المتعددة (إن الكلاس يورث من كلاسين في نفس الوقت) بتعمل مشاكل مشهورة اسمها The Diamond Problem، عشان كدة Dart بتمنع الوراثة من أكتر من كلاس واحد.</p>
        <p>بدلاً من كدة، Dart بتقدم ميزة عبقرية اسمها <strong>Mixin</strong> باستخدام كلمة <code>with</code>: هي كبسولة سلوكيات ووظائف تقدر تركبها على أي كلاس مهما كانت شجرة عيلته!</p>
        <p>في Flutter بنستخدم الـ Mixin في كل مكان، أشهرهم <code>SingleTickerProviderStateMixin</code> لعمل الأنيميشن الرائع.</p>
      `,
      "example": {
        "code": `// ميكسن لإضافة قدرة التسجيل وطباعة اللوجز
mixin ActivityLogger {
  void logEvent(String eventName) {
    print('[LOG]: $eventName | Time: \${DateTime.now().second}s');
  }
}

// ميكسن لإضافة قدرة التشفير
mixin DataEncryptor {
  String encrypt(String plainText) {
    return 'ENC(\${plainText.split('').reversed.join()})';
  }
}

// كلاس بيستخدم الاثنين معاً بكلمة with
class AuthenticationService with ActivityLogger, DataEncryptor {
  void login(String username, String password) {
    logEvent('Login attempt for user: $username');
    String securePassword = encrypt(password);
    logEvent('Stored encrypted password: $securePassword');
    logEvent('Authentication verified successfully');
  }
}

void main() {
  var auth = AuthenticationService();
  auth.login('mostafa_qa', 'SecretPass2026');
}`,
        "output": `[LOG]: Login attempt for user: mostafa_qa | Time: 0s
[LOG]: Stored encrypted password: ENC(6202ssaPterceS) | Time: 0s
[LOG]: Authentication verified successfully | Time: 0s

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-extensions",
      "title": "دوال التوسيع بدون وراثة (Extension Methods)",
      "tags": [
        "extension",
        "methods",
        "clean-code",
        "string",
        "helpers"
      ],
      "icon": "<i class=\"fa-solid fa-puzzle-piece\"></i>",
      "description": "إضافة دوال جديدة لكلاسات دارت وفلاتر الجاهزة (زي String و DateTime) بدون تعديل الكود الأصلي",
      "content": `
        <h2>دوال التوسيع (Extension Methods)</h2>
        <p>كتير بتحتاج دوال مساعدة معينة، مثلاً تفحص هل الـ String إيميل سليم؟ أو تحول رقم لسعر بالدولار؟</p>
        <p>زمان كنت بتضطر تعمل كلاس Utilities وتنادي <code>Utils.isValidEmail(text)</code>. في Dart، تقدر تعمل <strong>Extension</strong> يضيف الدالة دي مباشرة جوة كلاس <code>String</code> نفسه، فتقدر تكتب: <code>text.isValidEmail</code> وكأنها دالة أصلية من Google!</p>
      `,
      "example": {
        "code": `// توسيع كلاس String لإضافة وظائف فحص وتنسيق
extension SmartStringExtension on String {
  // فحص هل النص إيميل صالح
  bool get isValidEmail => RegExp(r'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$').hasMatch(this);

  // تنسيق السعر بالدولار
  String get inUSD => '\\\$\$this USD';

  // تكبير أول حرف
  String get capitalize => isEmpty ? this : this[0].toUpperCase() + substring(1);
}

void main() {
  String userEmail1 = 'support@codetech.dev';
  String userEmail2 = 'not-an-email';

  print('Is "$userEmail1" valid email: \${userEmail1.isValidEmail ? "Yes" : "No"}');
  print('Is "$userEmail2" valid email: \${userEmail2.isValidEmail ? "Yes" : "No"}');

  String coursePrice = '145';
  print('Course Fee: \${coursePrice.inUSD}');

  String techName = 'flutter';
  print('Technology: \${techName.capitalize}');
}`,
        "output": `Is "support@codetech.dev" valid email: Yes
Is "not-an-email" valid email: No
Course Fee: $145 USD
Technology: Flutter

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-generics",
      "title": "الأنماط العامة (Generics: <T>)",
      "tags": [
        "generics",
        "type-safety",
        "templates",
        "reusability"
      ],
      "icon": "<i class=\"fa-solid fa-code-compare\"></i>",
      "description": "بناء كلاسات ودوال مرنة وآمنة برمجياً تتعامل مع أي نوع داتا <T> مع حماية الأنواع وقت الكومبايل",
      "content": `
        <h2>إيه هي الـ Generics؟</h2>
        <p>الـ Generics بتخليك تكتب كود يعيد استخدام نفسه مع <strong>أي نوع بيانات</strong> بدلاً من تكرار الكود لكل نوع (نوع أرقام، نوع نصوص، نوع كائنات)، مع الاحتفاظ بـ 100% من أمان الأنواع الصارمة (Type Safety).</p>
        <p>الحرف <code>T</code> هو اختصار لكلمة Type، وبيمثل النوع اللي هيتحدد وقت الاستدعاء الفعلي.</p>
      `,
      "example": {
        "code": `// كلاس استجابة موحد لأي API في التطبيق
class NetworkResult<T> {
  final bool isSuccess;
  final String message;
  final T? payload;

  NetworkResult.success(this.payload, {this.message = 'Data fetched successfully'})
      : isSuccess = true;

  NetworkResult.error(this.message)
      : isSuccess = false,
        payload = null;
}

void main() {
  // استجابة تحمل قائمة من النصوص
  var tagsResult = NetworkResult<List<String>>.success(
    ['Dart', 'Flutter', 'AI Integration'],
    message: 'Tags loaded successfully',
  );

  // استجابة تحمل كائناً رقمياً
  var balanceResult = NetworkResult<double>.success(28450.50);

  print('Tags Request Message: \${tagsResult.message}');
  print('Loaded Tags: \${tagsResult.payload}');

  print('\\nBalance Request Message: \${balanceResult.message}');
  print('Received Balance: \\\$\${balanceResult.payload}');
}`,
        "output": `Tags Request Message: Tags loaded successfully
Loaded Tags: [Dart, Flutter, AI Integration]

Balance Request Message: Data fetched successfully
Received Balance: $28450.5

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-enums",
      "title": "التعدادات المحسنة في Dart 3 (Enhanced Enums)",
      "tags": [
        "enums",
        "enhanced-enums",
        "dart3",
        "constants"
      ],
      "icon": "<i class=\"fa-solid fa-tags\"></i>",
      "description": "الـ Enums في Dart 3: كلاسات متكاملة تحتوي على خصائص وميثودز ومشيدات لتنظيم حالات التطبيق",
      "content": `
        <h2>Enhanced Enums في Dart 3</h2>
        <p>زمان كانت الـ Enums في اللغات مجرد قائمة أسماء ثابتة (زي أيام الأسبوع). في Dart 3، الـ Enum أصبح <strong>Class حقيقي</strong> تقدر تديله خصائص وميثودز ومشيدات <code>const</code> ودوال مساعدة!</p>
      `,
      "example": {
        "code": `enum MembershipTier {
  standard(discountPercent: 0, uploadLimitMb: 50, title: 'Standard Free Tier'),
  premium(discountPercent: 15, uploadLimitMb: 500, title: 'Premium Silver Tier'),
  enterprise(discountPercent: 30, uploadLimitMb: 2048, title: 'Enterprise Gold Tier');

  final int discountPercent;
  final int uploadLimitMb;
  final String title;

  const MembershipTier({
    required this.discountPercent,
    required this.uploadLimitMb,
    required this.title,
  });

  double applyDiscount(double originalPrice) {
    return originalPrice - (originalPrice * (discountPercent / 100));
  }
}

void main() {
  for (var tier in MembershipTier.values) {
    print('=== \${tier.title} ===');
    print('Discount: \${tier.discountPercent}%');
    print('Storage Limit: \${tier.uploadLimitMb} MB');
    print('Price for \\\$100 course after discount: \\\$\${tier.applyDiscount(100.0)}\\n');
  }
}`,
        "output": `=== Standard Free Tier ===
Discount: 0%
Storage Limit: 50 MB
Price for $100 course after discount: $100.0

=== Premium Silver Tier ===
Discount: 15%
Storage Limit: 500 MB
Price for $100 course after discount: $85.0

=== Enterprise Gold Tier ===
Discount: 30%
Storage Limit: 2048 MB
Price for $100 course after discount: $70.0

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-async-futures",
      "title": "البرمجة غير المتزامنة (Async, Await & Futures)",
      "tags": [
        "async",
        "await",
        "future",
        "event-loop",
        "api",
        "http"
      ],
      "icon": "<i class=\"fa-solid fa-clock\"></i>",
      "description": "إزاي تتعامل مع العمليات اللي بتاخد وقت زي طلبات السيرفر وقواعد البيانات بدون تجميد واجهة التطبيق",
      "content": `
        <h2>البرمجة غير المتزامنة (Asynchronous Programming)</h2>
        <p>تخيل لو بتعمل طلب للإنترنت بياخد ثانيتين، وتطبيقك وقف متجمد ومبيستجبش للمس الشاشة لحد ما الرد يرجع! دي أسوأ تجربة ممكنة.</p>
        <p>دارت لغة أحادية المسار (Single-Threaded) بس غير حاجزة (Non-Blocking) بفضل الـ <strong>Event Loop</strong>. الـ <code>Future<T></code> هو وعد بأن فيه قيمة هتتوفر في المستقبل.</p>
        <p>باستخدام كلمتي <code>async</code> و <code>await</code>، بنكتب الكود وكأنه متزامن خطوة بخطوة بطريقة سلسة وسهلة القراءة جداً.</p>
      `,
      "example": {
        "code": `// محاكاة دالة تجلب بيانات المستخدم من سيرفر خارجي
Future<Map<String, dynamic>> fetchServerProfile(int userId) async {
  print('[HTTP GET] Connecting to remote server for user #$userId...');
  // محاكاة تأخير الشبكة 400 ميلي ثانية
  await Future.delayed(Duration(milliseconds: 400));
  return {
    'userId': userId,
    'engineerName': 'Mostafa Qabeel',
    'specialty': 'Cross-Platform Mobile and Web Development',
  };
}

void main() async {
  print('1. Program initialization');

  try {
    var profile = await fetchServerProfile(101);
    print('2. Data received successfully:');
    print('   Name: \${profile['engineerName']}');
    print('   Specialty: \${profile['specialty']}');
  } catch (error) {
    print('Error occurred during connection: $error');
  }

  print('3. Finished execution smoothly without blocking UI');
}`,
        "output": `1. Program initialization
[HTTP GET] Connecting to remote server for user #101...
2. Data received successfully:
   Name: Mostafa Qabeel
   Specialty: Cross-Platform Mobile and Web Development
3. Finished execution smoothly without blocking UI

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-async-streams",
      "title": "التدفقات التفاعلية (Streams & StreamController)",
      "tags": [
        "stream",
        "stream-controller",
        "async*",
        "yield",
        "bloc",
        "reactive"
      ],
      "icon": "<i class=\"fa-solid fa-water\"></i>",
      "description": "التدفقات الحية للبيانات المستمرة، استخدام async* و yield، وأساس إدارة الحالة التفاعلية في Flutter",
      "content": `
        <h2>التدفقات التفاعلية (Streams)</h2>
        <p>لو الـ <code>Future</code> بيجيبلك قيمة واحدة بس في المستقبل، فالـ <strong>Stream</strong> هو ماسورة بيانات حية بينزل منها قيم متعددة ومتتالية على مدار الوقت!</p>
        <p>أمثلة حقيقية في التطبيقات: رسائل الشات الحية في واتساب، إحداثيات الـ GPS لمندوب التوصيل في أوبر، أو نمط الـ BLoC لإدارة حالة الشاشات في فلاتر.</p>
        <p>بتستخدم <code>async*</code> مع <code>yield</code> لضخ القيم في التدفق واحدة ورا التانية.</p>
      `,
      "example": {
        "code": `import 'dart:async';

// دالة تولد تدفق عد تنازلي حي باستخدام async* و yield
Stream<int> launchCountdown(int startSeconds) async* {
  for (int i = startSeconds; i >= 1; i--) {
    await Future.delayed(Duration(milliseconds: 250));
    yield i; // إرسال القيمة الحالية في الـ Stream
  }
}

void main() async {
  print('Starting live countdown stream:');

  // الاستماع للـ Stream خطوة بخطوة باستخدام await for
  await for (var second in launchCountdown(5)) {
    print('Remaining time: $second seconds...');
  }

  print('Release deployed successfully to all platforms.');
}`,
        "output": `Starting live countdown stream:
Remaining time: 5 seconds...
Remaining time: 4 seconds...
Remaining time: 3 seconds...
Remaining time: 2 seconds...
Remaining time: 1 seconds...
Release deployed successfully to all platforms.

Process finished with exit code 0`
      }
    },
    {
      "id": "dart-oop-project",
      "title": "مشروع تطبيقي معماري شامل (E-Commerce Clean Architecture)",
      "tags": [
        "project",
        "architecture",
        "ecommerce",
        "solid",
        "oop",
        "enterprise"
      ],
      "icon": "<i class=\"fa-solid fa-store\"></i>",
      "description": "مشروع عملي متكامل لنظام متجر إلكتروني يجمع كل مفاهيم Dart و OOP والـ Clean Architecture",
      "content": `
        <h2>المشروع النهائي: معمارية متجر إلكتروني متكامل</h2>
        <p>في هذا المشروع المعماري الشامل، بنجمع كل المهارات اللي اتعلمناها في مرجع Dart في كود واحد احترافي يتبع معايير هندسة البرمجيات العالمية:</p>
        <ul>
          <li>Classes, Constructors & Const</li>
          <li>Enums & Enhanced Methods</li>
          <li>Null Safety & Defensive Programming</li>
          <li>Functional Lists (reduce, fold, map)</li>
          <li>Clean Business Logic & Separation of Concerns</li>
        </ul>
      `,
      "example": {
        "code": `enum PaymentMethod { cashOnDelivery, creditCard, digitalWallet }

class StoreProduct {
  final int id;
  final String title;
  final double unitPrice;

  const StoreProduct({
    required this.id,
    required this.title,
    required this.unitPrice,
  });
}

class CartItem {
  final StoreProduct product;
  int quantity;

  CartItem({required this.product, this.quantity = 1});

  double get totalPrice => product.unitPrice * quantity;
}

class CustomerOrder {
  final int orderId;
  final List<CartItem> items;
  final PaymentMethod paymentMethod;
  final DateTime orderDate;

  CustomerOrder({
    required this.orderId,
    required this.items,
    required this.paymentMethod,
  }) : orderDate = DateTime.now();

  double get subtotal => items.fold(0.0, (sum, item) => sum + item.totalPrice);
  double get shippingFee => subtotal > 100 ? 0.0 : 15.0; // شحن مجاني للطلبات فوق 100 دولار
  double get finalTotal => subtotal + shippingFee;

  void printOrderInvoice() {
    print('==================================================');
    print('Order Invoice #$orderId');
    print('Payment Method: \${paymentMethod.name.toUpperCase()}');
    print('Purchased Items:');
    for (var item in items) {
      print('  - \${item.product.title} (x\${item.quantity}): \\\$\${item.totalPrice}');
    }
    print('--------------------------------------------------');
    print('Subtotal: \\\$\$subtotal');
    print('Shipping Fee: \${shippingFee == 0.0 ? "Free Shipping" : "\\\$\$shippingFee"}');
    print('Final Total Due: \\\$\$finalTotal');
    print('==================================================');
  }
}

void main() {
  print('CodeTech Store Order Management System\\n');

  var product1 = StoreProduct(id: 101, title: 'Mechanical Keyboard', unitPrice: 85.0);
  var product2 = StoreProduct(id: 102, title: 'Wireless Ergonomic Mouse', unitPrice: 45.0);
  var product3 = StoreProduct(id: 103, title: '27-inch 165Hz Monitor', unitPrice: 280.0);

  var order = CustomerOrder(
    orderId: 2026994,
    items: [
      CartItem(product: product1, quantity: 1),
      CartItem(product: product2, quantity: 2),
      CartItem(product: product3, quantity: 1),
    ],
    paymentMethod: PaymentMethod.creditCard,
  );

  order.printOrderInvoice();
  print('\\nOrder confirmed successfully. Dispatch notification sent to customer.');
}`,
        "output": `CodeTech Store Order Management System

==================================================
Order Invoice #2026994
Payment Method: CREDITCARD
Purchased Items:
  - Mechanical Keyboard (x1): $85.0
  - Wireless Ergonomic Mouse (x2): $90.0
  - 27-inch 165Hz Monitor (x1): $280.0
--------------------------------------------------
Subtotal: $455.0
Shipping Fee: Free Shipping
Final Total Due: $455.0
==================================================

Order confirmed successfully. Dispatch notification sent to customer.

Process finished with exit code 0`
      }
    }
  ]
};