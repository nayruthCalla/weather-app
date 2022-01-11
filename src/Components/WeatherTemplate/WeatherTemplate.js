import styled from 'styled-components'
import { useState, useEffect } from 'react'
import DayCard from './DayCard'
import axios from '../../utils/axios'
import { converterforDay } from '../../utils/converter'
import Loading from '../Loading/Loading'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex: 1;
    justify-content: center;
  }
`

const WeatherTemplate = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const weatherData = async () => {
      try {
        const response = await axios.get()
        const res = response.data.daily.slice(0, -1)
        setData(res)
        setLoading(false)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
    weatherData()
  }, [])
  return (
    <Content>
      {loading ? (
        <Loading />
      ) : (
        data.map(({ dt, temp, humidity, weather }, index) => (
          <DayCard
            key={index}
            weatherDataDay={converterforDay(dt)}
            temp={temp}
            weather={weather[0]}
            humidity={humidity}
          />
        ))
      )}
    </Content>
  )
}

export default WeatherTemplate
