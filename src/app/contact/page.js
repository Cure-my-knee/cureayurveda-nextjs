import React from 'react'
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner'
import ContactUsPage from '../components/contactpage/ContactUsPage'
import AdditionalInfo from '../components/contactpage/AdditionalInfo'

// seo meta tag
export const metadata = {
  title: 'Contact Us - Cure Ayurvedic',
  description: 'If you have any queries related to products or services offered by Cure Ayurvedic, you can call us. Our team is here to help you on your health wellness journey.',
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
    backgroundImage="images/contactus/ContactusBreadcrumbannerDesktop.jpg"
    mobileBackgroundImage = "images/contactus/ContactusBreadcrumbannerMobile.jpg"
    />
        <ContactUsPage />
        <AdditionalInfo />
       
     </div>
   )
 }
 
 export default page
 