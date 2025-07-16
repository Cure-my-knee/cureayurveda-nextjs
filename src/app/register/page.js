import React from 'react';
import RegisterUser from '../components/register/RegisterUser';
 


 // seo meta tag
 
 export const metadata = {
   title: 'Register User- Cure Ayurvedic',
   description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
   robots: 'noindex, nofollow',
 };

 const RegisterPage = () => {
   
   return (
 
     <> 
      
      <RegisterUser />
 
     </>
   );
 };
 
 export default RegisterPage;