import axios from 'axios'

const clienteAxios = axios.create({
  baseURL:
    `https://api.openweathermap.org/data/2.5/onecall?lat=-12.04318&lon=-77.02824&lang=es&exclude=minutely,hourly,current&appid=${process.env.REACT_APP_API_KEY}&units=metric` ||
    'http://localhost:8081',
})

export default clienteAxios
