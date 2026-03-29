export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">СВЕЖ*МАГ</div>
        <nav>
          <a href="#">Каталог</a>
          <a href="#">Как это работает</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              СВЕЖАК
              <br />
              ПРЯ МО К <span>ДВЕРИ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Покупаем продукты в супермаркете и доставляем по городу. Без переплат, без очередей — только свежее и то, что ты выбрал.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Сделать заказ
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Как это работает
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              ДОСТАВКА
              <br />
              ЗА 1 ЧАС
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СВЕЖЕЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЫСТРО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПРОДУКТЫ ИЗ СУПЕРМАРКЕТА * ДОСТАВКА ПО ГОРОДУ * СВЕЖИЕ ФРУКТЫ И ОВОЩИ * БЕЗ НАЦЕНКИ * БЫСТРО И УДОБНО *
            ПРОДУКТЫ ИЗ СУПЕРМАРКЕТА * ДОСТАВКА ПО ГОРОДУ * СВЕЖИЕ ФРУКТЫ И ОВОЩИ * БЕЗ НАЦЕНКИ * БЫСТРО И УДОБНО
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ЧТО ВЕЗЁМ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит заказов</span>
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Фрукты и овощи"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Фрукты и овощи</h3>
                  <span className="price">от 300 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свежие сезонные фрукты и овощи прямо из супермаркета — отбираем только лучшее.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Мясо и птица"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мясо и птица</h3>
                  <span className="price">от 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Охлаждённое мясо, птица и полуфабрикаты — доставим в термосумке.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Быстро
              </span>
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Молочные продукты"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Молочка и яйца</h3>
                  <span className="price">от 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Молоко, творог, сыр, йогурты, яйца — всё свежее и в целости.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ПРОСТО. БЫСТРО. СВЕЖО.</h2>
            <p className="vibe-text">
              Ты присылаешь список — мы едем в магазин, закупаем и привозим прямо к двери. Никакой регистрации, никаких приложений. Просто напиши нам — и готово.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Как сделать заказ
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @СВЕЖ.МАГ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1506484381205-f7945653044d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">СВЕЖ*МАГ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Покупаем продукты в супермаркете и доставляем по городу. Свежо, быстро, без лишних хлопот.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Как это работает
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 8:00–22:00</li>
            <li>Сб–Вс: 9:00–21:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Доставка от 1 часа
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+78001234567" style={{ color: "inherit", textDecoration: "none" }}>
                8-800-123-45-67
              </a>
            </li>
            <li>
              <a href="https://t.me/svezhmag" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
            <li>
              <a href="https://vk.com/svezhmag" style={{ color: "inherit", textDecoration: "none" }}>
                ВКонтакте
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
