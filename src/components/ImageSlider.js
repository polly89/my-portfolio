import { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function ImageSlider(){
    const [currentTestimonialIndx, setCurrentTestimonialIndx] = useState(0);

    const testimonials = [
        {
            image:'https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/Ben-Doggett.jpeg',
            name:'Ben Doggett',
            quote:`Christina's commitment to excellence and her ability to bring projects to fruition are truly commendable. She possesses the drive and determination to tackle complex challenges, and her meticulous attention to detail ensures the delivery of high-quality work. Her versatility as a Full-Stack Developer enables her to contribute effectively to all stages of the development life cycle.`,
        },
        {
            image:'https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/RachelSpencer.jpg',
            name:'Rachel Spencer',
            quote:'During our time at DevMountain, I had the privilege of meeting Christina, a curious, intuitive, and determined individual. Witnessing her independent exploration and implementation of new technologies beyond the curriculum was inspiring. She quickly became one of the students you’d ask for help when the mentors were busy! After graduation, she reached out to collaborate on a project, and this experience has left me excited to create more applications with her. Her passion and drive leaves no doubt in my mind that Christina will achieve remarkable success as a software engineer.'
        },
    ]

    const prev = () => {
        const newIndx = 
        (currentTestimonialIndx - 1 + testimonials.length) % testimonials.length;
        setCurrentTestimonialIndx(newIndx);
    };

    const next = () => {
        const newIndx = (currentTestimonialIndx + 1) % testimonials.length;
        setCurrentTestimonialIndx(newIndx);
    };
    const currentTestimonial = testimonials[currentTestimonialIndx];
    
    return (
        <div className='relative'>
            <div key={currentTestimonialIndx} className='flex place-content-around'>
                <HiChevronDoubleLeft onClick={prev} className='text-3xl md:text-4xl md:mt-8 dark:text-cyan-400'/>
                <div className='flex flex-col md:flex-row justify-center items-center w-8/12 mb-8 drop-shadow-lg bg-gray-50 rounded-md md:rounded-full md:p-4 dark:bg-slate-800 dark:text-slate-400 dark:border dark:border-cyan-500'>
                  <img src={currentTestimonial.image} alt={currentTestimonial.name} className="rounded-full w-24 h-24 object-cover mt-8 md:mt-0" />
                  <p className="text-left m-8 text-ellipsis ">{currentTestimonial.quote}</p>  
                </div>
                
                <HiChevronDoubleRight onClick={next} className='text-3xl md:text-4xl md:mt-8 dark:text-cyan-400'/>
            </div>
        </div>
    );
};
export default ImageSlider;