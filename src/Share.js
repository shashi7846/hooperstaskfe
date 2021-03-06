
//In this file SHare Buttons will work if there is a data in the database that means in DB there must b one complete table data
// THEN only it will share the data otherwise at login phase itself while pointing cursor or to enter name it will throw an error
//so please mention one data in DB & only the first table data is shared through social media sites because we mentioned 
//setTabledata(data.data[0]) below
//If you wanna execute or to get the data with the empty list then comment this SHare.js file then it will work 

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
  import { FacebookShareButton,WhatsappShareButton,TelegramShareButton,TwitterShareButton,PinterestShareButton,EmailShareButton,
RedditShareButton,LinkedinShareButton } from "react-share"
 
  import React from 'react';
  import "./Share.css";
import { useEffect, useState } from "react";
import {GetColleges} from "./axios";
  
  function Share() {

      const shareUrl="https://www.instagram.com/";



      let [tabledata,setTabledata]=useState([]);

     

      useEffect(async () => {
        let data=await GetColleges()
      // console.log(data.data)
      setTabledata(data.data[0])
      console.log(tabledata[0])
      
    },[])
    


      return (
          <div className="icon text-center">
                   <WhatsappShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>           
      <WhatsappIcon size={32} round={true} url="" logoFillColor="white"/>
  </WhatsappShareButton>

  <EmailShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>
      <EmailIcon size={32} round={true} url="" logoFillColor="white"/>
  </EmailShareButton>  
{/* 
               <FacebookShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>

      <FacebookIcon size={32} round={true} url="" logoFillColor="white"/>
  </FacebookShareButton> */}
  {/* <TelegramShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>
      <TelegramIcon size={32} round={true} url="www.telegram.com" logoFillColor="white"/>
  </TelegramShareButton> */}
  
    <TwitterShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>
      <TwitterIcon size={32} round={true} url="" logoFillColor="white"/>
  </TwitterShareButton> 

  {/* <LinkedinShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>
      <LinkedinIcon size={32} round={true} url="" logoFillColor="white"/>
  </LinkedinShareButton>

 
  
  <PinterestShareButton url={`collegename:${tabledata.collegename}\n collegecode:${tabledata.collegecode}\n collegecountrystate${tabledata.collegecountrystate}\n collegecity${tabledata.collegecity}`}>
      <PinterestIcon size={32} round={true} url="" logoFillColor="white"/>
  </PinterestShareButton>
           */}
          </div>
      )
  }
  
  export default Share
  