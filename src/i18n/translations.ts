export interface Translations {
  addCurrency: string;
  addCurrencyHint: string;
  pressAddButton: string;
  replaceCurrency: string;
  selectCurrency: string;
  selectCurrencyFromList: string;
  fiatCurrencies: string;
  cryptocurrencies: string;
  search: string;
  noCurrenciesFound: string;
  removeCurrency: string;
  loadingRates: string;
  updatedJustNow: string;
  updatedMinAgo: (min: number) => string;
  updatedHoursAgo: (hours: number) => string;
  theme: string;
  light: string;
  dark: string;
  system: string;
  language: string;
  settings: string;
  favorites: string;
  copy: string;
  moveUp: string;
  dragToReorder: string;
  refresh: string;
  newVersionAvailable: string;
  readyOffline: string;
  close: string;
  resetCurrencies: string;
  resetConfirmTitle: string;
  resetConfirmBody: string;
  cancel: string;
  about: string;
  aboutTagline: string;
  aboutBody: string;
  sourceCode: string;
}

const en: Translations = {
  addCurrency: "Add currency",
  addCurrencyHint: "Add a currency to get started",
  pressAddButton: 'Press the "Add currency" button below',
  replaceCurrency: "Replace currency",
  selectCurrency: "Select currency",
  selectCurrencyFromList: "Select a currency from the list",
  fiatCurrencies: "Currencies",
  cryptocurrencies: "Cryptocurrencies",
  search: "Search...",
  noCurrenciesFound: "No currencies found",
  removeCurrency: "Remove currency",
  loadingRates: "Loading rates...",
  updatedJustNow: "Updated just now",
  updatedMinAgo: (min) => `Updated ${min} min ago`,
  updatedHoursAgo: (hours) => `Updated ${hours} h ago`,
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  system: "System",
  language: "Language",
  settings: "Settings",
  favorites: "Favorites",
  copy: "Copy",
  moveUp: "Move up",
  dragToReorder: "Drag to reorder",
  refresh: "Refresh rates",
  newVersionAvailable: "New version available",
  readyOffline: "App ready to work offline",
  close: "Close",
  resetCurrencies: "Reset currencies",
  resetConfirmTitle: "Reset to defaults?",
  resetConfirmBody: "This will clear your list back to USD and EUR.",
  cancel: "Cancel",
  about: "About",
  aboutTagline: "A free currency calculator",
  aboutBody: "I built it for my own needs when I got tired of seeing ads in every other converter.",
  sourceCode: "Source code",
};

const ru: Translations = {
  addCurrency: "Добавить валюту",
  addCurrencyHint: "Добавьте валюту для начала",
  pressAddButton: "Нажмите кнопку «Добавить валюту» ниже",
  replaceCurrency: "Заменить валюту",
  selectCurrency: "Выберите валюту",
  selectCurrencyFromList: "Выберите валюту из списка",
  fiatCurrencies: "Валюты",
  cryptocurrencies: "Криптовалюты",
  search: "Поиск...",
  noCurrenciesFound: "Валюты не найдены",
  removeCurrency: "Удалить валюту",
  loadingRates: "Загрузка курсов...",
  updatedJustNow: "Обновлено только что",
  updatedMinAgo: (min) => `Обновлено ${min} мин. назад`,
  updatedHoursAgo: (hours) => `Обновлено ${hours} ч. назад`,
  theme: "Тема",
  light: "Светлая",
  dark: "Тёмная",
  system: "Системная",
  language: "Язык",
  settings: "Настройки",
  favorites: "Избранное",
  copy: "Копировать",
  moveUp: "Переместить вверх",
  dragToReorder: "Перетащите для сортировки",
  refresh: "Обновить курсы",
  newVersionAvailable: "Доступна новая версия",
  readyOffline: "Приложение готово к работе офлайн",
  close: "Закрыть",
  resetCurrencies: "Сбросить валюты",
  resetConfirmTitle: "Сбросить к значениям по умолчанию?",
  resetConfirmBody: "Список валют будет очищен до USD и EUR.",
  cancel: "Отмена",
  about: "О приложении",
  aboutTagline: "Свободный калькулятор валют",
  aboutBody: "Я сделал его для своих нужд, когда устал видеть рекламу в каждом другом конвертере.",
  sourceCode: "Исходный код",
};

