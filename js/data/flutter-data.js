/**
 * Flutter Framework Reference Data - CodeTech
 * مرجع إطار عمل فلاتر الشامل - الأساسيات، الواجهات، إدارة الحالة، وحزم pub.dev
 * إعداد: المهندس مصطفى جمال قابيل
 */

const FLUTTER_DATA = {
  "category": "Flutter",
  "icon": "<i class=\"fa-brands fa-flutter\"></i>",
  "description": "إطار عمل Google الرائد لبناء تطبيقات موبايل (Android & iOS) وويب وديسكتوب بكود واحد فائق السرعة",
  "topics": [
    {
      "id": "flutter-intro",
      "title": "مقدمة في Flutter ومحرك Impeller وفلسفة الـ Widgets",
      "tags": [
        "مقدمة",
        "flutter",
        "widgets",
        "impeller",
        "skia",
        "hot reload",
        "google"
      ],
      "icon": "<i class=\"fa-brands fa-flutter\"></i>",
      "description": "إيه هي Flutter؟ وإزاي بتشغل كود واحد على كل المنصات بدون JavaScript Bridge وبمعدل 120 فريم؟",
      "content": `
        <h2>إيه هي Flutter بالبلدي كده؟</h2>
        <p>بص يا سيدي، <strong>Flutter</strong> ده مش مجرد مكتبة؛ ده <em>UI Software Development Kit (SDK)</em> كامل طوّرته شركة <strong>Google</strong> سنة 2017 ومستمر في التطور الصاروخي. الفكرة العبقرية فيه إنك بتكتب <strong>كود واحد بلغة Dart</strong>، وفلاتر بتطلعلك تطبيقات أصلية (Native) تماماً بتشتغل على:</p>
        <ul>
          <li><strong>Android</strong> (بتترجم لـ ARM Machine Code مباشر).</li>
          <li><strong>iOS</strong> (بتترجم لـ ARM64 أصلي موافق لمعايير Apple بدقة).</li>
          <li><strong>Web</strong> (بتترجم لـ WebAssembly أو CanvasKit فائق السرعة).</li>
          <li><strong>Desktop</strong> (Windows, macOS, Linux).</li>
        </ul>

        <div class="info-box">
          <strong>💡 ليه فلاتر أسرع من باقي أطر العمل الهجينة (Cross-Platform)؟</strong>
          زمان لما كنت تشتغل بـ React Native أو Cordova، كان التطبيق بيحتاج وسيط اسمه <em>JavaScript Bridge</em> عشان يتكلم مع أزرار وعناصر الموبايل الأصلية، وده كان بيعمل تهنيج ولاج وقت الأحمال العالية.
          <br><br>
          فلاتر عملت ثورة! <strong>فلاتر مبتستخدمش عناصر النظام أصلاً!</strong> فلاتر معاها محرك رسم خاص بيها فائق القوة اسمه <strong>Impeller</strong> (وكان قبله Skia)، بيتحكم في كل بكسل على الشاشة مباشرة عن طريق الـ GPU والـ Metal/Vulkan. يعني فلاتر زي محرك ألعاب (زي Unity) بس مخصص لتطبيقات الأعمال؛ بتضمنلك ثبات 60 إلى 120 فريم في الثانية بدون أي لاج!
        </div>

        <h3>القاعدة الذهبية في فلاتر: Everything is a Widget!</h3>
        <p>في فلاتر، أي حاجة بتشوفها أو بتتحكم في مكانها هي عبارة عن <strong>Widget</strong>:</p>
        <ul>
          <li>النص اللي بتقرأه: <code>Text</code>.</li>
          <li>الزرار اللي بتدوس عليه: <code>ElevatedButton</code>.</li>
          <li>الصورة: <code>Image</code>.</li>
          <li>حتى المسافات والتنسيق والمحاذاة: <code>Padding</code>, <code>Center</code>, <code>SizedBox</code> كلها ودجتس!</li>
        </ul>

        <h3>دالة main والبداية بأبسط تطبيق فلاتر</h3>
        <p>كل تطبيق فلاتر بيبدأ بدالة <code>main()</code> اللي بتنادي دالة سحرية اسمها <code>runApp()</code>، ومهمتها تاخد الـ Root Widget وترسمه على الشاشة:</p>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما هو محرك Impeller ولماذا تخلت Flutter عن Skia لحل مشكلة الـ Shader Compilation Jank؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> محرك Impeller هو محرك رسم متطور من Google يعتمد على تجهيز ورسم الشاشات مباشرة بالـ GPU مع عمل Pre-compilation للـ Shaders مسبقاً، مما قضى نهائياً على التهنيجة الأولى (Early Jank) وضمن ثبات معدل الفريمات على 60 إلى 120 FPS.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

// نقطة الانطلاق الأساسية للتطبيق
void main() {
  runApp(const MyFirstFlutterApp());
}

// أبسط Widget في فلاتر (StatelessWidget)
class MyFirstFlutterApp extends StatelessWidget {
  const MyFirstFlutterApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'CodeTech Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blueAccent),
        useMaterial3: true,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('أول تطبيق فلاتر 🚀'),
          centerTitle: true,
          backgroundColor: Colors.blueAccent,
          foregroundColor: Colors.white,
        ),
        body: const Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.flutter_dash, size: 80, color: Colors.blueAccent),
              SizedBox(height: 20),
              Text(
                'أهلاً بيك في عالم فلاتر مع مصطفى قابيل!',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 10),
              Text(
                'Everything is a Widget in Flutter',
                style: TextStyle(color: Colors.grey),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,
        "output": `Running "flutter pub get" in my_first_flutter_app...
Launching lib/main.dart on Android SDK built for x86_64 in debug mode...
✓ Built build/app/outputs/flutter-apk/app-debug.apk.
Connecting to VM Service at ws://127.0.0.1:58432/ws
D/Flutter: [Impeller] Rendering engine initialized successfully.
I/flutter: Application successfully mounted to RootRenderObject.
I/flutter: Hot Reload is active! Press 'r' to reload in 420ms.

==================================================
📱 الشاشة المعروضة على الموبايل:
--------------------------------------------------
[AppBar]: أول تطبيق فلاتر 🚀
[Icon]: Flutter Dash (Blue, 80px)
[Text]: "أهلاً بيك في عالم فلاتر مع مصطفى قابيل!"
[SubText]: "Everything is a Widget in Flutter"
==================================================`
      }
    },
    {
      "id": "flutter-pub-dev",
      "title": "عالم pub.dev وملف pubspec.yaml وإدارة الباكيجات باحتراف",
      "tags": [
        "pub.dev",
        "pubspec",
        "dependencies",
        "packages",
        "yaml",
        "assets"
      ],
      "icon": "<i class=\"fa-solid fa-box-open\"></i>",
      "description": "إيه هو موقع pub.dev؟ وإزاي تختار باكيج موثوقة وتكتب ملف pubspec.yaml وتدير الخطوط والصور؟",
      "content": `
        <h2>إيه هو موقع pub.dev؟</h2>
        <p>موقع <strong><a href="https://pub.dev" target="_blank" rel="noopener">pub.dev</a></strong> هو المستودع الرسمي (Official Package Repository) لمجتمع Dart و Flutter؛ بالظبط زي <code>npm</code> لعالم جافاسكريبت أو <code>pip</code> للبايثون.</p>
        <p>بدل ما تعيد اختراع العجلة وتبني كل حاجة من الصفر (زي الاتصال بالسيرفرات، أو تشغيل الكاميرا، أو رسم الشارتات، أو حفظ التوكن)، المطورين وشركة Google وفرولك آلاف الحزم (Packages & Plugins) الجاهزة للاستخدام بضغطة زر واحدة.</p>

        <div class="info-box">
          <strong>⭐ إزاي تقيم أي باكيج على pub.dev قبل ما تدخلها مشروعك؟</strong>
          لما تفتح أي صفحة باكيج على pub.dev، بص دايماً على 3 أرقام حيوية في اليمين:
          <ul>
            <li><strong>Likes:</strong> عدد المطورين اللي عملوا إعجاب للباكيج.</li>
            <li><strong>Pub Points (160/160):</strong> تقييم الجودة التلقائي (بتتبع كود دارت النظيف، مدعومة Null Safety، ومحدثة باستمرار).</li>
            <li><strong>Popularity:</strong> نسبة استخدام الحزمة وسط مجتمع التطبيقات (مثلاً 99% أو 100%).</li>
            <li><strong>Flutter Favorite:</strong> دي الشارة الذهبية! لو لقيت الباكيج واخدة الشارة دي، يبقى Google ولجنة فلاتر فاحصينها وموصين بيها رسمي في مشاريع الإنتاج!</li>
          </ul>
        </div>

        <h3>ملف pubspec.yaml: قلب وعقل مشروع فلاتر</h3>
        <p>الملف ده مكتوب بصيغة <strong>YAML</strong>، وحساس جداً للمسافات (Indentation). بيحتوي على:</p>
        <ul>
          <li>اسم المشروع وإصداره ووصفه.</li>
          <li>إصدار Dart SDK المطلوب (SDK Constraints).</li>
          <li><strong>dependencies:</strong> الحزم اللي التطبيق بيحتاجها وهو شغال في إيد العميل.</li>
          <li><strong>dev_dependencies:</strong> الحزم اللي بتحتاجها أثناء التطوير بس (زي الاختبارات والـ linters).</li>
          <li><strong>flutter assets & fonts:</strong> تعريف مسارات الصور والملفات الصوتية والخطوط المخصصة.</li>
        </ul>

        <h3>طرق تثبيت الباكيجات في فلاتر</h3>
        <p>أسرع وأحدث طريقة في التيرمينال من غير ما تفتح الملف وتغلط في المسافات:</p>
        <div class="code-example">
          <pre><code class="lang-dart">// بتكتب في التيرمينال كده:
flutter pub add http shared_preferences google_fonts

// ولو حزمة للتطوير فقط:
flutter pub add --dev flutter_lints</code></pre>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق بين dependencies و dev_dependencies في ملف pubspec.yaml؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ dependencies هي الحزم التي يحتاجها التطبيق ليعمل في أيدي المستخدمين النهائيين (مثل http و provider). أما dev_dependencies فهي أدوات مساعدة للمطور أثناء البرمجة فقط (مثل أدوات توليد الكود والـ testing والـ linters) ولا تدخل في حزمة الـ APK/IPA النهائية.</div>
        </div>
      `,
      "example": {
        "code": `# ملف pubspec.yaml الحقيقي لمشروع فلاتر احترافي
name: codetech_store
description: "متجر إلكتروني احترافي مبني بفلاتر وحزم pub.dev"
publish_to: 'none' # لمنع النشر بالخطأ على pub.dev
version: 1.0.0+1

environment:
  sdk: '>=3.3.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter

  # أشهر باكيجات من موقع pub.dev:
  http: ^1.2.1                  # جلب البيانات من الـ REST API
  dio: ^5.4.3+1                 # العميل الشبكي المتقدم مع Interceptors
  provider: ^6.1.2              # إدارة الحالة والتفاعل السلس
  flutter_bloc: ^8.1.5          # إدارة الحالة بمعمارية BLoC
  shared_preferences: ^2.2.3    # حفظ الداتا البسيطة والتوكن محلياً
  google_fonts: ^6.2.1          # استخدام خطوط جوجل بدون تحميل يدوي
  cached_network_image: ^3.3.1  # عرض الصور مع كاش وسرعة تحميل خيالية
  intl: ^0.19.0                 # تنسيق التواريخ والعملات والأرقام

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true

  # تعريف الصور والملفات الثابتة
  assets:
    - assets/images/
    - assets/icons/

  # تعريف الخطوط العربية المخصصة
  fonts:
    - family: Cairo
      fonts:
        - asset: assets/fonts/Cairo-Regular.ttf
        - asset: assets/fonts/Cairo-Bold.ttf
          weight: 700`,
        "output": `Resolving dependencies...
+ cached_network_image 3.3.1
+ dio 5.4.3+1
+ flutter_bloc 8.1.5
+ google_fonts 6.2.1
+ http 1.2.1
+ intl 0.19.0
+ provider 6.1.2
+ shared_preferences 2.2.3
Downloading packages...
Got dependencies!
Process finished with exit code 0`
      }
    },
    {
      "id": "flutter-trees",
      "title": "معمارية فلاتر العميقة: Widget Tree و Element Tree و RenderObject Tree",
      "tags": [
        "architecture",
        "widget tree",
        "element tree",
        "renderobject",
        "pipeline",
        "internals"
      ],
      "icon": "<i class=\"fa-solid fa-sitemap\"></i>",
      "description": "سؤال الإنترفيو رقم 1: فلاتر شغالة إزاي من جوة؟ والفرق بين الشجرات التلاتة وسر الأداء الخارق",
      "content": `
        <h2>إيه اللي بيحصل في الكواليس لما فلاتر ترسم شاشة؟</h2>
        <p>أغلب المطورين المبتدئين فاكرين إن فلاتر فيها شجرة واحدة اسمها <em>Widget Tree</em>، وده سبب رئيسي للرسوب في مقابلات العمل التقنية للشركات الكبيرة! الحقيقة إن فلاتر بتدير <strong>ثلاث شجرات متوازية</strong> بتشتغل بتناغم عبقري:</p>

        <div class="info-box">
          <strong>🌳 الشجرات الثلاثة في فلاتر (The Three Trees):</strong>
          <ol>
            <li><strong>1. Widget Tree (شجرة التكوين - Blueprint):</strong> دي الشجرة اللي أنت بتكتبها في كودك. خفيفة جداً ومؤقتة (Immutable / Disposable) وبتتدمر وتتعمل من جديد مع كل فريم أو استدعاء دالة <code>build()</code> بدون أي تأثير على الأداء لأنها مجرد كائنات في الذاكرة بتحمل خصائص.</li>
            <li><strong>2. Element Tree (شجرة الربط والحالة - The Manager):</strong> دي العقل المدبر! بتفضل عايشة في الذاكرة وتتحكم في دورة الحياة، وبتربط بين الـ Widget المؤقت والـ RenderObject الحقيقي على الشاشة، وبتشيل الـ <code>State</code> لو كانت الودجت Stateful.</li>
            <li><strong>3. RenderObject Tree (شجرة الرسم - The Worker):</strong> دي الشجرة التقيلة اللي مسؤولة عن حساب الأبعاد والمقاسات (Layouting)، وتحديد مواضع البكسل (Painting)، ورسم العناصر فعلياً على الـ Canvas. فلاتر بتحافظ على الشجرة دي ومش بتعيد رسمها إلا لما يحصل تغيير فعلي يستدعي ذلك!</li>
          </ol>
        </div>

        <h3>مقارنة الشجرات الثلاثة</h3>
        <table class="data-table">
          <tr><th>الشجرة</th><th>وظيفتها الأساسية</th><th>الوزن والتكلفة</th><th>مدى الاستقرار</th></tr>
          <tr><td><strong>Widget</strong></td><td>توصيف وتكوين الشكل (Configuration)</td><td>فائقة الخفة ورخيصة التكلفة</td><td>بتتبدل وتتدمر باستمرار</td></tr>
          <tr><td><strong>Element</strong></td><td>إدارة الهيكل ودورة الحياة والـ State</td><td>متوسطة</td><td>ثابتة ويعاد استخدامها عبر الـ Keys</td></tr>
          <tr><td><strong>RenderObject</strong></td><td>حساب المقاسات والرسم على الـ GPU</td><td>عالية التكلفة</td><td>مستمرة وثابتة ويتم تحديثها جزئياً</td></tr>
        </table>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">اشرح بالتفصيل الشجرات الثلاثة في فلاتر وسر أدائها العالي؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ Widget Tree هي شجرة تكوين خفيفة ومؤقتة تصف الواجهة. الـ Element Tree هي العقل المدبر الدائم في الذاكرة الذي يدير دورة الحياة والحالة (State). والـ RenderObject Tree هي الشجرة الثقيلة المسؤولة عن حساب المقاسات والرسم الفعلي على الشاشة ولا يعاد رسمها إلا عند التغير الحقيقي.</div>
        </div>
      `,
      "example": {
        "code": `// مثال بيبين إزاي فلاتر بتحدث الشجرة بذكاء بدون تدمير الـ RenderObject
import 'package:flutter/material.dart';

void main() => runApp(const TreeInspectionDemo());

class TreeInspectionDemo extends StatefulWidget {
  const TreeInspectionDemo({super.key});

  @override
  State<TreeInspectionDemo> createState() => _TreeInspectionDemoState();
}

class _TreeInspectionDemoState extends State<TreeInspectionDemo> {
  Color _boxColor = Colors.teal;

  void _toggleColor() {
    setState(() {
      _boxColor = (_boxColor == Colors.teal) ? Colors.deepOrange : Colors.teal;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Flutter 3 Trees Demo')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // الـ Widget هنا هيتغير لونه، لكن الـ RenderBox هيفضل في مكانه بدون إعادة إنشاء!
              Container(
                width: 150,
                height: 150,
                decoration: BoxDecoration(
                  color: _boxColor,
                  borderRadius: BorderRadius.circular(16),
                ),
                alignment: Alignment.center,
                child: const Text('RenderBox Stable', style: TextStyle(color: Colors.white)),
              ),
              const SizedBox(height: 25),
              ElevatedButton.icon(
                onPressed: _toggleColor,
                icon: const Icon(Icons.refresh),
                label: const Text('تغيير اللون وشاهد ذكاء فلاتر'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [Frame Pipeline] Widget rebuilt with new configuration: Container(color: Colors.deepOrange).
I/flutter: [Element Tree] Element detected identical widget runtimeType and key.
I/flutter: [RenderObject Tree] RenderParagraph and RenderDecoratedBox updated paint properties in-place.
I/flutter: No layout reflow needed (relayoutBoundary maintained).
I/flutter: Painted in 0.8ms at 120 FPS.`
      }
    },
    {
      "id": "flutter-stateless-stateful",
      "title": "الـ Widgets الأساسية: الفرق بين StatelessWidget و StatefulWidget ودورة الحياة",
      "tags": [
        "stateless",
        "stateful",
        "lifecycle",
        "initstate",
        "dispose",
        "setstate"
      ],
      "icon": "<i class=\"fa-solid fa-arrows-rotate\"></i>",
      "description": "إمتى تستخدم Stateless وإمتى Stateful؟ وشرح دوال دورة الحياة initState و didChangeDependencies و dispose",
      "content": `
        <h2>إيه الفرق بين الودجت الثابتة والمتحركة؟</h2>
        <p>في فلاتر، أي واجهة بتنقسم لنوعين رئيسيين حسب هل بياناتها بتتغير أثناء ما المستخدم باصص على الشاشة ولا لأ:</p>

        <h3>1. StatelessWidget (الودجت الثابتة)</h3>
        <p>دي ودجت <strong>جامدة ومستقرة</strong>، بتاخد بياناتها أول ما تتعمل ومش بتتغير خالص. زي مثلاً: عنوان ثابت، أيقونة توضيحية، كارت بيعرض معلومات منتج مش هتتغير في الشاشة دي.</p>

        <h3>2. StatefulWidget (الودجت التفاعلية ذات الحالة)</h3>
        <p>دي ودجت <strong>حية ومرنة</strong>، بتحتفظ ببيانات متغيرة اسمها <code>State</code>. لما المستخدم يدوس على زرار، أو لما داتا ترجع من السيرفر، بننادي دالة <code>setState()</code> فتعيد تشغيل دالة <code>build()</code> وترسم الشاشة بالداتا الجديدة فوراً.</p>

        <div class="info-box">
          <strong>⚡ دورة حياة StatefulWidget (Lifecycle Methods):</strong>
          <ul>
            <li><strong>createState():</strong> أول خطوة، بتخلق كائن الـ State المرتبط بالودجت.</li>
            <li><strong>initState():</strong> بتشتغل <em>مرة واحدة فقط في حياة الودجت</em> أول ما تظهر. دي المكان المثالي لـ: الاشتراك في Streams، بدء Timer، استدعاء الـ API لأول مرة، أو تهيئة الـ TextEditingControllers.</li>
            <li><strong>didChangeDependencies():</strong> بتشتغل مباشرة بعد initState أو لما يعتمد الودجت على InheritedWidget (زي MediaQuery أو Theme) ويتغير.</li>
            <li><strong>build():</strong> بتشتغل كل ما يحصل تحديث أو استدعاء لـ setState؛ وظيفتها ترجع الـ Widgets المعروضة.</li>
            <li><strong>dispose():</strong> بتشتغل <em>مرة واحدة عند تدمير وخروج الودجت من الشاشة</em>. لازم تلغي فيها أي Listener، وتقفل الـ Controllers والـ Streams عشان متعملش تسريب في الرامات (Memory Leak)!</li>
          </ul>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">لماذا لا يمكن استخدام async مع دالة initState في StatefulWidget وما الحل؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأن دالة initState يجب أن تنتهي فوراً وتعود بـ void ولا ترجع Future لكي تبدأ فلاتر في بناء أول إطار للشاشة فوراً بدون تعليق. الحل هو مناداة دالة async منفصلة من داخل initState أو استخدام FutureBuilder في دالة build.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: CounterScreen()));

// 1. تعريف الـ StatefulWidget
class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

// 2. كائن الـ State ودورة حياته
class _CounterScreenState extends State<CounterScreen> {
  int _counter = 0;
  late final TextEditingController _noteController;

  @override
  void initState() {
    super.initState();
    // تهيئة المتحكم أول مرة الشاشة تفتح
    _noteController = TextEditingController(text: 'ملاحظة مبدئية');
    debugPrint('--> [Lifecycle]: initState تم استدعاؤها مرة واحدة بنجاح');
  }

  void _increment() {
    setState(() {
      _counter++;
    });
    debugPrint('--> [Lifecycle]: تم تحديث العداد إلى $_counter وتشغيل build()');
  }

  @override
  void dispose() {
    // تنظيف الرامات وإغلاق الكنترولر قبل مغادرة الشاشة
    _noteController.dispose();
    debugPrint('--> [Lifecycle]: dispose تم تفريغ الرامات ومغادرة الشاشة');
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('عداد تفاعلي - دورة الحياة')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('عدد النقرات الحالية:', style: TextStyle(fontSize: 18)),
            Text(
              '$_counter',
              style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: Colors.blue),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}`,
        "output": `--> [Lifecycle]: initState تم استدعاؤها مرة واحدة بنجاح
--> [Lifecycle]: تم تحديث العداد إلى 1 وتشغيل build()
--> [Lifecycle]: تم تحديث العداد إلى 2 وتشغيل build()
--> [Lifecycle]: تم تحديث العداد إلى 3 وتشغيل build()

Process finished with exit code 0`
      }
    },
    {
      "id": "flutter-layout-widgets",
      "title": "هندسة التخطيط والواجهات: Container, Column, Row, Stack, Expanded, Flexible",
      "tags": [
        "layout",
        "container",
        "column",
        "row",
        "stack",
        "expanded",
        "flexible",
        "wrap"
      ],
      "icon": "<i class=\"fa-solid fa-table-cells-large\"></i>",
      "description": "إزاي ترتب العناصر عمودياً وأفقياً وفوق بعض مع حل مشكلة الخطوط الصفراء والسوداء الشهيرة (Overflow)",
      "content": `
        <h2>إزاي فلاتر بتظبط مكان العناصر؟</h2>
        <p>التخطيط في فلاتر مبني على مبدأ فيزيائي بسيط وواضح:</p>
        <blockquote>
          <strong>"Constraints go down. Sizes go up. Parent sets position."</strong>
          <br>
          (القيود بتنزل من الأب، المقاسات بتطلع من الابن، والأب هو اللي بيحدد المكان النهائي).
        </blockquote>

        <h3>أهم ودجتس التخطيط اللي هتستخدمها كل يوم:</h3>
        <ul>
          <li><strong>Container:</strong> زي الـ <code>&lt;div&gt;</code> في الويب؛ تقدر تديله padding, margin, color, border, borderRadius, box-shadow وحجم ثابت.</li>
          <li><strong>Row:</strong> بيرتب العناصر جنباً إلى جنب بشكل أفقي.</li>
          <li><strong>Column:</strong> بيرتب العناصر فوق بعض بشكل رأسي.</li>
          <li><strong>Stack:</strong> بيرتب العناصر في البُعد الثالث (فوق بعض بطبقات Layers)؛ زي <code>position: absolute</code> في الـ CSS بالظبط! وبتستخدم جواه <code>Positioned</code>.</li>
          <li><strong>Expanded:</strong> بتجبر العنصر ياخد كل المساحة الفاضية المتبقية في الـ Row أو الـ Column. دي الحل السحري لمنع الـ Overflow!</li>
          <li><strong>Wrap:</strong> لو العناصر زادت عن عرض الشاشة بدل ما تعمل كراش وتطلع شريط أصفر وأسود، بتنزل سطر جديد تلقائياً.</li>
        </ul>

        <div class="info-box">
          <strong>⚠️ حل مشكلة شريط التحذير الأصفر والأسود (A RenderFlex overflowed):</strong>
          المشكلة دي بتظهر لما تحط عناصر حجمها أكبر من مساحة الشاشة في Row أو Column. حلها إيه؟
          <ul>
            <li>لو في صف أفقي: غلف النصوص أو العناصر بـ <code>Expanded</code> أو <code>Flexible</code>.</li>
            <li>لو في عمود رأسي: غلف الـ Column بـ <code>SingleChildScrollView</code> عشان الشاشة تقبل السكرول.</li>
          </ul>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما معنى القاعدة الذهبية: 'Constraints go down, Sizes go up, Parent sets position'؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الودجت الأب يرسل قيوداً لأبنائه (أقصى وأقل عرض وارتفاع). كل ابن يقرر حجمه الذاتي وفق هذه القيود ويرسل مقاسه للأب. وأخيراً الأب هو الذي يحدد إحداثيات وموضع كل ابن على الشاشة.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: LayoutMasterDemo()));

class LayoutMasterDemo extends StatelessWidget {
  const LayoutMasterDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('هندسة التخطيط في فلاتر')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // 1. Stack: كارت مع شارة خصم فوق الصورة
            Stack(
              children: [
                Container(
                  height: 180,
                  decoration: BoxDecoration(
                    color: Colors.indigo.shade100,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  alignment: Alignment.center,
                  child: const Icon(Icons.shopping_bag, size: 70, color: Colors.indigo),
                ),
                Positioned(
                  top: 12,
                  right: 12,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    decoration: BoxDecoration(
                      color: Colors.redAccent,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: const Text('خصم 50%', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            // 2. Row مع Expanded لمنع الـ Overflow
            Row(
              children: [
                Expanded(
                  flex: 2,
                  child: Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.blue.shade50,
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Text('اسم المنتج طويل جداً جداً ومحمي بـ Expanded'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  flex: 1,
                  child: ElevatedButton(
                    onPressed: () {},
                    child: const Text('شراء'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [Layout] RenderFlex calculated with flex factors (2:1).
I/flutter: [Stack] Positioned child placed at Offset(right: 12.0, top: 12.0).
I/flutter: Layout rendered cleanly without any RenderFlex overflow issues.
Process finished with exit code 0`
      }
    },
    {
      "id": "flutter-scaffold-material",
      "title": "هيكل التطبيقات الكامل: Scaffold, AppBar, Drawer, NavigationBar, FAB",
      "tags": [
        "scaffold",
        "appbar",
        "drawer",
        "bottomnavigationbar",
        "floatingactionbutton",
        "material3"
      ],
      "icon": "<i class=\"fa-solid fa-mobile-screen-button\"></i>",
      "description": "إزاي تبني شاشة كاملة بمعايير Material Design 3 مع شريط سفلي وقائمة جانبية وزر عائم",
      "content": `
        <h2>الـ Scaffold: الهيكل العظمي لأي شاشة</h2>
        <p>الـ <code>Scaffold</code> هو الودجت اللي بيمثل الشاشة البيضاء الكاملة للموبايل؛ هو اللي بيوفرلك الأماكن الجاهزة لكل عناصر نظام أندرويد وiOS القياسية:</p>
        <ul>
          <li><strong>appBar:</strong> الشريط العلوي اللي بيحتوي على العنوان وزر الرجوع وإجراءات الشاشة (Actions).</li>
          <li><strong>body:</strong> المحتوى الأساسي اللي بتعرض فيه شغلك.</li>
          <li><strong>drawer:</strong> القائمة الجانبية اللي بتنزلق من اليمين أو الشمال.</li>
          <li><strong>bottomNavigationBar:</strong> شريط التنقل السفلي بين الأقسام الرئيسية للتطبيق (الرئيسية، البحث، السلة، الحساب).</li>
          <li><strong>floatingActionButton (FAB):</strong> الزر الدائري العائم المخصص للحدث الرئيسي (زي إضافة عنصر جديد أو عمل طلب).</li>
          <li><strong>bottomSheet:</strong> ورقة منبثقة بتطلع من تحت لفوق لعرض خيارات إضافية.</li>
        </ul>

        <div class="info-box">
          <strong>🎨 Material Design 3 في فلاتر الحديثة:</strong>
          من أول فلاتر 3.16، نظام <code>useMaterial3: true</code> بقى هو الافتراضي. بيوفرلك ألوان ديناميكية، وزوايا منحنية مريحة للعين، وأزرار عصرية مطابقة لأحدث معايير Google.
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما دور الـ ScaffoldMessenger ولماذا يفضل عن استدعاء SnackBar عبر BuildContext العادي؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ ScaffoldMessenger يدير عرض الـ SnackBars والـ Material Banners بشكل مركزي ومستقل، ويمنع أخطاء فقدان الـ Context عند الانتقال بين الشاشات ويضمن استمرار ظهور الرسالة حتى بعد إغلاق الشاشة التي طلبتها.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const FullAppShellDemo());

class FullAppShellDemo extends StatefulWidget {
  const FullAppShellDemo({super.key});

  @override
  State<FullAppShellDemo> createState() => _FullAppShellDemoState();
}

class _FullAppShellDemoState extends State<FullAppShellDemo> {
  int _currentIndex = 0;

  final List<Widget> _pages = const [
    Center(child: Text('🏠 صفحة المنتجات الرئيسية', style: TextStyle(fontSize: 20))),
    Center(child: Text('🔍 صفحة البحث والتصفية', style: TextStyle(fontSize: 20))),
    Center(child: Text('👤 الملف الشخصي والإعدادات', style: TextStyle(fontSize: 20))),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.deepPurple),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('متجر فلاتر الاحترافي'),
          actions: [
            IconButton(icon: const Icon(Icons.notifications_none), onPressed: () {}),
          ],
        ),
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: const [
              DrawerHeader(
                decoration: BoxDecoration(color: Colors.deepPurple),
                child: Text('أهلاً بك يا بطل!', style: TextStyle(color: Colors.white, fontSize: 22)),
              ),
              ListTile(leading: Icon(Icons.favorite), title: Text('المفضلة')),
              ListTile(leading: Icon(Icons.history), title: Text('سجل الطلبات')),
            ],
          ),
        ),
        body: _pages[_currentIndex],
        bottomNavigationBar: NavigationBar(
          selectedIndex: _currentIndex,
          onDestinationSelected: (idx) => setState(() => _currentIndex = idx),
          destinations: const [
            NavigationDestination(icon: Icon(Icons.home_outlined), label: 'الرئيسية'),
            NavigationDestination(icon: Icon(Icons.search), label: 'البحث'),
            NavigationDestination(icon: Icon(Icons.person_outline), label: 'حسابي'),
          ],
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: const Icon(Icons.shopping_cart),
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [Scaffold] Built with Material 3 Drawer and NavigationBar.
I/flutter: Selected Tab: 0 (الرئيسية)
I/flutter: User tapped index 1 -> Switched view to (البحث)
I/flutter: FAB anchored to endFloat dock successfully.`
      }
    },
    {
      "id": "flutter-lists-grids",
      "title": "القوائم والشبكات فائقة الأداء: ListView.builder و GridView.builder و Slivers",
      "tags": [
        "listview",
        "gridview",
        "builder",
        "slivers",
        "lazy loading",
        "performance"
      ],
      "icon": "<i class=\"fa-solid fa-list-ol\"></i>",
      "description": "إزاي تعرض آلاف العناصر بسلاسة تامة بدون استهلاك الرامات باستخدام الـ Lazy Loading والـ Slivers",
      "content": `
        <h2>فخ القوائم العادية في فلاتر</h2>
        <p>لو عملت <code>ListView(children: [...])</code> وكتبت جواها 10,000 كارت، التطبيق هيهنج ويعلق فوراً! ليه؟ لأنها بتبني كل الـ 10,000 ودجت في الرامات حتى لو المستخدم باصص على أول 3 بس!</p>

        <h3>الحل الاحترافي: ListView.builder و GridView.builder (Lazy Loading)</h3>
        <p>الـ <code>.builder</code> constructor بيتبع أسلوب <strong>التحميل عند الطلب (On-Demand / Lazy Loading)</strong>؛ يعني بيبني فقط العناصر اللي ظاهرة قدام عين المستخدم على الشاشة حالياً (مثلاً 5 أو 6 عناصر)، وأول ما المستخدم يسكرول، العنصر اللي خرج من الشاشة بيتدمر والعنصر اللي دخل بيتبني في نفس اللحظة! ده بيضمن إن استهلاك الرامات هيفضل ثابت سواء عندك 10 عناصر أو مليون عنصر!</p>

        <div class="info-box">
          <strong>🔥 إيه هي الـ Slivers؟</strong>
          الـ Slivers هي أجزاء سكرول مخصصة ذات أداء خارق. بتستخدمها مع <code>CustomScrollView</code> عشان تعمل تأثيرات فخمة زي الـ <em>SliverAppBar</em> (الشريط العلوي اللي بيصغر وينكمش أول ما تسكرول لتحت زي في تطبيقات WhatsApp و Twitter).
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">كيف يعمل الـ Viewport Recycling في ListView.builder ولماذا نحتاج تحديد itemExtent؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> يقوم ببناء الودجتس الظاهرة في مجال الرؤية فقط، ويعيد تدوير الـ Elements لتوفير الرامات. وتحديد itemExtent يمنح فلاتر المقاس الثابت لكل عنصر مسبقاً فيمنعها من حساب مقاس كل عنصر ديناميكياً مما يضاعف سرعة وسلاسة السكرول بشكل هائل.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: ProductsCatalogDemo()));

class ProductsCatalogDemo extends StatelessWidget {
  const ProductsCatalogDemo({super.key});

  @override
  Widget build(BuildContext context) {
    // قائمة تجريبية لـ 1000 منتج
    final List<String> products = List.generate(1000, (i) => 'منتج رقم #\${i + 1}');

    return Scaffold(
      appBar: AppBar(title: const Text('قائمة بمليون عنصر بسلاسة 120 فريم')),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            elevation: 2,
            child: ListTile(
              leading: CircleAvatar(
                backgroundColor: Colors.blueAccent,
                child: Text('\${index + 1}', style: const TextStyle(color: Colors.white)),
              ),
              title: Text(products[index], style: const TextStyle(fontWeight: FontWeight.bold)),
              subtitle: Text('السعر: \${(index + 1) * 15} ج.م'),
              trailing: const Icon(Icons.arrow_forward_ios, size: 16),
              onTap: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('اخترت \${products[index]}')),
                );
              },
            ),
          );
        },
      ),
    );
  }
}`,
        "output": `I/flutter: [ListView.builder] Initial viewport rendered indices [0 .. 7].
I/flutter: Memory footprint: 18.2 MB (Constant regardless of 1,000 items).
I/flutter: User scrolled down: recycled index 0, instantiated index 8.
I/flutter: Smooth 120 FPS scrolling maintained.`
      }
    },
    {
      "id": "flutter-forms-validation",
      "title": "الفورم وإدخال البيانات والتحقق: Form, TextFormField, Controllers, GlobalKey",
      "tags": [
        "forms",
        "validation",
        "textformfield",
        "controller",
        "globalkey",
        "regex"
      ],
      "icon": "<i class=\"fa-solid fa-file-signature\"></i>",
      "description": "إزاي تبني شاشات تسجيل دخول وتسجيل حساب احترافية مع التحقق من صحة البريد وكلمة المرور ومسك الداتا",
      "content": `
        <h2>بناء شاشات الإدخال والتحقق (Form Validation)</h2>
        <p>في أي تطبيق محترم، مينفعش تسيب المستخدم يدخل بيانات عشوائية أو يسيب خانات فاضية ويبعتها للسيرفر. فلاتر بتقدملك تركيبة قوية جداً لحماية وتسهيل الفورم:</p>

        <h3>أدوات الفورم الأساسية:</h3>
        <ul>
          <li><strong>Form:</strong> ودجت حاوية بتجمع كل حقول الإدخال تحت سقف واحد.</li>
          <li><strong>GlobalKey&lt;FormState&gt;:</strong> مفتاح سري موحد بيمسك حالة الفورم كلها؛ من خلاله بتنادي <code>_formKey.currentState!.validate()</code> فكل الحقول تفحص نفسها دفعة واحدة!</li>
          <li><strong>TextFormField:</strong> حقل كتابة مجهز بدالة <code>validator</code> اللي بترجع نص الخطأ لو المدخلات غلط، أو <code>null</code> لو كل حاجة تمام.</li>
          <li><strong>TextEditingController:</strong> الكائن اللي بيمسك النص اللي المستخدم بيكتبه لحظة بلحظة، ومن خلاله تقدر تقرأ القيمة بـ <code>controller.text</code> أو تمسحها.</li>
        </ul>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما وظيفة GlobalKey&lt;FormState&gt; ولماذا من الضروري عمل dispose لكل TextEditingController؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ GlobalKey يمنحك وصولاً مباشراً لكائن الـ FormState للتحقق من صحة جميع الحقول دفعة واحدة عبر formKey.currentState!.validate(). ويجب عمل dispose للكنترولر في نهاية حياة الشاشة لتفريغ المستمعين من الذاكرة ومنع تسريب الرامات (Memory Leak).</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: LoginScreenDemo()));

class LoginScreenDemo extends StatefulWidget {
  const LoginScreenDemo({super.key});

  @override
  State<LoginScreenDemo> createState() => _LoginScreenDemoState();
}

class _LoginScreenDemoState extends State<LoginScreenDemo> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _obscurePassword = true;

  void _submitForm() {
    // تشغيل التحقق من كل الحقول بضغطة واحدة
    if (_formKey.currentState!.validate()) {
      final email = _emailController.text.trim();
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('تم التحقق بنجاح! جاري تسجيل الدخول لـ: $email')),
      );
    }
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('تسجيل الدخول والتحقق')),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
                  labelText: 'البريد الإلكتروني',
                  prefixIcon: Icon(Icons.email_outlined),
                  border: OutlineInputBorder(),
                ),
                validator: (val) {
                  if (val == null || val.trim().isEmpty) return 'من فضلك أدخل البريد الإلكتروني';
                  if (!val.contains('@') || !val.contains('.')) return 'بريد إلكتروني غير صالح';
                  return null;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _passwordController,
                obscureText: _obscurePassword,
                decoration: InputDecoration(
                  labelText: 'كلمة المرور',
                  prefixIcon: const Icon(Icons.lock_outline),
                  suffixIcon: IconButton(
                    icon: Icon(_obscurePassword ? Icons.visibility_off : Icons.visibility),
                    onPressed: () => setState(() => _obscurePassword = !_obscurePassword),
                  ),
                  border: const OutlineInputBorder(),
                ),
                validator: (val) {
                  if (val == null || val.length < 6) return 'كلمة المرور يجب ألا تقل عن 6 خانات';
                  return null;
                },
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity,
                height: 50,
                child: ElevatedButton(
                  onPressed: _submitForm,
                  child: const Text('تسجيل الدخول', style: TextStyle(fontSize: 16)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [Form] Validating FormState via GlobalKey...
I/flutter: Email field validated: "mostafa@codetech.com" -> OK
I/flutter: Password field validated: "secret123" -> OK
I/flutter: [SnackBar] تم التحقق بنجاح! جاري تسجيل الدخول لـ: mostafa@codetech.com`
      }
    },
    {
      "id": "flutter-navigation",
      "title": "التنقل بين الصفحات وتمرير الداتا: Navigator 1.0 و Named Routes و GoRouter",
      "tags": [
        "navigation",
        "routing",
        "navigator",
        "gorouter",
        "arguments",
        "routes"
      ],
      "icon": "<i class=\"fa-solid fa-route\"></i>",
      "description": "إزاي تتنقل بين الشاشات وتبعت داتا وترجع بقيمة، والفرق بين Navigator التقليدي و GoRouter الأحدث",
      "content": `
        <h2>التنقل في فلاتر: فكرة الـ Stack</h2>
        <p>التنقل في فلاتر مبني على مبدأ <strong>Stack (كومة كتب فوق بعض)</strong>:</p>
        <ul>
          <li><strong>Navigator.push:</strong> بتحط شاشة جديدة فوق الشاشة الحالية (فالمستخدم يشوف الجديدة).</li>
          <li><strong>Navigator.pop:</strong> بتشيل الشاشة العلوية وترميها، فترجع للشاشة اللي تحتها تلقائياً مع إمكانية إرجاع داتا!</li>
        </ul>

        <div class="info-box">
          <strong>🚀 إمتى تستخدم GoRouter من pub.dev؟</strong>
          لو شغال على تطبيق بسيط للموبايل، الـ <code>Navigator.push</code> كافي جداً. لكن لو تطبيقك كبير أو بتطلعه على <strong>الويب</strong> وبتحتاج Deep Linking وروابط URL صريحة (زي <code>/products/123</code>)، باكيج <strong>GoRouter</strong> (المدعومة رسمياً من فريق فلاتر) هي الخيار رقم 1 في سوق العمل العالمي!
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق بين Navigator 1.0 و GoRouter في إدارة المسارات؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ Navigator 1.0 يعتمد على أسلوب الإجراءات المباشرة (push/pop) على مكدس شاشات وهو بسيط لكنه يفشل في دعم روابط الويب ومزامنة المتصفح. بينما GoRouter يعتمد على أسلوب تصريحي (Declarative) ويدعم الـ Deep Linking والمسارات المعتمدة على الروابط والـ ShellRoutes للويب والموبايل معاً.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: HomeScreen()));

// 1. الشاشة الأولى (الرئيسية)
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('الشاشة الرئيسية')),
      body: Center(
        child: ElevatedButton.icon(
          icon: const Icon(Icons.arrow_forward),
          label: const Text('انتقل لصفحة التفاصيل مع تمرير بيانات'),
          onPressed: () async {
            // الانتقال وانتظار نتيجة راجعة من الشاشة التانية!
            final result = await Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => const DetailsScreen(productName: 'لابتوب MacBook Pro M3'),
              ),
            );

            if (context.mounted && result != null) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text('النتيجة الراجعة: $result')),
              );
            }
          },
        ),
      ),
    );
  }
}

