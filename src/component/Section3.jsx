import React from 'react'
import "./Section3.css"
import rus from "../assets/Rus.png"
import qum from "../assets/qum.png"
import qalqon from "../assets/qalqon.png"
import card from "../assets/card.png"
import boyoq from "../assets/boyoq.png"
import pox from "../assets/true.png"
import book from "../assets/book.png"
import zamok from "../assets/zamok.png"
import sms from "../assets/sms.png"

const Section3 = () => {
  return (
    <div className='sec6'>
        <h1>Как работает Chad?</h1>

        <div className='sec7'>
            <img src={rus} />
            <h1>Поддерживает <br /> русский <br />
                язык и интерфейс</h1>
        </div>

         <div className='sec8'>
             <img src={qum} />
             <h1>Быстрые ответы без <br /> очереди <br />
                и остановок на час</h1>
        </div>
        
         <div  className='sec9'>
             <img src={qalqon} />
             <h1>Доступ без VPN</h1>
        </div>

         <div className='sec10'>
             <img src={card} />
             <h1>Не нужен номер  <br />телефона<br />
                и иностранная карта.</h1>
        </div>
            <div className='header'>

       
        <div className='sec11'>
            <img src={boyoq} />
            <h1>Создавайте<br />
            контент</h1>
            <p>Создавайте уникальные изображения и текст для любых
            социальных сетей</p>
        </div>
         <div className='sec12'>
             <img src={pox} />
             <h1>Экономьте <br />
            время</h1>
            <p>Экономьте ваше время для решения рутинных задач с помощью готовых шаблонов</p>
        </div>
         <div className='sec13'>
             <img src={book} />
             <h1>Используйте <br />
            в учебе</h1>
            <p>Ищите любую информацию, решайте тесты,
            создавайте рефераты в один клик</p>
        </div>
         <div className='sec14'>
             <img src={zamok} />
             <h1>Создавайте<br />
            код</h1>
            <p>Редактируйте
            и создавайте любой
            код, учитесь новому
            и исправляйте ошибки</p>
        </div>
         <div className='sec15'>
             <img src={sms} />
             <h1>Улучшайте <br />
            текст</h1>
            <p>Редактируйте любой
            текст, увеличивайте
            оригинальность,
            создавайте лучший
            текст под любые
            задачи</p>
              </div>
        </div>
    </div>
  )
}

export default Section3