const zh: Translations = {
  addCurrency: "添加货币",
  addCurrencyHint: "添加货币以开始",
  pressAddButton: '请点击下方的"添加货币"按钮',
  replaceCurrency: "替换货币",
  selectCurrency: "选择货币",
  selectCurrencyFromList: "从列表中选择货币",
  fiatCurrencies: "法定货币",
  cryptocurrencies: "加密货币",
  search: "搜索...",
  noCurrenciesFound: "未找到货币",
  removeCurrency: "删除货币",
  loadingRates: "加载汇率...",
  updatedJustNow: "刚刚更新",
  updatedMinAgo: (min) => `${min}分钟前更新`,
  updatedHoursAgo: (hours) => `${hours}小时前更新`,
  theme: "主题",
  light: "浅色",
  dark: "深色",
  system: "系统",
  language: "语言",
  settings: "设置",
  favorites: "收藏",
  copy: "复制",
  moveUp: "上移",
  dragToReorder: "拖动以重新排序",
  refresh: "刷新汇率",
  newVersionAvailable: "有新版本可用",
  readyOffline: "应用已准备好离线工作",
  close: "关闭",
  resetCurrencies: "重置货币",
  resetConfirmTitle: "重置为默认值？",
  resetConfirmBody: "这会将您的列表清除为美元和欧元。",
  cancel: "取消",
  about: "关于",
  aboutTagline: "一个免费的货币计算器",
  aboutBody: "我因为厌倦了其他每个转换器里的广告，为了自己的需求而制作了它。",
  sourceCode: "源代码",
};

const hi: Translations = {
  addCurrency: "मुद्रा जोड़ें",
  addCurrencyHint: "शुरू करने के लिए मुद्रा जोड़ें",
  pressAddButton: 'नीचे "मुद्रा जोड़ें" बटन दबाएं',
  replaceCurrency: "मुद्रा बदलें",
  selectCurrency: "मुद्रा चुनें",
  selectCurrencyFromList: "सूची से मुद्रा चुनें",
  fiatCurrencies: "मुद्राएँ",
  cryptocurrencies: "क्रिप्टोकरेंसी",
  search: "खोजें...",
  noCurrenciesFound: "कोई मुद्रा नहीं मिली",
  removeCurrency: "मुद्रा हटाएं",
  loadingRates: "दरें लोड हो रही हैं...",
  updatedJustNow: "अभी अपडेट हुआ",
  updatedMinAgo: (min) => `${min} मिनट पहले अपडेट हुआ`,
  updatedHoursAgo: (hours) => `${hours} घंटे पहले अपडेट हुआ`,
  theme: "थीम",
  light: "लाइट",
  dark: "डार्क",
  system: "सिस्टम",
  language: "भाषा",
  settings: "सेटिंग्स",
  favorites: "पसंदीदा",
  copy: "कॉपी",
  moveUp: "ऊपर ले जाएं",
  dragToReorder: "क्रम बदलने के लिए खींचें",
  refresh: "दरें रिफ्रेश करें",
  newVersionAvailable: "नया संस्करण उपलब्ध है",
  readyOffline: "ऐप ऑफ़लाइन काम करने के लिए तैयार है",
  close: "बंद करें",
  resetCurrencies: "मुद्राएं रीसेट करें",
  resetConfirmTitle: "डिफ़ॉल्ट पर रीसेट करें?",
  resetConfirmBody: "यह आपकी सूची को USD और EUR में साफ़ कर देगा।",
  cancel: "रद्द करें",
  about: "परिचय",
  aboutTagline: "एक मुफ़्त मुद्रा कैलकुलेटर",
  aboutBody: "मैंने इसे अपनी ज़रूरतों के लिए बनाया जब मुझे हर दूसरे कन्वर्टर में विज्ञापन देखने से थक गया था।",
  sourceCode: "सोर्स कोड",
};

