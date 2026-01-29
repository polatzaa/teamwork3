import React from 'react'
import "./Section2.css"
import group from"../assets/Group .png"

const Section2 = () => {
  return (
    <div className='sec3'>
        <h1>ZlonGPT - нейросети <br />
        онлайн бесплатно</h1>
        <p>Сервис ZionGPT разработан профессионалами, для профессионалов. <br />
        ChatGPT. Midjourney, и другие нейросети в одном сервисе на Русском <br />
        языке, без VPN с поддержкой Русских банковских карт!</p>
        <div className='sec4'>
            <button>Начать бесплатно</button>
            <h2>Попробуй бесплатно!</h2>
        </div>
        <div className='sec5'>
            <img src={group} />
        </div>
    </div>
  )
}

export default Section2