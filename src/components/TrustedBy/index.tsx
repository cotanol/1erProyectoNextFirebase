import Image from "next/image";

const TrustedBy = () => {
  const brands = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-heading text-gray-600 mb-12">
          Trusted by leading companies worldwide
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-0 md:justify-between container mx-auto">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              width={128} // Ancho fijo para todas las imágenes
              height={64} // Altura fija para evitar desproporción
              className="grayscale hover:grayscale-0 transition-all duration-300"
              unoptimized // Evita problemas con imágenes externas en Next.js
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
