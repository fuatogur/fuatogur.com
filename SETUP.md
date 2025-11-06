# 🚀 Kurulum Talimatları

Bu dosya, projeyi sıfırdan kurmanız ve kişiselleştirmeniz için adım adım talimatlar içerir.

## 1️⃣ İlk Kurulum

### Bağımlılıkları Yükleyin
```bash
pnpm install
```

### Geliştirme Sunucusunu Başlatın
```bash
pnpm dev
```

Tarayıcınızda http://localhost:3000 adresini açın.

## 2️⃣ Kişisel Bilgileri Güncelleyin

### ✏️ İsim ve Tanıtım Metni
**Dosya**: `src/app/page.js`

```javascript
// Satır 49-53 civarında:
<h1>
  Merhaba, ben{" "}
  <span>
    Fuat Oğur  // ← Kendi isminizi yazın
  </span>
</h1>
```

### 🔗 Sosyal Medya Linkleri

#### Header (Üst Menü)
**Dosya**: `src/components/header.jsx`

```javascript
// Satır 44 civarında, logo bölümünde isminizi değiştirin:
<span>Fuat Oğur</span>  // ← Kendi isminizi yazın
```

#### Footer (Alt Kısım)
**Dosya**: `src/components/footer.jsx`

```javascript
// Satır 9-23 civarında:
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fuatogur",  // ← Kendi GitHub kullanıcı adınız
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/fuatogur",  // ← Kendi LinkedIn profiliniz
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:iletisim@fuatogur.com",  // ← Kendi e-posta adresiniz
    icon: Mail,
  },
];
```

#### Ana Sayfa Sosyal Medya İkonları
**Dosya**: `src/app/page.js`

```javascript
// Satır 9-23 civarında:
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fuatogur",  // ← Güncelleyin
    icon: Github,
    color: "hover:text-[#333] dark:hover:text-white",
  },
  // ... diğer linkler
];
```

### 📄 Site Meta Bilgileri
**Dosya**: `src/app/layout.js`

```javascript
// Satır 12-17 civarında:
export const metadata = {
  title: "Fuat Oğur - Web & Yazılım Geliştirici",  // ← Kendi başlığınız
  description: "...",  // ← Kendi açıklamanız
  keywords: [...],  // ← İlgili anahtar kelimeler
  authors: [{ name: "Fuat Oğur" }],  // ← Kendi isminiz
};
```

## 3️⃣ Projeleri Güncelleyin

**Dosya**: `src/data/projects.json`

Bu dosyayı kendi projelerinizle değiştirin:

```json
[
  {
    "id": 1,
    "title": "Projenizin Adı",
    "description": "Projenizin kısa açıklaması",
    "technologies": ["React", "Next.js", "Tailwind CSS"],
    "github": "https://github.com/kullaniciadi/proje-repo",
    "demo": "https://proje-demo.vercel.app"
  }
]
```

**Not**: `demo` alanı opsiyoneldir. Demo linkiniz yoksa `null` yazabilirsiniz.

## 4️⃣ Formspree Kurulumu

### Formspree Hesabı Oluşturun
1. https://formspree.io/ adresine gidin
2. Ücretsiz hesap oluşturun (aylık 50 mesaj ücretsiz)
3. "New Form" butonuna tıklayın
4. Form adı verin (örn: "İletişim Formu")
5. Form ID'nizi kopyalayın (örn: `xpznvwrd`)

### Form ID'yi Projeye Ekleyin
**Dosya**: `src/app/iletisim/page.js`

```javascript
// Satır 15 civarında:
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
//                                      ↑
//                              Buraya form ID'nizi yazın
```

**Örnek**:
```javascript
const [state, handleSubmit] = useForm("xpznvwrd");
```

### İletişim Bilgilerini Güncelleyin
**Dosya**: `src/app/iletisim/page.js`

```javascript
// Satır 98-121 civarında:
<div>
  <h4>E-posta</h4>
  <a href="mailto:iletisim@fuatogur.com">  // ← Kendi e-postanız
    iletisim@fuatogur.com  // ← Kendi e-postanız
  </a>
</div>
// GitHub ve LinkedIn linklerini de güncelleyin
```

## 5️⃣ Renk Temasını Özelleştirin (Opsiyonel)

**Dosya**: `src/app/globals.css`

```css
/* Light mode renklerini değiştirmek için: */
:root {
  --primary: 240 5.9% 10%;  /* Ana renk (siyaha yakın) */
  /* Diğer renkler... */
}

/* Dark mode renklerini değiştirmek için: */
.dark {
  --primary: 0 0% 98%;  /* Ana renk (beyaza yakın) */
  /* Diğer renkler... */
}
```

**Renk Formatı**: `H S L` (Hue Saturation Lightness)
- Örnek: `240 5.9% 10%` = koyu mavi-gri
- Örnek: `0 0% 98%` = beyaza yakın gri

## 6️⃣ Build ve Deploy

### Production Build
```bash
pnpm build
```

### Vercel'e Deploy
1. https://vercel.com adresine gidin
2. GitHub hesabınızla giriş yapın
3. "New Project" → Reponuzu seçin
4. "Deploy" butonuna tıklayın

**Otomatik deploy**: Her push işleminde Vercel otomatik olarak projenizi deploy eder.

## 7️⃣ Hata Giderme

### Port 3000 zaten kullanımda
```bash
# Farklı port kullanın
pnpm dev -p 3001
```

### Module not found hatası
```bash
# node_modules'u silin ve yeniden yükleyin
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Build hatası
```bash
# Cache'i temizleyin
rm -rf .next
pnpm build
```

## 8️⃣ Ek Özellikler Eklemek

### Blog Sayfası Eklemek
1. `src/app/blog/page.js` dosyası oluşturun
2. `src/components/header.jsx` dosyasına menü öğesi ekleyin:

```javascript
const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },  // ← Yeni
  { href: "/iletisim", label: "İletişim" },
];
```

### Google Analytics Eklemek
1. `src/app/layout.js` dosyasına Google Analytics script'ini ekleyin
2. https://analytics.google.com adresinden tracking ID'nizi alın

### Favicon Eklemek
1. `public/` klasörüne `favicon.ico` dosyasını ekleyin
2. veya `src/app/` klasörüne `icon.png` ekleyin (Next.js 13+)

## ✅ Kontrol Listesi

Deploy etmeden önce kontrol edin:

- [ ] Tüm kişisel bilgiler güncellendi
- [ ] Sosyal medya linkleri çalışıyor
- [ ] Projeler listeniz eklendi
- [ ] Formspree form ID eklendi ve test edildi
- [ ] Site metadata güncellendi
- [ ] README dosyası güncellendi
- [ ] Build komutu çalışıyor (`pnpm build`)
- [ ] Production'da görüntü test edildi

## 🆘 Yardım

Sorun yaşıyorsanız:
- GitHub Issues: https://github.com/fuatogur/fuatogur-nextjs/issues
- E-posta: iletisim@fuatogur.com

---

🎉 **Tebrikler!** Siteniz hazır. İyi çalışmalar!
