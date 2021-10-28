
const HelperFunction =(props:any)=>{
    return (
        <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{props.title}:</p>
        {props.content}
    </div>
    );
}

export default HelperFunction;