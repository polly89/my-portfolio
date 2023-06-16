import classNames from "classnames";

function Subtitles({
    children, 
    className, 
    ...rest}){
    const subTitleClassNames = classNames(
            //Base Styling
            'text-xl font-bold text-left tracking-wide ',
            //Media Queries
            'md:text-2xl  md:m-2 md:pt-4',
            //Dark Mode
            'dark:text-indigo-500',
            //Allows for customization
            className
    )

    return (
        <div className="">
            <h1 className={subTitleClassNames}>{children}</h1>
        </div>
    )
}
export default Subtitles;