const es: Translations = {
  addCurrency: "Agregar moneda",
  addCurrencyHint: "Agregue una moneda para comenzar",
  pressAddButton: 'Presione el botón "Agregar moneda" abajo',
  replaceCurrency: "Reemplazar moneda",
  selectCurrency: "Seleccionar moneda",
  selectCurrencyFromList: "Seleccione una moneda de la lista",
  fiatCurrencies: "Monedas",
  cryptocurrencies: "Criptomonedas",
  search: "Buscar...",
  noCurrenciesFound: "No se encontraron monedas",
  removeCurrency: "Eliminar moneda",
  loadingRates: "Cargando tasas...",
  updatedJustNow: "Actualizado justo ahora",
  updatedMinAgo: (min) => `Actualizado hace ${min} min`,
  updatedHoursAgo: (hours) => `Actualizado hace ${hours} h`,
  theme: "Tema",
  light: "Claro",
  dark: "Oscuro",
  system: "Sistema",
  language: "Idioma",
  settings: "Ajustes",
  favorites: "Favoritos",
  copy: "Copiar",
  moveUp: "Mover arriba",
  dragToReorder: "Arrastra para reordenar",
  refresh: "Actualizar tasas",
  newVersionAvailable: "Nueva versión disponible",
  readyOffline: "App lista para usar sin conexión",
  close: "Cerrar",
  resetCurrencies: "Restablecer monedas",
  resetConfirmTitle: "¿Restablecer a valores predeterminados?",
  resetConfirmBody: "Esto limpiará tu lista a USD y EUR.",
  cancel: "Cancelar",
  about: "Acerca de",
  aboutTagline: "Una calculadora de monedas gratuita",
  aboutBody: "La creé para mis propias necesidades cuando me cansé de ver anuncios en todos los demás conversores.",
  sourceCode: "Código fuente",
};

const fr: Translations = {
  addCurrency: "Ajouter une devise",
  addCurrencyHint: "Ajoutez une devise pour commencer",
  pressAddButton: "Appuyez sur le bouton « Ajouter une devise » ci-dessous",
  replaceCurrency: "Remplacer la devise",
  selectCurrency: "Sélectionner une devise",
  selectCurrencyFromList: "Sélectionnez une devise dans la liste",
  fiatCurrencies: "Devises",
  cryptocurrencies: "Cryptomonnaies",
  search: "Rechercher...",
  noCurrenciesFound: "Aucune devise trouvée",
  removeCurrency: "Supprimer la devise",
  loadingRates: "Chargement des taux...",
  updatedJustNow: "Mis à jour à l'instant",
  updatedMinAgo: (min) => `Mis à jour il y a ${min} min`,
  updatedHoursAgo: (hours) => `Mis à jour il y a ${hours} h`,
  theme: "Thème",
  light: "Clair",
  dark: "Sombre",
  system: "Système",
  language: "Langue",
  settings: "Paramètres",
  favorites: "Favoris",
  copy: "Copier",
  moveUp: "Déplacer vers le haut",
  dragToReorder: "Glisser pour réorganiser",
  refresh: "Actualiser les taux",
  newVersionAvailable: "Nouvelle version disponible",
  readyOffline: "Application prête hors connexion",
  close: "Fermer",
  resetCurrencies: "Réinitialiser les devises",
  resetConfirmTitle: "Réinitialiser par défaut ?",
  resetConfirmBody: "Ceci remettra votre liste à USD et EUR.",
  cancel: "Annuler",
  about: "À propos",
  aboutTagline: "Un calculateur de devises gratuit",
  aboutBody: "Je l'ai créé pour mes propres besoins quand j'en ai eu marre de voir des pubs dans tous les autres convertisseurs.",
  sourceCode: "Code source",
};

