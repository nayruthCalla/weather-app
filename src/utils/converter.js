import cloudy from '../assets/images/cloudy.svg' // nublado
import snowy from '../assets/images/snow.svg' // nevada
import sunny from '../assets/images/sunny.svg' // claro
import rainy from '../assets/images/rainy.svg' // lluvia llovivizna
import stormy from '../assets/images/stormy.svg' // tormenta
import atmosphere from '../assets/images/atmosphere.png' // tormenta

export const converterforDay = (unixTime) => {
  const converterDate = new Date(unixTime * 1000)
  const day = converterDate.getDay()
  const date = converterDate.getDate()
  let dayinText

  switch (day) {
    case 0:
      dayinText = 'Dom'
      break
    case 1:
      dayinText = 'Lun'
      break
    case 2:
      dayinText = 'Mar'
      break
    case 3:
      dayinText = 'Mier'
      break
    case 4:
      dayinText = 'Jue'
      break
    case 5:
      dayinText = 'Vie'
      break
    case 6:
      dayinText = 'Sab'
      break
    default:
      dayinText = 'N/N'
  }

  return {
    dayinText,
    date,
  }
}

export const temperatureImg = (main) => {
  let imageUrl

  switch (main) {
    case 'Thunderstorm':
      imageUrl = stormy
      break
    case 'Drizzle':
      imageUrl = rainy
      break
    case 'Rain':
      imageUrl = rainy
      break
    case 'Snow':
      imageUrl = snowy
      break
    case 'Atmosphere':
      imageUrl = atmosphere
      break
    case 'Clear':
      imageUrl = sunny
      break
    case 'Clouds':
      imageUrl = cloudy
      break
    default:
      imageUrl = atmosphere
  }
  return imageUrl
}
