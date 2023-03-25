const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const cityName = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=a996fdcd6c4f2a16fd83338c84ab0236')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description']
    
    cityName.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
  })
  .catch(err => alert("Wrong city name!"))
});