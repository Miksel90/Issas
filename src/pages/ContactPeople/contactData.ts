// contactData.ts
import image1 from "../../assets/Images/roaldProfil.webp";
import image2 from "../../assets/Images/JonasProfil.webp";

export interface Person {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
}

export const people: Person[] = [
  {
    name: "Roald Selstad",
    title: "Daglig leder",
    phone: "+47 99204383",
    email: "roald@issas.no",
    image: image1,
  },
  {
    name: "Jonas Selstad",
    title: "Prosjektleder",
    phone: "+47 97132023",
    email: "jonas@issas.no",
    image: image2,
  },
];
