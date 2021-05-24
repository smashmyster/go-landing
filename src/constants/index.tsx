export const IMAGE_API_ROOT = `https://khula.co.za/ProducePic/`;
export const BUYER_ROOT = "https://buyer.khula.co.za";
export const FARMER_ROOT = "https://farmer.khula.co.za";
export const GRAPH_API = "https://graph.khula.co.za/graphql";
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB8INGLXc1CM6mKqY_ImrOoCr6OvqjTFwA",
  authDomain: "khula-landing.firebaseapp.com",
  projectId: "khula-landing",
  storageBucket: "khula-landing.appspot.com",
  messagingSenderId: "327770943734",
  appId: "1:327770943734:web:0088d96c972c580d177cd7",
  measurementId: "G-Z4CGDVXNRS",
};

export const _GetImagePath = (name: string) =>
  name ? `${IMAGE_API_ROOT}${name.replace(/ /g, "").toLowerCase()}.png` : "";
export const isMobile = window.innerWidth < 768;

export const _GoToStore = (
  platform?: "android" | "ios",
  type?: "buyer" | "farmer"
) => {
  let link = "";
  const generalIos =
    "https://apps.apple.com/za/developer/dyora-jackson-tapiwa/id1485013062";
  const clientIos = "https://apps.apple.com/za/app/khula-client/id1504155744";
  const farmerIos = "https://apps.apple.com/us/app/khula-farmer/id1485013063";
  const generalAndy =
    "https://play.google.com/store/apps/developer?id=Khula&hl=en_ZA";
  const clientAndy =
    "https://play.google.com/store/apps/details?id=za.co.khula.client&hl=en_ZA";
  const farmerAndy =
    "https://play.google.com/store/apps/details?id=za.co.khula.farmer&hl=en_ZA";
  const platFormIsMac = navigator.appVersion.includes("Mac");
  if (platform === "ios") {
    link =
      type === "farmer" ? farmerIos : type === "buyer" ? clientIos : generalIos;
  } else if (platform === "android") {
    link =
      type === "farmer"
        ? farmerAndy
        : type === "buyer"
        ? clientAndy
        : generalAndy;
  } else {
    const farmerApp = platFormIsMac ? farmerIos : farmerAndy;
    const clientApp = platFormIsMac ? clientIos : clientAndy;
    const generalApp = platFormIsMac ? generalIos : generalAndy;
    link =
      type === "farmer" ? farmerApp : type === "buyer" ? clientApp : generalApp;
  }
  window.open(link, "_blank");
};

export enum EScrollSectionIds {
  INPUTSMARKET = "inputs-market",
  FRESHPRODUCEMARKET = "fresh-produce-market",
  TESTIMONIES = "testimonies",
}
