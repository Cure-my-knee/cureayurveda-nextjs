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
    backgroundImage="images/contactus/ContactusBreadcrumbannerDesktop.jpg"
    mobileBackgroundImage = "images/contactus/ContactusBreadcrumbannerMobile.jpg"
    />
        <ContactUsPage />
        <AdditionalInfo />
       
     </div>
   )
 }
 
 export default page
 