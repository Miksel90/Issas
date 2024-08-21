import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/Images/IssasHero.webp";
import DefaultButton from "../../components/Buttons/DefaultButton";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt="Header Background"
          className="w-full h-30 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold">Om Oss</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col">
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-center whitespace-pre-line">
          Hei, det er vi som er ISSAS,{"\n"}Din Profesjonelle Gulvlegger!
        </h2>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          Etablert i 1996, med fokus på gulvlegging har ISSAS vokst betydelig,
          og har med tiden formet seg til å bli en av landets fremste
          spesialister på gulv til butikker, kontorbygg og næringslokaler.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          ISSAS er en familie­styrt gulv­leggerbedrift med stor tyngde innenfor
          vårt fagfelt. Vi tilbyr kun de beste typer av gulv og tepper, samt
          leverer de mest profesjonelle gulv­leggerne.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          Vi utfører alt fra spesielle design­gulv til tradisjonelle
          gulv­belegg, tepper, parkett, fliser og flyte­sparkling. Vi selger
          gulv og utfører tjenester innenfor dette, men jobber også tett med
          gode samarbeidspartnere og har gjennom disse gode avtaler på produkter
          og på utførelser av andre tjenester.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          Dyktige fagfolk, riktige metoder og gode løsninger er vår styrke! Vi
          bruker kun kvalitets­produkter fra anerkjente leverandører, og stiller
          meget høye krav til vår egen utførelse av alle oppdrag.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          Vi jobber over hele Norge, og har i tillegg vært engasjert i ulike
          prosjekter i andre skandinaviske land og Europa for øvrig. Vårt mål er
          hele tiden å bli enda bedre på levering og montering av alle typer
          gulv.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          Hilsen Roald og Jonas
        </p>

        <div className="flex items-center justify-center mt-10">
          <DefaultButton
            ariaLabel="Kontakt Oss"
            size="large"
            variant="no-hover"
            onClick={handleClick}
          >
            Kontakt Oss
          </DefaultButton>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            VÅRE LEVERANDØRER
          </h2>
          <div className="flex justify-center mt-10">
            <ul className="list-none flex space-x-10 text-2xl">
              <li className=" font-semibold">Tarkett</li>
              <li className="font-semibold">Polyflor</li>
              <li className=" font-semibold">Amtico</li>
              <li className="font-semibold">Ardex</li>
              <li className=" font-semibold">Armstrong</li>
              <li className=" font-semibold">Casco</li>
              <li className=" font-semibold">Forbo</li>
              <li className="font-semibold">Gerflor</li>
              <li className=" font-semibold">Interface</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
