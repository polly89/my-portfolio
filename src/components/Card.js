import classNames from 'classnames';

function Card ({ 
    children, 
    className, 
    ...rest 
}){

    const containerClassNames = classNames(
        //Base Styling
        'w-11/12 ml-6 h-auto m-2 p-8 rounded-md',
        // Media Queries
        'md:w-4/12 md:-ml-0',
        //Dark Mode
        'dark:bg-slate-800 dark:border dark:border-cyan-500',
        //Accounts for customization
        className
    );

    return (
        <div {...rest} className={containerClassNames}>
            {children}
        </div>
    )
}
export default Card;