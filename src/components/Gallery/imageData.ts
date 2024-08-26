// Import images
import image1 from "../../assets/Images/dummyGerd.webp";
import image2 from "../../assets/Images/dummyJonas.webp";
import image3 from "../../assets/Images/dummyRoald.webp";
import image4 from "../../assets/Images/IssasBG1.webp";
import image5 from "../../assets/Images/IssasHero.webp";
import image6 from "../../assets/Images/dummyGerd.webp";
import image7 from "../../assets/Images/dummyJonas.webp";
import image8 from "../../assets/Images/dummyRoald.webp";
import image9 from "../../assets/Images/IssasBG1.webp";
import image10 from "../../assets/Images/IssasHero.webp";

// Define the ImageData interface
interface ImageData {
  src: string;
  alt: string;
}

// Create an array of images that conforms to the ImageData interface
const images: ImageData[] = [
  {
    src: image1,
    alt: "Image 1 description",
  },
  {
    src: image2,
    alt: "Image 2 description",
  },
  {
    src: image3,
    alt: "Image 3 description",
  },
  {
    src: image4,
    alt: "Image 4 description",
  },
  {
    src: image5,
    alt: "Image 5 description",
  },
  {
    src: image6,
    alt: "Image 6 description",
  },
  {
    src: image7,
    alt: "Image 7 description",
  },
  {
    src: image8,
    alt: "Image 8 description",
  },
  {
    src: image9,
    alt: "Image 9 description",
  },
  {
    src: image10,
    alt: "Image 10 description",
  },
];

export default images;
