import classNames from "classnames";

function Anchor ({
    href, 
    children, 
    className, 
    ...rest 
}){
    const anchorClassNames = classNames(
        //Base Styling
        'text-amber-300 underline font-bold',
        //Hoever, Active, and Focus Styling
        'hover:underline-offset-4 focus:ring focus:ring-amber-300',
        // Dark Mode Styling
        'dark:text-indigo-500 dark:focus:ring-indigo-500',
        //Accounts for customization
        className
    );
    return (
        <a href={href} className={anchorClassNames}>{children} </a>
    )
}
export default Anchor