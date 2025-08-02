// import React from 'react';
// import { CheckCircle, Heart, Shield, Users, Target, Award } from 'lucide-react';
// import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
// // import Head from 'next/head';
// import Crt from '../components/layout/Crt';
// import GuaranteeSection from '../components/about/GuranteeSection';
// import AboutUsSection from '../components/about/AboutUsSection';
 
// import OurMission from '../components/about/OurMission';


// // seo meta tag

// export const metadata = {
//   title: 'About Us: Know Our Story & Purpose, Quality | Cure Ayurvedic',
//   description: 'Know about Cure Ayurvedic story, product quality and more. Shop from our wide range of ayurvedic products that support overall health.',
//   robots: 'noindex, nofollow',
// };


 

// const AboutUsPage = () => {
//   const aboutBreadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'About Us' }
//   ];
//   return (

//     <> 
 
//     <BreadCrumbBanner  title="About Us"
//     breadcrumbs={aboutBreadcrumbs} />
     
//      <OurMission />
//      <AboutUsSection />
     
//      {/* <OurStorySection /> */}
//      <Crt />
//     <GuaranteeSection />

//     </>
//   );
// };

// export default AboutUsPage;


import React from 'react';
import AboutUsPage from '../components/about/AboutUsPage';
 

// seo meta tag
export const metadata = {
  title: 'About Us: Know Our Story &amp; Purpose, Quality | Cure Ayurvedic',
  description: 'Know about the Cure Ayurvedic story, product quality, and more. Shop from our wide range of ayurvedic products that support overall health.',
  
};

export default function About() {
  return (
    <> 
     <AboutUsPage />
    </>
  );
}