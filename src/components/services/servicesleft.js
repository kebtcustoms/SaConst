import "./servicesleft.css"

export default function ServicesLeft(props) {
    return (
        <div className="servicesleft--wrapper">
            <div className="servicesleft--stripe"></div>
            <div className="servicesleft--container">
                <div className="servicesleft--content">
                    <h1>{props.title}</h1>
                    <div className="servicesleft--break"></div>
                    <p>{props.text}</p>
                </div>
                <div className="servicesleft--img"></div>
            </div>
            <div className="servicesleftmobile--container">
                <div className="services--content">
                    <h1>{props.title}</h1>
                    <div className="servicesleft--break"></div>
                    <div className="servicesleft--img"></div>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}