// 2. الشاشة الثانية (التفاصيل)
class DetailsScreen extends StatelessWidget {
  final String productName;
  const DetailsScreen({super.key, required this.productName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('تفاصيل المنتج')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('المنتج المختار: $productName', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(backgroundColor: Colors.green, foregroundColor: Colors.white),
              onPressed: () {
                // الرجوع مع إرسال رسالة للشاشة الأولى
                Navigator.pop(context, 'تمت إضافة $productName إلى سلة المشتريات!');
              },
              child: const Text('تأكيد الشراء والرجوع'),
            ),
          ],
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [Navigator] Pushed Route: MaterialPageRoute(DetailsScreen).
I/flutter: DetailsScreen received argument: "لابتوب MacBook Pro M3".
I/flutter: User tapped "تأكيد الشراء والرجوع" -> Navigator.pop(result).
I/flutter: HomeScreen received popped value: "تمت إضافة لابتوب MacBook Pro M3 إلى سلة المشتريات!"`
      }
    },
    {
      "id": "flutter-state-provider",
      "title": "إدارة الحالة (State Management): حزمة Provider و ChangeNotifier",
      "tags": [
        "provider",
        "state management",
        "changenotifier",
        "consumer",
        "context.watch",
        "context.read"
      ],
      "icon": "<i class=\"fa-solid fa-diagram-project\"></i>",
      "description": "حل مشكلة الـ Prop Drilling وإدارة داتا التطبيق (سلة المشتريات، الثيم، المستخدم) بكفاءة مع أشهر باكيج على pub.dev",
      "content": `
        <h2>ليه محتاجين State Management؟</h2>
        <p>تخيل لو عندك سلة مشتريات (Cart)، وعايز تعرض عدد المنتجات في شريط الـ AppBar في الصفحة الرئيسية، وفي صفحة الدفع، وفي القائمة الجانبية. لو اعتمدت على <code>setState</code> هتضطر تمرر الداتا عبر 20 شاشة ودجت في النص (وده اللي بنسميه <em>Prop Drilling الكابوسي</em>)!</p>
        <p>باكيج <strong>Provider</strong> من موقع pub.dev هي الحل الأسهل والأكثر شعبية اللي Google نفسها بتوصي بيه للمشاريع المتوسطة.</p>

        <div class="info-box">
          <strong>🧠 المفاهيم الثلاثة للـ Provider:</strong>
          <ul>
            <li><strong>ChangeNotifier:</strong> الكلاس اللي بيشيل الداتا والمنطق (Logic). لما الداتا تتغير بينادي <code>notifyListeners()</code> عشان ينبه كل الودجتس اللي بتراقبه.</li>
            <li><strong>ChangeNotifierProvider:</strong> الودجت اللي بيتحط في قمة الشجرة (فوق MaterialApp) عشان يخلي الداتا متاحة لكل شاشات التطبيق.</li>
            <li><strong>context.watch vs context.read:</strong>
              <ul>
                <li><code>context.watch&lt;T&gt;()</code>: لمراقبة الداتا وإعادة بناء الودجت لما تتغير (زي عرض عدد عناصر السلة).</li>
                <li><code>context.read&lt;T&gt;()</code>: لاستدعاء دالة فقط بدون إعادة بناء (زي زرار "إضافة منتج").</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق الحاسم بين context.watch و context.read و context.select في Provider؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ context.watch يستمع للبيانات ويعيد بناء الودجت عند أي تغيير. الـ context.read يقرأ البيانات أو يستدعي دالة لمرة واحدة فقط بدون إعادة بناء ويستخدم داخل الأزرار. أما context.select فيستمع لخاصية وحيدة دقيقة فقط ويعيد البناء إذا تغيرت تلك الخاصية فقط لتحقيق أعلى أداء ممكن.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// 1. الـ Model مع الـ ChangeNotifier
class CartModel extends ChangeNotifier {
  final List<String> _items = [];

  List<String> get items => _items;
  int get count => _items.length;

  void addItem(String item) {
    _items.add(item);
    notifyListeners(); // تنبيه جميع الشاشات بالتحديث!
  }

  void clearCart() {
    _items.clear();
    notifyListeners();
  }
}

// 2. نقطة البداية وحقن الـ Provider
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartModel(),
      child: const MaterialApp(home: CatalogScreen()),
    ),
  );
}

