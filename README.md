# Tugas 8 JDA – Autentikasi Menggunakan NextAuth.js

## 📌 Deskripsi

Proyek ini adalah aplikasi **Next.js** yang mengimplementasikan **NextAuth.js** untuk sistem autentikasi berbasis **Email & Password**. Aplikasi mencakup:

- Middleware untuk proteksi halaman
- Halaman publik dan halaman dashboard
- 
- Register & Login page
- Menampilkan informasi user yang login

## ✨ Fitur Utama

| Fitur             | Deskripsi                                                  |
|------------------|------------------------------------------------------------|
| 🔐 NextAuth.js    | Digunakan untuk autentikasi utama                            |
| 🛡️ Middleware     | Membatasi akses ke halaman tertentu untuk user yang sudah login |
| 🔑 Login & Register | Halaman autentikasi menggunakan Email & Password         |
| 🌐 Halaman Publik | Bisa diakses semua orang tanpa login                        |
| 🔒 Halaman Dashboard | Hanya bisa diakses oleh user yang login                     |
| 👤 Info User      | Menampilkan nama/email user di halaman privat               |
| 🔄 Sign In / Sign Out | Dengan fungsi dari NextAuth                             |

## 🗂️ Struktur Halaman

- `/` → **Landing Page (Halaman Publik)**  
  Terbuka untuk semua user tanpa login.

- `/dashboard` → **Halaman Dashboard**  
  Hanya dapat diakses jika user sudah login.

- `/auth/register` → **Halaman Register**  
  Form untuk mendaftarkan akun baru.

- `/auth/login` → **Halaman Login**  
  Form login menggunakan email dan password.

## 🛠️ Teknologi

- [Next.js](https://nextjs.org/) (App Router)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---
