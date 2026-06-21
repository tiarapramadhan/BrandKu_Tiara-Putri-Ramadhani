const Hero = ({ title, subtitle, buttonText, onTap }) => {
  return (
    <section className="bg-blue-50 py-24 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h1>

      <p className="text-gray-600 mb-8">
        {subtitle}
      </p>

      <button
        onClick={onTap}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
      >
        {buttonText}
      </button>
    </section>
  );
};

export default Hero;