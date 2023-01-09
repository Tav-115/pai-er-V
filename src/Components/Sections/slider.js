import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Carnet Fiebre Amarilla" 
                subt="Para Imprimir"
                image="https://drive.google.com/uc?export=download&id=1WKEgjQa6nQYvXeuETOzYt6RjTquZ69Sv"
                link="https://drive.google.com/file/d/1H0ekOeViD_ASjEiq8JAJOnJvg-rInMNQ/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Extensión de Campáña" 
                subt="SRPP 29-12-22"
                image="https://drive.google.com/uc?export=download&id=14pRQ0YHYYx-lrygzai85lhnFGI4i9U5U" 
                link="https://drive.google.com/file/d/1R6U0lLKix8nccknWoZJ5TtxRMUBtbLwS/view?usp=sharing"/> 
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



