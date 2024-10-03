import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "About Us",
        path: "/about",
        newTab: false,
      },
      
      {
        id: 2,
        title: "Blogs",
        path: "/blog",
        newTab: false,
      },
      {
        id: 3,
        title: "Portfolio",
        path: "/portfolio",
        newTab: false,
      },
      {
        id: 4,
        title: "Our Vision",
        path: "/our-vision",
        newTab: false,
      },
      {
        id: 5,
        title: "Our Mission",
        path: "/our-mission",
        newTab: false,
      },
      
      {
        id: 6,
        title: "Career",
        path: "/carrer",
        newTab: false,
      },
     
    ],
  },
  
  {
    id: 3,
    title: "Services",
    path: "/servicses",
    newTab: false,
  },
  {
    id: 4,
    title: "Our Products",
    path: "/blog",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Contect Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Technology",
    path: "/technology",
    newTab: false,
  },
  
];
export default menuData;
