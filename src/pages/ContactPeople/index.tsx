import bannerImage from "../../assets/Images/IssasHero.webp";

const ContactPeoplePage = () => {
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
          <h1 className="text-3xl font-bold">Kontaktpersoner</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactPeoplePage;
