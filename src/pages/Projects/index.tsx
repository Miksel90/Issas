import bannerImage from "../../assets/Images/IssasHero.webp";
import FacebookPage from "../../components/Container/facebookContainer";

const ProjectPage = () => {
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
          <h1 className="text-3xl font-bold">Prosjekter</h1>
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left p-4">
        Følg Oss På Sosiale Medier
      </h2>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
        <div>
          {/* Placeholder for Image Gallery */}
          <div className="image-gallery">
            {/* Add your image gallery component or images here */}
            <p>Image Gallery Placeholder</p>
          </div>
        </div>

        <div className="flex justify-center">
          <FacebookPage />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
