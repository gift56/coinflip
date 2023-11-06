import cardIcon1 from "../assets/icon/cardIcon1.png";
import cardIcon2 from "../assets/icon/cardIcon2.png";
import cardIcon3 from "../assets/icon/cardIcon3.png";
import graphIcon1 from "../assets/icon/graph1.png";
import graphIcon2 from "../assets/icon/graph2.png";
import graphIcon3 from "../assets/icon/graph3.png";
import graphIcon4 from "../assets/icon/graph4.png";
import graphIcon5 from "../assets/icon/graph5.png";

export const cardData = [
  {
    icon: cardIcon1,
    title: "Trade Desk",
    desc: "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform",
    linkText: "Get Started",
  },
  {
    icon: cardIcon2,
    title: "CoinFlip ATMs",
    desc: "We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto",
    linkText: "Find an ATM",
  },
  {
    icon: cardIcon3,
    title: "CoinFlip Wallet",
    desc: "Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place",
    linkText: "Download the App",
  },
];

export const graphData = [
  {
    coinName: "Bitcoin",
    prefix: "BTC",
    rate: "$56,290.30",
    percentage: "+1.68%",
    status: "good",
    graphImage: graphIcon1,
  },
  {
    coinName: "Ethereum",
    prefix: "ETH",
    rate: "$4,284.81",
    percentage: "+4.36%",
    status: "good",
    graphImage: graphIcon2,
  },
  {
    coinName: "Cardano",
    prefix: "ADA",
    rate: "$1.88",
    percentage: "+3.43%",
    status: "good",
    graphImage: graphIcon3,
  },
  {
    coinName: "Wax",
    prefix: "WAXP",
    rate: "$0.97",
    percentage: "-2.62%",
    status: "bad",
    graphImage: graphIcon4,
  },
  {
    coinName: "Polkadot",
    prefix: "DOT",
    rate: "$42.22",
    percentage: "+7.56%",
    status: "good",
    graphImage: graphIcon5,
  },
];
