# IF3260 Grafika Komputer - 3D WebGL Hollow Object

> _Repository ini ditujukan untuk memenuhi Tugas Besar 2 IF3260 Grafika Komputer_

## Contributor
<table>
  <tr >
      <td><b>Nama</b></td>
      <td><b>NIM</b></td>
    </tr>
    <tr>
      <td><b>Kent Liusudarso</b></td>
      <td>13520069</td>
    </tr>
    <tr>
      <td><b>Ubaidillah Ariq Prathama</b></td>
      <td>13520085</td>
    </tr>
    <tr>
      <td><b>Yoseph Alexander Siregar</b></td>
      <td>13520141</td>
    </tr>
</table>

## Deskripsi dan Fungsionalitas
Program yang kami buat merupakan program yang menggunakan WebGL Murni tanpa library/framework tambahan.

Program ini dibuat dengan tujuan untuk mempelajari penerapan tiga dimensi (3D) dengan menggunakan WebGL.
Dalam program ini terdapat, 3 model hollow objects (objek berongga) yang dapat ditampilkan, yaitu model cube (kubus), tetrahedron dan octahedron.

Selain menampilkan model hollow objects, program ini memiliki fungsionalitas lainnya yaitu : 
1. Menampilkan menu help (bantuan) untuk membantu pengguna baru dalam penggunaan fungsionalitas program
2. Memilih warna untuk tampilan model objek
3. Melakukan interaksi (meminta input dari pengguna) untuk view model sehingga dapat : 
- Mengubah jenis proyeksi yang digunakan untuk menampilkan objek (orthographic, oblique atau perspective).
- Melakukan transformasi terhadap objek (rotasi, translasi dan scaling).
- Mengubah jarak (radius ) kamera view untuk mendekat atau menjauh dari model serta menggerakkan kamera untuk mengitari model-model.
- Melakukan reset ke default view
4. Menyimpan objek (save) yang sekarang terlihat di kanvas sebagai objek baru dalam file format JSON
5. Membuka sebuah file model (load) hasil penyimpanan
6. Menyalakan dan mematikan shading pada objek
7. Menampilkan objek dengan animasi untuk mempermudah pengguna dalam melihat objek


## Cara Menjalankan Program
1. Clone repository ini
2. Buka file `index.html` yang ada folder src pada browser yang mendukung WebGL (pada Visual Studio Code dapat menggunakan Live Server)
3. Untuk pengguna baru, dapat membuka menu help (?) untuk melihat cara penggunaan program yang terletak di pojok kanan bawah