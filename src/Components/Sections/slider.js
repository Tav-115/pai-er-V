import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Guia Rápida Vacunación" 
        subt="Antigripal 2023"
        image="https://drive.google.com/uc?export=download&id=1aBb12sp4g295DTszlyV7ax_zqS7KI0n0"
        link="https://drive.google.com/file/d/1NLmybYs_pCinOpGKEF0n5LyRtlTDzj6g/view?usp=sharing"/>
        </div>
        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Manual Sputnik Ligth" 
        subt="(Adultos) febrero 2023"
        image="https://drive.google.com/uc?export=download&id=1XKy6Wc6eqk9u-g_eSBk6S-DvKFEROAdy"
        link="https://drive.google.com/file/d/1rlf8AThX-uL07iR7y3SuovGUibpCWLqQ/view?usp=sharing"/>
        </div>
        <div className="slider--section box-shadow">         
        <RecursosCard nombre="Almacenamiento Sputnik Ligth" 
        subt=""
        image="https://drive.google.com/uc?export=download&id=1dZVH8v7x-ROJxRY-AcW0Ims5QuvKSadi"
        link="https://drive.google.com/file/d/11qggoSJgTk7gPhouBuQl5jKYalYQGQZ-/view?usp=sharing"/>
        </div>                
        <div className="slider--section box-shadow">
        <RecursosCard nombre="Manual Spikevax Bivariante" 
        subt="Moderna Pediátrica"
        image="https://drive.google.com/uc?export=download&id=1A4NcZTe-VOjyPzXlOkBgZuj-HxIOOjCm" 
        link="https://drive.google.com/file/d/1c34APdiDiCOXGWea00hXunlC-oxKqWKJ/view?usp=sharing"/>
        </div>
        

</div>

</div>
)
export default Slider



