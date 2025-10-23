# REST API Laundry Cuci Sepatu 
Nama: Wan Azka Khairi Muhammad  
NIM: 21120123140150
## Deskripsi Umum
Proyek ini merupakan tugas responsi untuk modul 1. API ini dibuat menggunakan Node.js dan Express.js dan berfungsi untuk mengelola data sepatu pada layanan laundry sepatu. Kita bisa mengatur data sepatu mana saja yang sedang dicuci, yang masih proses, atau yang masih dalam antrian.

Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana.

## Tujuan
1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
2. Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.
3. Mengelola data menggunakan format JSON sebagai penyimpanan sederhana.
4. Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.

## Fitur Utama

| Method | Endpoint | Fitur |
|:-------|:----------|:-----------|
| GET | `/api/items` | Mendapatkan semua item |
| GET | `/api/items?status=Selesai` | Menampilkan item sepatu yang sudah selesai dicuci |
| POST | `/api/items` | Menambah item baru |
| PUT | `/api/items/:id` | Memperbarui item berdasarkan ID |
| DELETE | `/api/items/:id` | Menghapus item berdasarkan ID |

## Struktur Data
ini contoh kodenya  
```
{
  "id": 3,
  "nama": "Adudus",  
  "status": "Belum Dicuci",  
  "tanggalMasuk": "2025-10-23",  
  "tanggalSelesai": "-"  
}
```
Keterangan:  
- id → Nomor unik sepatu
- nama → Nama sepatu atau merek pelanggan
- status → Status proses cuci (Sedang Dicuci / Selesai)
- tanggalMasuk → Tanggal sepatu diterima untuk dicuci
- tanggalSelesai → Tanggal sepatu selesai dicuci

## Contoh Request dan Response
untuk DELETE /items/:id Response:  
Response   
```
{
    "message": "Item berhasil dihapus"
}
```
## Link Deployment
[Klik link Vercel ini!](https://cuci-sepatu-supabase.vercel.app/)
