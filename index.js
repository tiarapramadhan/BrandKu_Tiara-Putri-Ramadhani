const btnMulaiGratis = document.querySelector('#cta-btn');
const tagInfo = document.querySelector('#tag-info');

let counter = 0;

btnMulaiGratis.addEventListener('click', () => {
    counter++;

    if (counter === 1) {
        console.log('clicked');
        
        // Menghilangkan class 'hidden' agar teks muncul
        tagInfo.classList.remove('hidden');
        tagInfo.textContent = 'Clicked!';

    } else if (counter === 2) {
        console.log('off');
        
        // Mengubah teks menjadi 'Off!'
        tagInfo.textContent = 'Off!';
        
        // Menyembunyikan tombol
        btnMulaiGratis.classList.add('hidden');
    }
});