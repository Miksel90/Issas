import bannerImage from "../../assets/Images/IssasHero2.webp";
import { Helmet } from "react-helmet";
import { useTranslator } from "../../components/Translator/useTranslator";

const PersonvernPage = () => {
  const { translate } = useTranslator();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Helmet>
        <title>{translate("Personvern")} | ISSAS</title>
      </Helmet>
      <div className="w-full text-white relative text-shadow-xl">
        <img
          src={bannerImage}
          alt={translate("Header Background")}
          className="w-full h-30 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold font-primary">
            {translate("Personvern")}
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 font-primary">
          {translate("Samtykke til vår bruk av cookies")}
        </h2>
        <p className="mb-4">
          {translate(
            "Hvis innstillingene på programmvaren du bruker for å vise dette nettstedet (nettleseren din) er justert for å godta informasjonskapsler, tar vi dette som en indikasjon på at du godtar dette. Hvis du ønsker å fjerne eller ikke bruke informasjonskapsler på nettstedet vårt, vil det trolig bety at nettstedet vårt ikke fungerer som du ville forvente."
          )}
        </p>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Cookies i bruk på dette nettstedet – hvorfor cookies?")}
        </h3>
        <p className="mb-4">
          {translate(
            "Vår nettside bruker informasjonskapsler, som nesten alle nettsteder gjør, for å gi deg den beste opplevelsen vi kan. Informasjonskapsler er små tekstfiler som er plassert på din datamaskin eller mobilenhet når du surfer på nettstedet."
          )}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>{translate("Sørge for at nettstedet fungerer som det skal")}</li>
          <li>
            {translate("Husk innstillingene dine under og mellom besøkene")}
          </li>
          <li>
            {translate("Forbedre hastigheten / sikkerheten til nettstedet")}
          </li>
          <li>{translate("Kontinuerlig forbedre nettstedet vårt for deg")}</li>
          <li>{translate("Gjøre vår markedsføring mer effektiv")}</li>
        </ul>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Vi bruker ikke informasjonskapsler til:")}
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            {translate(
              "Samle inn personlig identifiserbar informasjon (uten din eksplisitte tillatelse)"
            )}
          </li>
          <li>
            {translate(
              "Samle inn sensitiv informasjon (uten din eksplisitte tillatelse)"
            )}
          </li>
          <li>
            {translate("Gi personlig identifiserte data til tredjeparter")}
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Mer om våre cookies")}
        </h3>
        <p className="mb-4">
          {translate(
            "Vi bruker informasjonskapsler for at nettstedet vårt skal fungere. Det er ingen måte å forhindre at disse informasjonskapslene blir satt annet enn å slutte å bruke nettstedet vårt."
          )}
        </p>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Tredjepartsfunksjoner")}
        </h3>
        <p className="mb-4">
          {translate(
            "Vår side, som de fleste nettsteder, inkluderer funksjonalitet levert av tredjepart. Vår side inkluderer for eksempel en innebygd YouTube-video."
          )}
        </p>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Site Improvement Cookies")}
        </h3>
        <p className="mb-4">
          {translate(
            "Vi tester jevnlig nye design eller nettstedfunksjoner på nettstedet vårt. Vi gjør dette ved å vise de forskjellige versjonene av vår nettside til forskjellige personer og anonymt evaluere hvordan de besøkende benytter seg av de forskjellige versjonene. Til slutt hjelper dette oss med å tilby deg et bedre nettsted."
          )}
        </p>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Anonyme besøksstatistikk cookies")}
        </h3>
        <p className="mb-4">
          {translate(
            "Vi bruker informasjonskapsler til å kompilere besøksstatistikk, for eksempel hvor mange personer som har besøkt nettstedet vårt, hvilken type teknologi de bruker (f.eks. Macer eller Windows– som hjelper med å identifisere om nettstedet vårt ikke fungerer som det skal for bestemte teknologier), hvor lenge de bruker på nettstedet, hvilke sider de ser på etc. Dette hjelper oss med å forbedre nettstedet kontinuerlig. Disse såkalte 'analytics'-programmene forteller oss også om hvordan folk nådde dette nettstedet (for eksempel fra en søkemotor) og om de har vært her før. Disse opplysningene gir oss en bedre innsikt i hvilken type tjenester eller produkter som er mest populære."
          )}
        </p>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Cookies i bruk på nettstedet")}
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            {translate(
              "_ga: Brukes for å skille brukere fra hverandre, varighet 30 dager."
            )}
          </li>
          <li>
            {translate(
              "_gid: Brukes for å skille brukere fra hverandre, varighet 30 dager."
            )}
          </li>
          <li>
            {translate(
              "cookie_notice_accepted: Brukes for å lagre samtykke via vår cookie policy."
            )}
          </li>
          <li>
            {translate(
              "wordpress_verifedHuman: Brukes for å skille ekte besøkende fra spamroboter."
            )}
          </li>
          <li>
            {translate(
              "wfvt_****: Brukes til å skille ekte besøkende fra spamroboter."
            )}
          </li>
        </ul>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Persondata")}
        </h3>
        <p className="mb-4">
          <strong>{translate("Hva lagres?")}</strong>
          <br />
          {translate(
            "Detaljer som navn, e-post og telefonnumre lagres i forbindelse med å følge opp henvendelser gjort via nettside, telefon og andre måter."
          )}
        </p>
        <p className="mb-4">
          <strong>{translate("Behandlingsgrunnlag")}</strong>
          <br />
          {translate(
            "Vi lagrer opplysninger om våre forretningsforbindelser for å ivareta våre eksisterende avtaler eller dersom vi har ønske om å opprette en forretningsforbindelse/kontakt – en berettiget interesse."
          )}
          <br />
          {translate(
            "Vi vil ikke gi de registrerte opplysningene videre til tredjepart, og de er lagret hos oss kun for å ivareta våre gjensidige interesser."
          )}
        </p>
        <p className="mb-4">
          <strong>{translate("Lagringstid")}</strong>
          <br />
          {translate(
            "Alle personopplysninger blir slettet eller anonymisert dersom behandlingsgrunnlaget ikke lenger er gyldig. Unntaket er dersom opplysningene må oppbevares for å ivareta en lovmessig grunn."
          )}
        </p>
        <p className="mb-4">
          {translate(
            "Dersom et samtykke blir trukket tilbake vil vi slette personopplysningene som er lagret."
          )}
        </p>
        <p className="mb-4">
          <strong>{translate("Den registrertes rettigheter")}</strong>
          <br />
          {translate(
            "Ved den annen inngang til lagrede opplysninger om deg ber vi om at du kontakter oss via detaljene øverst i denne artikkelen. Vi vil svare på din henvendelse snarest mulig og senest innen 30 dager etter at den er mottatt."
          )}
          <br />
          {translate(
            "Vi har rett til å svare korrekt person, sende tilbakemelding ved å benytte vår legitime adresse."
          )}
          <br />
          {translate(
            "I henhold til personvernlovgivningen har den registrerte rett til å bli slettet, få sine opplysninger korrigert, få tilgang til, få lov å begrense behandlingen, samt flytte behandlingen videre til nytt databehandler."
          )}
          <br />
          {translate(
            "Videre har den registrerte rett til når som helst å trekke tilbake sitt gitte samtykke uten at det påvirker lovligheten av en behandling basert på et samtykke før samtykket trekkes tilbake."
          )}
        </p>
        <h3 className="text-xl font-bold mb-2 font-primary">
          {translate("Klager")}
        </h3>
        <p className="mb-4">
          {translate(
            "Eventuelle klager på vår behandling av personopplysninger kan rettes til Datatilsynet."
          )}
        </p>
      </div>
    </div>
  );
};

export default PersonvernPage;
