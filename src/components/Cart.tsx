import Icon from "@/components/ui/icon";
import type { CartItem } from "@/hooks/useCart";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export default function Cart({ isOpen, onClose, items, total, onUpdateQuantity, onRemove }: CartProps) {
  return (
    <>
      {isOpen && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1998 }}
          onClick={onClose}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100dvh",
          width: "100%",
          maxWidth: "420px",
          background: "var(--bg)",
          borderLeft: "var(--border)",
          zIndex: 1999,
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
          }}
        >
          <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "20px", textTransform: "uppercase" }}>
            Корзина
          </span>
          <button
            onClick={onClose}
            style={{ background: "none", border: "var(--border)", padding: "6px 10px", cursor: "pointer", fontWeight: 800 }}
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: "60px", color: "#999" }}>
              <Icon name="ShoppingCart" size={48} />
              <p style={{ marginTop: "16px", fontWeight: 700, textTransform: "uppercase", fontSize: "14px" }}>
                Корзина пуста
              </p>
              <p style={{ fontSize: "13px", marginTop: "8px" }}>Добавьте что-нибудь из меню</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "16px",
                  padding: "12px",
                  border: "var(--border)",
                  background: "white",
                  boxShadow: "4px 4px 0 var(--dark)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "70px", height: "70px", objectFit: "cover", border: "2px solid var(--dark)" }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: "14px", marginBottom: "4px" }}>{item.name}</p>
                  <p style={{ color: "var(--primary)", fontWeight: 800, fontSize: "15px" }}>
                    {(item.price * item.quantity).toLocaleString("ru")} ₽
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="btn-cta"
                      style={{ padding: "2px 10px", fontSize: "18px", lineHeight: 1 }}
                    >
                      −
                    </button>
                    <span style={{ fontWeight: 800, minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="btn-cta"
                      style={{ padding: "2px 10px", fontSize: "18px", lineHeight: 1 }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#999" }}
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "20px 24px", borderTop: "var(--border)", background: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "14px" }}>Итого:</span>
              <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "20px" }}>
                {total.toLocaleString("ru")} ₽
              </span>
            </div>
            <button
              className="btn-cta"
              style={{ width: "100%", background: "var(--primary)", color: "white", fontSize: "15px", padding: "14px" }}
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
