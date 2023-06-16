import classNames from "classnames";

function FooterTitles({
    children, 
    className, 
    ...rest}){
    const subTitleClassNames = classNames(
            //Base Styling
            'text-l font-bold text-left tracking-wide',
            // Media Queries
            'md:text-1xl md:m-2 md:pt-4',
            //Dark Mode
            'dark:text-indigo-500',
            className
    )

    return (
        <div className="">
            <h1 className={subTitleClassNames}>{children}</h1>
        </div>
    )
}
export default FooterTitles;