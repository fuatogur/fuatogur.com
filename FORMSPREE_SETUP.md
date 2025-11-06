# 📧 Formspree Kurulum Rehberi

Bu rehber, iletişim formu için Formspree'yi nasıl kuracağınızı adım adım anlatır.

## Neden Formspree?

- ✅ **Ücretsiz**: Ayda 50 mesaj ücretsiz
- ✅ **Kolay Kurulum**: Backend koduna gerek yok
- ✅ **Spam Koruması**: reCAPTCHA desteği
- ✅ **E-posta Bildirimleri**: Mesaj geldiğinde e-posta alın
- ✅ **Hızlı**: 5 dakikada kurulum

## 🚀 Adım 1: Hesap Oluşturun

1. https://formspree.io/ adresine gidin
2. Sağ üstteki **"Sign Up"** butonuna tıklayın
3. E-posta adresinizle ücretsiz hesap oluşturun
4. E-postanıza gelen doğrulama linkine tıklayın

## 📝 Adım 2: Form Oluşturun

1. Dashboard'a giriş yapın
2. **"+ New Form"** butonuna tıklayın
3. Form için bir isim girin (örn: "İletişim Formu")
4. **"Create Form"** butonuna tıklayın

## 🔑 Adım 3: Form ID'sini Alın

Form oluşturduktan sonra, Form ID'nizi göreceksiniz. 

**Form ID** şu şekilde görünür: `xpznvwrd` (her form için benzersiz)

Form ID'yi kopyalayın.

## 💻 Adım 4: Projeye Ekleyin

### Yöntem 1: Doğrudan Kod İçinde

`src/app/iletisim/page.js` dosyasını açın ve 15. satırı bulun:

```javascript
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

`YOUR_FORMSPREE_ID` yerine kendi Form ID'nizi yazın:

```javascript
const [state, handleSubmit] = useForm("xpznvwrd");
```

### Yöntem 2: Çevre Değişkeni ile (Önerilen)

1. Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
NEXT_PUBLIC_FORMSPREE_ID=xpznvwrd
```

2. `src/app/iletisim/page.js` dosyasını güncelleyin:

```javascript
const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
```

3. **Önemli**: `.env.local` dosyası Git'e eklenmez (zaten .gitignore'da var)

4. **Vercel'de**: Environment Variables bölümünde aynı değişkeni ekleyin

## ✅ Adım 5: Test Edin

1. Geliştirme sunucusunu başlatın:
```bash
pnpm dev
```

2. http://localhost:3000/iletisim adresine gidin
3. Formu doldurup gönderin
4. "Mesajınız Gönderildi!" mesajını görmelisiniz
5. Formspree dashboard'unda mesajı kontrol edin

## 🎨 Adım 6: Özelleştirme (Opsiyonel)

### E-posta Bildirimleri

1. Formspree dashboard'da form ayarlarına gidin
2. **"Settings"** → **"Email"** sekmesini açın
3. Bildirim almak istediğiniz e-posta adresini girin
4. Her mesajda e-posta alacaksınız

### Otomatik Yanıt

1. **"Settings"** → **"Autoresponder"** sekmesini açın
2. **"Enable Autoresponder"** seçeneğini işaretleyin
3. Mesaj gönderen kişiye otomatik yanıt metni yazın:

```
Merhaba,

Mesajınız için teşekkür ederim. En kısa sürede size geri dönüş yapacağım.

İyi günler,
Fuat Oğur
```

### Spam Koruması

1. **"Settings"** → **"Spam"** sekmesini açın
2. **"Enable reCAPTCHA"** seçeneğini işaretleyin
3. Google reCAPTCHA v3 otomatik olarak aktif olur (görünmez)

### Form Yönlendirme

Form gönderildikten sonra farklı bir sayfaya yönlendirmek için:

```javascript
// src/app/iletisim/page.js içinde
if (state.succeeded) {
  // Otomatik yönlendirme ekleyin
  setTimeout(() => {
    window.location.href = '/';
  }, 3000);
}
```

## 🔒 Güvenlik

### Form ID'sini Gizleyin

Form ID public olsa da sorun olmaz çünkü:
- Formspree sadece sizin e-postanıza gönderir
- Spam koruması vardır
- Rate limiting (hız sınırlaması) vardır

Ancak extra güvenlik için:
1. Çevre değişkeni kullanın
2. Formspree'de spam filtrelerini aktif edin
3. Honeypot alanı ekleyin (bot'ları engellemek için)

## 📊 Mesajları Görüntüleme

### Formspree Dashboard'da

1. https://formspree.io/forms adresine gidin
2. Form adınıza tıklayın
3. Tüm mesajları görebilirsiniz
4. CSV olarak dışa aktarabilirsiniz

### E-posta ile

- Her mesaj geldiğinde e-posta bildirim alırsınız
- Doğrudan e-postadan yanıt verebilirsiniz

## 🆙 Ücretsiz Plan Limitleri

- ✅ Aylık 50 mesaj
- ✅ Spam koruması
- ✅ E-posta bildirimleri
- ✅ CSV export
- ❌ Dosya yükleme yok
- ❌ Webhook yok

**50 mesajı aşarsanız**: Ücretli plana geçebilirsiniz ($10/ay - 1000 mesaj)

## 🐛 Sorun Giderme

### Form Gönderilmiyor

**Hata**: "Form submit failed"

**Çözüm**:
1. Form ID'nin doğru olduğunu kontrol edin
2. İnternet bağlantınızı kontrol edin
3. Tarayıcı konsolunda hata var mı bakın (F12)

### "Invalid Form" Hatası

**Çözüm**:
1. Form ID'yi yeniden kopyalayın
2. Boşluk karakteri olmadığından emin olun
3. Formspree'de form aktif mi kontrol edin

### Mesajlar Gelmiyor

**Çözüm**:
1. Spam klasörünü kontrol edin
2. Formspree settings'de e-posta adresinizi kontrol edin
3. E-posta doğrulandı mı kontrol edin

### Build Hatası

**Hata**: `useForm is not defined`

**Çözüm**:
```bash
pnpm add @formspree/react
```

## 📚 Daha Fazla Bilgi

- **Dokümantasyon**: https://help.formspree.io/
- **API Reference**: https://formspree.io/docs
- **React Integration**: https://formspree.io/react

## 💡 İpuçları

1. **Test Formu**: Canlıya almadan önce test edin
2. **Rate Limiting**: Çok fazla test yapmayın (limit var)
3. **Yedekleme**: Mesajları düzenli olarak CSV'ye aktarın
4. **Doğrulama**: E-posta adresini doğrulamayı unutmayın

---

## ⚡ Hızlı Başlangıç (TL;DR)

```bash
# 1. Formspree'ye kaydol: https://formspree.io/
# 2. Yeni form oluştur
# 3. Form ID'yi kopyala (örn: xpznvwrd)
# 4. Projeye ekle:
```

```javascript
// src/app/iletisim/page.js
const [state, handleSubmit] = useForm("xpznvwrd"); // ← Form ID'niz
```

```bash
# 5. Test et
pnpm dev
```

✅ **Hazır!** Artık mesaj alabilirsiniz.

---

Sorularınız için: iletisim@fuatogur.com
