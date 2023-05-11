import React from "react"
import RecursosCard from "./Recursos-card"

const Slider = () => (
<div className="container-slider">
        <div className="slider" id="slider">

        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Disposición de extensión" 
        subt="Pfizer/13-3-2023"
        image="https://drive.google.com/uc?export=download&id=13BdlGdCv4LIgDWH835Et6ieuusZyrTZz"
        link="https://drive.google.com/file/d/1hX-vODEW119zZfJaLaQDIYGggCoS0UFZ/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Extensión de uso Pfizer" 
        subt="5-5-2023"
        image="https://drive.google.com/uc?export=download&id=1gcf3eOTSxpDuoQZWJy76V8qCLasVH3hZ"
        link="https://drive.google.com/file/d/1-_y7sr529K7pUaBu-cBBK3QvihVHT_8y/view?usp=sharing"/>
        </div>

        
        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Circular AG 4" 
        subt="CONSENTIMIENTO RECHAZO DE VACUNACIÓN"
        image="https://drive.google.com/uc?export=download&id=1DpjPfItNvBiQ15IxiKLwBhoF6DoL7yFb"
        link="https://drive.google.com/file/d/1zkBm6QVxdfLekT5aVmgNfF0l_YG4AUEp/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Circular AG 5" 
        subt="30/05/2023."
        image="https://drive.google.com/uc?export=download&id=1VNqJeQogBljqxCUYO0wDlU4EIcsFEqsR"
        link="https://drive.google.com/file/d/1RcuLGbp7geHrI8vjVxi9MK9GPZOvcmrf/view?usp=sharing"/>
        </div>       

</div>

</div>
)

export default Slider



