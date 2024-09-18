import bannerImage from "../../assets/Images/IssasHero2.webp";
import FacebookPage from "../../components/Container/facebookContainer";
import ImageGallery from "../../components/Gallery/ImageGallery";
import { Helmet } from "react-helmet";
import { useTranslator } from "../../components/Translator";

const ProjectPage = () => {
  const { translate } = useTranslator();

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>{translate("Prosjekter")} | ISSAS</title>
      </Helmet>
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt={translate("Header Background")}
          className="w-full h-28 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold font-primary">
            {translate("Prosjekter")}
          </h1>
        </div>
      </div>
      <h2 className="text-3xl font-semibold text-center lg:text-left p-2 md:p-4 font-primary">
        {translate("Vi er stolte av våre prosjekter")}
      </h2>
      <div className="md:container px-4 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 mb-10">
        <div>
          <ImageGallery />
        </div>
        <div className="px-10">
          <FacebookPage />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
