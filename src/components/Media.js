import classNames from "classnames"

function Media({
    src,
    alt, 
    children,
    className,
    ...rest
}){
    const finalMediaClassNames = classNames(
        //Base Styling
        'w-11/12 max-w-xl rounded-lg border border-8 border-amber-300 drop-shadow-lg',
        //Media Queries
         'md:mt-16',
        //Dark Mode  
         'dark:border-indigo-500',
         //Accounts for customization
        className
    )
    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') || src.endsWith('.MOV');
    
    if (isVideo) {
        return(
        <div className="flex justify-center p-4">
            <video className={finalMediaClassNames} controls>
                <source src={src} type="video/mp4" />
                <source src={src} type="video/webm" />
                <source src={src} type="video/ogg" />
                <source src={src} type="video/MOV" />
                Your browser does not support the video tag.
            </video>
        </div>
       
        );
    }
        return (
            <div className="flex justify-center p-4">
                <img src={src} alt={alt} className={finalMediaClassNames} />
            </div>
        )
        
}
export default Media;