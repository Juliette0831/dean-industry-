let lang = 'zh';

const i18n = {
  zh: {
    navAbout:    '关于我们',
    navProducts: '产品展示',
    navContact:  '联系我们',
    heroSub:     '专注木工二手设备，链接全球制造',
    heroBtn:     '查看产品',
    aboutTitle:  '关于我们',
    aboutDesc:   '德安工业致力于为全球制造企业提供优质、可信赖的二手木工机械设备解决方案。我们帮助客户以更具性价比的方式获得高质量的工业设备，助力全球制造业可持续发展。',
    stat1Num:    '10+',  stat1Label: '年行业经验',
    stat2Num:    '500+', stat2Label: '设备成功交付',
    stat3Num:    '50+',  stat3Label: '全球合作客户',
    productsTitle: '产品展示',
    contactTitle:  '联系我们',
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
    aboutTitle:  'About Us',
    aboutDesc:   'Dean Industry is dedicated to providing high-quality, reliable used woodworking machinery solutions to manufacturing enterprises worldwide. We help customers acquire top-grade industrial equipment at competitive prices, empowering sustainable growth in global manufacturing.',
    stat1Num:    '10+',  stat1Label: 'Years Experience',
    stat2Num:    '500+', stat2Label: 'Machines Delivered',
    stat3Num:    '50+',  stat3Label: 'Global Clients',
    productsTitle: 'Our Products',
    contactTitle:  'Contact Us',
    contactEmailLabel:   'Email',
    contactWechatLabel:  'WeChat',
    contactPhoneLabel:   'Phone / WhatsApp',
    contactLinkedInLabel:'LinkedIn',
    footerText: '© 2026 DEAN INDUSTRY. All rights reserved.',
  }
};

function applyLang() {
  const t = i18n[lang];
  const s = k => document.getElementById(k);

  s('nav-about').textContent    = t.navAbout;
  s('nav-products').textContent = t.navProducts;
  s('nav-contact').textContent  = t.navContact;
  s('hero-sub').textContent     = t.heroSub;
  s('hero-btn').textContent     = t.heroBtn;
  s('about-title').textContent  = t.aboutTitle;
  s('about-desc').textContent   = t.aboutDesc;
  s('stat1-num').textContent    = t.stat1Num;
  s('stat1-label').textContent  = t.stat1Label;
  s('stat2-num').textContent    = t.stat2Num;
  s('stat2-label').textContent  = t.stat2Label;
  s('stat3-num').textContent    = t.stat3Num;
  s('stat3-label').textContent  = t.stat3Label;
  s('products-title').textContent     = t.productsTitle;
  s('contact-title').textContent      = t.contactTitle;
  s('contact-email-label').textContent    = t.contactEmailLabel;
  s('contact-wechat-label').textContent   = t.contactWechatLabel;
  s('contact-phone-label').textContent    = t.contactPhoneLabel;
  s('contact-linkedin-label').textContent = t.contactLinkedInLabel;
  s('footer-text').textContent        = t.footerText;
  s('lang-btn').textContent = lang === 'zh' ? 'EN' : '中文';

  renderProducts();
}

function toggleLang() {
  lang = lang === 'zh' ? 'en' : 'zh';
  applyLang();
}

function renderProducts() {
  fetch('products.json')
    .then(r => r.json())
    .then(products => {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = products.map(p => {
        const imgHtml = p.image
          ? `<img src="${p.image}" alt="${p.name[lang]}" loading="lazy">`
          : `<div class="product-placeholder">⚙</div>`;
        return `
          <div class="product-card">
            <div class="product-img-wrap">${imgHtml}</div>
            <div class="product-body">
              <div class="product-cat">${p.category[lang]}</div>
              <div class="product-name">${p.name[lang]}</div>
              <div class="product-desc">${p.desc[lang]}</div>
              <div class="product-footer">
                <span class="product-status">${p.status[lang]}</span>
                <span class="product-price">${p.price[lang]}</span>
              </div>
            </div>
          </div>`;
      }).join('');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lang-btn').addEventListener('click', toggleLang);
  applyLang();
});
