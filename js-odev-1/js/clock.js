//prompt ile kullanıcı ismini alma ve ekrana bastırma
let FirstName = prompt("Lütfen Adınızı Girin:")
let myName = document.querySelector("#myName");
myName.innerHTML = `${FirstName}! `
myName.classList.add('text-color');



//setInvertal fonksiyonu çağırır ve her 1 saniyede yeniler
let myVar = setInterval(showTime, 1000);

//saat dakika saniye ve gün gösterimi.
function showTime() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let day = showDay(d.getDay());

    //Eğer saat, dakika ya da saniye 10'dan küçükse başına 0'ı koyar.
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    //ekrana bastırma
    document.querySelector("#myClock").innerHTML = hour + ":" + minute + ":" + second + " " + day;
}


//gün getDay() metodu ile alındığında sadece 1 2 3 gibi rakamlar verdiği için bunlar switch ile string değere çevrildi.
function showDay(day) {
    switch (day) {
        case 1:
            return "Pazartesi";
        case 2:
            return "Salı";
        case 3:
            return "Çarşamba";
        case 4:
            return "Perşembe";
        case 5:
            return "Cuma";
        case 6:
            return "Cumartesi";
        case 7:
            return "Pazar";

    }
}