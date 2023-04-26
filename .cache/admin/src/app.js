const config = {
  locales: [
     'ar',
     'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    ar:{
    "Settings.profile.form.notify.data.loaded": "تم تحميل بيانات ملفك الشخصي",
    "Settings.profile.form.section.experience.clear.select": "امسح لغة الواجهة المحددة",
    "Settings.profile.form.section.experience.here": "هنا",
    "Settings.profile.form.section.experience.interfaceLanguage": "لغة الواجهة",
    "Settings.profile.form.section.experience.interfaceLanguage.hint": "سيعرض هذا فقط واجهتك الخاصة باللغة المختارة.",
    "Settings.profile.form.section.experience.interfaceLanguageHelp": "سيتم تطبيق تغييرات التفضيلات عليك فقط. يتوفر مزيد من المعلومات هنا}.",
    "Settings.profile.form.section.experience.mode.hint": "يعرض واجهتك في الوضع المختار.",
    "Settings.profile.form.section.experience.mode.label": "وضع الواجهة",
    "Settings.profile.form.section.experience.mode.option-label": "{اسم} وضع",
    "Settings.profile.form.section.experience.title": "خبرة",
    "Settings.profile.form.section.helmet.title": "ملف تعريفي للمستخدم",
    "Settings.profile.form.section.profile.page.title": "الصفحة الشخصية",
    "Auth.form.firstname.label": "الاسم الأول",
    "Auth.form.lastname.label": "اسم العائلة",
    "Auth.form.currentPassword.label": "كلمة السر الحالية",
    "Auth.form.confirmPassword.label": "تأكيد كلمة المرور",
    "Password": "كلمة المرور",
    "global.password": "كلمة المرور",
    "global.change-password": "تغيير كلمة المرور",
    "global.profile": "حساب تعريفي",
    }

  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
