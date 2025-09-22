import Logo from '../assets/Images/Logo.svg';
import LightHome from '../assets/images/Lighthomebg.svg';
import DarkHome from '../assets/images/Darkhomebg.svg';
import Profile from '../assets/Icons/Profile.svg';
import lightThemetoggle from '../assets/Icons/lightthemeToggle.svg';
import lightnotification from '../assets/Icons/lightNotification.svg';
import lightearpiece from '../assets/Icons/lightearpiece.svg';
import darkThemetoggle from '../assets/Icons/darkthemeToggle.svg';
import darknotification from '../assets/Icons/darknotification.svg';
import darkearpiece from '../assets/Icons/darkearpiece.svg';
import lightcheck from '../assets/Icons/check-light.svg';
import darkcheck from '../assets/Icons/checkdark.svg';
import lightFooterbg from '../assets/Images/lightfooterbg.svg';
import darkFooterbg from '../assets/Images/darkFooterbg.svg';
import linkedin from '../assets/Icons/linkedin.svg';
import instagram from '../assets/Icons/instagram.svg';
import facebook from '../assets/Icons/facebook.svg';
import telegram from '../assets/Icons/telegram.svg';
import twitter from '../assets/Icons/twitter.svg';
import git from '../assets/Icons/git.svg';
import discord from '../assets/Icons/discord.svg';
import statcard1 from '../assets/Icons/statcard1.svg';
import statcard2 from '../assets/Icons/statcard2.svg';
import statcard3 from '../assets/Icons/statcard3.svg';
import statcard4 from '../assets/Icons/statcard4.svg';
import statcard5 from '../assets/Icons/statcard5.svg';
import statcard6 from '../assets/Icons/statcard6.svg';
import statcard7 from '../assets/Icons/statcard7.svg';
import statcard8 from '../assets/Icons/statcard8.svg';
import statcard9 from '../assets/Icons/statcard9.svg';
import greengraph from '../assets/Images/GreenGraph.svg';
import redgraph from '../assets/Images/RedGraph.svg';
import marketgreen from '../assets/Images/marketgreen.svg';
import marketred from '../assets/Images/marketred.svg';
import EMILightSectionBanner from '../assets/Images/EMIlightSectionBanner.svg';
import EMIDarkSectionBanner from '../assets/Images/EMIdarkSectionBanner.svg';
import LightLines from '../assets/Images/LightLines.svg';
import DarkLines from '../assets/Images/darkLines.svg';
import lightTradechart from '../assets/Images/lightTradeChart.svg';
import darkTradechart from '../assets/Images/Darktradechart.svg';
import Dollarchart from '../assets/Images/dollarSign.svg';
import BuyNow from '../assets/Icons/BuyNow.svg';
import Payment from '../assets/Icons/payment.svg';
import Security from '../assets/Icons/Security.svg';
import selfcustody from '../assets/Icons/selfcustody.svg';
import Googlepay from '../assets/Icons/GooglePAy.svg';
import appstore from '../assets/Icons/Appstore.svg';
import DarkGreengraph from '../assets/Images/darkgreengraph.svg';
import DarkRedGraph from '../assets/Images/darkredgraph.svg';

export const Assets = {
  images: {
    Logo,
    LightHome,
    DarkHome,
    lightFooterbg,
    darkFooterbg,
    greengraph,
    redgraph,
    EMILightSectionBanner,
    EMIDarkSectionBanner,
    LightLines,
    DarkLines,
    marketgreen,
    marketred,
    lightTradechart,
    darkTradechart,
    Dollarchart,
    DarkGreengraph,
    DarkRedGraph
  },
  icons: {
    Profile,
    lightThemetoggle,
    lightnotification,
    lightearpiece,
    darkThemetoggle,
    darknotification,
    darkearpiece,
    lightcheck,
    darkcheck,
    linkedin,
    instagram,
    facebook,
    telegram,
    twitter,
    git,
    discord,
    statcard1,
    statcard2,
    statcard3,
    statcard4,
    statcard5,
    statcard6,
    statcard7,
    statcard8,
    statcard9,
    BuyNow,
    Payment,
    Security,
    selfcustody,
    Googlepay,
    appstore

  },
} as const;

export type AssetKeys = keyof typeof Assets.images | keyof typeof Assets.icons;
