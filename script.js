const suhu = document.querySelector('.suhu');
const type = document.querySelector('#type');
const konversi = document.querySelector('.submit-button');
const hasil1 = document.querySelector('.hasil1');
const hasil2 = document.querySelector('.hasil2');

konversi.addEventListener('click',convSuhu);

function convSuhu(e){
    e.preventDefault();
    if (type.value === "fahrenheit"){
        hasil1.innerHTML = Math.round(Number((suhu.value - 32) / 1.8) * 100) / 100 +"C"
        hasil2.innerHTML =(Math.round(Number(((suhu.value - 32) / 1.8) + 273.15) * 100) / 100) +"K"
    }
    else if(type.value ==="celcius"){
        hasil1.innerHTML = Math.round(Number(suhu.value * 1.8 + 32) * 100) / 100+"F"
        hasil2.innerHTML = Math.round((+suhu.value + +273.15) * 100) / 100+"K"
    }
    else if(type.value ==="kelvin"){
        kelvinToCelcius = suhu.value - 273.15;
        hasil1.innerHTML = Math.round((kelvinToCelcius) * 100) / 100 +"C"
        hasil2.innerHTML = Math.round((kelvinToCelcius * 1.8 + 32) * 100) / 100 +"K"
    }
}