const fs = require('fs');
const santriDataFile = 'data_santri.js';

// Fungsi untuk menyimpan data santri ke dalam file
function simpanDataSantri(data) {
    fs.readFile(santriDataFile, 'utf8', (err, fileData) => {
        if (err) {
            console.error(err);
            return;
        }

        let dataArray = [];
        if (fileData) {
            dataArray = JSON.parse(fileData);
        }

        dataArray.push(data);

        fs.writeFile(santriDataFile, JSON.stringify(dataArray, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

document.getElementById('formSantri').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const usia = document.getElementById('usia').value;
    const alamat = document.getElementById('alamat').value;

    const dataSantri = {
        nama: nama,
        usia: usia,
        alamat: alamat
    };

    // Simpan data santri ke dalam file
    simpanDataSantri(dataSantri);

    // Reset formulir setelah data tersimpan
    this.reset();

    alert('Pendaftaran berhasil. Data santri telah disimpan.');
});
