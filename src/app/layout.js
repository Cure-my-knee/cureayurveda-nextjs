 // src/app/layout.js

import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import TopHeader from './components/layout/TopHeader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
// import FAQChatBot from './components/faq/FaqChatBot';
// import Chatbot from './components/ChatBot/ChatBot';
//  import { GoogleTagManager } from '@next/third-parties/google';

// Load Montserrat font as CSS variable
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-sans',
});

 
 

export const metadata = {
  title: 'Buy Best Ayurvedic Products Online in India | Cure Ayurvedic',
  description: 'Cure Ayurvedic is the top ayurvedic &amp; wellness product company in India. Shop trusted ayurvedic medicine online today at the best price.',
  viewport: 'width=device-width, initial-scale=1.0',
  //  other: {
  //   'google-site-verification': '491akEx-CPBtJVwJokQrfA0_7iDMJldPSHKc7YglHs4',
  // },
};
export default function RootLayout({ children }) {
  return (

    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>

      <head>
        {/* Google Tag Manager script (in head) */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQ344KZC');
          `}
        </Script>
      </head>
           
      <body className="antialiased font-sans bg-white text-gray-900" suppressHydrationWarning={true}>


       {/*Google Tag Manager noscript fallback (in body, immediately) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQ344KZC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

         {/* Meta Pixel Code */}
        {/* <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '754165870334583');
            fbq('track', 'PageView');
          `}
        </Script>
          
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=754165870334583&ev=PageView&noscript=1"
          />
        </noscript> */}

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '754165870334583');
            fbq('track', 'ViewContent', {
              content_ids: ['123'], // REQUIRED: array of product IDs
              content_type: 'product', // RECOMMENDED: product or product_group
            });
          `}
        </Script>

        {/* NoScript fallback for users without JS */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=754165870334583&ev=ViewContent&noscript=1"
          />
        </noscript>

        
        <TopHeader />
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        
         <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <Footer />
        {/* Vercel Analytics added here */}
        <Analytics /> 

          
         {/* <GoogleTagManager gtmId="491akEx-CPBtJVwJokQrfA0_7iDMJldPSHKc7YglHs4" />  */}

         {/* Tidio Chatbot Script */}
         {/* <Script src="//code.tidio.co/kfbc08xiz3aho0xm8umiuz1ru6lbz1p4.js" async></Script> */}
         
         {/* free tawk.io chat bot */}
          {/* <Script id="tawkto-widget" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6891a11ded02831924d166d9/1j1sdqn6u';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script> */}

      {/* cureayurvedic website email */}
        {/* <Script id="tawkto-widget" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/689584d71884dd1928e2f2bf/1j240tqo5';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script> */}
        {/* <Chatbot /> */}

         {/* JotForm Embed Script */}
       {/* <Script id="jotform-agent" strategy="afterInteractive">
        {`
          (function(){
            var s = document.createElement('script');
            s.src = "https://cdn.jotfor.ms/agent/embedjs/0198888bfa7973ba92909ce6dc413878c83c/embed.js?skipWelcome=1&maximizable=1";
            s.async = true;
            document.body.appendChild(s);
          })();
        `}
      </Script> */}

      {/* chatbot Faq */}

      {/* <FAQChatBot /> */}


      </body>
    </html>
  );
}

 


 