// 3. شاشة المنتجات
class CatalogScreen extends StatelessWidget {
  const CatalogScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // مراقبة عدد العناصر في شريط التطبيق
    final cartCount = context.watch<CartModel>().count;

    return Scaffold(
      appBar: AppBar(
        title: const Text('متجر فلاتر مع Provider'),
        actions: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Center(
              child: Badge(
                label: Text('$cartCount'),
                child: const Icon(Icons.shopping_cart),
              ),
            ),
          ),
        ],
      ),
      body: Center(
        child: ElevatedButton.icon(
          icon: const Icon(Icons.add_shopping_cart),
          label: const Text('إضافة هاتف آيفون للسلة'),
          onPressed: () {
            // استخدام read لاستدعاء الدالة بدون إعادة بناء الزرار
            context.read<CartModel>().addItem('iPhone 16 Pro');
          },
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [Provider] CartModel initialized.
I/flutter: [CartModel] Added "iPhone 16 Pro" -> notifyListeners() called.
I/flutter: [Badge] Rebuilt with updated cart count: 1.
I/flutter: [CartModel] Added "iPhone 16 Pro" -> notifyListeners() called.
I/flutter: [Badge] Rebuilt with updated cart count: 2.`
      }
    },
    {
      "id": "flutter-state-bloc",
      "title": "إدارة الحالة المتقدمة: معمارية BLoC و Cubit للمشاريع الضخمة",
      "tags": [
        "bloc",
        "cubit",
        "flutter_bloc",
        "clean architecture",
        "enterprise",
        "streams"
      ],
      "icon": "<i class=\"fa-solid fa-cubes-stacked\"></i>",
      "description": "المعيار الذهبي للشركات العالمية: فصل الـ Business Logic تماماً عن الـ UI باستخدام الأحداث والحالات (Events & States)",
      "content": `
        <h2>إيه هو BLoC وليه الشركات الكبيرة بتطلبه بالاسم؟</h2>
        <p>كلمة <strong>BLoC</strong> اختصار لـ <em>Business Logic Component</em>. الهدف الأساسي منه هو الفصل التام الصارم بين شكل الواجهة (UI) وبين منطق الشغل والاتصال بالسيرفر (Business Logic).</p>
        <p>في معمارية BLoC:</p>
        <ul>
          <li>الـ UI بيبعت <strong>Events (أحداث)</strong>: زي "المستخدم داس على تسجيل دخول".</li>
          <li>الـ BLoC بياخد الحدث، يكلم السيرفر، ويطلع <strong>States (حالات)</strong>: زي <code>AuthLoading</code>، ثم <code>AuthSuccess</code> أو <code>AuthError</code>.</li>
          <li>الـ UI بيسمع للحالات بـ <code>BlocBuilder</code> أو <code>BlocConsumer</code> ويعرض الشكل المناسب لكل حالة بدون تداخل!</li>
        </ul>

        <div class="info-box">
          <strong>💡 إيه الفرق بين Cubit و BLoC؟</strong>
          <ul>
            <li><strong>Cubit:</strong> نسخة مبسطة وخفيفة من BLoC؛ بدل ما تعمل كلاس لكل Event، بتنادي دوال عادية بتعمل <code>emit(NewState)</code>. ممتاز لـ 80% من الحالات اليومية.</li>
            <li><strong>BLoC الكامل:</strong> بيعتمد على Event-driven Architecture ومعالجة الـ Streams والـ Debouncing والتحويلات المتقدمة.</li>
          </ul>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق بين BlocBuilder و BlocListener و BlocConsumer في مكتبة flutter_bloc؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ BlocBuilder مخصص فقط لإعادة بناء الـ UI بناءً على الحالة الحالية. الـ BlocListener لا يبني واجهات بل ينفذ أحداث لمرة واحدة فقط (Navigation, SnackBar, Dialog). والـ BlocConsumer يجمع الاثنين معاً في ودجت واحدة موحدة.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// 1. حالات العداد (States)
abstract class CounterState {}
class CounterInitial extends CounterState { final int val = 0; }
class CounterValue extends CounterState { final int val; CounterValue(this.val); }

// 2. الـ Cubit المسؤول عن المنطق
class CounterCubit extends Cubit<CounterState> {
  CounterCubit() : super(CounterInitial());

  int _count = 0;
  void increment() {
    _count++;
    emit(CounterValue(_count)); // إطلاق الحالة الجديدة
  }
  void decrement() {
    _count--;
    emit(CounterValue(_count));
  }
}

// 3. التطبيق وربط الشاشة بالـ Cubit
void main() {
  runApp(
    BlocProvider(
      create: (_) => CounterCubit(),
      child: const MaterialApp(home: BlocCounterScreen()),
    ),
  );
}

class BlocCounterScreen extends StatelessWidget {
  const BlocCounterScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('فلاتر BLoC & Cubit')),
      body: Center(
        // BlocBuilder بيبني الودجت فقط لما الحالة تتغير
        child: BlocBuilder<CounterCubit, CounterState>(
          builder: (context, state) {
            int display = 0;
            if (state is CounterValue) display = state.val;
            return Text(
              '$display',
              style: const TextStyle(fontSize: 64, fontWeight: FontWeight.bold, color: Colors.deepPurple),
            );
          },
        ),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () => context.read<CounterCubit>().decrement(),
            child: const Icon(Icons.remove),
          ),
          const SizedBox(width: 10),
          FloatingActionButton(
            onPressed: () => context.read<CounterCubit>().increment(),
            child: const Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}`,
        "output": `I/flutter: [BlocProvider] CounterCubit initialized with state CounterInitial.
I/flutter: User tapped (+) -> increment() -> emit(CounterValue(1)).
I/flutter: [BlocBuilder] Transition: CounterInitial -> CounterValue(1).
I/flutter: UI updated seamlessly with state-driven architecture.`
      }
    },
    {
      "id": "flutter-networking-http",
      "title": "التعامل مع الـ REST API ومكتبة http والـ JSON Serialization",
      "tags": [
        "http",
        "api",
        "json",
        "model",
        "rest api",
        "async",
        "futurebuilder"
      ],
      "icon": "<i class=\"fa-solid fa-cloud-arrow-down\"></i>",
      "description": "إزاي تجيب داتا من السيرفر بمكتبة http وتحول كود الـ JSON لكائنات Dart Model وتعرضها بـ FutureBuilder",
      "content": `
        <h2>جلب البيانات من السيرفرات (Networking)</h2>
        <p>مفيش تطبيق ملوش backend أو API بيجيب منه داتا المستخدمين أو المنتجات. الحزمة الأساسية لده على pub.dev هي <strong>http</strong>.</p>

        <h3>خطوات التعامل مع أي API باحترافية:</h3>
        <ol>
          <li><strong>تثبيت الحزمة:</strong> <code>flutter pub add http</code> في التيرمينال.</li>
          <li><strong>بناء الـ Model Class:</strong> كلاس دارت بياخد الـ JSON ويحوله لبيانات آمنة ومحمية (Type Safe) عن طريق دالة <code>factory PostModel.fromJson(Map&lt;String, dynamic&gt; json)</code>.</li>
          <li><strong>إرسال الطلب:</strong> باستخدام <code>http.get(Uri.parse('https://...'))</code>.</li>
          <li><strong>عرض النتيجة:</strong> باستخدام ودجت <strong>FutureBuilder</strong> اللي بيهندل حالات: التحميل (Loading Spinner)، الخطأ (Error Message)، والداتا الناجحة (Data Loaded).</li>
        </ol>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">لماذا نستخدم دالة compute() عند فك وعمل Parse لملفات الـ JSON الضخمة القادمة من الـ API؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> لأن عملية فك تشفير الـ JSON تستهلك معالجة مكثفة للبيانات، وتشغيلها على الـ Main Isolate يتسبب في إسقاط فريمات وتجميد الواجهة (UI Freezing). دالة compute تقوم بنقل العملية إلى Background Isolate منفصل لتبقى الواجهة ناعمة بـ 120 فريم.</div>
        </div>
      `,
      "example": {
        "code": `import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// 1. نموذج البيانات (Data Model)
class Post {
  final int id;
  final String title;

  Post({required this.id, required this.title});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'] as int,
      title: json['title'] as String,
    );
  }
}

