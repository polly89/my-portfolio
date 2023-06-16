import Panel from "../components/Panel";
import Card from "../components/Card";
import Info from "../components/Info";
import Skills from "./Skills";
import SectionTitles from "../components/SectionTitles";
import Subtitles from "../components/Subtitles";

// Data to replace
    const intro1 = <p>Here's a glimpse of my story, how and why I became a developer, and the skill set I attained along the way.</p>
    const paragraph1 = <p> My story may seem a bit unusual to some of you. I didn't dream of becoming a developer as a child. I dreamed of breaking down language barriers and becoming a teacher. So I decided to major in <strong>Spanish and International Studies</strong>, with the plan of continuing my education and eventually teaching Business Spanish as a college professor. </p>
    const paragraph2 = <p> After completing my education, I moved to Costa Rica, where as life would have it I began teaching English. I began teaching in the classroom and later moved to a <strong> virtual setting </strong>. I fell in love with the flexibility that online learning had to offer and with the idea of improving the experience for students and teachers. I began to realize, that my love for pushing boundaries was not limited to language barriers but just the ability to <strong>push the boundaries of what's possible!</strong> </p>
    const paragraph3 = <p>It was this realization that drove me to enroll in a <strong>Bootcamp at DevMountain</strong> and become a Web Developer. I've been coding ever since, and making it my mission to <strong>improve the user experience.</strong> </p>

    function AboutMe(){
    return(
        <Panel className="relative bg-gray-50 dark:bg-black">
            <div id="about-me-anchor" className="anchor"></div>
                <SectionTitles>ABOUT ME</SectionTitles>
                <Info className="flex justify-center text-center md:text-xl md:ml-46 md:mr-46 xl:ml-56 xl:mr-56">{intro1}</Info>
                <div className="flex flex-col md:flex-row justify-center">
                    <Card className=''>
                        <Subtitles>Get to know me!</Subtitles>
                        <Info>{paragraph1}</Info>
                        <Info>{paragraph2}</Info>
                        <Info>{paragraph3}</Info>
                    </Card>
                    <Card>
                        <Skills/>
                    </Card>
            </div>
        </Panel>
    )
};

export default AboutMe;