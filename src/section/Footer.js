import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Panel from "../components/Panel"
import Anchor from "../components/Anchor";
import Card from '../components/Card';


function Footer () {

    const feDevName = "Christina Woodhams"
    const currentYear = new Date().getFullYear();
    
    const hyperlink = {
        linkedin:"https://www.linkedin.com/in/christina-woodhams-15956a247/",
        github: "https://github.com/polly89",
        youtube: "https://www.youtube.com/channel/UCcPIPze5aPc4PRB5HCvfc0g"
    }

    const hyperlinkToRender = (hyperlink) => {
        return Object.values(hyperlink);
      };

    return (
        <footer className="flex flex-col bg-black py-6 px-2 dark:bg-slate-900">
            <Panel>
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="w-11/12 ml-6 md:w-4/12 md:-ml-0 h-auto m-2 p-8 md:order-last p-2 text-white justify-end">
                        <h1 className="text-lg py-6 text-white font-bold dark:text-indigo-500 md:flex md:justify-end md:mr-8">SOCIAL</h1>
                        <div className="flex md:justify-end">
                                <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[0]}><FaLinkedin size={24}/></Anchor>
                                <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[1]}><FaGithub size={24}/></Anchor>
                                {/* <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[2]}><FaTwitter size={24}/></Anchor> */}
                                <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[2]}><FaYoutube size={24}/></Anchor>
                        </div>
                    </div>
                    <div className="text-white p-2 w-11/12 ml-6 md:w-4/12 md:-ml-0 h-auto m-2 p-8">
                        <h1 className="text-lg py-6 text-white font-bold dark:text-indigo-500" >{feDevName.toUpperCase()}</h1>
                        <p className="text-sm pb-12 dark:text-slate-400"> A full-stack web developer with an eye for detail and a passion for providing creating solutions.</p>
                    </div>
                </div>
            </Panel>
            <Panel>
                <hr className="w-8/12 translate-x-1/4 border-gray-300 dark:border-cyan-500"></hr>
                <div className="flex justify-center py-6 px-2">
                    <div className="w-4 h-4 rounded-full bg-black border border-white flex justify-center items-center dark:border-indigo-500 dark:bg-slate-900 ">
                        <span className="text-white text-base dark:text-indigo-500">C</span>
                    </div>
                    <div className="text-xs text-white pl-2 flex items-center dark:text-indigo-500">Copy Right {currentYear}. Made by {feDevName}.</div>
                </div>
            </Panel>
        </footer>
        
    )
};

export default Footer;