// 2. دالة جلب البيانات من السيرفر
Future<List<Post>> fetchPosts() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts?_limit=5'));

  if (response.statusCode == 200) {
    final List<dynamic> body = jsonDecode(response.body);
    return body.map((item) => Post.fromJson(item)).toList();
  } else {
    throw Exception('فشل في جلب البيانات من السيرفر!');
  }
}

// 3. العرض في الشاشة باستخدام FutureBuilder
void main() => runApp(const MaterialApp(home: ApiDemoScreen()));

class ApiDemoScreen extends StatelessWidget {
  const ApiDemoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('جلب بيانات من REST API')),
      body: FutureBuilder<List<Post>>(
        future: fetchPosts(),
        builder: (context, snapshot) {
          // حالة جاري التحميل
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          // حالة حدوث خطأ
          if (snapshot.hasError) {
            return Center(child: Text('حدث خطأ: \${snapshot.error}'));
          }
          // حالة النجاح
          final posts = snapshot.data!;
          return ListView.builder(
            itemCount: posts.length,
            itemBuilder: (context, i) => ListTile(
              leading: CircleAvatar(child: Text('\${posts[i].id}')),
              title: Text(posts[i].title),
            ),
          );
        },
      ),
    );
  }
}`,
        "output": `I/flutter: [HTTP GET] https://jsonplaceholder.typicode.com/posts?_limit=5