const ar: Translations = {
  addCurrency: "إضافة عملة",
  addCurrencyHint: "أضف عملة للبدء",
  pressAddButton: 'اضغط على زر "إضافة عملة" أدناه',
  replaceCurrency: "استبدال العملة",
  selectCurrency: "اختر عملة",
  selectCurrencyFromList: "اختر عملة من القائمة",
  fiatCurrencies: "العملات",
  cryptocurrencies: "العملات الرقمية",
  search: "بحث...",
  noCurrenciesFound: "لم يتم العثور على عملات",
  removeCurrency: "حذف العملة",
  loadingRates: "جاري تحميل الأسعار...",
  updatedJustNow: "تم التحديث للتو",
  updatedMinAgo: (min) => `تم التحديث منذ ${min} دقيقة`,
  updatedHoursAgo: (hours) => `تم التحديث منذ ${hours} ساعة`,
  theme: "السمة",
  light: "فاتح",
  dark: "داكن",
  system: "النظام",
  language: "اللغة",
  settings: "الإعدادات",
  favorites: "المفضلة",
  copy: "نسخ",
  moveUp: "نقل لأعلى",
  dragToReorder: "اسحب لإعادة الترتيب",
  refresh: "تحديث الأسعار",
  newVersionAvailable: "إصدار جديد متاح",
  readyOffline: "التطبيق جاهز للعمل دون اتصال",
  close: "إغلاق",
  resetCurrencies: "إعادة تعيين العملات",
  resetConfirmTitle: "إعادة التعيين إلى الافتراضي؟",
  resetConfirmBody: "سيؤدي هذا إلى مسح قائمتك إلى USD و EUR.",
  cancel: "إلغاء",
  about: "حول",
  aboutTagline: "حاسبة عملات مجانية",
  aboutBody: "صنعته لاحتياجاتي الخاصة عندما سئمت من رؤية الإعلانات في كل محول آخر.",
  sourceCode: "الكود المصدري",
};

const bn: Translations = {
  addCurrency: "মুদ্রা যোগ করুন",
  addCurrencyHint: "শুরু করতে একটি মুদ্রা যোগ করুন",
  pressAddButton: 'নিচের "মুদ্রা যোগ করুন" বোতাম টিপুন',
  replaceCurrency: "মুদ্রা প্রতিস্থাপন করুন",
  selectCurrency: "মুদ্রা নির্বাচন করুন",
  selectCurrencyFromList: "তালিকা থেকে মুদ্রা নির্বাচন করুন",
  fiatCurrencies: "মুদ্রা",
  cryptocurrencies: "ক্রিপ্টোকারেন্সি",
  search: "অনুসন্ধান...",
  noCurrenciesFound: "কোনো মুদ্রা পাওয়া যায়নি",
  removeCurrency: "মুদ্রা সরান",
  loadingRates: "রেট লোড হচ্ছে...",
  updatedJustNow: "এইমাত্র আপডেট হয়েছে",
  updatedMinAgo: (min) => `${min} মিনিট আগে আপডেট হয়েছে`,
  updatedHoursAgo: (hours) => `${hours} ঘন্টা আগে আপডেট হয়েছে`,
  theme: "থিম",
  light: "লাইট",
  dark: "ডার্ক",
  system: "সিস্টেম",
  language: "ভাষা",
  settings: "সেটিংস",
  favorites: "পছন্দের",
  copy: "কপি",
  moveUp: "উপরে নামান",
  dragToReorder: "পুনর্বিন্যাসের জন্য টেনে আনুন",
  refresh: "রেট রিফ্রেশ করুন",
  newVersionAvailable: "নতুন সংস্করণ উপলব্ধ",
  readyOffline: "অ্যাপটি অফলাইনে কাজ করার জন্য প্রস্তুত",
  close: "বন্ধ করুন",
  resetCurrencies: "মুদ্রা রিসেট করুন",
  resetConfirmTitle: "ডিফল্টে রিসেট করবেন?",
  resetConfirmBody: "এটি আপনার তালিকাটি USD এবং EUR-এ পরিষ্কার করবে।",
  cancel: "বাতিল",
  about: "সম্পর্কে",
  aboutTagline: "একটি বিনামূল্যে মুদ্রা ক্যালকুলেটর",
  aboutBody: "আমি অন্য প্রতিটি কনভার্টারে বিজ্ঞাপন দেখতে ক্লান্ত হয়ে পড়েছিলাম তখন আমি এটি আমার নিজের প্রয়োজনে তৈরি করেছিলাম।",
  sourceCode: "সোর্স কোড",
};

