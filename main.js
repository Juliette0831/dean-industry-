let lang = 'zh';

const i18n = {
  zh: {
    navAbout:    '关于我们',
    navProducts: '产品展示',
    navContact:  '联系我们',
    heroSub:     '专注木工二手设备，链接全球制造',
    heroBtn:     '查看产品',
    featQuality: '品质严选',
    featShipping:'全球发货',
    featBrands:  '顶级品牌',
    featSupport: '专业支持',
    brandLabel:  '合作品牌',
    aboutTitle:  '关于我们',
    aboutDesc:   '德安工业致力于为全球制造企业提供优质、可信赖的二手木工机械设备解决方案。我们帮助客户以更具性价比的方式获得高质量的工业设备，助力全球制造业可持续发展。',
    stat1Num: '10+', stat1Label: '年行业经验',
    stat2Num: '500+', stat2Label: '设备成功交付',
    stat3Num: '50+', stat3Label: '全球合作客户',
    productsTitle:       '产品展示',
    contactTitle:        '联系我们',
    contactEmailLabel:   '邮箱 / Email',
    contactWechatLabel:  '微信 / WeChat',
    contactPhoneLabel:   '电话 / WhatsApp',
    contactLinkedInLabel:'LinkedIn',
    footerText: '© 2026 DEAN INDUSTRY 德安工业. All rights reserved.',
  },
  en: {
    navAbout:    'About',
    navProducts: 'Products',
    navContact:  'Contact',
    heroSub:     'Excellence in Used Woodworking Machinery, Connecting Global Manufacturing',
    heroBtn:     'View Products',
    featQuality: 'Quality Inspected',
    featShipping:'Worldwide Delivery',
    featBrands:  'Top Brands',
    featSupport: 'Expert Support',
    brandLabel:  'Brands We Carry',
    aboutTitle:  'About Us',
    aboutDesc:   'Dean Industry is dedicated to providing high-quality, reliable used woodworking machinery solutions to manufacturing enterprises worldwide. We help customers acquire top-grade industrial equipment at competitive prices, empowering sustainable growth in global manufacturing.',
    stat1Num: '10+', stat1Label: 'Years Experience',
    stat2Num: '500+', stat2Label: 'Machines Delivered',
    stat3Num: '50+', stat3Label: 'Global Clients',
    productsTitle:       'Our Products',
    contactTitle:        'Contact Us',
    contactEmailLabel:   'Email',
    contactWechatLabel:  'WeChat',
    contactPhoneLabel:   'Phone / WhatsApp',
    contactLinkedInLabel:'LinkedIn',
    footerText: '© 2026 DEAN INDUSTRY. All rights reserved.',
  },
  ru: {
    navAbout:    'О нас',
    navProducts: 'Продукция',
    navContact:  'Контакты',
    heroSub:     'Специализация на б/у деревообрабатывающем оборудовании, связывая мировое производство',
    heroBtn:     'Смотреть продукцию',
    featQuality: 'Проверка качества',
    featShipping:'Доставка по всему миру',
    featBrands:  'Топ бренды',
    featSupport: 'Экспертная поддержка',
    brandLabel:  'Наши бренды',
    aboutTitle:  'О нас',
    aboutDesc:   'Dean Industry специализируется на поставке высококачественного и надёжного б/у деревообрабатывающего оборудования для производственных предприятий по всему миру. Мы помогаем клиентам приобрести оборудование ведущих марок по конкурентным ценам, способствуя устойчивому развитию мирового производства.',
    stat1Num: '10+', stat1Label: 'Лет опыта',
    stat2Num: '500+', stat2Label: 'Поставлено машин',
    stat3Num: '50+', stat3Label: 'Клиентов по миру',
    productsTitle:       'Наши товары',
    contactTitle:        'Контакты',
    contactEmailLabel:   'Эл. почта',
    contactWechatLabel:  'WeChat',
    contactPhoneLabel:   'Тел. / WhatsApp',
    contactLinkedInLabel:'LinkedIn',
    footerText: '© 2026 DEAN INDUSTRY. Все права защищены.',
  },
  hi: {
    navAbout:    'हमारे बारे में',
    navProducts: 'उत्पाद',
    navContact:  'संपर्क',
    heroSub:     'प्रयुक्त वुडवर्किंग मशीनरी में विशेषज्ञ — वैश्विक उत्पादन को जोड़ते हैं',
    heroBtn:     'उत्पाद देखें',
    featQuality: 'गुणवत्ता जाँच',
    featShipping:'विश्वव्यापी डिलीवरी',
    featBrands:  'शीर्ष ब्रांड',
    featSupport: 'विशेषज्ञ सहायता',
    brandLabel:  'हमारे ब्रांड',
    aboutTitle:  'हमारे बारे में',
    aboutDesc:   'Dean Industry विश्व भर के विनिर्माण उद्यमों को उच्च गुणवत्ता वाली, विश्वसनीय प्रयुक्त वुडवर्किंग मशीनरी समाधान प्रदान करने के लिए समर्पित है। हम ग्राहकों को प्रतिस्पर्धी कीमतों पर शीर्ष औद्योगिक उपकरण प्राप्त करने में मदद करते हैं।',
    stat1Num: '10+', stat1Label: 'वर्षों का अनुभव',
    stat2Num: '500+', stat2Label: 'मशीनें वितरित',
    stat3Num: '50+', stat3Label: 'वैश्विक ग्राहक',
    productsTitle:       'हमारे उत्पाद',
    contactTitle:        'संपर्क करें',
    contactEmailLabel:   'ईमेल',
    contactWechatLabel:  'WeChat',
    contactPhoneLabel:   'फ़ोन / WhatsApp',
    contactLinkedInLabel:'LinkedIn',
    footerText: '© 2026 DEAN INDUSTRY. सर्वाधिकार सुरक्षित।',
  }
};

