import classNames from "classnames";
import { Link } from 'react-scroll';
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import Panel from "../components/Panel";


function Header ({ className }){
    let [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);

    };

    const feDevName = 'Christina Woodhams'
    const headerLogo = "https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/polly89.png"

    const navLinkStylingClassNames = classNames(
        "flex justify-end whitespace-nowrap py-5 pr-5 font-bold text-sm md:p-5 dark:text-indigo-500 dark:bg-slate-900 hover:cursor-pointer hover:text-gray-500 amberdark:hover:text-cyan-500",
        className
    );

    const menuUnderlineClassNames = classNames(
        "border-t border-gray-300 dark:border-cyan-500 md:border-none",
        className
    );
       
    return(
        <header className={`fixed md:items-center flex-col top-0 left-0 w-full flex md:flex-row bg-amber-300 dark:bg-slate-900 z-10 ease-in-out ${className} `}>
            <Panel>
                <div className="flex p-5 md:flex-row justify-start md:p-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden">
                        <img src={headerLogo} alt={headerLogo} className="h-full w-full object-cover"/>
                    </div>
                    <span className="flex ml-5 whitespace-nowrap items-center text-lg md:text-sm font-bold dark:text-indigo-500">
                    {feDevName.toUpperCase()}
                    </span>
                </div>
            </Panel>

            <div onClick={toggleMenu} className="text-3xl absolute right-5 top-6 cursor-pointer md:hidden dark:text-indigo-500 bg-amber-300 dark:bg-slate-900">
                {open ? <HiX /> : <HiMenu />}
            </div>
            
            <Panel>
                <nav className={`bg-gray-100 ${open ? 'top-20' : 'top-[-410px]'}`}>
                <ul className={`md:flex md:pb-0 md:p md:justify-end bg-gray-100 md:bg-amber-300 absolute md:static md:whitespace-nowrap dark:bg-slate-900 md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 ease-in ${open ? 'top-20 ':'top-[-410px]'}`}>
                        <li>
                        <div className={menuUnderlineClassNames}/>
                        <Link
                            className={navLinkStylingClassNames}
                            to='about-me-anchor' 
                            smooth={true} 
                            duration={500}
                            onClick={toggleMenu}
                            >
                            ABOUT ME
                            </Link>
                        </li>
                        <div className={menuUnderlineClassNames}/>
                        <li>
                            <Link 
                            className={navLinkStylingClassNames}
                            to='projects-anchor' 
                            smooth={true} 
                            duration={500}
                            onClick={toggleMenu}
                            >
                            PROJECTS
                            </Link>
                        </li>
                        <div className={menuUnderlineClassNames}/>
                        <li>
                            <Link 
                            className={navLinkStylingClassNames}
                            to='contact-anchor' 
                            smooth={true} 
                            duration={500}
                            onClick={toggleMenu}
                            >
                            CONTACT
                            </Link>
                        </li>
                        <div className={menuUnderlineClassNames}/>
                        <li>
                            <Link
                            className={navLinkStylingClassNames}
                            to='testimonials-anchor' 
                            smooth={true} 
                            duration={500}
                            onClick={toggleMenu}
                            >
                            TESTIMONIALS
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Panel>
        </header>
    )
};

export default Header;