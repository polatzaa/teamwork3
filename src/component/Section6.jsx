import "./Section6.css";


const Section6 = () => {
  const features = [
    { text: "Доступ без VPN", included: true },
    { text: "Не нужен номер телефона и иностранная карта", included: true },
    { text: "Безлимит GPT 3,5 Turbo", included: true },
    { text: "25 запросов в день к Midjourney", included: true },
    { text: "25 запросов в день к GPT4", included: true },
    { text: "Доступ к Api GPT и Midjourney", included: false },
  ];

  return (
    <section className="pricing-container">
      <h2 className="pricing-main-title">Выберите тарифный план</h2>
      
      <div className="pricing-grid">
        
        <div className="pricing-card">
          <h3 className="card-title">Тариф PRO за 1 ₽<br/>1 месяц</h3>
          <ul className="feature-list">
            {features.map((item, index) => (
              <li key={index} className={`feature-li ${item.included ? 'included' : 'excluded'}`}>
                <span className="status-icon">{item.included ? '✓' : '×'}</span>
                {item.text}
              </li>
            ))}
          </ul>
          <button className="btn-primary">Выбрать тариф</button>
        </div>

        <div className="pricing-card featured">
          <div className="badge">Чаще всего выбирают</div>
          <h3 className="card-title">Тариф PRO за 1 ₽<br/>1 месяц</h3>
          <ul className="feature-list">
            {features.map((item, index) => (
              <li key={index} className={`feature-li ${item.included ? 'included' : 'excluded'}`}>
                <span className="status-icon">{item.included ? '✓' : '×'}</span>
                {item.text}
              </li>
            ))}
          </ul>
          <button className="btn-white">Выбрать тариф</button>
          <div className="warning-note">
             <span className="warning-icon">⚠️</span>
             <p>Первый месяц за 1 рубль далее по 599 ₽ в месяц</p>
          </div>
        </div>

        <div className="pricing-card">
          <h3 className="card-title">Тариф PRO за 1 ₽<br/>1 месяц</h3>
          <ul className="feature-list">
            {features.map((item, index) => (
              <li key={index} className={`feature-li ${item.included ? 'included' : 'excluded'}`}>
                <span className="status-icon">{item.included ? '✓' : '×'}</span>
                {item.text}
              </li>
            ))}
          </ul>
          <button className="btn-primary">Выбрать тариф</button>
        </div>

      </div>
    </section>
  );
};

export default Section6;