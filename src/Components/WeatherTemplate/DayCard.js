import styled, { css } from 'styled-components'
import { IconContext } from 'react-icons'
import { BsUmbrella, BsThermometerHalf } from 'react-icons/bs'
import { temperatureImg } from '../../utils/converter'

const backgroundBar = (main) => {
  let colorBar

  switch (main) {
    case 'Thunderstorm':
      colorBar = '#0E2E3A'
      break
    case 'Drizzle':
      colorBar = '#2B8BAD'
      break
    case 'Rain':
      colorBar = '#2B8BAD'
      break
    case 'Snow':
      colorBar = '#BCE1EF'
      break
    case 'Atmosphere':
      colorBar = '#4DB0D3'
      break
    case 'Clear':
      colorBar = '#E6DF95'
      break
    case 'Clouds':
      colorBar = '#4DB0D3'
      break
    default:
      colorBar = '#4DB0D3'
  }
  return colorBar
}

const Container = styled.div`
  color: #4db0d3;
  font-family: 'Krona One', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
`
const H1 = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`
const Date = styled.h2`
  font-size: 1rem;
  margin: 0 0 1rem 0;
`
const Bar = styled('div')(
  ({ colorBack }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${backgroundBar(colorBack)};
    height: 370px;
    width: 100%;
    border-radius: 50px;
    padding-top: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1),
      11px 4px 34px rgba(32, 77, 92, 0.25);
    --temperature: #e6df95;
    --content: #d3ebf4;
    & h2 {
      color: ${colorBack === 'Clear' ? '#4DB0D3' : '#E6DF95'};
    }
  `
)
const Figure = styled.figure`
  width: 100%;
`
const Image = styled.img`
  width: 100%;
`
const TemperatureCont = styled.div`
  display: flex;
`
const Temperature = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 4rem;
  padding-bottom: 6px;
  margin: 0;
`
const Degrees = styled.span`
  font-size: 2rem;
  top: 20px;
  color: var(--temperature);
`
const Content = styled.div``
const Description = styled.figure`
  display: flex;
  margin: 1rem 0 0 0;
  gap: 1rem;
  align-items: center;
  .iconDes {
    color: #ffffffb5;
    justify-content: center;
    margin-right: 1rem;
  }
`
const P = styled.p`
  margin: 0;
  color: #ffffffb5;
`
const Text = styled.p`
  margin: 0;
  color: #ffffffb5;
  font-size: 0.6rem;
`

const DayCard = ({ weatherDataDay, temp, weather, humidity }) => {
  return (
    <Container>
      <H1>{weatherDataDay.dayinText}</H1>
      <Date>{weatherDataDay.date}</Date>
      <Bar backColor={weather.main}>
        <Figure>
          <Image src={temperatureImg(weather.main)} alt="" />
        </Figure>
        <TemperatureCont>
          <Temperature>{Math.round(temp.day)}</Temperature>
          <Degrees>&deg;</Degrees>
        </TemperatureCont>
        <Text>{weather.description}</Text>
        <Content>
          <Description>
            <P>
              <IconContext.Provider value={{ className: 'iconDes' }}>
                <BsUmbrella />
              </IconContext.Provider>
              {humidity}%
            </P>
          </Description>
          <Description>
            <P>
              <IconContext.Provider value={{ className: 'iconDes' }}>
                <BsThermometerHalf />
              </IconContext.Provider>
              {Math.round(temp.min)}&deg;
            </P>
          </Description>
        </Content>
      </Bar>
    </Container>
  )
}

export default DayCard
