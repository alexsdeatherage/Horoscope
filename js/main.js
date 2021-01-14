document.querySelector('button').addEventListener('click', getHoroscope)

function getHoroscope(){
  let month = document.querySelector('#month').value.toLowerCase()
  let day = Number(document.querySelector('#day').value)

  if((month === "october" && day >= 23) || (month === "november" && day <=21)){
    console.log('Scorpio');
  }else if ((month === "november" && day >= 22) || (month === "december" && day <= 21)){
    console.log('Sagittarius');
  }else if ((month === "december" && day >= 22) || (month === "january" && day <= 19)){
    console.log('Capricorn');
  }else if ((month === "january" && day >= 20) || (month === "febuary" && day <= 18)){
    console.log('Aquarius');
  }else if ((month === "febuary" && day >= 19) || (month === "march" && day <= 20)) {
    console.log('Pisces');
  }else if ((month === "march" && day >= 21) || (month === "april" && day <= 19)) {
    console.log('Aries');
  }else if ((month === "april" && day >= 20) || (month === "may" && day <= 20)) {
    console.log('Taurus');
  }else if ((month === "may" && day >= 21) || (month === "june" && day <= 20)) {
    console.log('Gemini');
  }else if ((month === "june" && day >= 21) || (month === "july" && day <= 22)) {
    console.log('Cancer');
  }else if ((month === "july" && day >= 23) || (month === "august" && day <= 22)) {
    console.log('Leo');
  }else if ((month === "august" && day >= 23) || (month === "september" && day <= 22)) {
    console.log('Virgo');
  }else if ((month === "september" && day >= 23) || (month === "october" && day <= 22)) {
    console.log('Libra');
  }else {
    console.log('Please make sure that your birthday is inputted as the full month, and that the day is a number');
  }
}
