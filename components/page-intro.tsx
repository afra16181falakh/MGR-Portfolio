type PageIntroProps = {
  number: string;
  total?: string;
  label: string;
  title: React.ReactNode;
  description: string;
};

export default function PageIntro({
  number,
  total = "06",
  label,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="route-intro section-wrap">
      <p className="route-index">
        {number} <span>/ {total}</span>
      </p>
      <div className="route-intro-copy">
        <p className="route-kicker">
          <span />
          {label}
        </p>
        <h1>{title}</h1>
        <p className="route-description">{description}</p>
      </div>
    </header>
  );
}