I/flutter: Response Status: 200 OK (Content-Type: application/json; charset=utf-8)
I/flutter: Parsed 5 Post objects into List<Post>.
I/flutter: FutureBuilder transitioned from waiting to data, rendered 5 items.`
      }
    },
    {
      "id": "flutter-networking-dio",
      "title": "مكتبة Dio المتقدمة من pub.dev: الطلبات، الـ Interceptors ورفع الملفات",
      "tags": [
        "dio",
        "interceptors",
        "tokens",
        "refresh token",
        "file upload",
        "pub.dev"
      ],
      "icon": "<i class=\"fa-solid fa-network-wired\"></i>",
      "description": "ليه مكتبة Dio هي الاختيار الأول لشركات الإنتاج؟ شرح الـ Interceptors وتجديد التوكن التلقائي وإلغاء الطلبات",
      "content": `
        <h2>ليه Dio أقوى من http العادية؟</h2>
        <p>مكتبة <strong><a href="https://pub.dev/packages/dio" target="_blank">dio</a></strong> هي العميل الشبكي الأكثر اكتمالاً وقوة في عالم دارت وفلاتر. بتديك مميزات خارقة بتحتاجها في كل تطبيق تجاري حقيقي:</p>

        <div class="info-box">
          <strong>⚡ مميزات Dio التي لا غنى عنها:</strong>
          <ul>
            <li><strong>Interceptors (قواطع الطلبات):</strong> كود بيشتغل أوتوماتيك قبل ما أي طلب يخرج (يضيف الـ Authorization Token في الـ Headers)، وكود بيشتغل أول ما الرد يرجع (يفحص كود 401 ويعمل Refresh Token تلقائياً بدون ما المستخدم يحس!).</li>
            <li><strong>تحويل الـ JSON تلقائياً:</strong> مش محتاج تكتب <code>jsonDecode</code> يدوي؛ Dio بتديك الداتا متحولة لـ Map جاهزة!</li>
            <li><strong>رفع وتنزيل الملفات مع شريط تقدم (Progress Bar):</strong> بسهولة عبر <code>FormData</code> و <code>onSendProgress</code>.</li>
            <li><strong>تحديد مهلة زمنية (Timeouts):</strong> لمنع تعليق التطبيق لو شبكة العميل ضعيفة (Connect & Receive Timeout).</li>
          </ul>
        </div>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">كيف تحل الـ Interceptors في مكتبة Dio مشكلة تجديد الـ Access Token (401 Unauthorized) تلقائياً؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> عبر فحص كود الخطأ في onError؛ إذا كان 401، يقوم الـ Interceptor بإيقاف الطلب الحالي مؤقتاً، وإرسال طلب refresh token للسيرفر في الخلفية، وحفظ التوكن الجديد، ثم إعادة إرسال الطلب الأصلي تلقائياً بدون أن يشعر المستخدم بأي انقطاع!</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

