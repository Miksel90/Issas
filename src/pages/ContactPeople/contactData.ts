// contactData.ts
import image1 from "../../assets/Images/dummyRoald.webp";
import image2 from "../../assets/Images/dummyJonas.webp";
import image3 from "../../assets/Images/dummyGerd.webp";

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
    phone: "+47 669 63 500",
    email: "post@issas.no",
    image: image1,
  },
  {
    name: "Jonas Selstad",
    title: "Prosjekt leder",
    phone: "+47 669 63 500",
    email: "post@issas.no",
    image: image2,
  },
  {
    name: "Gerd Stokkeland",
    title: "Økonomi Ansvarlig",
    phone: "+47 669 63 500",
    email: "post@issas.no",
    image: image3,
  },
];
