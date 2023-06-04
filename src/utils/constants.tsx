import Icon1 from "@/public/truewind/smart-booking/icon1.svg";
import Icon2 from "@/public/truewind/smart-booking/icon2.svg";
import Icon3 from "@/public/truewind/smart-booking/icon3.svg";

import Testimonial1 from "@/public/truewind/testimonial1.svg";
import Testimonial2 from "@/public/truewind/testimonial2.svg";
import Testimonial3 from "@/public/truewind/testimonial3.svg";

import TeamMember1 from "@/public/truewind/team/team1.svg"
import TeamMember2 from "@/public/truewind/team/team2.svg"
import TeamMember3 from "@/public/truewind/team/team3.svg"
import TeamMember4 from "@/public/truewind/team/team4.svg"
import TeamMember5 from "@/public/truewind/team/team5.svg"
import TeamMember6 from "@/public/truewind/team/team6.svg"
import TeamMember7 from "@/public/truewind/team/team7.svg"
import TeamMember8 from "@/public/truewind/team/team8.svg"

export const items = [
  {
    headline: "ACCURACY",
    subtitle: "Unmatched Accuracy",
    description:
      "Always count on getting accurate books delivered monthly. By pairing our concierge team with AI, you'll enjoy a new level of transparency and accuracy in accounting.",
    image: Icon1,
  },
  {
    headline: "TIMELY",
    subtitle: "Faster Monthly Close",
    description:
      "You can't get to real-time finance if it takes three weeks to close your books. We close your books in days rather than weeks, so you can make faster business decisions.",
    image: Icon2,
  },
  {
    headline: "SUPPORT",
    subtitle: "World-Class Support",
    description:
      "We treat this like a partnership. Work with one of our finance experts to manage your books and taxes. You'll always feel like we're in your corner. Because we are.",
    image: Icon3,
  },
];

export const testimonials = [
  {
    quote: "Big fan of the product and the team",
    description:
      "Handles our back office finance side. We’ve gotten to 25 people without needing a finance hire leveraging Truewind for bookkeeping and key reporting (not just financial statements). They also really go over and above for YC companies.",
    name: "Peter Fishman",
    company: "Mozart Data",
    year: "(YC S20)",
    image: Testimonial1,
  },
  {
    quote: "Highly recommended",
    description:
      "Truewind has done a fantastic job putting together a detailed 2023-25 financial model for us, producing financial reports for our investors, etc. I’ve been so impressed with the Truewind team. I don’t say this lightly: they are destined for greatness. Highly recommended!",
    name: "Tom Hadfield",
    company: "Mio",
    year: "(YC W16)",
    image: Testimonial2,
  },
  {
    quote: "They've been great for us",
    description:
      "Awesome! Glad I can more publicly talk about you guys now - highly recommend working with Truewind, they’ve been great for us!",
    name: "Perry Ha",
    company: "Homeflow",
    year: "(YC W23)",
    image: Testimonial3,
  },
];

export const navItems = [
  { name: "Home", path: "/truewind" },
  { name: "About", path: "/truewind/about" },
  { name: "Product", path: "/truewind/product" },
  { name: "Musings", path: "/truewind/musings" },
  { name: "Hiring", path: "/truewind/hiring" },
];

export const team = [
  {
    name: "Alex Lee",
    role: "CEO",
    image: TeamMember1,
  }, 
  {
    name: "Tennison Chan",
    role: "CTO",
    image: TeamMember2,
  },
  {
    name: "Ming Chan",
    role: "Software Engineer",
    image: TeamMember3,
  },
  {
    name: "Richard Wei, CPA",
    role: "Sr Accountant",
    image: TeamMember4,
  },
  {
    name: "Vanson Leung",
    role: "Software Engineer",
    image: TeamMember5,
  },
  {
    name: "Edward Wong",
    role: "Machine Learning Engineer",
    image: TeamMember6,
  },
  {
    name: "Melody Tong",
    role: "Customer Success",
    image: TeamMember7,
  },
  {
    name: "Mochi",
    role: "Office Dog",
    image: TeamMember8,
  },
];
