export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ВОТ*ЕДА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Как заказать</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ГОРЯЧЕЕ
              <br />
              ПРЯМО К <span>ТЕБЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Закупаем в супермаркете и везём по городу. Свежие продукты, готовая еда и всё нужное — без очередей и лишних хлопот.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать сейчас
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover",
            }}
          >
            <div className="sticker">
              ДОСТАВКА
              <br />
              ОТ 45 МИН
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВКУСНО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ГОРЯЧЕЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДОСТАВКА ЕДЫ ПО ГОРОДУ * ГОРЯЧО И БЫСТРО * ЗАКУПАЕМ В СУПЕРМАРКЕТЕ * БЕЗ МИНИМАЛКИ * РАБОТАЕМ ЕЖЕДНЕВНО *
            ДОСТАВКА ЕДЫ ПО ГОРОДУ * ГОРЯЧО И БЫСТРО * ЗАКУПАЕМ В СУПЕРМАРКЕТЕ * БЕЗ МИНИМАЛКИ * РАБОТАЕМ ЕЖЕДНЕВНО
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
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Хит дня</span>
              <img
                src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Готовые блюда"
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
                  <h3>Готовые блюда</h3>
                  <span className="price">от 350 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Горячие обеды и ужины из супермаркета — котлеты, пюре, гарниры, супы. Разогреем и упакуем.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пицца и выпечка"
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
                  <h3>Пицца и выпечка</h3>
                  <span className="price">от 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Пиццы, пироги, хачапури и свежая выпечка прямо из отдела горячей еды.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Быстрее всего
              </span>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Салаты и закуски"
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
                  <h3>Салаты и закуски</h3>
                  <span className="price">от 250 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свежие салаты, нарезки, роллы и закуски — идеально для быстрого перекуса или праздника.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ТЫ ПИШЕШЬ — МЫ ВЕЗЁМ.</h2>
            <p className="vibe-text">
              Никаких приложений и регистраций. Пишешь нам список — мы едем в супермаркет, берём горячую еду и продукты, и привозим прямо к двери. Тепло, быстро, по-человечески.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Как сделать заказ
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ВОТ.ЕДА
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ВОТ*ЕДА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Закупаем еду в супермаркете и доставляем по городу. Горячо, быстро, без лишних шагов.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Как заказать
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
            <li>Пн–Пт: 9:00–22:00</li>
            <li>Сб–Вс: 10:00–22:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Доставка от 45 минут
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
              <a href="https://t.me/voteda" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
            <li>
              <a href="https://vk.com/voteda" style={{ color: "inherit", textDecoration: "none" }}>
                ВКонтакте
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
