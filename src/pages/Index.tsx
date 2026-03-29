import { useState } from "react";
import { useCart, type Product } from "@/hooks/useCart";
import Cart from "@/components/Cart";
import Icon from "@/components/ui/icon";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Готовые блюда",
    price: 350,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Хит дня",
    description: "Горячие обеды и ужины из супермаркета — котлеты, пюре, гарниры, супы.",
  },
  {
    id: 2,
    name: "Пицца и выпечка",
    price: 400,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Популярное",
    tagColor: "var(--secondary)",
    description: "Пиццы, пироги, хачапури и свежая выпечка прямо из отдела горячей еды.",
  },
  {
    id: 3,
    name: "Салаты и закуски",
    price: 250,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Быстрее всего",
    tagColor: "var(--accent)",
    description: "Свежие салаты, нарезки, роллы и закуски — идеально для быстрого перекуса.",
  },
  {
    id: 4,
    name: "Суши и роллы",
    price: 550,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Новинка",
    tagColor: "var(--primary)",
    description: "Свежие суши-сеты и роллы из рыбного отдела супермаркета.",
  },
  {
    id: 5,
    name: "Мясо и гриль",
    price: 480,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Горячее",
    description: "Шашлык, курица гриль, рёбра — прямо с мангала в магазине.",
  },
  {
    id: 6,
    name: "Десерты и торты",
    price: 320,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Сладкое",
    tagColor: "#c084fc",
    description: "Торты, пирожные, тирамису и другие сладости из кондитерского отдела.",
  },
];

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const { items, addToCart, removeFromCart, updateQuantity, total, count } = useCart();

  return (
    <>
      <div className="grain-overlay" />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        total={total}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <header className="header">
        <div className="logo">ВОТ*ЕДА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Как заказать</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button
          className="btn-cta"
          onClick={() => setCartOpen(true)}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Icon name="ShoppingCart" size={16} />
          Корзина
          {count > 0 && (
            <span
              style={{
                background: "var(--primary)",
                color: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 900,
                position: "absolute",
                top: "-8px",
                right: "-8px",
                border: "2px solid var(--dark)",
              }}
            >
              {count}
            </span>
          )}
        </button>
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
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
                onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              >
                Выбрать блюда
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Как это работает
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

        <section className="section-padding" id="catalog">
          <div className="section-header">
            <h2 className="section-title">ЧТО ВЕЗЁМ</h2>
            {count > 0 && (
              <button
                className="btn-cta"
                onClick={() => setCartOpen(true)}
                style={{ background: "var(--primary)", color: "white", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Icon name="ShoppingCart" size={16} />
                {count} поз. — {total.toLocaleString("ru")} ₽
              </button>
            )}
          </div>

          <div className="menu-grid">
            {PRODUCTS.map((product) => {
              const inCart = items.find((i) => i.id === product.id);
              return (
                <div className="menu-card" key={product.id}>
                  {product.tag && (
                    <span
                      className="menu-tag"
                      style={{
                        background: product.tagColor || "var(--primary)",
                        color: product.tagColor === "var(--accent)" ? "var(--dark)" : "white",
                      }}
                    >
                      {product.tag}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} />
                  <div className="menu-card-body">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <h3>{product.name}</h3>
                      <span className="price">от {product.price} ₽</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#666", marginBottom: "14px" }}>{product.description}</p>

                    {inCart ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <button
                          className="btn-cta"
                          onClick={() => updateQuantity(product.id, -1)}
                          style={{ padding: "6px 14px", fontSize: "18px", lineHeight: 1 }}
                        >
                          −
                        </button>
                        <span style={{ fontWeight: 800, minWidth: "24px", textAlign: "center" }}>{inCart.quantity}</span>
                        <button
                          className="btn-cta"
                          onClick={() => updateQuantity(product.id, 1)}
                          style={{ padding: "6px 14px", fontSize: "18px", lineHeight: 1 }}
                        >
                          +
                        </button>
                        <span style={{ marginLeft: "auto", fontWeight: 800, color: "var(--primary)" }}>
                          {(inCart.price * inCart.quantity).toLocaleString("ru")} ₽
                        </span>
                      </div>
                    ) : (
                      <button
                        className="btn-cta"
                        onClick={() => addToCart(product)}
                        style={{ width: "100%", background: "var(--dark)", color: "white" }}
                      >
                        + В корзину
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
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
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Фото 1" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Фото 2" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Фото 3" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Фото 4" />
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
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Как заказать</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Политика</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 9:00–22:00</li>
            <li>Сб–Вс: 10:00–22:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>Доставка от 45 минут</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li><a href="tel:+78001234567" style={{ color: "inherit", textDecoration: "none" }}>8-800-123-45-67</a></li>
            <li><a href="https://t.me/voteda" style={{ color: "inherit", textDecoration: "none" }}>Telegram</a></li>
            <li><a href="https://vk.com/voteda" style={{ color: "inherit", textDecoration: "none" }}>ВКонтакте</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
