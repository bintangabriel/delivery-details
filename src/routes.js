// Import page
import { Shipment } from "./pages/steptwo";
import App from "./pages/stepone/indeks";
// import Article from "../container/home/pages/artikel/index"
// import { SignIn } from "../components/signInCard";
// import { ProfileTeamFamily } from "../container/home/pages/profileTeamFamily";


// Data route untuk tiap page
export const routes = [
  {
    component: App,
    exact: true,
    path: "/",
  },
  {
    component: Shipment,
    exact: true,
    path: "/shipment",
  },
  // {
  //   component: SignIn,
  //   exact:true,
  //   path: "/signin"
  // }
  // {
  //   component: Home,
  //   exact: true,
  //   path: "/"
  // },


  // Contoh menggunakan component yang passing props dan menggunakan parameter:

  // {
  //   component: () => <GameRegistration gameId="dota" />,
  //   exact: true,
  //   path: "/daftar/dota/:id"
  // },
];
