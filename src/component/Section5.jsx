import "./Section5.css";
import logo from "../assets/logo.png";

function Section5() {
  return (
   <>
    <section className="hero-container">
      <div className="hero-content">
        
        {/* Chap tomon: Matnlar qismi */}
        <div className="hero-text-side">
          <h1 className="hero-title">API Midjourney и ChatGPT</h1>
          <p className="hero-subtitle">
            Интегрируйте ChatGPT и Midjourney в ваши проекты, пишите плагины!
          </p>

          <div className="features-list">
            {/* Punkt 1 */}
            <div className="feature-item">
              <div className="check-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-info">
                <h3>Настоящий Midjourney 5.3</h3>
                <p>- 0.2 копейки за каждый запрос</p>
              </div>
            </div>

            {/* Punkt 2 */}
            <div className="feature-item">
              <div className="check-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-info">
                <h3>Настоящий ChatGPT</h3>
                <p>- 0.2 копейки за каждый запрос</p>
              </div>
            </div>
          </div>

          <a href="#" className="docs-link">Смотреть документацию</a>
        </div>

        {/* O'ng tomon: Rasm qismi */}
        <div className="hero-image-side">
            <img src={logo} alt="" />
        </div>

      </div>
    </section>

   </>
  )
}

export default Section5;