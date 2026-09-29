const cards = [
  {
    key: "total",
    label: "Total Scholarships",
    icon: "◫",
    className: "card-total"
  },
  {
    key: "Published",
    label: "Published",
    icon: "✓",
    className: "card-published"
  },
  {
    key: "Draft",
    label: "Draft",
    icon: "◌",
    className: "card-draft"
  },
  {
    key: "Expired",
    label: "Expired",
    icon: "⌁",
    className: "card-expired"
  }
];

export default function SummaryCards({ counts }) {
  return (
    <section className="summary-grid">

      {cards.map((card) => (
        <article
          className={`summary-card ${card.className}`}
          key={card.key}
        >
          <div className="summary-icon">
            {card.icon}
          </div>

          <div>
            <p>{card.label}</p>
            <strong>{counts[card.key]}</strong>
          </div>
        </article>
      ))}

    </section>
  );
}