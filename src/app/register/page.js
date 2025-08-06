import React from 'react';
import RegisterUser from '../components/register/RegisterUser';
 


 // seo meta tag
 
 export const metadata = {
   title: 'Register User- Cure Ayurvedic',
   description: 'Register your account for new order on Cure Ayurvedic.',
  //  robots: 'noindex, nofollow',
 };

 const RegisterPage = () => {
   
   return (
 
     <> 
      
      <RegisterUser />
 
     </>
   );
 };
 
 export default RegisterPage;