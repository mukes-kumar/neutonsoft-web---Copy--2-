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
    title: "Who We Are",
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
        title: "Portfolio",
        path: "/about",
        newTab: false,
      },
      {
        id: 3,
        title: "Blogs",
        path: "/about",
        newTab: false,
      },
      {
        id: 4,
        title: "Our Vision",
        path: "/blog",
        newTab: false,
      },
      {
        id: 5,
        title: "Our Mission",
        path: "/blog",
        newTab: false,
      },
      
      {
        id: 6,
        title: "Career",
        path: "/blog",
        newTab: false,
      },
     
    ],
  },
  
  {
    id: 3,
    title: "Services",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Our Products",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Technologies",
    path: "/technology",
    newTab: false,
  },
  {
    id: 6,
    title: "Contect Us",
    path: "/contact",
    newTab: false,
  },
  
];
export default menuData;
