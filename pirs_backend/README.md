# Pirs Backend (Node.js / Express / Prisma)

Bu dizin, Pirs Kurmancî uygulamasının REST API backend'ini içerir.

## Kurulum

```bash
cd pirs_backend
npm install
```

## Ortam Değişkenleri

`pirs_backend` klasöründe bir `.env` dosyası oluşturun (veya `.env.example`i kopyalayın) ve aşağıdakileri doldurun:

```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_SECRET=buraya-uzun-ve-guclu-bir-secret-yaz
ADMIN_EMAIL=senin_admin_mailin@example.com
PORT=4000
```

## Geliştirme

```bash
cd pirs_backend
npm run dev
```

API bu durumda varsayılan olarak `http://localhost:4000` üzerinde çalışır.

## Üretim Derlemesi

```bash
npm run build
npm start
```

## Başlıca Endpoint'ler

- `POST /auth/register` – kayıt
- `POST /auth/login` – giriş
- `GET /auth/me` – giriş yapmış kullanıcının bilgileri
- `GET /categories` – kategoriler
- `GET /questions` – sorular (isteğe bağlı `categoryId` ve `limit`)
- `POST /games/finish` – oyun bitişi ve skor kaydı
- `GET /games/stats` – kullanıcının istatistikleri
- `GET /leaderboard` – skor tablosu (isteğe bağlı `period`)
- `POST /admin/categories` – **(admin)** kategori ekleme
- `POST /admin/questions` – **(admin)** soru ekleme
- `DELETE /admin/questions/:id` – **(admin)** soru silme


