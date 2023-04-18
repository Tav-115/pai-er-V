import React from "react"
function CSP (props) {
    return (
        <div className="ed-grid">
    <article className="ed-grid s-shadow-bottom p-b-0">
       
        <div className=" s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src={`${process.env.PUBLIC_URL}/Assets/images/${props.image}`} 
        alt={props.image}/>
        </div>
        
        <div className="s-ratio-16-9 s-bg-white s-pxy-2  ">
            <h2>{props.nombre}</h2>
            <p class="s-mb-0 ">{props.subt}</p>
        </div>
        <div className="center s-bt s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
        
        
            <a href={props.link} > 
            <div className="button"> Revisar{props.pages}</div>
            </a>
    </div>
    </article>
    </div>
    )
}

export default CSP