import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import fortaleza from "../assets/profile-pictures/fortaleza-logo.jpg";
import marina from "../assets/profile-pictures/marina-park.jpg";
import SantaClara from "../assets/profile-pictures/santa-clara.jpg";	
import shweppes from "../assets/profile-pictures/schweppes-logo.jpg";
import CocaCola from "../assets/profile-pictures/coca-cola-logo.jpg";
import Cerbras from "../assets/profile-pictures/cerbras-logo.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Quem somos?", href: "#" },
  { label: "Portifólio", href: "#" },
  { label: "Clientes", href: "#" },

];

export const testimonials = [
  {
    user: "Fortaleza",

    image: fortaleza,

  },
  {
    user: "Marina Park Hotel",
    image: marina,
  },
  {
    user: "Santa Clara",
    image: SantaClara,
  },
  {
    user: "Schweppes",
    image: shweppes,
  },
  {
    user: "Coca-Cola",
    image: CocaCola,
  },
  {
    user: "Cerbras",
    
    image: Cerbras,
   
  },
];



export const checklistItems = [
  {
    title: "Padrinhos",

  },
  {
    title: "Casamento",
    
  },
  {
    title: "Aniversário",

  },
  {
    title: "Batizado",

  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