// إعداد كائن Dio موحد للتطبيق كله (Singleton)
class ApiClient {
  static final Dio _dio = Dio(
    BaseOptions(
      baseUrl: 'https://api.codetech.com/v1',
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
      headers: {'Accept': 'application/json'},
    ),
  );

  static void initializeInterceptors() {
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) {
          // إضافة توكن المستخدم تلقائياً لكل الطلبات
          const token = 'USER_BEARER_TOKEN_HERE';
          options.headers['Authorization'] = 'Bearer $token';
          debugPrint('--> [Dio Request]: \${options.method} \${options.path}');
          return handler.next(options);
        },
        onResponse: (response, handler) {
          debugPrint('<-- [Dio Response]: Status \${response.statusCode}');
          return handler.next(response);
        },
        onError: (DioException e, handler) {
          debugPrint('<!- [Dio Error]: \${e.message}');
          return handler.next(e);
        },
      ),
    );
  }

  static Dio get client => _dio;
}

void main() {
  ApiClient.initializeInterceptors();
  runApp(const MaterialApp(home: Scaffold(body: Center(child: Text('Dio Configured!')))));
}`,
        "output": `--> [Dio Request]: GET https://api.codetech.com/v1/profile
--> Headers: {Authorization: Bearer USER_BEARER_TOKEN_HERE, Accept: application/json}
<-- [Dio Response]: Status 200 OK
I/flutter: Data parsed directly without manual jsonDecode.
Process finished with exit code 0`
      }
    },
    {
      "id": "flutter-local-storage",
      "title": "التخزين المحلي وحفظ البيانات: SharedPreferences و Hive",
      "tags": [
        "storage",
        "shared_preferences",
        "hive",
        "sqflite",
        "offline",
        "cache"
      ],
      "icon": "<i class=\"fa-solid fa-database\"></i>",
      "description": "إزاي تحفظ توكن الدخول وإعدادات المستخدم (الدارك مود واللغة) حتى بعد ما يقفل الموبايل ويفتحه تاني",
      "content": `
        <h2>إزاي تحفظ بيانات على جهاز المستخدم؟</h2>
        <p>لما المستخدم يسجل دخوله أو يغير إعدادات التطبيق لوضع الدارك مود، مينفعش أول ما يقفل التطبيق وينام ويصحى يلاقيه خرج أو رجع لايت مود! لازم نحفظ الداتا دي محلياً على الموبايل:</p>

        <h3>1. SharedPreferences (للبيانات البسيطة Key-Value)</h3>
        <p>باكيج <strong><a href="https://pub.dev/packages/shared_preferences" target="_blank">shared_preferences</a></strong> هي أشهر باكيج لحفظ المفاتيح البسيطة: نصوص (Strings)، أرقام (int / double)، وقيم منطقية (booleans). مثالية لـ: حفظ الـ Token، معرف المستخدم، وضع الثيم المختار، وحالة أول فتح للتطبيق (isFirstLaunch).</p>

        <h3>2. Hive و Sqflite (للبيانات الضخمة وقواعد البيانات)</h3>
        <ul>
          <li><strong>Hive:</strong> قاعدة بيانات NoSQL خفيفة وسريعة كالصاروخ ومكتوبة بـ Dart خالص؛ ممتازة للكاش وتخزين مئات المنتجات بدون إنترنت.</li>
          <li><strong>Sqflite:</strong> محرك SQLite العلائقي الكامل (SQL Queries, Tables, Relations).</li>
        </ul>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">متى تستخدم SharedPreferences ومتى يكون الانتقال لقواعد بيانات Hive أو Isar حتمياً؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> تستخدم SharedPreferences للبيانات الأولية البسيطة (Flags, Auth Token, Theme Mode). أما عند الحاجة لتخزين مئات الكائنات المعقدة، والتصفية السريعة والبحث (Querying)، والعمل دون إنترنت بكاش ضخم، فقواعد NoSQL مثل Hive أو Isar أسرع بـ 100 مرة وتوفر أماناً وتشفيراً حقيقياً.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(const MaterialApp(home: StorageDemoScreen()));

class StorageDemoScreen extends StatefulWidget {
  const StorageDemoScreen({super.key});

  @override
  State<StorageDemoScreen> createState() => _StorageDemoScreenState();
}

class _StorageDemoScreenState extends State<StorageDemoScreen> {
  String? _savedUsername;

  @override
  void initState() {
    super.initState();
    _loadSavedData();
  }

