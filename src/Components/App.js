import styled from 'styled-components'
import WeatherTemplate from './WeatherTemplate/WeatherTemplate'

const H1 = styled.h1`
  margin: 2rem 0 2rem 0;
  color: #878080;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
`
const P = styled.p`
  color: #8780808c;
`

const App = () => {
  return (
    <Container>
      <H1>Pronóstico de la semana Lima - Perú</H1>
      <WeatherTemplate />
      <P>Made by Nay@Calla 2021</P>
    </Container>
  )
}

export default App
