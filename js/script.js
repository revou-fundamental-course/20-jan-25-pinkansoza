// Ini File Javascript
document.getElementById("calculate").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!weight || !height) {
        alert("Mohon isi berat dan tinggi badan dengan benar.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    const result = document.getElementById("result");
    const bmiGender = document.getElementById("bmiGender");
    const bmiValue = document.getElementById("bmiValue");
    const bmiStatus = document.getElementById("bmiStatus");
    const bmiAdvice = document.getElementById("bmiAdvice");

    bmiGender.textContent = `BMI Untuk ${gender}`;
    bmiValue.textContent = `BMI Kamu: ${bmi}`;

    if (bmi < 18.5) {
        bmiStatus.textContent = "Berat badan kurang";
        bmiAdvice.textContent = "Anda berada dalam kategori berat badan kurang. Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus.textContent = "Berat badan ideal";
        bmiAdvice.textContent = "Selamat! Anda memiliki berat badan yang ideal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus.textContent = "Berat badan lebih";
        bmiAdvice.textContent = "Anda berada dalam kategori overweight. Cobalah untuk menjaga pola makan sehat dan rutin berolahraga.";
    } else {
        bmiStatus.textContent = "Obesitas";
        bmiAdvice.textContent = "Anda berada dalam kategori obesitas. Disarankan untuk berkonsultasi dengan dokter untuk penanganan lebih lanjut.";
    }

    result.style.display = "block";
});

