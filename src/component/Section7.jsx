import React from 'react';
import './Section7.css';

const FAQSection = () => {
  return (
    <section className="faq-container">
      <h2 className="faq-main-title">Часто задаваемые вопросы</h2>
      
      <div className="faq-list">
        
        {/* Savol 1 */}
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-question">Как и на какой версии работает Chad?</span>
            <span className="faq-icon">▼</span>
          </div>
        </div>

        {/* Savol 2 */}
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-question">Что будет, если израсходуются лимит слов раньше окончания месяца?</span>
            <span className="faq-icon">▼</span>
          </div>
        </div>

        {/* Savol 3 */}
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-question">Как считается количество слов, указанное в тарифах?</span>
            <span className="faq-icon">▼</span>
          </div>
        </div>

        {/* Savol 4 */}
        <div className="faq-item">
          <div className="faq-header">
            <span className="faq-question">Почему сервис платный?</span>
            <span className="faq-icon">▼</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;