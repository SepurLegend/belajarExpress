const express = require('express') // impor modul express
const app = express() // insialisasi express
const port = 3000 //port
 
// route untuk halaman home
app.get('/',(req, res) => {
//  res.send('Selamat datang di ExpressJS');
    res.sendFile(__dirname + '/index.html');
});
 
// route untuk halaman about
app.get('/about',(req, res) => {
//   res.send('Ini halaman tentang saya');
    res.sendFile(__dirname + '/about.html');
});
 
// route untuk halaman contact
app.get('/contact', (req, res) => {
    // res.send('Contact Us');
    res.sendFile(__dirname + "/contact.html");
});

// route mahasiswa
app.get('/mahasiswa',(req, res) => {
    res.json({
        'status'    :   'success',
        'message'   :   'Data Mahasiswa',
        'data'      :   
        [
            {npm: 2226240043, nama: 'Yulianus'},
            {npm: 2226240044, nama: 'Yulianus 1'},
            {npm: 2226240045, nama: 'Yulianus 2'}
        ]  
    })
});

//route dosen
app.get('/dosen',(req, res) => {
    res.json({
        'status'    :   'success',
        'message'   :   'Data Dosen',
        'data'      :   
        [
            {
                Prodi: 'Sistem Informasi', 
                Dosen: ['Iis', 'Faris', 'Dafid']
            },
            {
                Prodi: 'Informatika', 
                Dosen: ['Derry', 'Siska', 'Yohanes']
            },
        ] 
    })
});



// menangani route yang tidak ada/tidak terdaftar
app.use('/', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});
// jalankan server
app.listen(port, () => {
  console.log(`Server dapat diakses di http://localhost:${port}`);
});