const pt: Translations = {
  addCurrency: "Adicionar moeda",
  addCurrencyHint: "Adicione uma moeda para começar",
  pressAddButton: 'Pressione o botão "Adicionar moeda" abaixo',
  replaceCurrency: "Substituir moeda",
  selectCurrency: "Selecionar moeda",
  selectCurrencyFromList: "Selecione uma moeda da lista",
  fiatCurrencies: "Moedas",
  cryptocurrencies: "Criptomoedas",
  search: "Pesquisar...",
  noCurrenciesFound: "Nenhuma moeda encontrada",
  removeCurrency: "Remover moeda",
  loadingRates: "Carregando taxas...",
  updatedJustNow: "Atualizado agora",
  updatedMinAgo: (min) => `Atualizado há ${min} min`,
  updatedHoursAgo: (hours) => `Atualizado há ${hours} h`,
  theme: "Tema",
  light: "Claro",
  dark: "Escuro",
  system: "Sistema",
  language: "Idioma",
  settings: "Configurações",
  favorites: "Favoritos",
  copy: "Copiar",
  moveUp: "Mover para cima",
  dragToReorder: "Arraste para reordenar",
  refresh: "Atualizar taxas",
  newVersionAvailable: "Nova versão disponível",
  readyOffline: "App pronto para uso offline",
  close: "Fechar",
  resetCurrencies: "Redefinir moedas",
  resetConfirmTitle: "Redefinir para o padrão?",
  resetConfirmBody: "Isso limpará sua lista para USD e EUR.",
  cancel: "Cancelar",
  about: "Acerca de",
  aboutTagline: "Una calculadora de monedas gratuita",
  aboutBody: "La creé para mis propias necesidades cuando me cansé de ver anuncios en todos los demás conversores.",
  sourceCode: "Código-fonte",
};

const ja: Translations = {
  addCurrency: "通貨を追加",
  addCurrencyHint: "通貨を追加して始めましょう",
  pressAddButton: "下の「通貨を追加」ボタンを押してください",
  replaceCurrency: "通貨を変更",
  selectCurrency: "通貨を選択",
  selectCurrencyFromList: "リストから通貨を選択してください",
  fiatCurrencies: "通貨",
  cryptocurrencies: "暗号通貨",
  search: "検索...",
  noCurrenciesFound: "通貨が見つかりません",
  removeCurrency: "通貨を削除",
  loadingRates: "レート読み込み中...",
  updatedJustNow: "たった今更新",
  updatedMinAgo: (min) => `${min}分前に更新`,
  updatedHoursAgo: (hours) => `${hours}時間前に更新`,
  theme: "テーマ",
  light: "ライト",
  dark: "ダーク",
  system: "システム",
  language: "言語",
  settings: "設定",
  favorites: "お気に入り",
  copy: "コピー",
  moveUp: "上に移動",
  dragToReorder: "ドラッグして並べ替え",
  refresh: "レートを更新",
  newVersionAvailable: "新しいバージョンがあります",
  readyOffline: "アプリはオフラインで利用可能です",
  close: "閉じる",
  resetCurrencies: "通貨をリセット",
  resetConfirmTitle: "デフォルトにリセットしますか？",
  resetConfirmBody: "リストがUSDとEURにリセットされます。",
  cancel: "キャンセル",
  about: "情報",
  aboutTagline: "無料の通貨計算機",
  aboutBody: "他のどのコンバーターにも広告が表示されるのに疲れて、自分のために作りました。",
  sourceCode: "ソースコード",
};

