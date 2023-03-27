import "./servicesright.css";

export default function ServicesRight(props) {
    return (
        <div className="servicesright--wrapper">
            <div className="servicesright--stripe"></div>
            <div className="servicesright--container">
                <div className="servicesright--img">
                    <img src={props.img} alt={props.alt}> 
                    </img>
                </div>
                <div className="servicesright--content">
                    <h1>{props.title}</h1>
                    <div className="servicesright--break"></div>
                    <p>{props.text}</p>
                </div>

            </div>
            <div className="servicesrightmobile--container">
                <div className="servicesright--content">
                    <h1>{props.title}</h1>
                    <div className="servicesright--break"></div>
                    <div className="servicesright--img">
                    <img src={props.img} alt={props.alt}> 
                    </img>
                    </div>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}