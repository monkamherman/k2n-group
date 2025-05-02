
import Slider from "@/pages/About/components/Slider";
import Info from "@/pages/About/components/Info";
import Mapcart from "@/pages/About/components/Map";

const About = () => {
  return (
    <div className="font-roboto">
      <div className="flex h-[50vh] w-full items-center justify-center">
        {/* Container avec l'image de fond */}
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
          style={{ backgroundImage: "url('/livetygroup.png')" }}
        >
          {/* Titre */}
          <h1 className="w-full max-w-[20rem] rounded bg-black/25 p-4 text-center text-2xl font-bold leading-snug text-white sm:text-3xl sm:leading-normal md:text-4xl lg:text-5xl xl:text-6xl">
            A propos
          </h1>

          {/* Paragraphe */}
          <p className="mt-4 w-full max-w-[20rem] rounded bg-black/25 p-4 text-center text-sm text-white sm:text-base md:text-lg lg:text-xl">
            Apprenez un peu plus sur nous
          </p>
        </div>
      </div>
      <div className="my-10 px-4 flex flex-col justify-center gap-10 lg:flex-row lg:gap-[7rem]">
        <div className="flex flex-1 flex-col gap-10">
          <Info
            title="Notre Histoire"
            description="K2N group est un projet qui résulte d'une série de réflexions qu'avait un jeune camerounais depuis plusieurs années. Après avoir mûri l'idée et que celle-ci t ait accrochez deux autres personnes que, M. Perrin KONMENEK crée l'entreprise auprès des autorités compétentes le 16 mars 2023. Avec pour nom de départ Konsultant's qui dans la langue africaine faire référence à consultant, l'entreprise porte le nom de K2N GROUP formé de trois divisions : Konsultant's, Technologies et Services.."
          />
          <Info
            title="Qui sommes nous ?"
            description="Nous nous positionnons comme un expert en conseil et en consultation, offrant une expertise pointue et personnalisée dans une multitude de domaines. Que ce soit pour optimiser les stratégies d'entreprise, innover ou résoudre des problématiques complexes, nos équipes accompagnent nos clients, qu'il s'agisse de grands groupes ou de PME, dans la réalisation de leurs objectifs les plus ambitieux."
          />
          <Info
            title="Notre mission"
            description="K2N group a pour mission la prestation de services de conseil et de consultation dans divers domaines que ce soit pour son propre compte ou pour le compte de tiers."
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            src="/Colaborateur.png"
            alt="Collaborateurs K2N"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="my-[10rem] px-4 md:px-0 flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-[7rem]">
        <div className="flex flex-col gap-[5rem]">
          <h1 className="text-2xl font-bold text-dark dark:text-white lg:text-5xl">
            Description du logo
          </h1>
          <img src="/3D.png" alt="Logo K2N 3D" className="h-auto w-[65rem]" />
        </div>
        <div className="flex flex-col gap-10">
          <Info
            title="K2N"
            description="K2N est un nom riche de sens, issu des initiales de ses fondateurs : K pour KAPNGANG, K pour KONMENEK, et N pour NGOUANA. Il incarne l'héritage de ces pionniers et symbolise l'union de leurs compétences et de leur vision."
          />           
        </div>
      </div>
      <div>
        <Slider />
      </div>
      {/* <div>
        <Mapcart />
      </div> */}
    </div>
  );
};

export default About;