const de: Translations = {
  addCurrency: "Währung hinzufügen",
  addCurrencyHint: "Fügen Sie eine Währung hinzu, um zu beginnen",
  pressAddButton: "Drücken Sie unten die Taste „Währung hinzufügen“",
  replaceCurrency: "Währung ersetzen",
  selectCurrency: "Währung auswählen",
  selectCurrencyFromList: "Wählen Sie eine Währung aus der Liste",
  fiatCurrencies: "Währungen",
  cryptocurrencies: "Kryptowährungen",
  search: "Suchen...",
  noCurrenciesFound: "Keine Währungen gefunden",
  removeCurrency: "Währung entfernen",
  loadingRates: "Kurse werden geladen...",
  updatedJustNow: "Gerade aktualisiert",
  updatedMinAgo: (min) => `Vor ${min} Min. aktualisiert`,
  updatedHoursAgo: (hours) => `Vor ${hours} Std. aktualisiert`,
  theme: "Design",
  light: "Hell",
  dark: "Dunkel",
  system: "System",
  language: "Sprache",
  settings: "Einstellungen",
  favorites: "Favoriten",
  copy: "Kopieren",
  moveUp: "Nach oben",
  dragToReorder: "Ziehen zum Sortieren",
  refresh: "Kurse aktualisieren",
  newVersionAvailable: "Neue Version verfügbar",
  readyOffline: "App bereit für Offline- Nutzung",
  close: "Schließen",
  resetCurrencies: "Währungen zurücksetzen",
  resetConfirmTitle: "Auf Standard zurücksetzen?",
  resetConfirmBody: "Dies setzt Ihre Liste auf USD und EUR zurück.",
  cancel: "Abbrechen",
  about: "Über",
  aboutTagline: "Ein kostenloser Währungsrechner",
  aboutBody: "Ich habe es für meine eigenen Bedürfnisse gebaut, als ich es satt hatte, in jedem anderen Konverter Werbung zu sehen.",
  sourceCode: "Quellcode",
};

const ko: Translations = {
  addCurrency: "통화 추가",
  addCurrencyHint: "시작하려면 통화를 추가하세요",
  pressAddButton: '아래 "통화 추가" 버튼을 누르세요',
  replaceCurrency: "통화 변경",
  selectCurrency: "통화 선택",
  selectCurrencyFromList: "목록에서 통화를 선택하세요",
  fiatCurrencies: "통화",
  cryptocurrencies: "암호화폐",
  search: "검색...",
  noCurrenciesFound: "통화를 찾을 수 없습니다",
  removeCurrency: "통화 삭제",
  loadingRates: "환율 로딩 중...",
  updatedJustNow: "방금 업데이트됨",
  updatedMinAgo: (min) => `${min}분 전 업데이트`,
  updatedHoursAgo: (hours) => `${hours}시간 전 업데이트`,
  theme: "테마",
  light: "라이트",
  dark: "다크",
  system: "시스템",
  language: "언어",
  settings: "설정",
  favorites: "즐겨찾기",
  copy: "복사",
  moveUp: "위로 이동",
  dragToReorder: "드래그하여 재정렬",
  refresh: "환율 새로고침",
  newVersionAvailable: "새 버전을 사용할 수 있습니다",
  readyOffline: "오프라인 사용 준비 완료",
  close: "닫기",
  resetCurrencies: "통화 재설정",
  resetConfirmTitle: "기본값으로 재설정하시겠습니까?",
  resetConfirmBody: "목록이 USD와 EUR로 초기화됩니다.",
  cancel: "취소",
  about: "정보",
  aboutTagline: "무료 통화 계산기",
  aboutBody: "다른 모든 변환기에서 광고를 보는 것에 지쳐서 내 필요를 위해 만들었습니다.",
  sourceCode: "소스 코드",
};

