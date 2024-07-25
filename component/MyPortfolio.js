import React, { useRef } from 'react'
import folio from '@/styles/Portfolio.module.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";
import Image from 'next/image'



function MyPortfolio() {
  const Home = useRef(null);
  const About = useRef(null);
  const Slills = useRef(null);
  const Projects = useRef(null);
  const Contact = useRef(null);
  const Resume = useRef(null);
  const Hireme = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }


  return (
    <div className={folio.MainPageFolio}>
      <div ref={Home} className={folio.main}>
        <div className={folio.nav}>
          <span className={folio.mypro}> <u>Portfolio</u></span>
          <a onClick={() => scrollToSection(Home)} href='#'>Home</a>
          <a onClick={() => scrollToSection(About)} href='#'>About</a>
          <a onClick={() => scrollToSection(Slills)} href='#'>Skils</a>
          <a onClick={() => scrollToSection(Projects)} href='#'>Projects</a>
          <a onClick={() => scrollToSection(Resume)} href='#'>Resume</a>
          <a onClick={() => scrollToSection(Contact)} href='#'>Contact</a>
          <button onClick={() => scrollToSection(Hireme)} className={folio.btn}>Hire me!</button>

        </div>
        <div className={folio.body}>
          <div className={folio.leftdiv}>
            <div className={folio.heding}>
              <h1> I am Divya Bagwan, a Frontend-Developer</h1><br></br>
              <p>I design web apps to turn your ideas into reality.</p><br></br>
            </div>

            <div className={folio.secound}>
              Let's connect! ----
              <a href='https://www.linkedin.com/in/divya-mali-0a4b13317'><span><FaLinkedinIn id={folio.span1} /></span></a>
              <a href=' https://github.com/diyumali/diyumali'><span><FaGithub id={folio.span2} /></span></a>
              <a href='https://www.instagram.com/frontend_developer___01?igsh=cGd0OThkc3lmOHBz'><span><FaInstagram id={folio.span3} /></span></a>
            </div>
          </div>
          <div className={folio.rightdiv}>
            <img src={'/officeimg2.jpg'} alt="Divya" id={folio.Image} />
          </div>
        </div>
      </div>


      <div ref={About} className={folio.About}>
        <div className={folio.About11}>7
          <div className={folio.iphone}>
            <h1 id={folio.HH1}><u>About Me</u></h1>
            <p id={folio.PAGE12}>
              Hello, I'm Divya Bagwan, a season Frontend developer with dynamic and visually stunning cross-platform web applications. Throughout my journey in the field,
              I've honed my skills in leveraging Flutter's robust framework to deliver seamless user experiences
              across various devices and platforms.<br></br><br></br><br></br>

              Driven by a passion for innovation and a keen eye for detail, I thrive on turning ideas into polished,
              functional realities. My portfolio showcases a diverse range of projects, each reflecting my commitment
              to excellence and my ability to adapt to evolving industry trends.<br></br><br></br><br></br>


              From conceptualization to deployment, I specialize in translating client visions into intuitive and
              feature-rich applications that resonate with users. With a strong foundation in both front-end and
              back-end development, I bring a comprehensive approach to every project, ensuring scalability, performance,
              and user satisfaction.<br></br><br></br><br></br>

              Let's collaborate to bring your next app idea to life with the magic of Frontend Developer!</p>
          </div>
        </div>

        <h1 id={folio.HH1}><u>Our Vision</u> </h1>
        <div className={folio.About13}>
          <div className={folio.outoff}>
            <p id={folio.PAGE12}> we believe in the power of creative desgin to inspire,
              engage, and leave a lasting impact. We're masters of the design in industry,
              creating brands and websites that redefine the game worldWide</p>
          </div>
          <div>
            <p id={folio.PAGE12}> Yuor online Presence isn's just a Page on the interrnet__
              it's a story that captives your audience from strat to finish! Whether you
              you're a fresh  startup or a seasoned corporate giant, we're here to<br></br>transform digita; identity into a tale that leaves your audixence asking fir more.</p>
          </div>
        </div>
      </div><br></br><br></br><br></br>




      <div ref={Slills} className={folio.FirstSkil}>
      <br></br><br></br><br></br>

        <h1 id={folio.HH2}><u>Skills</u></h1>
        <div className={folio.SecoundSkil}>

          <span className={folio.hcss}><FaHtml5 id={folio.Facss} /><br></br><b id={folio.HT}>HTML</b></span>

          <span className={folio.hcss}><FaCss3Alt id={folio.Facss} /><br></br><b id={folio.HT}>CSS</b></span>

          <span className={folio.hcss}><FaBootstrap id={folio.Facss} /><br></br><b id={folio.HT}>BootstrapL</b></span>

          <span className={folio.hcss}><DiJavascript id={folio.Facss} /><br></br><b id={folio.HT}>Javascript</b></span>

          <span className={folio.hcss}><TbBrandReact id={folio.Facss} /><br></br><b id={folio.HT}>React</b></span>

          <span className={folio.hcss}><TbBrandVscode id={folio.Facss} /><br></br><b id={folio.HT}>VS code</b></span>

          <span className={folio.hcss}><FaGitAlt id={folio.Facss} /><br></br><b id={folio.HT}>Git</b></span>

          <span className={folio.hcss}><SiStrapi id={folio.Facss} /><br></br><b id={folio.HT}>Strapi</b></span>
        </div>
      </div>

      <div ref={Projects} className={folio.ProjectOne}>
      <br></br><br></br><br></br>

        <h1><u className={folio.pro}>Projects</u></h1>
        <div className={folio.Projecttwo}>
          <div className={folio.Image11}>
            <div class={folio.Card}>

              <Image src={'/Weather.jpg'} alt="Denim Jeans" width={600} height={400} />
              <h1 id={folio.PPage1}>Weather forecast App</h1>
              <p id={folio.PPage}>A Weather app made using OpenWeatherMap API in Javascript. The app tells the current
                temperature and some additional infomation like Air Quality index, Real Feel, Humidity, Highest Temprature, Lowest Temprature
                , Wind speed, Wide Direction, Pressure, Sunrise and Sunset.AccuWeather, recognized by the World
                Meteorological Organization, stands out for its user-friendly interface and comprehensive data representation.
                It offers features like MinuteCast® forecasts, severe weather alerts, and advanced weather radar, making it a top choice in 2024.  </p>
            </div>

            <div class={folio.Card}>
              <Image src={'/Blogpost.jpg'} alt='Divya' width={600} height={400} />
              <h1 id={folio.PPage1}>Blog post</h1>
              <p id={folio.PPage}>A blog post is any article, news piece, or guide that's published in the blog section of a website.
                A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words,
                and contains other media types such as images, videos, infographics, and interactive charts.
                Examples of blog posts include beauty product recommendations, travel and vacation trip reviews,
                and personal blog posts. </p>
            </div>

            <div class={folio.Card}>
              <Image src={'/filipkart1.jpg'} alt='Divya' width={600} height={400} />
              <h1 id={folio.PPage1}>Flipkart clone</h1>
              <p id={folio.PPage}>The flipkart clone app offers a unique opportunity for entrepreneurs to create a customised online
                shopping experience. An Amazon clone app is a mobile application that replicates the functionality
                and features of the popular e-commerce platform, Amazon. It allows users to browse and purchase products,
                track orders, leave reviews, and more, just like on the original Amazon website. </p>
            </div>

            <div class={folio.Card}>
              <Image src={'/netflix1.jpg'} alt='Divya' width={600} height={400} />
              <h1 id={folio.PPage1}>Netflix clone</h1>
              <p id={folio.PPage}>The Netflix clone project is a web application developed using HTML, CSS, and JavaScript, aiming to replicate
                the user interface and some features of the popular streaming service, Netflix. Let's break down the project
                into its key components and functionalities.  </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={Resume}></div><br></br><br></br><br></br><br></br>
      <h1 id={folio.AboutHeding}><u>RESUME</u></h1>
      <div  className={folio.MainResume}>
      
        <div className={folio.leftsection}>
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
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div ref={Contact} className={folio.contact}>
        <div ref={Hireme}>
          <h1 className={folio.HH33}>Contact Me</h1>
          <h3 className={folio.HSM}>Send us a message</h3>
          <form action="https://formspree.io/f/xpwaqryy" method='POST'>
          <input className={folio.types} name='Name' type='text' placeholder='Your Name' /><br></br><br></br>
          <input className={folio.types} name='Email' type='emali' placeholder='Your Email ' /><br></br><br></br>
          <input className={folio.typesEmail} name='Message' type='text' placeholder='Your Message' /><br></br><br></br>
          <button className={folio.btn3}>Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default MyPortfolio
