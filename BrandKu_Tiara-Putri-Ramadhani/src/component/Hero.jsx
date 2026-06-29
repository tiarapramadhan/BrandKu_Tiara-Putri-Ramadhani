const Hero = ({ title, subtitle, buttonText, onTap, currentUser }) => {
  return (
    <section className="bg-blue-50 py-24 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h1>

      <p className="text-gray-600 mb-8">
        {subtitle}
      </p>

      {currentUser ? (
        <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-slate-200">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium">
            {currentUser.name?.[0] || 'U'}
          </div>
          <span className="font-semibold text-slate-800">{buttonText}</span>
        </div>
      ) : (
        <button
          onClick={onTap}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default Hero;