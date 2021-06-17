import {
    EmailIcon,
    FacebookIcon,
    
    LinkedinIcon,
  
    PinterestIcon,
  
    RedditIcon,
    TelegramIcon,

    TwitterIcon,
   
    WhatsappIcon
  } from "react-share";
  import React from 'react';
  import "./Share.css";
  
  function Share() {
      const shareUrl="https://www.instagram.com/";
      return (
          <div className="icon text-center">
               <WhatsappIcon size={32} round={true} size={32} round={true} />
               <TelegramIcon size={32} round={true} size={32} round={true} />
               <TwitterIcon url={shareUrl} size={32} round={true} /> 
               <FacebookIcon size={32} round={true} size={32} round={true} />
               <PinterestIcon size={32} round={true} size={32} round={true} />
               <EmailIcon size={32} round={true} size={32} round={true} />
               <RedditIcon size={32} round={true} size={32} round={true} />
               <LinkedinIcon size={32} round={true} size={32} round={true} />
               
               
             
               
         
          
          </div>
      )
  }
  
  export default Share
  