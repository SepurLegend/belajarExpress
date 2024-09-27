const express = require('express') // impor modul express
const app = express() // insialisasi express
const port = 3000 //port
 
app.set('view engine','ejs');

// route untuk halaman home
app.get('/',(req, res) => {
    // res.send("Hello");
    // res.sendFile(__dirname + "/index.html");
    const berita = [
        {
            judul:'Berita 1',
            isi:'isi berita 1'
        },
        {
            judul:'Berita 2',
            isi:'isi berita 2'
        },
    ];
    res.render('index',{title: 'Halaman Home',berita});
});
 
// route untuk halaman about
app.get('/about',(req, res) => {
//   res.send('Ini halaman tentang saya');
    // res.sendFile(__dirname + '/about.html');
    res.render('about',{title: 'Halaman About'});
});
 
// route untuk halaman contact
app.get('/contact', (req, res) => {
    // res.send('Contact Us');
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title: 'Halaman Kontak'});
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

app.get('/prodi',(req, res) => {
    const prodi = [
        {
            prodi:'Sistem Informasi',
            fakultas:'FIKR',
            singkatan:'SI'
            
        },
        {
            prodi:'Informatika',
            fakultas:'FIKR',
            singkatan:'IF'
            
        },
        {
            prodi:'Teknik Elektro',
            fakultas:'FIKR',
            singkatan:'TE'
            
        },
        {
            prodi:'Manajemen Informatika',
            fakultas:'FIKR',
            singkatan:'MI'
            
        },
        {
            prodi:'Manajemen',
            fakultas:'FEB',
            singkatan:'MJ'
            
        },
        {
            prodi:'Akuntansi',
            fakultas:'FEB',
            singkatan:'AK'
            
        },
    ];
    res.render('prodi',{title: 'Halaman Prodi',prodi});
})



// menangani route yang tidak ada/tidak terdaftar
app.use('/', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});
// jalankan server
app.listen(port, () => {
  console.log(`Server dapat diakses di http://localhost:${port}`);
});