  // قراءة الداتا من الذاكرة المحلية
  Future<void> _loadSavedData() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _savedUsername = prefs.getString('user_name') ?? 'زائر جديد';
    });
  }

  // حفظ داتا جديدة
  Future<void> _saveUsername(String name) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('user_name', name);
    setState(() => _savedUsername = name);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('حفظ البيانات بـ SharedPreferences')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('المستخدم المسجل حالياً: $_savedUsername', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => _saveUsername('المهندس مصطفى جمال قابيل'),
              child: const Text('حفظ اسم المستخدم في الذاكرة'),
            ),
          ],
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [SharedPreferences] Reading key: "user_name" -> null (First run fallback: "زائر جديد").
I/flutter: User clicked save -> write key "user_name" = "المهندس مصطفى جمال قابيل".
I/flutter: Data persisted to platform disk (NSUserDefaults on iOS / SharedPreferences XML on Android).
I/flutter: Next app launch will read the persisted name directly!`
      }
    },
    {
      "id": "flutter-essential-packages",
      "title": "أشهر حزم pub.dev الحيوية التي لا يخلو منها أي تطبيق احترافي",
      "tags": [
        "pub.dev",
        "google_fonts",
        "cached_network_image",
        "flutter_spinkit",
        "url_launcher",
        "intl"
      ],
      "icon": "<i class=\"fa-solid fa-wand-magic-sparkles\"></i>",
      "description": "دليل أهم الباكيجات الأساسية: خطوط جوجل، كاش الصور السحابي، سبينرات التحميل، فتح الروابط، وتنسيق العملات",
      "content": `
        <h2>ترشيحات حزم pub.dev التي لا غنى عنها في مشروعك:</h2>
        <p>عشان توفر شهور من التطوير، المجتمع جهزلك حزم مستقرة جداً ومعتمدة في كبرى التطبيقات:</p>

        <table class="data-table">
          <tr><th>اسم الباكيج</th><th>رابط pub.dev</th><th>وظيفتها العملية</th></tr>
          <tr><td><strong>google_fonts</strong></td><td>pub.dev/packages/google_fonts</td><td>تحميل واستخدام أي خط من Google Fonts (زي Cairo و Almarai) بضغطة زر وبدون تحميل ملفات ttf يدوياً.</td></tr>
          <tr><td><strong>cached_network_image</strong></td><td>pub.dev/packages/cached_network_image</td><td>تحميل صور المنتجات من الإنترنت مع حفظها في كاش الجهاز وعرض Placeholder و Error Widget شيك.</td></tr>
          <tr><td><strong>flutter_spinkit</strong></td><td>pub.dev/packages/flutter_spinkit</td><td>مجموعة مؤشرات تحميل (Loading Spinners) خيالية ومتحركة بدل المؤشر الدائري التقليدي.</td></tr>
          <tr><td><strong>url_launcher</strong></td><td>pub.dev/packages/url_launcher</td><td>فتح المتصفح، أو الاتصال برقم هاتف، أو فتح واتساب، أو إرسال إيميل من داخل التطبيق.</td></tr>
          <tr><td><strong>intl</strong></td><td>pub.dev/packages/intl</td><td>تنسيق التواريخ، والعملات، وتعدد اللغات ودعم الـ RTL والـ LTR باحترافية.</td></tr>
        </table>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">كيف توفر باكيج cached_network_image استهلاك باقة الإنترنت وتحسن الـ User Experience؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> تقوم بتنزيل الصورة مرة واحدة وتخزينها في الذاكرة التخزينية المحلية للموبايل مع ربطها برابط الـ URL، وتوفر عرض placeholder متحرك أثناء التحميل وعرض error widget إذا فشلت الشبكة، وتمنع إعادة طلب الصورة من السيرفر طوال فترة وجودها في الكاش.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(const MaterialApp(home: EssentialPackagesDemo()));

class EssentialPackagesDemo extends StatelessWidget {
  const EssentialPackagesDemo({super.key});

  Future<void> _makeCall() async {
    final uri = Uri.parse('tel:01090832443');
    if (await canLaunchUrl(uri)) await launchUrl(uri);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('أهم حزم pub.dev', style: GoogleFonts.cairo(fontWeight: FontWeight.bold)),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // 1. صورة من الإنترنت مع كاش ذكي
            CachedNetworkImage(
              imageUrl: 'https://picsum.photos/200/200',
              imageBuilder: (context, imageProvider) => CircleAvatar(radius: 60, backgroundImage: imageProvider),
              placeholder: (context, url) => const CircularProgressIndicator(),
              errorWidget: (context, url, error) => const Icon(Icons.error, color: Colors.red),
            ),
            const SizedBox(height: 20),

            // 2. استخدام خط كاستم من Google Fonts
            Text(
              'خط Cairo المباشر من Google Fonts',
              style: GoogleFonts.cairo(fontSize: 18, color: Colors.blue.shade900),
            ),
            const SizedBox(height: 20),

            // 3. فتح اتصال هاتفي بـ url_launcher
            ElevatedButton.icon(
              icon: const Icon(Icons.phone),
              label: const Text('اتصال مباشر بـ المهندس مصطفى قابيل'),
              onPressed: _makeCall,
            ),
          ],
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [google_fonts] Cairo-Bold font downloaded and cached in asset bundle.
I/flutter: [cached_network_image] Downloading "https://picsum.photos/200/200"...
I/flutter: [cached_network_image] Image cached successfully to device local cache.
I/flutter: [url_launcher] Launching native telephone intent: "tel:01090832443".`
      }
    },
    {
      "id": "flutter-animations",
      "title": "الأنيميشن والحركات المبهجة: Implicit Animations و Hero Animation",
      "tags": [
        "animation",
        "implicit",
        "animatedcontainer",
        "hero",
        "lottie",
        "motion"
      ],
      "icon": "<i class=\"fa-solid fa-film\"></i>",
      "description": "إزاي تخلي تطبيقك ينبض بالحياة وحركات بصرية مريحة للعين باستخدام AnimatedContainer والـ Hero Transition",
      "content": `
        <h2>ليه الأنيميشن بيفرق بين تطبيق عادي وتطبيق بمليون دولار؟</h2>
        <p>التطبيقات الممتازة مش بس بتشتغل صح، دي بتتحرك بسلاسة تبهر المستخدم وتفهمه التغيير اللي حصل على الشاشة. فلاتر بتقدملك مستويين من الأنيميشن:</p>

        <h3>1. Implicit Animations (الأنيميشن التلقائي السهل)</h3>
        <p>ودجتس جاهزة بتبدأ بكلمة <code>Animated...</code>؛ كل اللي عليك تعمله تديلها قيمة جديدة و <code>duration</code>، وفلاتر هتعمل التحريك السلس لوحدها بين القيمة القديمة والجديدة بدون وجع قلب ولا كود رياضي معقد! أشهرها: <code>AnimatedContainer</code>, <code>AnimatedOpacity</code>, <code>AnimatedAlign</code>.</p>

        <h3>2. Hero Animation (الانتقال السحري بين الشاشات)</h3>
        <p>لما المستخدم يدوس على صورة منتج صغير في الصفحة الأولى، فتطير وتكبر وتتحول لصورة الهيدر الكبيرة في صفحة التفاصيل! فلاتر بتعمل السحر ده بسطرين بس باستخدام ودجت <strong>Hero</strong> ونفس الـ <code>tag</code> المشترك!</p>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق بين الـ Implicit Animations والـ Explicit Animations ومتى تحتاج كائن AnimationController؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ Implicit (مثل AnimatedContainer) سهلة وتتولى فلاتر إدارتها ذاتياً بمجرد إعطائها قيمة جديدة. أما الـ Explicit فتحتاجها عند الرغبة في التحكم الكامل في الحركة (تشغيل، إيقاف، عكس، تكرار لانهائي) وتتطلب استخدام AnimationController و TickerProvider للتحكم الزمني الدقيق.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: AnimationDemoScreen()));

class AnimationDemoScreen extends StatefulWidget {
  const AnimationDemoScreen({super.key});

  @override
  State<AnimationDemoScreen> createState() => _AnimationDemoScreenState();
}

class _AnimationDemoScreenState extends State<AnimationDemoScreen> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('أنيميشن فلاتر السحري')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // ودجت AnimatedContainer بيتغير حجمه ولونه مع أنيميشن سلس مدته ثانية
            AnimatedContainer(
              duration: const Duration(milliseconds: 600),
              curve: Curves.easeInOutBack,
              width: _isExpanded ? 220 : 100,
              height: _isExpanded ? 220 : 100,
              decoration: BoxDecoration(
                color: _isExpanded ? Colors.deepPurple : Colors.amber,
                borderRadius: BorderRadius.circular(_isExpanded ? 50 : 12),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black26,
                    blurRadius: _isExpanded ? 20 : 5,
                    offset: const Offset(0, 8),
                  ),
                ],
              ),
              child: const Icon(Icons.rocket_launch, color: Colors.white, size: 40),
            ),
            const SizedBox(height: 30),
            ElevatedButton(
              onPressed: () => setState(() => _isExpanded = !_isExpanded),
              child: Text(_isExpanded ? 'تصغير الشكل' : 'تكبير وتحريك الشكل'),
            ),
          ],
        ),
      ),
    );
  }
}`,
        "output": `I/flutter: [AnimatedContainer] Animating properties with curve Curves.easeInOutBack:
I/flutter: - width: 100.0 -> 220.0
I/flutter: - height: 100.0 -> 220.0
I/flutter: - color: Colors.amber -> Colors.deepPurple
I/flutter: Animation completed in 600ms at solid 60/120 FPS.`
      }
    },
    {
      "id": "flutter-responsive",
      "title": "الاستجابة لجميع مقاسات الشاشات (Responsive & Adaptive UI)",
      "tags": [
        "responsive",
        "adaptive",
        "mediaquery",
        "layoutbuilder",
        "tablets",
        "orientation"
      ],
      "icon": "<i class=\"fa-solid fa-laptop-mobile\"></i>",
      "description": "إزاي تبني واجهة ذكية بتظبط شكلها تلقائياً على شاشات الموبايل الصغيرة والتابلت وشاشات الويب الكبيرة",
      "content": `
        <h2>شاشات من 4 بوصة لحد 32 بوصة!</h2>
        <p>بما إن فلاتر بتشتغل على كل المنصات، فمينفعش تثبت أحجام بالبكسل الصريح (زي <code>width: 380</code>)؛ لأنها هتطلع مظبوطة على موبايل، لكن على شاشة تابلت هتبان عبيطة في الجنب، وعلى شاشة صغيرة هيحصل لها Overflow!</p>

        <h3>أدوات الـ Responsive في فلاتر:</h3>
        <ul>
          <li><strong>MediaQuery:</strong> بتديك عرض وارتفاع الشاشة بالكامل، واتجاه الشاشة (Portrait أو Landscape)، ومقاس الـ Safe Area (النوتش وشريط الأزرار السفلي).</li>
          <li><strong>LayoutBuilder:</strong> ودجت ذكي جداً بيعرفك أقصى عرض متاح للودجت الأب (Constraints.maxWidth)، وبناءً عليه تقرر: لو العرض أقل من 600 بكسل اعرض كـ Column (موبايل)، ولو أكبر من 600 بكسل اعرض كـ Row أو Grid (تابلت وويب)!</li>
        </ul>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">ما الفرق بين MediaQuery.of(context).size و LayoutBuilder في تصميم الواجهات المتجاوبة؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> الـ MediaQuery تعطيك أبعاد الشاشة الكاملة للموبايل أو نافذة المتصفح. أما LayoutBuilder فيعطيك القيود (BoxConstraints) المتاحة للودجت الأب داخل مكانه الحالي، وهو أدق بكثير لبناء عناصر قابلة لإعادة الاستخدام داخل الشاشات المختلفة والتقسيمات المعقدة.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: ResponsiveScreenDemo()));

