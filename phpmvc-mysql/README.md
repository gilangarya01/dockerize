## PHP MVC Sederhana

### Decription

Sebuah template PHP MVC sederhana untuk memulai proyek pengembangan web Anda. Template ini mengikuti pola arsitektur Model-View-Controller (MVC), memberikan dasar terstruktur untuk membangun aplikasi PHP yang dapat di-maintain dan skalabel.

### Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### How To Use

#### • Docker

Pastikan memiliki `docker` pada environment

1. Setelah clone, pindah ke folder project

```bash
cd php-mvc-sederhana
```

2. Build docker compose

```bash
docker-compose up --build
```

Untuk mengakses websitenya pergi ke `http://localhost:8080`
dan untuk mengakses phpmyadmin pergi ke `http://localhost:8081`

#### • Manual

1. **Persiapan Database:**

   - Buat database MySQL dengan nama `php-mvc` atau sesuai preferensi Anda.
   - Jalankan script SQL untuk membuat tabel `users`. File skema SQL terdapat di `dump.sql`.

2. **Konfigurasi Aplikasi:**

   - Buka file `src/config/config.php` dan sesuaikan parameter koneksi database sesuai dengan pengaturan database Anda.

3. **Pengaturan Web Server:**

   - Copy file `/src` ke folder web server anda, dan rename sesuai preferensi anda
   - Jalankan web server anda, misalnya XAMPP/laragon.
   - Buka browser dan akses aplikasi melalui URL yang sesuai.
