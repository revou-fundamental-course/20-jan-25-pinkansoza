// Ini File Javascript

// Menambahkan event listener pada tombol dengan ID "calculate"
document.getElementById("calculate").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const gender = document.querySelector('input[name="gender"]:checked').value;

// Validasi Input
    if (!weight || !height) {
        alert("Mohon isi berat dan tinggi badan dengan benar.");
        return;
    }

// Menghitung nilai BMI
    const bmi = (weight / (height * height)).toFixed(1);
    const result = document.getElementById("result");
    const bmiGender = document.getElementById("bmiGender");
    const bmiStatus = document.getElementById("bmiStatus");
    const bmiValue = document.getElementById("bmiValue");
    const bmiValueBottom = document.getElementById("bmiValueBottom")
    const bmiAdvice = document.getElementById("bmiAdvice");
    const bmiNote = document.getElementById("bmiNote");
 
// Menampilkan informasi BMI
    bmiGender.textContent = `BMI Untuk ${gender}`;
    bmiValue.textContent = `${bmi}`;
    bmiNote.textContent = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda."

// Menentukan kategori BMI
    if (bmi < 18.5) {
        bmiStatus.textContent = "Berat badan kurang";
        bmiValueBottom.textContent = "Hasil BMI kurang dari 18.5";
        bmiAdvice.textContent = "Anda berada dalam kategori berat badan kurang. Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus.textContent = "Berat badan ideal";
        bmiValueBottom.textContent = "Hasil BMI diantara 18.5 - 24.9";
        bmiAdvice.textContent = "Selamat! Anda memiliki berat badan yang ideal! Tetap pertahankan gaya hidup sehat ini, karena kesehatan adalah investasi terbaik untuk masa depan. Terus konsisten, nikmati prosesnya, dan tetap percaya diri!";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus.textContent = "Berat badan lebih";
        bmiValueBottom.textContent = "Hasil BMI diantara 25 - 29.9";
        bmiAdvice.textContent = "Anda berada dalam kategori overweight. Cobalah untuk menjaga pola makan sehat dan rutin berolahraga.";
    } else {
        bmiStatus.textContent = "Obesitas";
        bmiValueBottom.textContent = "Hasil BMI lebih dari 30.0";
        bmiAdvice.textContent = "Anda berada dalam kategori obesitas. Disarankan untuk berkonsultasi dengan dokter untuk penanganan lebih lanjut.";
    }

// Menampilkan button Konsultasi dan Registrasi
    document.querySelectorAll('.button2').forEach(button => {
        button.classList.add('visible');
    });

    result.style.display = "block";
});