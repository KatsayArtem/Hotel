import React from 'react'
import './about.css'
import Header from '../Header/Header'

const About = () => {

  return (
    <div className='background-about'>
      <Header />
          <div className='ds-about'>
            <div>
              <h1 className='white about-hotel-title'>Про отель</h1>
              <h2 className='white about-hotel'>Расположен на <br/> побережье Чёрного моря</h2>
              <h2 className='white about-hotel'>Рестораны, кафе, парки, <br/> торговые центры, пляж <br/> и всё - в шаговой доступности</h2>
              <h2 className='white about-hotel'>Личная кухня и собственный <br/> гид помогут Вам провести <br/> незабывваемый отпуск</h2>
              <h2 className='white about-hotel-work'>Работаем более 8 лет</h2>
            </div>
            <div className='hotel-about'></div>
        </div>
    </div>
  )
}

export default About