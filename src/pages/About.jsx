import React from "react";
import { companyInfo } from "../data/data";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
           <div className="container">
             <div className="text-center section-header">
               <h2 className="section-title">About Us</h2>
               <p className="section-description">
                 Dedicated to sourcing, processing, and exporting premium food
                 products worldwide.
               </p>
             </div>
   
             <div className="grid grid-2 about-grid">
               <div className="about-content">
                 <h3>Who We Are</h3>
                 <p>{companyInfo.description}</p>
                 <p>
                   Based in India, we have established a strong network of
                   suppliers and farmers, ensuring that we only export the finest
                   quality produce. Our commitment to strict quality standards has
                   made us a preferred partner for international buyers.
                 </p>
               </div>
               <div className="mission-vision-box">
                 <h4>Our Mission</h4>
                 <p>"{companyInfo.mission}"</p>
                 <h4>Our Vision</h4>
                 <p>"{companyInfo.vision}"</p>
               </div>
             </div>
   
             <div>
               <h3 className="text-center destinations-title">
                 Why Choose Aqeel Traders?
               </h3>
               <div className="grid grid-3">
                 {[
                   "International quality standards",
                   "Competitive pricing",
                   "Timely delivery & logistics",
                   "Customized packaging",
                   "Long-term partnerships",
                   "Ethical business practices",
                 ].map((item, index) => (
                   <div key={index} className="why-choose-card">
                     <CheckCircle
                       size={32}
                       color="var(--color-secondary)"
                       className="why-choose-icon"
                     />
                     <h4 className="why-choose-title">{item}</h4>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </section>
  );
};

export default About;
