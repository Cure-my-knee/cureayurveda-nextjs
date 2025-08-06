import React from 'react';
import { CheckCircle, Heart, Shield, Users, Target, Award } from 'lucide-react';
import BreadCrumbBanner from '../layout/BreadCrumbBanner';
import OurMission from './OurMission';
import AboutUsSection from './AboutUsSection';
import Crt from '../layout/Crt';
import GuaranteeSection from './GuranteeSection';
 


 

const AboutUsPage = () => {
  const aboutBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

   
  
  return (

    <> 
 
    <BreadCrumbBanner title="About Us"
    breadcrumbs={aboutBreadcrumbs}
     // Desktop/tablet image
  // backgroundImage = "/images/banner/herobanner7.jpg"
  backgroundImage = "images/aboutus/aboutusdesktopbanner.jpg"
  // Mobile image
  mobileBackgroundImage = "images/aboutus/aboutusmobilebanner.jpg"

     />
     
     <AboutUsSection />
     <OurMission />
      
     
     {/* <OurStorySection /> */}
     <Crt />
    <GuaranteeSection />

    </>
  );
};

export default AboutUsPage;