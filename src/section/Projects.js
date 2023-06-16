import Card from "../components/Card";
import Panel from "../components/Panel";
import Button from '../components/Button'
import Info from "../components/Info";
import Anchor from "../components/Anchor";
import Media from "../components/Media";
import SectionTitles from "../components/SectionTitles";
import Subtitles from "../components/Subtitles";


function Projects(){
    
    // Data to replace
    const media = 'https://www.youtube.com/embed/v45pCZxhAyw'
    const intro1= <p> Here's a glimpse at some of my personal projects:  </p>
    const project1par1 = <p> This is an application that allows parents and educators to create <strong>practice activites</strong> for pre/emergent readers. Children simply visit the homepage, select the activity and begin to practice. Authorized users can create new activities via the <strong>form</strong> and publish them on the homepage.</p>
    const project1par2 = <p> I built this project using <strong>React, Tailwindcss, Firebase, </strong> and <strong> AWS buckets</strong>. Some of the libraries I used include <strong>react-dnd, react-icons</strong> and <strong>react-confetti.</strong></p>
    const project1par3 = <p> In the future, I plan to implement libraries by authorized users, so that their entire collection will be grouped. I also plan to implment filters based on the following subjects like: <strong>math, reading, science</strong> and <strong>social studies</strong>. </p>
    
    const project2par1 = <p>This project is one that comes from the heart. It's one of the reasons I decided to become a programmer. While living in Costa Rica, I noticed that the education system didn't have programs that would teach kids to love reading. The only book educators would suggest was <strong>Paco y Lola</strong>, a book published in 1958. Kids simply learned how to read by reading printouts. During the pandemic, when parents were tasked with teaching kids how to read, many were at a loss, so I decided that I would build a Spanish reading app. </p>
    const project2par2 = <p> I began to build out this project as my capstone during Foundations. Right now, the application simply has the <strong>account creation, login,</strong> and <strong>avatar</strong> features. Once the avatar is created, it is placed on a map. Now, I'm tasked with building worlds for kids to enter -- with their avatar -- to complete simple tasks that will teach them how to read, and fall in love with reading along the way.</p>
    const project2par3 = <p>I built this project using <strong>vanilla JavaScrip, CSS,</strong> and <strong>HTML</strong>. I built all of my images using <strong>Figma</strong> and stored them in an <srong>s-3 AWS bucket</srong>. I used <strong>Firebase</strong> for my authentication and database. The avatar snapshot was created using <strong>HTML2canvas</strong>. While I'm proud of what I was able to accomplish early on, I plan to refactor this project using REACT as it will help me scale it in the future. Stay tuned for updates!</p>

    const GitHubRepoProject1 ='https://github.com/polly89/Sponge-House-Learning'
    const GitHubRepoProject2 = 'https://github.com/polly89/Capstone-Foundations'
    
      
    return (
        <Panel className='relative bg-white dark:bg-black'>
            <div id="projects-anchor" className="anchor"></div>
            <SectionTitles> MY PROJECTS </SectionTitles>
            <Info className='flex justify-center text-center ml-10 mr-10 md:text-xl md:ml-46 md:mr-46 xl:ml-56 xl:mr-56 '>{intro1}</Info>
            <div className='flex flex-col md:flex-row justify-center'>
                <Card>
                    <div className=''>
                        <iframe
                        width="853"
                        height="480"
                        src='https://www.youtube.com/embed/v45pCZxhAyw'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className='w-11/12 max-w-xl rounded-lg border border-8 border-amber-300 drop-shadow-lg ml-4 md:mt-10 dark:border-indigo-500'
                        />
                    </div>                
                </Card>
                <Card className='justify-start'>
                    <Subtitles>SPONGE HOUSE LEARNING</Subtitles>
                    <Info>{project1par1}</Info>
                    <Info>{project1par2}</Info>
                    <Info>{project1par3}</Info>
                    <a href={GitHubRepoProject2}><Button className='ml-10'>VIEW REPO</Button></a>
                </Card>
            </div>
            <div className='flex flex-col md:flex-row justify-center'>
                <Card>
                    <div className=''>
                        <iframe
                        width="853"
                        height="480"
                        src='https://www.youtube.com/embed/3427jBuqr04'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className='w-11/12 max-w-xl rounded-lg border border-8 border-amber-300 drop-shadow-lg ml-4 md:mt-10 dark:border-indigo-500'
                        />
                    </div>                
                </Card>
                <Card className='justify-start'>
                    <Subtitles>MUNDO MÁGICO</Subtitles>
                    <Info>{project2par1}</Info>
                    <Info>{project2par2}</Info>
                    <Info>{project2par3}</Info>
                    <a href={GitHubRepoProject2}><Button className='ml-10'>VIEW REPO</Button></a>
                </Card>
            </div>
        </Panel>
    )
}
export default Projects;