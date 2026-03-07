import Punarnava from "../../assets/Gallery/GalleryCard/Punarnava.svg";
import NSS from "../../assets/Gallery/GalleryCard/NSS.svg";
import Campu from "../../assets/Gallery/GalleryCard/Camp.svg";
import Wellness from "../../assets/Gallery/GalleryCard/Wellness.svg";
import Seminar from "../../assets/Gallery/GalleryCard/Seminar.svg";
import Cultural from "../../assets/Gallery/GalleryCard/Cultural.svg";
import Sport from "../../assets/Gallery/GalleryCard/Sport.svg";
import Campus from "../../assets/Gallery/GalleryCard/Campus.svg";

import Pu1 from "../../assets/Gallery/PunarnavaVisit/Pu1.png";
import Pu2 from "../../assets/Gallery/PunarnavaVisit/Pu2.png";
import Pu3 from "../../assets/Gallery/PunarnavaVisit/Pu3.png";
import Pu4 from "../../assets/Gallery/PunarnavaVisit/Pu4.png";
import Pu5 from "../../assets/Gallery/PunarnavaVisit/Pu5.png";
import Pu6 from "../../assets/Gallery/PunarnavaVisit/Pu6.png";

export const GalleryItems = [
  {
    id: 1,
    name: "Punarnava Visit",
    icon: Punarnava,
    tag: "Visits & Campus",
    images: [Pu1, Pu2, Pu3, Pu4, Pu5, Pu6],
  },
  { id: 2, name: "NSS Activity", icon: NSS, tag: "Community" },
  { id: 3, name: "Medical Camp", icon: Campu, tag: "Community" },
  { id: 4, name: "Wellness Program", icon: Wellness, tag: "Health & Wellness" },
  { id: 5, name: "Seminar", icon: Seminar, tag: "Academic" },
  {
    id: 6,
    name: "Cultural Activities",
    icon: Cultural,
    tag: "Events & Culture",
  },
  { id: 7, name: "Sport Activities", icon: Sport, tag: "Events & Culture" },
  { id: 8, name: "Campus", icon: Campus, tag: "Visits & Campus" },
];
