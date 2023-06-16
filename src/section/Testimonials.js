import ImageSlider from "../components/ImageSlider";
import Panel from "../components/Panel";
import SectionTitles from "../components/SectionTitles";
import Button from "../components/Button";
import { Link } from "react-scroll";


function Testimonials (){
    return (
        <Panel className='relative bg-white dark:bg-black'>
            <div id="testimonials-anchor" className="anchor"></div>
            <SectionTitles> TESTIMONIALS</SectionTitles>
               <ImageSlider />
               <div className="flex justify-end p-4">
               <Link 
                    to='intro-anchor' 
                    smooth={true} 
                    duration={500}
                    >
                <Button>Back to Top</Button>
                </Link>
               </div>
        </Panel>
    )
}
export default Testimonials;