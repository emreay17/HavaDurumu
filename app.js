
//  ekrandaki input a şehir ismini girip enter a bastığımızda value yu yakalıyoruz 
 const setQuery = (e) => {
    if (e.keyCode == '13') {
        // getResult fonksiyonu ile aldığımız value yu apiden aldığımız verilerde filtreliyoruz ve burda value yu direk fonksiyona parametre olarak atıyoruz
        getResult(searchBar.value)
    }
}
// 

// Openweathermapten veriyi alacak bir fonksiyon yazıyoruz. API ve veriyi isteyeceğimiz linki Openweathermap den alıyoruz. 
const getResult = (cityName) => {
    const API = 'f50b70fd9480c0d62f6879cb84ee2ebe'
    let query =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric&lang=tr`;
    
    // url isteğimizi gerçekleştirip dönen veriyi listemizi oluşturmak için fetch kullanıp zincir yapısıyla gelen cevaplarımızı alacagımız bir fonksiyon yapıp cevapları return ediyoruz 
    fetch(query)
    //promise yapısı ile çalıştığı için json formatında return etmemiz gerekli 
    .then(weather =>{
        return weather.json()
    })
    // zincir yapısıyla kullanmaya başlıyoruz
    .then(displayResult)
}
// artık verilerimizi ekranda göstermek için fonksiyonumuzu düzenleyebiliriz ...
const displayResult =(result) =>{
   
  console.log(result);
   
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`
}


const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery)


// BAzı hava durumlarına istinaden görseller ekleyebiliriz.