import React from 'react';
import './Section8.css';

const Section8 = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Yuqori qism: Logotip va Navigatsiya */}
        <div className="footer-top">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
               <path d="M10 10H30V30H10V10Z" stroke="white" strokeWidth="3"/> {/* Namuna logotip */}
               <path d="M15 20H25M20 15V25" stroke="white" strokeWidth="3"/>
            </svg>
            <span className="logo-text">Chad</span>
          </div>

          <nav className="footer-nav">
            <a href="#">Что может</a>
            <a href="#">Как работает</a>
            <a href="#">Отзывы</a>
            <a href="#">Тарифи</a>
            <a href="#">Для бизнеса</a>
            <a href="#">Вопросы</a>
            <a href="#">Блог</a>
          </nav>

          <div className="footer-contacts">
            <a href="mailto:hello@chadgpt.ru" className="email">hello@chadgpt.ru</a>
            <div className="social-icons">
              <a href="#" className="icon">VK</a>
              <a href="#" className="icon">TG</a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Pastki qism: Huquqiy matnlar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              При использовании сервиса вы соглашаетесь с <a href="#">правилами использования.</a> Мы не имеем отношения к OpenAI, не распространяем их ПО. <a href="#">Условия использования Chad.</a>
            </p>
          </div>
          <div className="footer-copy">
            <p>© 2022 — 2023 «Chad»</p>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Section8;