import unicredCentroSul from "@/assets/unicred-centro-sul.svg";
import unicredEvolucao from "@/assets/unicred-evolucao.svg";
import unicredVale from "@/assets/unicred-vale.svg";
import unicredCoomarca from "@/assets/unicred-coomarca.svg";
import unicredUniao from "@/assets/unicred-uniao.svg";

const clients = [
  { name: "Unicred Centro-Sul", logo: unicredCentroSul },
  { name: "Unicred Evolução", logo: unicredEvolucao },
  { name: "Unicred Vale", logo: unicredVale },
  { name: "Unicred Coomarca", logo: unicredCoomarca },
  { name: "Unicred União", logo: unicredUniao },
];

const InfiniteCarousel = () => (
  <div className="overflow-hidden py-8">
    <div className="logo-carousel flex gap-16 items-center whitespace-nowrap w-max">
      {[...clients, ...clients, ...clients].map((client, i) => (
        <div key={i} className="flex-shrink-0 px-4">
          <img
            src={client.logo}
            alt={client.name}
            className="h-20 w-auto max-w-[180px] object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  </div>
);

export default InfiniteCarousel;
