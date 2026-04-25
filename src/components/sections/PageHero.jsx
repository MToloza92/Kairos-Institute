export default function PageHero({
  backgroundImage,
  title,
  description,
  overlayOpacity = 50,
}) {
  return (
    <section
      className="w-full bg-gray-900 py-24 text-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Efecto parallax
      }}
    >
      {/* OVERLAY OSCURO */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: overlayOpacity / 100,
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
