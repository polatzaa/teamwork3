import React from 'react'
import "./Section4.css"
import qora from "../assets/qora.png"
import kastyum from "../assets/kastyum.png"
import qoraqiz from "../assets/qoraqiz.png"
import oqqiz from "../assets/oqqiz.png"
import masha from "../assets/masha.png"
import sasha from "../assets/sasha.png"

const Section4 = () => {
  return (
    <div className='sec16'>
        <h1>Сообщество и отзывы</h1>
        <p>Поддержка, обновления и отзывы о сервисе в Telegram чате</p>
        <div className='header2'>
                <div className='sec17'>
                        <img src={qora} />
                        <h1>Вита</h1>
                        <li>@wintervi</li>
                        <p>Спасибо за бот! Использовала для копирайта в соцсетях, подкинул классные идеи для рубрик Работает быстрее, чем обычный и не тупит, так как не нужен VPN</p>
                </div>

                 <div className='sec18'>
                        <img src={kastyum} />
                        <h1>Данил</h1>
                        <li>@stllgeekin</li>
                        <p>Реально крутой бот!!! Парился с научкой пол года, покупал турецкую карту, для регистрации, потом переводил с английского... А тут, быстро, без очередии без всяких заморочек!</p>
                </div>

                 <div className='sec19'>
                        <img src={qoraqiz} />
                        <h1>Денис</h1>
                        <li>@denisshvts</li>
                        <p>Пользовался для проги в универе на python все работает четко, спасибо</p>
                </div>

                 <div className='sec20'>
                        <img src={oqqiz} />
                        <h1>Миша</h1>
                        <li>@dancerflexerr</li>
                        <p>Крутяк! Юзаю, чтобы писать код, для вуза функционала хватает. Поддерживает разные языки программирования. Нет проблем с регистрацией, не нужна фейк симка</p>

                </div>

                 <div className='sec21'>
                        <img src={masha} />
                        <h1>Маша</h1>
                        <li>@solo_maa</li>
                        <p>Суперский продукт. Упрощает множество задач. Это станет максимально комфортным механизмом для тех, кто все время откладывал мороку с регистрацией на оригинале</p>

                </div>

                 <div className='sec22'>
                        <img src={sasha} />
                        <h1>Саша</h1>
                        <li>@orthdxbully</li>
                        <p>Очень быстро и удобно все работает, рад что теперь не нужно париться с VPN! Работает быстрее чем оригинальный и на русском ответы получаются на много лучше!</p>

                </div>

        </div>
    </div>
  )
}

export default Section4