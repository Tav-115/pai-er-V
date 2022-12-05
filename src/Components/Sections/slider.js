import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Formulario Desvio de Vacunas" 
                subt="Nuevo"
                image="https://drive.google.com/uc?export=download&id=1iRA1b4Ih6jkWs4dETlGkAwCXFqMdYj8L"
                link="https://docs.google.com/document/d/1nul-WuqVFE1kUArYwWXxKOFGFT158Lp6/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Extensión de Campáña" 
                subt="Campaña SRPP"
                image="https://drive.google.com/uc?export=download&id=1S_OnS407CckvaPO1enYAmSNlShnNDV-e" 
                link="https://drive.google.com/file/d/1XfaUqdJgXfIxRH9cHJR-yM1CLZsHWpWY/view?usp=sharing"/> 
        </div>


        <div className="slider--section box-shadow">
                <RecursosCard nombre="Lineamientos Técnicos" 
                subt="3er Refuerzo Covid"
                image="https://drive.google.com/uc?export=download&id=1_obQxbZmGyH9InceutsGdYD0mn_bGFdQ" 
                link="https://drive.google.com/file/d/1st9JiEg_uSMq_ACV1J3kwciyh8jakCYz/view?usp=sharing"/> 
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Circular 3er Refuerzo" 
                subt="Covid"
                image="https://drive.google.com/uc?export=download&id=1uJKAgmSVz4DMQ1bxvgTdMacD8xQs67E7" 
                link="https://drive.google.com/file/d/1UIX2fH4AH7gg20Sk0ZnYHLQoeMF90S7T/view?usp=sharing"/> 
        </div>


        
</div>

</div>
      
          
    
)
export default Slider



