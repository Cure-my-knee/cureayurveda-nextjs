import React from 'react'
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner'
import ContactUsPage from '../components/contactpage/ContactUsPage'
import AdditionalInfo from '../components/contactpage/AdditionalInfo'

// seo meta tag
export const metadata = {
  title: 'Contact us - Cure Ayurvedic',
  description: 'Contact Us for any queries.',
  // robots: 'noindex, nofollow',
};
 
 const page = () => {

  const contactBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact' }
  ];
   return (
     <div>
        <BreadCrumbBanner  title="Contact Us"
    breadcrumbs={contactBreadcrumbs} 
    backgroundImage="https://res.cloudinary.com/dztmhmutv/image/upload/v1753884141/Contact_us_paqtwu.jpg"
    mobileBackgroundImage = "https://res.cloudinary.com/dztmhmutv/image/upload/v1753884331/Contact_us_mobile_szu1kd.jpg"
    />
        <ContactUsPage />
        <AdditionalInfo />
       
     </div>
   )
 }
 
 export default page
 