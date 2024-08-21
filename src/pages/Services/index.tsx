import bannerImage from "../../assets/Images/IssasHero.webp";
import DropdownItem from "../../components/Buttons/DropdownButton";
import DefaultButton from "../../components/Buttons/DefaultButton";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="min-h-screen  flex flex-col items-center">
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt="Header Background"
          className="w-full h-30 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold">Tjenester</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Vi er Eksperter på Gulv
        </h2>
        <div className="w-full max-w-lg mx-auto flex flex-col gap-4 ">
          <DropdownItem title="Butikkgulv">
            <p className="py-2 text-lg">
              Det lønner seg ikke alltid å kjøpe det første og rimeligste man
              kommer over, for det er et hav av gulv å velge mellom. Det finnes
              utallige farger og ulike design på markedet med sine egen tekniske
              egenskaper.
            </p>
            <p className="py-2 text-lg">
              Husk at omgivelsene og omfanget har mye å si for riktig valg av
              butikkgulv. Ligger butikken gatelangs, lønner det seg å velge et
              gulv som tåler større mengder vann og møkk. Ligger butikken høyere
              over bakken, eller lengre inn i ett kjøpesenter er kriteriene for
              rett valg annerledes.
            </p>
            <p className="py-2 text-lg">
              Når du først har kjøpt et gulv du liker, bør det også holde seg
              godt i årene fremover. Dette er noe vi i Interiørservice Selstad
              legger stor vekt på. For oss er det viktig at gulvet vi leverer er
              av riktig og den beste kvalitet. Noen av våre løsninger når det
              gjelder butikk gulv er LVT (designgulv og vinylfliser), Banevinyl,
              Linoleum, vegg-til-vegg teppe og gummigulv.
            </p>
          </DropdownItem>
          <DropdownItem title="Industrigulv">
            <p className="py-2 text-lg">
              Gulvet i industrilokalene bør være praktisk og slitesterkt. Det
              bør tåle tunge sko og kasser, og man bør være sikker på at beina
              ikke sklir under en. Industrilokaler bør ha gode gulv når det skal
              jobbes.
            </p>
            <p className="py-2 text-lg">
              Den praktiske bruken av gulvet er viktig å ha i bakhodet når nye
              gulv skal velges. Samtidig er et pent gulv ikke å forakte. I dag
              finnes det ett godt utvalg av muligheter, det er mange farger,
              design og typer å velge mellom.
            </p>
            <p className="py-2 text-lg">
              Vi i Interiørservice Selstad har lang erfaring og kan hjelpe deg
              med å finne gulvet som passer bruken i industrilokalene. Vi
              hjelper med farge-og designvalg, i tillegg til at vi kan finne et
              gulv som holder seg over tid i industrilokaler.
            </p>
            <p className="py-2 text-lg">
              Våre løsninger til industrigulv er Sklisikker vinyl, ledendevinyl
              (ESD) og Linoleum.
            </p>
          </DropdownItem>
          <DropdownItem title="Kontor- og Næringsgulv">
            <p className="py-2 text-lg font-semibold">
              Kontoret er stedet mange mennesker bruker mesteparten av dagen.
              Her skal man trives i omgivelsene.
            </p>
            <p className="py-2 text-lg">
              Daglig kommer og går det mange mennesker på et kontor. I tillegg
              til stoler som ruller over gulvet, blir ting levert i kasser og
              esker. Skitt og våt snø dras inn fra utsiden. Kontorgulvet blir
              brukt mye i løpet av en dag. Ville det ikke vært fint å ha et gulv
              som holder seg godt over tid?
            </p>
            <p className="py-2 text-lg">
              Det er et hav av ulike farger og design på markedet.. For å velge
              riktig, er det viktig å tenke på både omgivelser og omfang. Ligger
              kontoret på bakkeplan er det viktig at gulvet tåler både vann og
              møkk. Ligger kontoret i høyere etasjer, kan kriteriene endres.
            </p>
            <p className="py-2 text-lg">
              Vi i Interiørservice Selstad har lang faglig erfaring og kan
              hjelpe deg med å finne gulvet som passer kontoret ditt best. Våre
              løsninger til kontor- og næringsgulv er LVT
              (designgulv/vinylfliser), Banevinyl/Linoleum/Ledende vinyl (ESD),
              vegg-til-veggteppe og gummigulv.
            </p>
          </DropdownItem>
          <DropdownItem title="Linoleumsgulv">
            <p className="py-2 text-lg">
              Med linoleum får du bærekraftige gulv i kompromisløst design til
              en fornuftig pris! Produktet framstilles hovedsaklig av
              bærekraftige materialer, som er lette å rengjøre og svært robuste.
            </p>
            <p className="py-2 text-lg">
              Det er de færreste gulvbelegg som har fått så mange miljømerker
              som Linoleum.
            </p>
          </DropdownItem>
          <DropdownItem title="Gummigulv">
            <p className="py-2 text-lg">
              Gummigulv er laget av naturmaterialet gummi, og har en økende
              popularitet i markedet mye grunnet sitt unike utseende og
              brukervennlighet.
            </p>
          </DropdownItem>
          <DropdownItem title="Vinylgulv">
            <p className="py-2 text-lg">
              Vinylgulv er laget for å gjøre hverdagslivet ditt enklere. De er
              slitesterke, robuste og lette å rengjøre der du trenger det.
              Samtidig er de myke og behagelige å gå på.
            </p>
          </DropdownItem>
        </div>
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
      </div>
    </div>
  );
};

export default ServicePage;
