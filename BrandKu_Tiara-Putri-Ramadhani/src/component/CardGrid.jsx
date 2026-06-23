import Card from "./Card";

const CardGrid = ({ features }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Mengapa BrandKu?
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {features.map((items) => (
          <Card
            key={items.id}
            id={items.id}
            icon={items.icon}
            title={items.title}
            subtitle={items.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;