const tr: Translations = {
  addCurrency: "Para birimi ekle",
  addCurrencyHint: "Başlamak için bir para birimi ekleyin",
  pressAddButton: 'Aşağıdaki "Para birimi ekle" düğmesine basın',
  replaceCurrency: "Para birimini değiştir",
  selectCurrency: "Para birimi seçin",
  selectCurrencyFromList: "Listeden bir para birimi seçin",
  fiatCurrencies: "Para birimleri",
  cryptocurrencies: "Kripto paralar",
  search: "Ara...",
  noCurrenciesFound: "Para birimi bulunamadı",
  removeCurrency: "Para birimini sil",
  loadingRates: "Kurlar yükleniyor...",
  updatedJustNow: "Az önce güncellendi",
  updatedMinAgo: (min) => `${min} dk önce güncellendi`,
  updatedHoursAgo: (hours) => `${hours} sa önce güncellendi`,
  theme: "Tema",
  light: "Açık",
  dark: "Koyu",
  system: "Sistem",
  language: "Dil",
  settings: "Ayarlar",
  favorites: "Favoriler",
  copy: "Kopyala",
  moveUp: "Yukarı taşı",
  dragToReorder: "Yeniden sıralamak için sürükle",
  refresh: "Kurları yenile",
  newVersionAvailable: "Yeni sürüm mevcut",
  readyOffline: "Uygulama çevrimdışı çalışmaya hazır",
  close: "Kapat",
  resetCurrencies: "Para birimlerini sıfırla",
  resetConfirmTitle: "Varsayılana sıfırla?",
  resetConfirmBody: "Bu, listenizi USD ve EUR'a temizleyecek.",
  cancel: "İptal",
  about: "Hakkında",
  aboutTagline: "Ücretsiz bir döviz hesaplayıcısı",
  aboutBody: "Diğer tüm dönüştürücülerde reklam görmekten bıktığımda kendi ihtiyaçlarım için yaptım.",
  sourceCode: "Kaynak kodu",
};

const it: Translations = {
  addCurrency: "Aggiungi valuta",
  addCurrencyHint: "Aggiungi una valuta per iniziare",
  pressAddButton: 'Premi il pulsante "Aggiungi valuta" qui sotto',
  replaceCurrency: "Sostituisci valuta",
  selectCurrency: "Seleziona valuta",
  selectCurrencyFromList: "Seleziona una valuta dall'elenco",
  fiatCurrencies: "Valute",
  cryptocurrencies: "Criptovalute",
  search: "Cerca...",
  noCurrenciesFound: "Nessuna valuta trovata",
  removeCurrency: "Rimuovi valuta",
  loadingRates: "Caricamento tassi...",
  updatedJustNow: "Aggiornato ora",
  updatedMinAgo: (min) => `Aggiornato ${min} min fa`,
  updatedHoursAgo: (hours) => `Aggiornato ${hours} ore fa`,
  theme: "Tema",
  light: "Chiaro",
  dark: "Scuro",
  system: "Sistema",
  language: "Lingua",
  settings: "Impostazioni",
  favorites: "Preferiti",
  copy: "Copia",
  moveUp: "Sposta su",
  dragToReorder: "Trascina per riordinare",
  refresh: "Aggiorna tassi",
  newVersionAvailable: "Nuova versione disponibile",
  readyOffline: "App pronta per l'uso offline",
  close: "Chiudi",
  resetCurrencies: "Reimposta valute",
  resetConfirmTitle: "Ripristinare ai valori predefiniti?",
  resetConfirmBody: "Questo ripristinerà la lista a USD ed EUR.",
  cancel: "Annulla",
  about: "Informazioni",
  aboutTagline: "Un calcolatore di valute gratuito",
  aboutBody: "L'ho creato per le mie esigenze quando mi sono stancato di vedere pubblicità in ogni altro convertitore.",
  sourceCode: "Codice sorgente",
};