function applyLang() {
  const t = i18n[lang];
  const s = k => document.getElementById(k);

  document.documentElement.lang = lang === 'hi' ? 'hi' : lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'zh';
  document.body.style.fontFamily = lang === 'hi'
    ? "'Noto Sans Devanagari', 'Segoe UI', Arial, sans-serif"
    : "'Segoe UI', 'PingFang SC', Arial, sans-serif";

  s('nav-about').textContent    = t.navAbout;
  s('nav-products').textContent = t.navProducts;
  s('nav-contact').textContent  = t.navContact;
  s('hero-sub').textContent     = t.heroSub;
  s('hero-btn').textContent     = t.heroBtn;
  s('feat-quality').textContent = t.featQuality;
  s('feat-shipping').textContent= t.featShipping;
  s('feat-brands').textContent  = t.featBrands;
  s('feat-support').textContent = t.featSupport;
  s('brand-label').textContent  = t.brandLabel;
  s('about-title').textContent  = t.aboutTitle;
  s('about-desc').textContent   = t.aboutDesc;
  s('stat1-num').textContent    = t.stat1Num;
  s('stat1-label').textContent  = t.stat1Label;
  s('stat2-num').textContent    = t.stat2Num;
  s('stat2-label').textContent  = t.stat2Label;
  s('stat3-num').textContent    = t.stat3Num;
  s('stat3-label').textContent  = t.stat3Label;
  s('products-title').textContent      = t.productsTitle;
  s('contact-title').textContent       = t.contactTitle;
  s('contact-email-label').textContent   = t.contactEmailLabel;
  s('contact-wechat-label').textContent  = t.contactWechatLabel;
  s('contact-phone-label').textContent   = t.contactPhoneLabel;
  s('contact-linkedin-label').textContent= t.contactLinkedInLabel;
  s('footer-text').textContent         = t.footerText;

  renderProducts();
}

function renderProducts() {
  fetch('products.json')
    .then(r => r.json())
    .then(products => {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = products.map(p => {
        const imgHtml = p.image
          ? `<img src="${p.image}" alt="${p.name[lang] || p.name.en}" loading="lazy">`
          : `<div class="product-placeholder">⚙</div>`;
        return `
          <div class="product-card">
            <div class="product-img-wrap">${imgHtml}</div>
            <div class="product-body">
              <div class="product-cat">${p.category[lang] || p.category.en}</div>
              <div class="product-name">${p.name[lang] || p.name.en}</div>
              <div class="product-desc">${p.desc[lang] || p.desc.en}</div>
              <div class="product-footer">
                <span class="product-status">${p.status[lang] || p.status.en}</span>
                <span class="product-price">${p.price[lang] || p.price.en}</span>
              </div>
            </div>
          </div>`;
      }).join('');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lang-select').addEventListener('change', e => {
    lang = e.target.value;
    applyLang();
  });
  applyLang();
});
