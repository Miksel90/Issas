import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/Images/IssasHero2.webp";
import DefaultButton from "../../components/Buttons/DefaultButton";
import AboutContainer from "../../components/Container/aboutContainer";
import { useTranslator } from "../../components/Translator/useTranslator";

const AboutPage = () => {
  const navigate = useNavigate();
  const { translate } = useTranslator(); // Use the translate function

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-col items-center font-primary">
      <Helmet>
        <title>{translate("Om Oss")} | ISSAS</title>
      </Helmet>
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt={translate("Header Background")}
          className="w-full h-28 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold font-primary text-white text-shadow-lg">
            {translate("Om Oss")}
          </h1>
        </div>
      </div>
      <div className="md:container mx-auto px-4 py-8 flex flex-col">
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-center whitespace-pre-line font-primary">
          {translate(
            "Hei, det er vi som er ISSAS GULV, Din Profesjonelle Gulvlegger!"
          )}
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          {translate(
            "Etablert i 1996, med fokus på gulvlegging har ISSAS vokst betydelig, og har med tiden formet seg til å bli en av landets fremste spesialister på gulv til butikker, kontorbygg og næringslokaler."
          )}
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          {translate(
            "ISSAS er en familie­styrt gulv­leggerbedrift med stor tyngde innenfor vårt fagfelt. Vi tilbyr kun de beste typer av gulv og tepper, samt leverer de mest profesjonelle gulv­leggerne."
          )}
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          {translate(
            "Vi utfører alt fra spesielle design­gulv til tradisjonelle gulv­belegg, tepper, parkett, fliser og flyte­sparkling. Vi selger gulv og utfører tjenester innenfor dette, men jobber også tett med gode samarbeidspartnere og har gjennom disse gode avtaler på produkter og på utførelser av andre tjenester."
          )}
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          {translate(
            "Dyktige fagfolk, riktige metoder og gode løsninger er vår styrke! Vi bruker kun kvalitets­produkter fra anerkjente leverandører, og stiller meget høye krav til vår egen utførelse av alle oppdrag."
          )}
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          {translate(
            "Vi jobber over hele Norge, og har i tillegg vært engasjert i ulike prosjekter i andre skandinaviske land og Europa for øvrig. Vårt mål er hele tiden å bli enda bedre på levering og montering av alle typer gulv."
          )}
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          {translate("Hilsen Roald og Jonas")}
        </p>
        <AboutContainer />

        <div className="flex items-center justify-center mt-10">
          <DefaultButton
            ariaLabel={translate("Kontakt Oss")}
            size="large"
            variant="no-hover"
            onClick={handleClick}
          >
            {translate("Kontakt Oss")}
          </DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
