document.querySelector('button').addEventListener('click', getHoroscope)

const zodiacSign = document.querySelector('#signHere');
const flavorText = document.querySelector('#textHere');

function getHoroscope(){
  let month = document.querySelector('#month').value.toLowerCase()
  let day = Number(document.querySelector('#day').value)


  if ((day < 0) || (month === 'april' && day > 31) || (month === 'june' && day > 31) || (month === 'september' && day > 31) || (month === 'november' && day > 31) || (month === 'february' && day > 28) || (day > 31)){
    flavorText.innerHTML = "Please"
  }else if((month === "october" && day >= 23) || (month === "november" && day <=21)){
    zodiacSign.innerHTML = 'Scorpio'
    flavorText.innerHTML = "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
  }else if ((month === "november" && day >= 22) || (month === "december" && day <= 21)){
    zodiacSign.innerHTML = 'Sagittarius'
    flavorText.innerHTML = "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals."
  }else if ((month === "december" && day >= 22) || (month === "january" && day <= 19)){
    zodiacSign.innerHTML = 'Capricorn'
    flavorText.innerHTML = "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise."
  }else if ((month === "january" && day >= 20) || (month === "february" && day <= 18)){
    zodiacSign.innerHTML = 'Aquarius'
    flavorText.innerHTML = "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities."
  }else if ((month === "february" && day >= 19) || (month === "march" && day <= 20)) {
    zodiacSign.innerHTML = 'Pisces'
    flavorText.innerHTML = 'Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.'
  }else if ((month === "march" && day >= 21) || (month === "april" && day <= 19)) {
    zodiacSign.innerHTML = 'Aries'
    flavorText.innerHTML = 'As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.'
  }else if ((month === "april" && day >= 20) || (month === "may" && day <= 20)) {
    zodiacSign.innerHTML - 'Taurus'
    flavorText.innerHTML = 'Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.'
  }else if ((month === "may" && day >= 21) || (month === "june" && day <= 20)) {
    zodiacSign.innerHTML = 'Gemini'
    flavorText.innerHTML = 'Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.'
  }else if ((month === "june" && day >= 21) || (month === "july" && day <= 22)) {
    zodiacSign.innerHTML = 'Cancer'
    flavorText.innerHTML = "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering."
  }else if ((month === "july" && day >= 23) || (month === "august" && day <= 22)) {
    zodiacSign.innerHTML = 'Leo'
    flavorText.innerHTML = 'People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their "king of the jungle" status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.'
  }else if ((month === "august" && day >= 23) || (month === "september" && day <= 22)) {
    zodiacSign.innerHTML = 'Virgo'
    flavorText.innerHTML = 'Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.'
  }else if ((month === "september" && day >= 23) || (month === "october" && day <= 22)) {
    zodiacSign.innerHTML = 'Libra'
    flavorText.innerHTML = 'People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible'
  }else {
    flavorText.innerHTML = 'Please make sure that your birthday is typed as the full month, and that the day is a valid number'
  }
}
