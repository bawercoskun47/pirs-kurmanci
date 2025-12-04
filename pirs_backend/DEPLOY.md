# Pirs Kurmancî Backend

## Deploy Adımları (Railway)

1. [Railway.app](https://railway.app) hesabı oluştur
2. "New Project" > "Deploy from GitHub repo" seç
3. Bu backend klasörünü bağla
4. Environment Variables ekle:
   - `DATABASE_URL` - Neon PostgreSQL bağlantı stringi
   - `JWT_SECRET` - JWT için gizli anahtar
   - `PORT` - 4000 (Railway otomatik atar)
   - `NODE_ENV` - production

## Yerel Geliştirme

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```
