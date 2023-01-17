import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Memo uso Mod Pediátrica" 
                subt="Dosis/Grupo poblacional"
                image="https://drive.google.com/uc?export=download&id=1v0hUjwWRpb1duPcGEAIVggIDFd1ATtrh"
                link="https://drive.google.com/file/d/1-kyniBH7hcHXapYnP5EBJtzfQGtFAlXu/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Circular Refuerzos" 
                subt="6 Meses a 17 años"
                image="https://drive.google.com/uc?export=download&id=1-hnxlJpeDEoJ797qgqAKvUuKF9lVxu7s"
                link="https://drive.google.com/file/d/1F_g0Ud3AKaMCinbOCp1jBP9QYUPOb4DS/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Extensión Pfizer" 
                subt="Pediátrica 30-12-22"
                image="https://drive.google.com/uc?export=download&id=14ft4hh704iJiWPg83jzMxq8s_gbsjWmM" 
                link="https://drive.google.com/file/d/1PZV0jPzxQHTh8hNJpEXBvEDJ5-EYuD6T/view?usp=sharing"/> 
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Extensión Pfizer" 
                subt="Adulto 30-12-22"
                image="https://drive.google.com/uc?export=download&id=13Ap3Ry3BGUDjRwQQygP3kJ6DSlcUz-t8" 
                link="https://drive.google.com/file/d/1nMARpQOCwD8KUDrQNI_bdXN61SJWHF45/view?usp=sharing"/> 
        </div>


        
</div>

</div>
      
          
    
)
export default Slider