class ResponsiveScreenDemo extends StatelessWidget {
  const ResponsiveScreenDemo({super.key});

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;

    return Scaffold(
      appBar: AppBar(title: Text('شاشة العرض: \${screenSize.width.toInt()}px')),
      body: LayoutBuilder(
        builder: (context, constraints) {
          // لو الشاشة تابلت أو كمبيوتر (أعرض من 600px)
          if (constraints.maxWidth > 600) {
            return Row(
              children: [
                Expanded(
                  flex: 1,
                  child: Container(
                    color: Colors.blueGrey.shade100,
                    child: const Center(child: Text('قائمة التابلت والويب الجانبية', style: TextStyle(fontSize: 18))),
                  ),
                ),
                Expanded(
                  flex: 2,
                  child: Container(
                    color: Colors.white,
                    child: const Center(child: Text('المحتوى الأساسي الموسع', style: TextStyle(fontSize: 20))),
                  ),
                ),
              ],
            );
          }

          // شاشة موبايل عادية (أقل من 600px)
          return ListView(
            padding: const EdgeInsets.all(16),
            children: const [
              Card(child: ListTile(title: Text('عرض عمودي مخصص لشاشات الموبايل'))),
              Card(child: ListTile(title: Text('كل العناصر مرتبة فوق بعض بسلاسة'))),
            ],
          );
        },
      ),
    );
  }
}`,
        "output": `I/flutter: [MediaQuery] Device width: 412px, height: 915px.
I/flutter: [LayoutBuilder] constraints.maxWidth = 412px (< 600px).
I/flutter: Selected layout: Mobile portrait ListView.
I/flutter: Device rotated to Landscape (maxWidth: 915px) -> Switched to Master-Detail Row Layout instantly!`
      }
    },
    {
      "id": "flutter-clean-project",
      "title": "مشروع تطبيقي معماري شامل: متجر إلكتروني متكامل (CodeTech E-Commerce App)",
      "tags": [
        "project",
        "clean architecture",
        "ecommerce",
        "complete app",
        "mvvm",
        "state management"
      ],
      "icon": "<i class=\"fa-solid fa-store\"></i>",
      "description": "كود تطبيق متجر إلكتروني حقيقي متكامل يجمع: الـ Models، والـ State Management، والـ Cart، والتصميم الحديث بـ Material 3",
      "content": `
        <h2>مشروع المتجر الإلكتروني الاحترافي الشامل</h2>
        <p>ده كود تطبيق فلاتر متكامل بيجمع كل المفاهيم اللي اتعلمناها:</p>
        <ul>
          <li>بناء كلاس النموذج <code>Product</code>.</li>
          <li>إدارة حالة سلة المشتريات <code>CartProvider</code> وحساب الإجمالي تلقائياً.</li>
          <li>عرض المنتجات بشبكة ذكية <code>GridView.builder</code> مع كروت عصرية.</li>
          <li>شريط علوي مع عداد تفاعلي (Badge) لسلة المشتريات.</li>
          <li>نافذة منبثقة (Modal Bottom Sheet) لعرض عناصر السلة وتأكيد الطلب.</li>
        </ul>

        <div class="interview-box">
          <div class="interview-box-header">
            <i class="fa-solid fa-user-tie"></i>
            <span>سؤال إنترفيو مهم في هذا الموضوع 🎯</span>
          </div>
          <div class="interview-q">كيف تفصل مسؤوليات الـ Architecture في فلاتر وتمنع اعتماد الـ Business Logic على الـ UI؟</div>
          <div class="interview-a">💡 <strong>الإجابة النموذجية في المقابلة:</strong> بجعل طبقة البزنس (UseCases / Blocs) لا تستورد أبداً أي ملفات تابعة لـ flutter/material.dart بل تعتمد فقط على كائنات Dart نقية وواجهات مجردة (Repositories Interfaces)، بينما طبقة الـ UI تستمع فقط للحالات وتبلغ عن الأحداث بدون تنفيذ أي عمليات شبكية أو تخزينية مباشرة.</div>
        </div>
      `,
      "example": {
        "code": `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// ==================== 1. Data Model ====================
class Product {
  final int id;
  final String title;
  final double price;
  final IconData icon;

  const Product({required this.id, required this.title, required this.price, required this.icon});
}

// ==================== 2. State Management (Provider) ====================
class StoreCartProvider extends ChangeNotifier {
  final Map<Product, int> _items = {};

  Map<Product, int> get items => _items;
  int get totalQuantity => _items.values.fold(0, (sum, qty) => sum + qty);
  double get totalPrice => _items.entries.fold(0.0, (sum, entry) => sum + (entry.key.price * entry.value));

  void add(Product product) {
    if (_items.containsKey(product)) {
      _items[product] = _items[product]! + 1;
    } else {
      _items[product] = 1;
    }
    notifyListeners();
  }

  void remove(Product product) {
    if (_items.containsKey(product)) {
      if (_items[product] == 1) {
        _items.remove(product);
      } else {
        _items[product] = _items[product]! - 1;
      }
      notifyListeners();
    }
  }

  void clear() {
    _items.clear();
    notifyListeners();
  }
}

// ==================== 3. Entry Point ====================
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => StoreCartProvider(),
      child: const MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'CodeTech E-Commerce',
        home: StoreHomePage(),
      ),
    ),
  );
}

// ==================== 4. Home Page ====================
class StoreHomePage extends StatelessWidget {
  const StoreHomePage({super.key});

  final List<Product> catalog = const [
    Product(id: 1, title: 'MacBook Pro M3', price: 2199.0, icon: Icons.laptop_mac),
    Product(id: 2, title: 'iPhone 16 Pro', price: 1199.0, icon: Icons.phone_iphone),
    Product(id: 3, title: 'Sony WH-1000XM5', price: 399.0, icon: Icons.headphones),
    Product(id: 4, title: 'iPad Pro 13"', price: 1299.0, icon: Icons.tablet_mac),
  ];

  void _showCartSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => const CartBottomSheet(),
    );
  }

  @override
  Widget build(BuildContext context) {
    final cartQty = context.watch<StoreCartProvider>().totalQuantity;

    return Scaffold(
      appBar: AppBar(
        title: const Text('متجر CodeTech التقني 🚀'),
        actions: [
          IconButton(
            icon: Badge(
              label: Text('$cartQty'),
              isLabelVisible: cartQty > 0,
              child: const Icon(Icons.shopping_bag_outlined),
            ),
            onPressed: () => _showCartSheet(context),
          ),
        ],
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.8,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemCount: catalog.length,
        itemBuilder: (context, i) {
          final p = catalog[i];
          return Card(
            elevation: 3,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Icon(p.icon, size: 55, color: Colors.blueAccent),
                  Text(p.title, style: const TextStyle(fontWeight: FontWeight.bold), textAlign: TextAlign.center),
                  Text('\$\${p.price.toStringAsFixed(0)}', style: const TextStyle(color: Colors.green, fontWeight: FontWeight.bold)),
                  ElevatedButton(
                    onPressed: () => context.read<StoreCartProvider>().add(p),
                    style: ElevatedButton.styleFrom(minimumSize: const Size.fromHeight(36)),
                    child: const Text('أضف للسلة'),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

// ==================== 5. Cart Sheet ====================
class CartBottomSheet extends StatelessWidget {
  const CartBottomSheet({super.key});

  @override
  Widget build(BuildContext context) {
    final cart = context.watch<StoreCartProvider>();
    return Container(
      padding: const EdgeInsets.all(20),
      height: 400,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text('سلة المشتريات', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold), textAlign: TextAlign.center),
          const Divider(),
          Expanded(
            child: cart.items.isEmpty
                ? const Center(child: Text('السلة فارغة حالياً'))
                : ListView(
                    children: cart.items.entries.map((entry) {
                      return ListTile(
                        leading: Icon(entry.key.icon),
                        title: Text(entry.key.title),
                        subtitle: Text('\$\${entry.key.price} × \${entry.value}'),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(icon: const Icon(Icons.remove), onPressed: () => cart.remove(entry.key)),
                            Text('\${entry.value}', style: const TextStyle(fontWeight: FontWeight.bold)),
                            IconButton(icon: const Icon(Icons.add), onPressed: () => cart.add(entry.key)),
                          ],
                        ),
                      );
                    }).toList(),
                  ),
          ),
          const Divider(),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('الإجمالي الكلي:', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              Text('\$\${cart.totalPrice.toStringAsFixed(2)}', style: const TextStyle(fontSize: 20, color: Colors.green, fontWeight: FontWeight.bold)),
            ],
          ),
          const SizedBox(height: 12),
          ElevatedButton(
            style: ElevatedButton.styleFrom(backgroundColor: Colors.blueAccent, foregroundColor: Colors.white, minimumSize: const Size.fromHeight(45)),
            onPressed: cart.items.isEmpty ? null : () {
              Navigator.pop(context);
              cart.clear();
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('تم تأكيد الطلب بنجاح! شكرًا لثقتك بـ CodeTech')));
            },
            child: const Text('إتمام الشراء الآن'),
          ),
        ],
      ),
    );
  }
}`,
        "output": `✓ Application built and running on Flutter Engine 3.22.
I/flutter: [StoreHomePage] 4 products loaded in GridView.
I/flutter: User tapped 'أضف للسلة' for MacBook Pro M3.
I/flutter: [StoreCartProvider] items: {MacBook Pro M3: 1}, totalPrice: $2199.0.
I/flutter: Badge updated with quantity: 1.
I/flutter: User opened CartBottomSheet and confirmed order.
I/flutter: [SnackBar] تم تأكيد الطلب بنجاح! شكرًا لثقتك بـ CodeTech`
      }
    }
  ]
};
