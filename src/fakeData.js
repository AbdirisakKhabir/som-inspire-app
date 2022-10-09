import qays from "./images/qays.jpg";
import salmaan from "./images/salmaan.jpg";
import omar from "./images/omar.jpg";
import aadan from "./images/aadanSahan.jpg";
import ismail from "./images/codkaUbax.jpg";
import hamda from "./images/hamda.jpg";
import aar from "./images/aar.jpg";

const initialData = {
  videoCreators: [
    {
      id: 1,
      name: "Omar Inshar",
      img: { omar },
      description: "Professional Video Maker",
      supporters: 255,
    },
    {
      id: 2,
      name: "Qays Qayser",
      img: { qays },
      description: "Professional Video Maker",
      supporters: 335,
    },
    {
      id: 3,
      name: "Salmaan Maadow",
      img: { salmaan },
      description: "Professional Video Maker",
      supporters: 289,
    },
    {
      id: 4,
      name: "Aadan Sahan",
      img: { aadan },
      description: "Professional Video Maker",
      supporters: 223,
    },
  ],
  podcasters: [
    {
      id: 1,
      name: "Ismail C. Ubax",
      img: { ismail },
      description: "Professional Somali Podcaster",
      supporters: 200,
    },
    {
      id: 2,
      name: "Hamda Hussein",
      img: { hamda },
      description: "Professional Somali Podcaster",
      supporters: 209,
    },
    {
      id: 3,
      name: "Abdi Aar",
      img: { aar },
      description: "Professional Somali Podcaster",
      supporters: 180,
    },
    {
      id: 4,
      name: "Ismail C. Ubax",
      img: { ismail },
      description: "Professional Somali Podcaster",
      supporters: 200,
    },
  ],
};

export const getData = () => {
  return initialData;
};