const id: Translations = {
  addCurrency: "Tambah mata uang",
  addCurrencyHint: "Tambahkan mata uang untuk memulai",
  pressAddButton: 'Tekan tombol "Tambah mata uang" di bawah',
  replaceCurrency: "Ganti mata uang",
  selectCurrency: "Pilih mata uang",
  selectCurrencyFromList: "Pilih mata uang dari daftar",
  fiatCurrencies: "Mata uang",
  cryptocurrencies: "Kripto",
  search: "Cari...",
  noCurrenciesFound: "Mata uang tidak ditemukan",
  removeCurrency: "Hapus mata uang",
  loadingRates: "Memuat kurs...",
  updatedJustNow: "Baru saja diperbarui",
  updatedMinAgo: (min) => `Diperbarui ${min} menit lalu`,
  updatedHoursAgo: (hours) => `Diperbarui ${hours} jam lalu`,
  theme: "Tema",
  light: "Terang",
  dark: "Gelap",
  system: "Sistem",
  language: "Bahasa",
  settings: "Pengaturan",
  favorites: "Favorit",
  copy: "Salin",
  moveUp: "Pindah ke atas",
  dragToReorder: "Seret untuk mengurutkan ulang",
  refresh: "Segarkan kurs",
  newVersionAvailable: "Versi baru tersedia",
  readyOffline: "Aplikasi siap digunakan offline",
  close: "Tutup",
  resetCurrencies: "Reset mata uang",
  resetConfirmTitle: "Reset ke default?",
  resetConfirmBody: "Ini akan menghapus daftar Anda kembali ke USD dan EUR.",
  cancel: "Batal",
  about: "Tentang",
  aboutTagline: "Kalkulator mata uang gratis",
  aboutBody: "Saya membuatnya untuk kebutuhan saya sendiri ketika saya lelah melihat iklan di setiap konverter lain.",
  sourceCode: "Kode sumber",
};

export const translations: Record<string, Translations> = {
  en,
  ru,
  zh,
  hi,
  es,
  fr,
  ar,
  bn,
  pt,
  ja,
  de,
  ko,
  tr,
  it,
  id,
};

const LANG_KEY = "lang";

function getInitialLanguage(): string {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored && translations[stored]) return stored;
  } catch {
    // private mode — ignore
  }
  const lang = navigator.language || "en";
  const code = lang.split("-")[0]?.toLowerCase() || "en";
  // Fall back to English if the browser language isn't supported.
  return translations[code] ? code : "en";
}

const RTL_LANGUAGES = new Set(["ar", "he", "fa", "ur"]);

function applyDocumentLanguage(code: string): void {
  document.documentElement.lang = code;
  document.documentElement.dir = RTL_LANGUAGES.has(code) ? "rtl" : "ltr";
}

let currentLang = getInitialLanguage();
let currentTranslations: Translations = translations[currentLang] ?? en;

// Reactive subscriptions so hooks (useLanguage) can track language changes.
const languageListeners = new Set<() => void>();

function notifyLanguageChange() {
  for (const listener of languageListeners) listener();
}

// Apply lang/dir on initial load so refreshes stay correct
if (typeof document !== "undefined") {
  applyDocumentLanguage(currentLang);
}

export function getCurrentLanguage(): string {
  return currentLang;
}

/** Subscribe to language changes (for useSyncExternalStore). Returns an unsubscribe fn. */
export function subscribeLanguage(listener: () => void): () => void {
  languageListeners.add(listener);
  return () => languageListeners.delete(listener);
}

/** Switches the UI language, updates <html lang/dir>, and persists the choice. */
export function setLanguage(code: string): void {
  if (!translations[code]) return;
  currentLang = code;
  currentTranslations = translations[code];
  applyDocumentLanguage(code);
  try {
    localStorage.setItem(LANG_KEY, code);
  } catch {
    // ignore
  }
  notifyLanguageChange();
}

export function t(): Translations {
  return currentTranslations;
}
