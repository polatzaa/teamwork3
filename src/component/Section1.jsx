import React from 'react'
import "./Section1.css"
import vector from "../assets/Vector.png"
const Section1 = () => {
  return (
    
    <div className='sec1'> 
         <img src={vector} />
        <h1>ZIONGPT</h1>
    <div className='sec2'>
        <ul>
            <li>
                <a href="">Главная</a>
            </li>
            <li>
                <a href="">ChatGPT</a>
            </li>
            <li>
                <a href="">Midjourney</a>
            </li>
            <li>
                <a href="">Отзывы</a>
            </li>
            <li>
                <a href="">Тарифы</a>
            </li>
            <li>
                <a href="">API</a>
            </li>
             <li>
                <a href="">Вопросы</a>
            </li>
             <li>
                <a href="">Блог</a>
            </li>
        </ul>
            <button>Авторизация</button>
    </div>
    </div>
  )
}

export default Section1