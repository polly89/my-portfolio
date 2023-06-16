import classNames from "classnames";

function SectionTitles({
    children, 
    className, 
    ...rest}){
    const titleClassNames = classNames(
            //Base Styling
            'text-3xl font-bold text-center pt-4 tracking-widest',
            //Dark Mode
            'dark:text-indigo-500',
            //Accounts for customization
            className
    )
    const lineClassNames = classNames(
        //Base Styling
        'h-1 w-8 mx-auto my-4 rounded text-center',
        //Gradient Effect
        'bg-gradient-to-r from-amber-300 to-yellow-300"',
        className
        //Accounts for customization
    )
    return (
        <div className="">
            <h1 className={titleClassNames}>{children}</h1>
            <hr className={lineClassNames}></hr>
        </div>
            
        )
}
export default SectionTitles;