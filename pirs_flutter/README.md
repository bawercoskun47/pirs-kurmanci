# Pirs Flutter (Kurmancî Quiz Uygulaması)

Bu dizin, Pirs Kurmancî quiz uygulamasının Flutter istemcisini içerir.

## Kurulum

```bash
cd pirs_flutter
flutter pub get
```

## Backend Adresi

`lib/core/services/api_config.dart` içindeki `ApiConfig.baseUrl` değerini backend'in çalıştığı adrese göre güncelleyin:

- Geliştirme (backend lokal, port 4000):
  - Android emulator: `http://10.0.2.2:4000`
  - Web / masaüstü: `http://localhost:4000`

## Çalıştırma

```bash
cd pirs_flutter
flutter run
```

Hedef platforma göre bir cihaz/emülatör seçin (Android, iOS, Web, Desktop).

## Özellikler

- JWT ile kimlik doğrulama (kayıt, giriş, misafir modu)
- Kategoriye göre 10 soruluk Kurmancî quiz
- Skor kaydı ve global leaderboard
- Profil ekranı ve kişisel istatistikler
- Tema (light/dark) ve dil seçimi altyapısı (Kurmancî / Türkçe)

Backend için detaylar `pirs_backend/README.md` içinde yer alır.

