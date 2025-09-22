import Logo from '../assets/images/Logo.svg';
import LightHome from '../assets/images/Lighthomebg.svg';
import DarkHome from '../assets/images/Darkhomebg.svg';
import Profile from '../assets/icons/Profile.svg';
import lightThemetoggle from '../assets/icons/lightthemeToggle.svg';
import lightnotification from '../assets/icons/lightNotification.svg';
import lightearpiece from '../assets/icons/lightearpiece.svg';
import darkThemetoggle from '../assets/icons/darkthemeToggle.svg';
import darknotification from '../assets/icons/darknotification.svg';
import darkearpiece from '../assets/icons/darkearpiece.svg';
import lightcheck from '../assets/icons/check-light.svg';
import darkcheck from '../assets/icons/checkdark.svg';
import lightFooterbg from '../assets/Images/lightfooterbg.svg';
import darkFooterbg from '../assets/Images/darkFooterbg.svg';
import linkedin from '../assets/icons/linkedin.svg';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import telegram from '../assets/icons/telegram.svg';
import twitter from '../assets/icons/twitter.svg';
import git from '../assets/icons/git.svg';
import discord from '../assets/icons/discord.svg';
import statcard1 from '../assets/icons/statcard1.svg';
import statcard2 from '../assets/icons/statcard2.svg';
import statcard3 from '../assets/icons/statcard3.svg';
import statcard4 from '../assets/icons/statcard4.svg';
import statcard5 from '../assets/icons/statcard5.svg';
import statcard6 from '../assets/icons/statcard6.svg';
import statcard7 from '../assets/icons/statcard7.svg';
import statcard8 from '../assets/icons/statcard8.svg';
import statcard9 from '../assets/icons/statcard9.svg';
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
import BuyNow from '../assets/icons/BuyNow.svg';
import Payment from '../assets/icons/payment.svg';
import Security from '../assets/icons/Security.svg';
import selfcustody from '../assets/icons/selfcustody.svg';
import Googlepay from '../assets/icons/GooglePAy.svg';
import appstore from '../assets/icons/Appstore.svg';
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
