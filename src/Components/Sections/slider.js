import React from "react"
import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">
       
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
                        
        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Dosis de refuerzo contra COVID-19" 
        subt="3-5-2023"
        image="https://drive.google.com/uc?export=download&id=1Bq7Ve2Ir_fxjHN_pROrmnPEUUnKYURTi"
        link="https://drive.google.com/file/d/1TqVShXC2a0oRbGPZx_TZsjpEDF6tF9-P/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Circular AG 3" 
        subt="A partir del 14/04/23."
        image="https://drive.google.com/uc?export=download&id=1T46pJYuAJ13nFfvkT5e8YdFMjI7CJkb1"
        link="https://drive.google.com/file/d/1buQRVoCnLAAtmz6FYoNdfe6jtyNDXgNS/view?usp=sharing"/>
        </div>
        

</div>

</div>
)
export default Slider



