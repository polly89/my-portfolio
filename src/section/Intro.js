import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Panel from "../components/Panel"
import Button from "../components/Button";
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Anchor from "../components/Anchor";

function Intro(){
    const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;

    if (newDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }

    setDarkMode(newDarkMode);
  };

  const hyperlink = {
    linkedin:"https://www.linkedin.com/in/christina-woodhams-15956a247/",
    github: "https://www.github.com/polly89",
    youtube: "https://www.youtube.com/channel/UCcPIPze5aPc4PRB5HCvfc0g"
}
const greeting = `HI, I'M CHRISTINA`
const description = `I'm Full-Stack Web Developer and the Lead Program Coordinator for a virtual learning platform. `


const hyperlinkToRender = (hyperlink) => {
    return Object.values(hyperlink);
  };
    return (
        <Panel id='intro' className="bg-[url('https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/light-mode-portfolio.png')] dark:bg-[url('https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/dark-mode-portfolio2.png')] bg-no-repeat bg-cover bg-center bg-fixed ">
          <div id="intro-anchor" className="anchor"></div>
            <h1 className="text-3xl md:text-5xl font-bold text-center pt-48 tracking-widest dark:text-indigo-500">{greeting}</h1>
            <div className="flex justify-center text-center flex-col pb-4">
            <h2 className='text-lg md:text-2xl lg:text-3xl p-24 lg:ml-46 lg:mr-46 xl:ml-56 xl:mr-56 dark:text-slate-400'>{description}</h2>
              <div>
                <div className="invisible md:visible h-72 w-12 bg-slate-900 flex flex-col rounded justify-center p-2 gap-8 drop-shadow-md">
                  <a href={hyperlinkToRender(hyperlink)[0]}><Anchor className="pr-6 focus:ring-0" ><FaLinkedin size={24}/></Anchor></a>
                  <a href={hyperlinkToRender(hyperlink)[1]}><Anchor className="pr-6 focus:ring-0" ><FaGithub size={24}/></Anchor></a>
                  <a href={hyperlinkToRender(hyperlink)[2]}><Anchor className="pr-6 focus:ring-0" ><FaYoutube size={24}/></Anchor></a>
                </div>
                <div className='-translate-y-56 md:translate-x-12 md:w-11/12'>
                  <Link 
                    to='projects-anchor' 
                    smooth={true} 
                    duration={500}
                    >
                    <Button>PROJECTS</Button>
                  </Link>
                  <div className='flex justify-center'>
                    <DarkModeSwitch
                      className='w-8 h-8 m-24 p-2 border-2 border-amber-300 text-amber-300 rounded-full bg-white dark:bg-slate-900 dark:border-indigo-500 dark:text-indigo-500'
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      size={120}
                    />
                  </div> 
                </div>
              </div>
            </div>
        </Panel>
    )
}
export default Intro;