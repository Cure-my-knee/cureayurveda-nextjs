import React from 'react';
import { CheckCircle, Heart, Shield, Users, Target, Award } from 'lucide-react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Head from 'next/head';
import Crt from '../components/layout/Crt';
import GuaranteeSection from '../components/about/GuranteeSection';
import AboutUsSection from '../components/about/AboutUsSection';
import OurStorySection from '../components/about/OurStorySection';
import OurMission from '../components/about/OurMission';
 

const AboutUsPage = () => {
  const aboutBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];
  return (

    <> 
    {/* ✅ SEO Meta Tags */}
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Read about ayurvedics"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
    <BreadCrumbBanner  title="About Us"
    breadcrumbs={aboutBreadcrumbs} />
     
     <OurMission />
     <AboutUsSection />
     
     {/* <OurStorySection /> */}
     <Crt />
    <GuaranteeSection />

    </>
  );
};

export default AboutUsPage;