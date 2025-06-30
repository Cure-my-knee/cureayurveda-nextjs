import React from 'react';
import { CheckCircle, Heart, Shield, Users, Target, Award } from 'lucide-react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Crt from '../components/layout/Crt';
import GuaranteeSection from '../components/about/GuranteeSection';
import AboutUsSection from '../components/about/AboutUsSection';
import OurStorySection from '../components/about/OurStorySection';

const AboutUsPage = () => {
  const aboutBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];
  return (

    <> 
    <BreadCrumbBanner  title="About Us"
    breadcrumbs={aboutBreadcrumbs} />
    <Crt />

     <AboutUsSection />
     <OurStorySection />
    <GuaranteeSection />
    </>
  );
};

export default AboutUsPage;