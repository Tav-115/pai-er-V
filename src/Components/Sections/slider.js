import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Manual Seguridad Vacunas" 
                subt="Febrero 2023"
                image="https://drive.google.com/uc?export=download&id=13Vh-lGDrAk0DaulXshbl3P6a4I3tDhRU"
                link="https://drive.google.com/file/d/13fYdVpalmZOKPNqvBxOS-KpMQF9F99it/view?usp=sharing"/>
        </div>
        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Manual Pfizer Bivariante" 
                subt="(Adultos) Enero 2023"
                image="https://drive.google.com/uc?export=download&id=10xj28_FwE_GosXMzB0M4x-98BlWRB_pv"
                link="https://drive.google.com/file/d/10V80zkZ5Jl3iSq--uD8AFmtVtjqsmCnb/view?usp=sharing"/>
        </div>
        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Manipulación Pfizer Bivalente" 
                subt="(Adultos) Enero 2023"
                image="https://drive.google.com/uc?export=download&id=1c1obBVkKGlKm7aCvGezzD4i-KsC4Sb99"
                link="https://drive.google.com/file/d/1bdXdXmQJ9UVxzvasa3iTKms1nlPTgxSO/view?usp=sharing"/>
        </div>                
        <div className="slider--section box-shadow">
                <RecursosCard nombre="Manual Almacenamiento de Vacunas" 
                subt="Nivel Operativo"
                image="https://drive.google.com/uc?export=download&id=11F8IyTl-P2iO4zfSU-gkX0kQll2GQVIc" 
                link="https://drive.google.com/file/d/1USMUMsyP14fu9omKNSftyfO7n6myQziL/view?usp=sharing"/> 
        </div>

</div>

</div>
      
          
    
)
export default Slider



