# Deployment Guide

## Setup Repository Baru di GitHub

Karena ini adalah repository terpisah dari Meta Ads Report Generator, ikuti langkah berikut:

### 1. Buat Repository Baru di GitHub

1. Buka GitHub dan login
2. Klik **New Repository**
3. Isi detail:
   - **Repository name**: `hadona-docs` atau `docs-hadona`
   - **Description**: "Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona"
   - **Visibility**: Private (atau Public sesuai kebutuhan)
   - **JANGAN** centang "Initialize with README" (karena sudah ada)
4. Klik **Create repository**

### 2. Push ke GitHub

Setelah repository dibuat, jalankan perintah berikut:

```bash
cd "/Users/mac/VSC Project/Docs Fulfillment Hadona Digital Media"

# Pastikan git sudah diinisialisasi
git init

# Tambahkan remote (ganti YOUR_USERNAME dan REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Atau jika menggunakan SSH:
# git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Hadona Documentation"

# Push ke GitHub
git branch -M main
git push -u origin main
```

### 3. Setup Vercel Deployment

1. Buka [Vercel](https://vercel.com) dan login
2. Klik **Add New Project**
3. Import repository yang baru dibuat
4. Konfigurasi:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Klik **Deploy**

Vercel akan otomatis:
- Detect Next.js
- Install dependencies
- Build project
- Deploy ke production

### 4. Setup Custom Domain (Optional)

Jika ingin menggunakan `docs.hadona.id`:

1. Di Vercel dashboard, buka project settings
2. Pilih **Domains**
3. Tambahkan domain: `docs.hadona.id`
4. Ikuti instruksi untuk setup DNS:
   - Tambahkan CNAME record di DNS provider
   - Point ke: `cname.vercel-dns.com`

### 5. Environment Variables (Jika Diperlukan)

Jika nanti menggunakan Supabase atau service lain:

1. Di Vercel dashboard, buka project settings
2. Pilih **Environment Variables**
3. Tambahkan variables yang diperlukan

## Auto-Deploy

Setelah setup, setiap push ke branch `main` akan otomatis:
1. Trigger build di Vercel
2. Deploy ke production
3. Update `docs.hadona.id` (jika sudah setup domain)

## Manual Deploy

Jika perlu deploy manual:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## Troubleshooting

### Build Error
- Pastikan semua dependencies terinstall
- Cek error di Vercel build logs
- Pastikan Node.js version sesuai (18+)

### Domain Not Working
- Pastikan DNS sudah propagate (bisa butuh 24-48 jam)
- Cek CNAME record sudah benar
- Pastikan SSL certificate sudah aktif

### Environment Variables
- Pastikan semua env vars sudah di-set di Vercel
- Jangan commit `.env` files ke GitHub

## Support

Jika ada masalah deployment:
- Cek Vercel documentation: https://vercel.com/docs
- Hubungi support: support@hadona.id

