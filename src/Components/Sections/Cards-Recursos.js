import React from 'react';
import RecursosCard from './Recursos-card';

const CardsRecursos = () => (
   <div>
   {/* <div className="to-l main-menu-recu small" id="main-menu-recu">Listado de Recursos</div> */}

   <div className="small main-menu showColr-recu"  id="menu-recu" >
  <div className="ed-grid s-grid-2 fijo showColr-menu" id="recu">
      
  <a className="button light-color " href="#extensiones">Extensiones</a>
      <a className="button light-color " href="#Lineamientos">Lineamientos</a>
      <a className="button light-color " href="#Memos">Memos</a>
      <a className="button light-color " href="#Manuales">Manuales</a>
      <a className="button light-color " href="#Circulares">Circulares</a>
      <a className="button light-color " href="#Notas">Notas/Res.</a>
      <a className="button light-color " href="#Plantillas">Formularios</a>
      
   </div>
   </div>

  <div className="ed-grid caja-fija medio"> 

         <div className="ed-grid s-grid-3 lg-grid-4 xl-grid-4 fijo medio">

         <a className="button light-color " href="#extensiones">Extensiones</a>
         <a className="button light-color " href="#Lineamientos">Lineamientos</a>
         <a className="button light-color " href="#Memos">Memos</a>
         <a className="button light-color " href="#Manuales">Manuales</a>
         <a className="button light-color " href="#Circulares">Circulares</a>
         <a className="button light-color " href="#Notas">Notas/Res.</a>
         <a className="button light-color " href="#Plantillas">Formularios</a>
         
      </div>
   </div> 
  

  
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6 small-espacio">
   
   <a name="extensiones" className="myanchor"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Extensiones de vacunas</h2>   

      <RecursosCard nombre="Extensión de uso" 
   subt="Antigripal adyuvantada (26-7-22)"
   image="https://drive.google.com/uc?export=download&id=1j2Wv0Ba5L7SwgxrcKhL9Rx3qWqQdqvmO" 
   pages="1"
   link="https://drive.google.com/file/d/15ECcoP4kcRoO6U6Ag6feOnAgBSYIwQsd/view?usp=sharing"/> 
            


                  
   </div>

      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Lineamientos" className="myanchor"></a> 
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'> Lineamientos Técnicos</h2> 

      <RecursosCard nombre="Lineamientos Técnicos." 
      subt="Sarampion, Rubeola, Paperas y Poliomielitis."
      image="https://drive.google.com/uc?export=download&id=1OqQFhh42HwJqLuzW7S4TYifmArRYiwrq" 
      link="https://drive.google.com/file/d/1tlV0r17yFZH4M03GhhS5YCFBK6c7hlY0/view?usp=sharing"/> 

      
      <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Segunda dosis Varicela."
   image="https://drive.google.com/uc?export=download&id=1d7SF8Ku_uryrA8orrW_CNTDx96kHnrkm" 
   pages="38"
   link="https://drive.google.com/file/d/1ua_XHxFMqxZZeRPgiz37V9reA8PjNDDw/view?usp=sharing"/>



<RecursosCard nombre="Lineamientos Técnicos Neumococo" 
   subt="2017-2018."
   image="https://drive.google.com/uc?export=download&id=1e-rBXYTYLQ8LxQ_B9GUFqQ20NQqP_N-A" 
   pages="25"
   link="https://drive.google.com/file/d/1rUawcsr6vsaDcH67iNsjtuE2EJBEyYNv/view?usp=sharing"/>


<RecursosCard nombre="Lineamientos VPH" 
   subt="2017."
   image="https://drive.google.com/uc?export=download&id=1kL5ysXnP0j6q49eyPihb1wDiWw8-yNUx" 
   pages="34"
   link="https://drive.google.com/file/d/1WKpU7DmL2dPk15-u1l59t3fTvrh3yCEg/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Varicela" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1TVDlo3jgttjwuzFLJf_BELdNEDZs8BNw" 
   pages="45"
   link="https://drive.google.com/file/d/1KokmtYbjvzVpFVl7gomg__IByDh5zXaQ/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Rotavirus" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1MrhYFq0xjUowArP8rZ3OQTu5Q1jd-EAi" 
   pages="45"
   link="https://drive.google.com/file/d/18xAoyEAgpRvoNw5bAI0kfwZIBrqbr7JA/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Neumo Niños" 
   subt="2011."
   image="https://drive.google.com/uc?export=download&id=1oCZZX4vW0kqpo3Azj8HH6Cpu2TkF8Hg5" 
   pages="48"
   link="https://drive.google.com/file/d/1OVaeLpeil8-5Ktrjd4mex36FTJQ5VKT2/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Meningo" 
   subt="2017."
   image="https://drive.google.com/uc?export=download&id=1T-lF4yJBVBgekGNNPlnDSj_udJuvOvWp" 
   pages="33"
   link="https://drive.google.com/file/d/1HjSkspgD0UaCARLNr14ft6Jb72R2xOUk/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Hep B Universal" 
   subt="2012."
   image="https://drive.google.com/uc?export=download&id=1JKo_IrHtPr9FOUqoA-taWBMXEZHRwcT7" 
   pages="19"
   link="https://drive.google.com/file/d/1PO_RbUOuL_XZwVIPRDBeq3zNpzRarPj3/view?usp=sharing"/>

                   
   </div>


      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Memos" className="myanchor"></a> 
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'>Memos</h2>           

<RecursosCard nombre="REGLAMENTACIÓN DE LA LEY N° 27.491" 
   subt="ANEXO 28/8/23"
   image="https://drive.google.com/uc?export=download&id=1vghkDakuOEjRmsaIQGY4vI2lRSFL-fkO" 
   pages="1"
   link="https://drive.google.com/file/d/1WiSx4hN25nwbK7C0GjrfNgIhoiCL3KMX/view?usp=sharing"/>

<RecursosCard nombre="MEMO VPH dos Dosis" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1w3NFWfdapj5p_RuaKuZgBSq_Mo9dgWxp" 
   pages="1"
   link="https://drive.google.com/file/d/1aROrlNBsbIqLxaXWuFWY-KOypVQS02H_/view?usp=sharing"/>

<RecursosCard nombre="MEMO Vacunación en el Puerperio" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=10fwlViXjMuKuNdRY_d4VinmvP5AGIHny" 
   pages="2"
   link="https://drive.google.com/file/d/15HQjyU2OYHdkLOKP2-v4OO7AZ6TjybEu/view?usp=sharing"/>

<RecursosCard nombre="MEMO dTpa Embarazadas" 
   subt="2016."
   image="https://drive.google.com/uc?export=download&id=1EhfPLsLQheY2VXotdBQDBDKr5_FasL7c" 
   pages="1"
   link="https://drive.google.com/file/d/1lvIF_aAWtlNqdCjvrA-9L7SshfwF-ccO/view?usp=sharing"/>

<RecursosCard nombre="Memo Hepatitis B Embarazadas" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1tcmVS947qJYID0-ezAs8Ua3Jpu_iDqiR" 
   pages="2"
   link="https://drive.google.com/file/d/12Hbw-RUNhWAzUD77rZldYENmU6f_cC38/view?usp=sharing"/>

   </div>
  

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Manuales" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'> Manuales y Guias</h2> 

      <RecursosCard nombre="Guia Rápida Vacunación" 
      subt="Antigripal 2023"
      image="https://drive.google.com/uc?export=download&id=1aBb12sp4g295DTszlyV7ax_zqS7KI0n0"
      link="https://drive.google.com/file/d/1NLmybYs_pCinOpGKEF0n5LyRtlTDzj6g/view?usp=sharing"/>

      <RecursosCard nombre="Manual Seguridad Vacunas" 
      subt="Febrero 2023"
      image="https://drive.google.com/uc?export=download&id=13Vh-lGDrAk0DaulXshbl3P6a4I3tDhRU"
      link="https://drive.google.com/file/d/13fYdVpalmZOKPNqvBxOS-KpMQF9F99it/view?usp=sharing"/>

      <RecursosCard nombre="Manual Almacenamiento de Vacunas" 
   subt="Nivel Operativo"
   image="https://drive.google.com/uc?export=download&id=11F8IyTl-P2iO4zfSU-gkX0kQll2GQVIc" 
   link="https://drive.google.com/file/d/1USMUMsyP14fu9omKNSftyfO7n6myQziL/view?usp=sharing"/> 

      <RecursosCard nombre="Adrenalina para Anafilaxia" 
   subt="Modo de empleo."
   image="https://drive.google.com/uc?export=download&id=1f7j8iOtkFnsmCNg2_c4j5Pn-REdAzOGk" 
   pages="3"
   link="https://drive.google.com/file/d/193L2ogmj6F2bKaizQpZY5xs0yFvMXAws/view?usp=sharing"/>
 

      <RecursosCard nombre="Plan de contingencia" 
   subt="Ante corte suministro eléctrico."
   image="https://drive.google.com/uc?export=download&id=1MrC5s1edl57K4EaFvUnLIW6fM9FOGUjZ" 
   pages="1"
   link="https://drive.google.com/file/d/18bZYeDhRmjtQ-yGH43bPMBVHm1h4K3n_/view?usp=sharing"/>

<RecursosCard nombre="Guia"
   subt="Rabia: Prevención, Vigilancia y Control."
   image="https://drive.google.com/uc?export=download&id=1w2oYCgGaWyO5EGu7wiNocAZ5zIpJfAvR" 
   pages="86"
   link="https://drive.google.com/file/d/1_JrdAXG6kUIiYbqs0R_5osmt_BEmKIJp/view?usp=sharing"/>

<RecursosCard nombre="Manual del Vacunador" 
   subt="Dirección General de Redes y Programas de Salud."
   image="https://drive.google.com/uc?export=download&id=1rEffRwLy_xTWuEUzDD545GB7BG5NskYO" 
   pages="134"
   link="https://drive.google.com/file/d/1EgB1dE35siNobPGETCc3GNv9jvdvfMi_/view?usp=sharing"/>

<RecursosCard nombre="Ley 27.491" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1m2ktjwgvce3btr2eKmQfGLNrYBtIXz5m" 
   pages="2"
   link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>


<RecursosCard nombre="Vacunación en Huespedes Especiales" 
   subt="2014."
   image="https://drive.google.com/uc?export=download&id=1jA49sfMIIQ1cxHTYhsH6zCZnJysWDgD0" 
   pages="49"
   link="https://drive.google.com/file/d/1v6UVpMditvW0hgEdBm01BNx4ETzwpjn_/view?usp=sharing"/>

   </div>


      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Circulares" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'> Circulares</h2>      

      

   </div>
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Notas" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'> Notas y resoluciones </h2>  

      <RecursosCard nombre="Nota" 
   subt="VPH."
   image="https://drive.google.com/uc?export=download&id=1GSqKN8FnJ306tt-48VaQcWu8AlME2Gbs" 
   pages="1"
   link="https://docs.google.com/document/d/1TpBpCCf-ZTwcrYgzxCt8RuGlMBTnIMMg/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Resolución" 
   subt="2021-3613-APN-MS Varicela."
   image="https://drive.google.com/uc?export=download&id=1E1I57JOlpCOTBhOAxcquBtwmj83HsWRm" 
   pages="3"
   link="https://drive.google.com/file/d/1p5gT_x1aNWqX9DN8Nv_uJh1aOwrO-KcY/view?usp=sharing"/>


   </div>

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Plantillas" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'> Formularios y Planillas </h2> 

      <RecursosCard nombre="Carnet Fiebre Amarilla" 
   subt="Para Imprimir"
   image="https://drive.google.com/uc?export=download&id=1WKEgjQa6nQYvXeuETOzYt6RjTquZ69Sv"
   link="https://drive.google.com/file/d/1H0ekOeViD_ASjEiq8JAJOnJvg-rInMNQ/view?usp=sharing"/>          

      <RecursosCard nombre="Formulario Desvio de Vacunas" 
   subt="Nuevo Dic-2022"
   image="https://drive.google.com/uc?export=download&id=1iRA1b4Ih6jkWs4dETlGkAwCXFqMdYj8L"
   link="https://docs.google.com/document/d/1nul-WuqVFE1kUArYwWXxKOFGFT158Lp6/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

      <RecursosCard nombre="Nomivac" 
   subt="Alta usuario"
   image="https://drive.google.com/uc?export=download&id=1S-LsBIZK9zBnBZNHH0fqX-W2JvQYAxmC"
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1lXOHeOPgkz_8z9X11gC9UTRVyRA-T98f/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
      
      <RecursosCard nombre="Nomivac" 
   subt="Modificación usuario"
   image="https://drive.google.com/uc?export=download&id=1UCbjiadufbbewFxpY6hEvhwm7yQVAQ2r" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1-Zd_Uz8lc2yfWnJQnkSR4LAHtsjg8UTB/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
      
      <RecursosCard nombre="Nomivac" 
   subt="Baja usuario"
   image="https://drive.google.com/uc?export=download&id=1rlneNy2aW2BqRVXaBt8YXEP-gTV3IV_b" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1s4QQBE4sVrULnbfICN5yoE0sHJuG3v3x/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

      <RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Niños y Adolescentes"
   image="https://drive.google.com/uc?export=download&id=1zWFD5laogxKdlrAG-1-ZA1TDXZtA9bVz" 
   pages="2"
   link="https://drive.google.com/file/d/1CvFIRpMNoxwchTNh1BjvLyzS-mSBr8lw/view?usp=sharing"/>

      
      <RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Adultos"
   image="https://drive.google.com/uc?export=download&id=1oEAX-dhYmk4C4Y4G17rkFS6nLXY3x8S1" 
   pages="2"
   link="https://drive.google.com/file/d/146eczv0PFJEYu62APWAdnKCw6xsUX9ra/view?usp=sharing"/>

      
      <RecursosCard nombre="Registro y control de temperatura" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1EZ4cGO3gHtG-LuT0i6-KNdIEGAlEYRUw" 
   pages="1"
   link="https://drive.google.com/file/d/1ZMKNCDTETeOwOsJjpUtBYR5bp8yc1MtW/view?usp=sharing"/>

      <RecursosCard nombre="Planilla Nomivac" 
   subt="Sistema Integrado de Información Sanitaria Argentino."
   image="https://drive.google.com/uc?export=download&id=19-QRzVP764kfK-0DhPnUB0f6VseEaVuz" 
   pages="1"
   link="https://drive.google.com/file/d/1gHMhphAGGBZ39koA51BIqYYlOAFPdBWk/view?usp=sharing"/>


<RecursosCard nombre="Instructivo ESAVI" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1Ipeanvh95Hxcfta3VITnKXoIIvM9BTMN" 
   pages="5"
   link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>



   </div>
   
</div>
)

export default CardsRecursos