import classNames from "classnames";

function Panel({
    children, 
    className, 
    ...rest}){
        
    const panelClassNames = classNames(
        'w-full h-fit',
        className
    );
    return (
    <div className={panelClassNames}>
        {children} 
    </div>
    )
}
export default Panel;
