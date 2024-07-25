import React from 'react'
import folio from '@/styles/layout.module.css'


function Resume() {
  return (
      <div ref={Resume} className={folio.MainResume}>
      <h1 id={folio.AboutHeding}><u>RESUME</u></h1>
      <div   className={folio.leftsection}>
        <p><b><u>CONTACT</u></b></p>
 
        <p>
          7805822594</p><br></br>
        <p>divyamali723@gmail.com</p>
        Khategaon
        
 
        <p><b> EDUCATION</b></p>
        <p>2020-2021<br></br>
          *10th pass</p>
 
        <p>2021-2022 <br></br>
          *12th (agriculture)
        </p><br></br>
 
        <p>2024
          *BA (pursing)</p>
 
        <p><b>LANGUAGES</b></p>
        * Hindi (fluent)<br></br>
        *English (Intermediate)
 
        <p><b>HOBBIES</b></p>
        *sketching
        <br></br><br></br><br></br><br></br>
      </div>
 
      <div className={folio.rightsection}>
        <h1> Divya Bagwan</h1>
        <h2><u>Front-End Developr</u></h2>
 
        <p><u>PROFILE</u></p>
        <p>
          Seasoned web developer with a strong  focus on innovation and user-centric Design.
          Brings extensive experience in crafting responsive, mobile-friendly Websites that deliver exceptional user experiences
        </p>
 
        <p><b><u>WORK EXPERINCE</u></b></p>
        <p><b> Junior Web Developer</b></p>
        •	Assisted in the development of e-commerce  website <br></br>
        •	Collaborated with QA teams to identify and address bugs.<br></br>
        •	Website performance across major browser.<br></br>
 
        <p><b><u>SKILLS</u> </b></p>
        •	Programming languages: JavaScript<br></br>
        •	Web development tools: HTML, CSS,  React<br></br>
        •	Version control: Git<br></br>
        •	Problem-solving <br></br>
        •	Team collaboration<br></br>
 
        <p><b><u>Projects</u></b></p>
        •	  Weather forecast App: This application helps to get the temperature details of user desired city.<br></br>
        •	Blog post: This application is useful for creating blogs and managing blogs.<br></br>
        •	Flipkart clone: In this application I tried to make a copy of flipkart website.<br></br>
        •	Netflix clone:  In this application I tried to make a copy of  Netflix  website.<br></br>
 
        <p><b><u>Framework Libraries</u></b></p>
        * React js, Next js
 
        <p><b>Tools</b></p>
        Visual Studio,  Git, Windows, Bootstrap
      </div>
    </div>
  )
}

export default Resume