
import './index.css';
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer';
import react, {createContext, useState} from "react";
import { useTransition } from 'react';
import Header from './components/Header';
import ReactSwitch from "react-switch";
import Projects from './components/Projects';
import Form from './components/Form';
import About from './components/About';
import {useEffect } from 'react';
import Translation from './components/Data.json';
 export const ThemeContext = createContext(null);


export default function App(){
   const [theme, setTheme]=useState("dark");

   const toggleTheme=()=>{
     setTheme((curr)=>(curr==="light" ? "dark" :"light"));
  }



  const [language, setLanguge]=useState("english");
  const [content, setContent]=useState({});

  useEffect(()=>{
      if(language==="english"){
          setContent(Translation.english)
      }
      else if(language==="persion"){
          setContent(Translation.persion)
      }
  })



  return(
     <ThemeContext.Provider value={{theme, setTheme}}>
      <div id={theme}>
      <Header headerh1p1={content.headerh1p1} headerh4={content.headerh4} headerh3={content.headerh3} 
      headerp={content.headerp}
      home={content.home} about={content.about} skills={content.skills} projects={content.projects} 
      contact={content.contact} brand={content.brand} button={content.button}></Header>
      <About abouth2p1={content.abouth2p1} abouth2p2={content.abouth2p2} aboutp={content.aboutp} 
      timelineheader={content.timelineheader} element1header={content.element1header} element1p={content.element1p}
      element2header={content.element2header} element2p={content.element2p} element3header={content.element3header}
       element3p={content.element3p}
      element4header={content.element4header} element4p={content.element4p}
      ></About>
      <Skills skillsp={content.skillsp} skillsheader={content.skillsheader} technical={content.technical} 
      professional={content.professional}></Skills>
      <Projects projectp={content.projectp} projectheader={content.projectheader}  />
      <Contact contactheader={content.contactheader} contactp={content.contactp}></Contact>

      
      <div className='select-language'>
        <label>Seclect Language</label>
        <select value={language} onChange={(e)=>{setLanguge(e.target.value)}}>
            <option>english</option>
            <option>persion</option>
        </select>
        </div>
      <div className='switch'>
        <label>{theme==="light"? "Light Mood ": "Dark Mood "}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/></div>
    </div>
    <Footer></Footer>
     </ThemeContext.Provider>
    
  );
}




