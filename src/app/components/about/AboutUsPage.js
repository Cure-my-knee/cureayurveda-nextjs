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
  backgroundImage = "https://res.cloudinary.com/dztmhmutv/image/upload/v1753939532/Abhi_About_us_wwhxtq.jpg"
  // Mobile image
  mobileBackgroundImage = "https://res.cloudinary.com/dztmhmutv/image/upload/v1753884964/Web_banner_Mobile_about_us_qaalju.jpg"

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