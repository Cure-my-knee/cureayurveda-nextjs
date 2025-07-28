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
  backgroundImage = "https://res.cloudinary.com/dzoezcqqc/image/upload/v1753531588/Banner_Sample_4_wx8yxs.jpg"
  // Mobile image
  mobileBackgroundImage = "https://res.cloudinary.com/dzoezcqqc/image/upload/v1753538273/Banner_Sample_tab_1_jeux0r.jpg"

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