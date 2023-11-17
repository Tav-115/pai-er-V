import React from "react"
import RecursosCard from './Recursos-card';
    
    const Covid = () => (
    <div >
        <h2 className='h2Cov'>
            Covid-19
        </h2>
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
        {/* Extensiones */}
      <a name="extensiones" className="myanchor"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Extensiones de vacunas COVID</h2>   
      
      <RecursosCard nombre="Extensión PFIZER BIVALENTE" 
   subt="2-1-2023"
   image="https://drive.google.com/uc?export=download&id=1aNJQwxnLqaH1FqyK2iRGvnPzduHUUXDI"
   link="https://drive.google.com/file/d/1aeGQFSuJQ6J6DlWVfxVsNN_6XMW3kLtA/view?usp=sharing"/>

      <RecursosCard nombre="Extensión SPIKEVAX BIVALENTE" 
   subt="22-8-2023"
   image="https://drive.google.com/uc?export=download&id=1kvhsrCNZvlUEFQOigHI_DLzvSv4RFnxN"
   link="https://drive.google.com/file/d/1crGUEfjpLDUzN-84YmvHB-P_ycQJb1R5/view?usp=sharing"/>

      <RecursosCard nombre="Extensión de uso Pfizer" 
   subt="5-5-2023"
   image="https://drive.google.com/uc?export=download&id=1gcf3eOTSxpDuoQZWJy76V8qCLasVH3hZ"
   link="https://drive.google.com/file/d/1-_y7sr529K7pUaBu-cBBK3QvihVHT_8y/view?usp=sharing"/>

      <RecursosCard nombre="Disposición de extensión" 
   subt="Pfizer/13-3-2023"
   image="https://drive.google.com/uc?export=download&id=13BdlGdCv4LIgDWH835Et6ieuusZyrTZz"
   link="https://drive.google.com/file/d/1hX-vODEW119zZfJaLaQDIYGggCoS0UFZ/view?usp=sharing"/>

      <RecursosCard nombre="Autorización Extensión" 
   subt="Pfizer 29-12-22"
   image="https://drive.google.com/uc?export=download&id=16np4KK97agcU0MZrW7E_ien2Xe1RW-RC" 
   link="https://drive.google.com/file/d/1jDP_L-LxVYrQHqDtj-47X4F2z_CGAUII/view?usp=sharing"/>

   <RecursosCard nombre="Extensión Pfizer" 
   subt="Pediátrica 30-12-22"
   image="https://drive.google.com/uc?export=download&id=14ft4hh704iJiWPg83jzMxq8s_gbsjWmM" 
   link="https://drive.google.com/file/d/1PZV0jPzxQHTh8hNJpEXBvEDJ5-EYuD6T/view?usp=sharing"/>
   
   <RecursosCard nombre="Extensión Pfizer" 
   subt="Adulto 30-12-22"
   image="https://drive.google.com/uc?export=download&id=13Ap3Ry3BGUDjRwQQygP3kJ6DSlcUz-t8" 
   link="https://drive.google.com/file/d/1nMARpQOCwD8KUDrQNI_bdXN61SJWHF45/view?usp=sharing"/> 

   <RecursosCard nombre="Extensión Pfizer" 
   subt="8-9-22"
   image="https://drive.google.com/uc?export=download&id=1_TEr1nVpQDDz9bFFGqIw3M9uqoqoIVOd"
   link="https://drive.google.com/file/d/1vWrWki9fQ-1sjaHy88G39Z8Hfjtpo717/view?usp=sharing"/>

   <RecursosCard nombre="Recopilación Extensiones de Vctos." 
   subt="Vacunas Covid al 1-9-22 (archivo .rar)"
   image="https://drive.google.com/uc?export=download&id=1DX8RfK6EiNKP5bmln_rzzc86yaw74mGm" 
   pages="1"
   link="https://drive.google.com/file/d/1ZD9ez4IbhydVZUAi2ZKXPECoGjfCcAkf/view?usp=sharing"/> 
               
   <RecursosCard nombre="Resumen Vctos c/extensión" 
   subt="Actualizado 1-9-22"
   image="https://drive.google.com/uc?export=download&id=1VjJuSvgB3EjhYeafmAQr1KNKF0j3r3jg" 
   link="https://drive.google.com/file/d/1EvgtV4-u315cfd3SJz6bajx8fzoXZ_pL/view?usp=sharing"/> 
            
      
   <RecursosCard nombre="Extensiones Pfizer Ped." 
   subt="3-8-22."
   image="https://drive.google.com/uc?export=download&id=1QzFYuHWkNZReXF2Q_OzpxQ9k9PNHkyWJ" 
   pages="1"
   link="https://docs.google.com/document/d/1XwsWNpszW7QuZuYBIGX2yeUtI2Wg6QTL/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/> 

   <RecursosCard nombre="Extensiones Vacunas Covid" 
   subt="Al 26-7-22"
   image="https://drive.google.com/uc?export=download&id=1vMMo4CT3wQa725n1bY5PHPZ_809JoI22" 
   pages="5"
   link="https://drive.google.com/file/d/1X2KNAq_PTS9U890zXXZ5nfpLOs7KuhN8/view?usp=sharing"/> 
            
      <RecursosCard nombre="Extencion Sputnik" 
   subt="22-06-2022 (12 meses)"
   image="https://drive.google.com/uc?export=download&id=182pj3VgbxBx6j0eE1_PWhmbQ-iCEqrTs"
   pages="2"
   link="https://drive.google.com/file/d/1sdircXyioFyF4xCCLBvd3iDo58IblPDo/view?usp=sharing"/>
        
      <RecursosCard nombre="Extensiones unificadas" 
   subt="04-06-2022"
   image="https://drive.google.com/uc?export=download&id=1jz8gPoSzFE25hUcU2HcjsYPCawMKdrU7"
   pages="17"
   link="https://drive.google.com/file/d/1DuqU_iPEXKMxijC0cNAEsEtEOyjGuTzD/view?usp=sharing"/>
        
      <RecursosCard nombre="AstraZeneca" 
   subt="27-05-2022"
   image="https://drive.google.com/uc?export=download&id=13SKkoJkxZygWg9yBqF0LTd1j_TZsrX7J" 
   pages="2"
   link="https://drive.google.com/file/d/1kafTfZ-EUwwaXf-BVGyUnxZ_oylbQYAD/view?usp=sharing"/>
        
        <RecursosCard nombre="Moderna" 
   subt="17-05-2022"
   image="https://drive.google.com/uc?export=download&id=1QU6MnPC5GKzOK2Nu-3UlHmvpOn3ipXA8" 
   pages="2"
   link="https://drive.google.com/file/d/1SZ1T9DvLo-1b8cyWrDf14hJWGAwxhCGU/view?usp=sharing"/>
        
      <RecursosCard nombre="Pfizer Adulto" 
   subt="13-04-2022"
   image="https://drive.google.com/uc?export=download&id=1k8m8HrWoAeth72vNtd8cQ7rAZcHCkjO8" 
   pages="1"
   link="https://drive.google.com/file/d/1sK46mxXRDuq15y2XRy4wNlxQ562C3pCJ/view?usp=sharing"/>
        
        <RecursosCard nombre="Pfizer Pediátrica" 
   subt="12-04-2022"
   image="https://drive.google.com/uc?export=download&id=124OdxZ0tqPnZsS53GGzGX7C88LKETIc2" 
   pages="1"
   link="https://drive.google.com/file/d/1sK46mxXRDuq15y2XRy4wNlxQ562C3pCJ/view?usp=sharing"/>

         <RecursosCard nombre="Sputnik (I y II)" 
   subt="03-03-2022"
   image="https://drive.google.com/uc?export=download&id=1lvaBmq35YvpUsVDBuVHKpgJezFZqxUHp" 
   pages="3"
   link="https://drive.google.com/file/d/1ZMeylmFmqpcMwQuH33hO5YO0NRzJWd7-/view?usp=sharing"/>


      <RecursosCard nombre="Pfizer Adulto" 
   subt="24-01-2022"
   image="https://drive.google.com/uc?export=download&id=18H6seVT6DPC0ZO_cQomjzEaooN3kIqN2" 
   pages="1"
   link="https://drive.google.com/file/d/1agBtLtnwChdjuE9ddOnXXiXkF3_3WPyf/view?usp=sharing"/>


                              {/* Lineamientos Tecnicos */}
  
      <a name="Lineamientos" className="myanchor"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Lineamientos Técnicos</h2> 

      <RecursosCard nombre="Lineamientos Técnicos" 
      subt="3er Refuerzo Covid"
      image="https://drive.google.com/uc?export=download&id=1_obQxbZmGyH9InceutsGdYD0mn_bGFdQ" 
      link="https://drive.google.com/file/d/1st9JiEg_uSMq_ACV1J3kwciyh8jakCYz/view?usp=sharing"/>

      <RecursosCard nombre="(LT) Moderna 6 Meses a 3 años" 
      subt="Refuerzo 3 a 5 años"
      image="https://drive.google.com/uc?export=download&id=1hYsRC-6eha7AC94QrL8q73_HMNo_jfsW"
      pages="32"
      link="https://docs.google.com/document/d/1wXNyQkKTymhq-KPlQaGBosORbswr0405/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
      
      <RecursosCard nombre="Lineamientos Técnicos" 
      subt="Primer Refuerzo 5 a 11 Años."
      image="https://drive.google.com/uc?export=download&id=1v5_MgsO5AgoGzcb7hFQ3s4rAy1enyTyI"
      pages="28"
      link="https://drive.google.com/file/d/1r_S0kEiW9ZgidSR_h6rajjJq4HLPv0oL/view?usp=sharing"/>
      
      <RecursosCard nombre="Lineamientos Técnicos" 
      subt="Segundo Refuerzo."
      image="https://drive.google.com/uc?export=download&id=1vJmij8oePphbdDK-JFzlvY6Jh1g1gVsM" 
      pages="30"
      link="https://drive.google.com/file/d/1Jw84c9H-FWBB40skls0eB868Xf3P73xP/view?usp=sharing"/>

      <RecursosCard nombre="Actualizacion 2021 - Lineamientos Técnicos" 
      subt="Octubre 2021."
      image="https://drive.google.com/uc?export=download&id=1T9FbbMipt9jmCKUvjG3ZZZ_V_TXZJ1Cn" 
      pages="48"
      link="https://drive.google.com/file/d/17bVnPnAy4ffgxx8Sh0taeRRiXJsPyu3o/view?usp=sharing"/>


   
                           {/* Memos */}
  
      <a name="Memos" className="myanchor"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'>Memos</h2>           

      <RecursosCard nombre="Uso de vacuna bivariante" 
   subt="Spikevax 22-8-23"
   image="https://drive.google.com/uc?export=download&id=12fuhX-YfvSiTU8kOsK0wlehWWLnytNlz"
   link="https://drive.google.com/file/d/1WQ7vXck-7iPJYM-XziVoFIxUwpQS2ydg/view?usp=sharing"/>

      <RecursosCard nombre="Memo uso Mod Pediátrica" 
   subt="Dosis/Grupo poblacional"
   image="https://drive.google.com/uc?export=download&id=1v0hUjwWRpb1duPcGEAIVggIDFd1ATtrh"
   link="https://drive.google.com/file/d/1-kyniBH7hcHXapYnP5EBJtzfQGtFAlXu/view?usp=sharing"/>

      <RecursosCard nombre="Memorándum - Covid" 
   subt="Intervalo aplicación dosis refuerzo."
   image="https://drive.google.com/uc?export=download&id=1dAIJkENUj7J7DvNXJvgW1ZOIIekVzGT_" 
   pages="2"
   link="https://drive.google.com/file/d/1blTZOUBojpNku7-aT6-mTy5eCqe2jvqo/view?usp=sharing"/>

                  {/* Manuales */}
   
   <a name="Manuales" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Manuales y Guias</h2> 

      <RecursosCard nombre="Manual Spikevax / Pfizer" 
      subt="Septiembre 2023"
      image="https://drive.google.com/uc?export=download&id=1WYpXNernsNjRkTc_6DFi8YdbpDDpBt1g"
      link="https://drive.google.com/file/d/1mF3IKiKg__-DSk56VQvA0X_-O-3-bhuG/view?usp=sharing"/>
      
      <RecursosCard nombre="Manual Sputnik Ligth" 
      subt="Febrero 2023"
      image="https://drive.google.com/uc?export=download&id=1XKy6Wc6eqk9u-g_eSBk6S-DvKFEROAdy"
      link="https://drive.google.com/file/d/1rlf8AThX-uL07iR7y3SuovGUibpCWLqQ/view?usp=sharing"/>
      
      <RecursosCard nombre="Almacenamiento Sputnik Ligth" 
      subt=""
      image="https://drive.google.com/uc?export=download&id=1dZVH8v7x-ROJxRY-AcW0Ims5QuvKSadi"
      link="https://drive.google.com/file/d/11qggoSJgTk7gPhouBuQl5jKYalYQGQZ-/view?usp=sharing"/>

      <RecursosCard nombre="Manual Spikevax Bivariante" 
      subt="Moderna Pediátrica"
      image="https://drive.google.com/uc?export=download&id=1A4NcZTe-VOjyPzXlOkBgZuj-HxIOOjCm" 
      link="https://drive.google.com/file/d/1c34APdiDiCOXGWea00hXunlC-oxKqWKJ/view?usp=sharing"/>
      
      <RecursosCard nombre="Manual Pfizer Bivariante" 
      subt="(Adultos) Enero 2023"
      image="https://drive.google.com/uc?export=download&id=10xj28_FwE_GosXMzB0M4x-98BlWRB_pv"
      link="https://drive.google.com/file/d/10V80zkZ5Jl3iSq--uD8AFmtVtjqsmCnb/view?usp=sharing"/>

      <RecursosCard nombre="Manipulación Pfizer Bivalente" 
      subt="(Adultos) Enero 2023"
      image="https://drive.google.com/uc?export=download&id=1c1obBVkKGlKm7aCvGezzD4i-KsC4Sb99"
      link="https://drive.google.com/file/d/1bdXdXmQJ9UVxzvasa3iTKms1nlPTgxSO/view?usp=sharing"/>
      
      <RecursosCard nombre="Sociedad Arg. de Pediatría." 
      subt="Vac 6 m a 3 años."
      image="https://drive.google.com/uc?export=download&id=1QoiIA4ttQPCCKoVoU2D6DxqFHwlDixJ0"
      pages="8"
      link="https://drive.google.com/file/d/1tq7Shp9oeJGQtAk9h_H_D4AwcvXD27jy/view?usp=sharing"/>
               

      <RecursosCard nombre="Manual Vac. Moderna" 
      subt="6 m a 3 años."
      image="https://drive.google.com/uc?export=download&id=1W318d7MiDcjiSGUUdxKirJrgEwqAnqKv" 
      pages="38"
      link="https://drive.google.com/file/d/1D9ZycOxIfCDShjQ0KedGsFX0EsAM3yu8/view?usp=sharing"/> 
      
      <RecursosCard nombre="Vacunación" 
      subt=" COVID - 19 en NNyA."
      image="https://drive.google.com/uc?export=download&id=1ieStMxXQjklJM8-k4fMF5B6y4ppUlET6" 
      pages="3"
      link="https://drive.google.com/file/d/1jLThGu2ypDjChdshpSkWdzzmZLQj1eVz/view?usp=sharing"/>

      <RecursosCard nombre="Dosis Adicional Covid" 
      subt="Actualizacion Noviembre 2021."
      image="https://drive.google.com/uc?export=download&id=1ghlSySwpz7I7bXkNL4HPn8XL3MFSAjnV" 
      pages="14"
      link="https://drive.google.com/file/d/1aBYLCUHsjUR85Cdfsa5WayVb4ZZFEV7r/view?usp=sharing"/>

      <RecursosCard nombre="Pfizer Pediátrica" 
      subt="Almacenamiento, manipulación y envío."
      image="https://drive.google.com/uc?export=download&id=1OSFTWha0ZgDPQPUHMg_liPmmipFr8722" 
      pages="16"
      link="https://drive.google.com/file/d/1GyviLEuhAD2z6MatuKwFBLI1JJLmRS0Q/view?usp=sharing"/>

      <RecursosCard nombre="Pizer Pediátrica" 
      subt="Cominarty (24/2/22)."
      image="https://drive.google.com/uc?export=download&id=1R3fVge9FtmvpFh0L--ieT9cXqxZPI7Ap" 
      pages="9"
      link="https://drive.google.com/file/d/1_WIryFCzHJstUi9s4GbNV7a-osyGQbpx/view?usp=sharing"/>


            {/* Circulares */}
            
      <a name="Circulares" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Circulares</h2>      

      <RecursosCard nombre="Dosis de refuerzo contra COVID-19" 
      subt="3-5-2023"
      image="https://drive.google.com/uc?export=download&id=1Bq7Ve2Ir_fxjHN_pROrmnPEUUnKYURTi"
      link="https://drive.google.com/file/d/1TqVShXC2a0oRbGPZx_TZsjpEDF6tF9-P/view?usp=sharing"/>
      
      <RecursosCard nombre="Circular Refuerzos" 
      subt="Indistintos +18 años."
      image="https://drive.google.com/uc?export=download&id=1CL-Kg13P48PFuM-dqlV48sPVswzEW9KR"
      link="https://drive.google.com/file/d/13RjWZ0ga2lyGzmqXtxIs4GWwdZ_9uqn5/view?usp=sharing"/>

      <RecursosCard nombre="Circular Refuerzos" 
      subt="6 Meses a 17 años"
      image="https://drive.google.com/uc?export=download&id=1-hnxlJpeDEoJ797qgqAKvUuKF9lVxu7s"
      link="https://drive.google.com/file/d/1F_g0Ud3AKaMCinbOCp1jBP9QYUPOb4DS/view?usp=sharing"/>

      <RecursosCard nombre="Circular 3er Refuerzo" 
      subt="Covid"
      image="https://drive.google.com/uc?export=download&id=1uJKAgmSVz4DMQ1bxvgTdMacD8xQs67E7" 
      link="https://drive.google.com/file/d/1UIX2fH4AH7gg20Sk0ZnYHLQoeMF90S7T/view?usp=sharing"/>

      <RecursosCard nombre="Moderna Pediátrica." 
      subt="6 m a 2 años."
      image="https://drive.google.com/uc?export=download&id=1z_u4b1pXlOzb68knjpREJ4myAb4ZB5Gv"
      pages="3"
      link="https://drive.google.com/file/d/1rx77OEgbHV_oJAlDpgnYTZn6fRCXBAmL/view?usp=sharing"/>

      <RecursosCard nombre="2do Refuerzo" 
   subt="18-04-2022"
   image="https://drive.google.com/uc?export=download&id=1bm-gz5Wa2D1jiQV4hAF__QHpd3Z3yhno" 
   pages="4"
   link="https://drive.google.com/file/d/1USHagc3iTVsTArEH1Zwuuxi0wi1oAgg1/view?usp=sharing"/>

<RecursosCard nombre="Dosis Viajeros - Covid" 
   subt="18-03-2022"
   image="https://drive.google.com/uc?export=download&id=1P8GvN6O0ba0Ejv8gzEQvM2GZhU_Zhyk_" 
   pages="5"
   link="https://drive.google.com/file/d/14vMFuICFdAyw7EkWkfmv4tkxNMoTN_qz/view?usp=sharing"/>

      <RecursosCard nombre="Circular - Covid" 
   subt="Actualización Estrategia Dosis Refuerzo."
   image="https://drive.google.com/uc?export=download&id=1ZtG7k0qadqupzyx70HM8HTVBpyK8TH_J" 
   pages="1"
   link="https://drive.google.com/file/d/1IMHw3f3L-NIWVh7cAol53giCTRhk0eQb/view?usp=sharing"/>

      <RecursosCard nombre="Circular - Refuerzo 4ta dosis" 
   subt="7/3/2022"
   image="https://drive.google.com/uc?export=download&id=1pGQjVpsIYtX8GXbkkFn9zZmlM6XsIZfq" 
   pages="1"
   link="https://drive.google.com/file/d/1-CAOmY0rxdU6PLft4RXa1ERM-xTEwGs1/view?usp=sharing"/>
      
      

               {/* Notas y Resoluciones */}
               
   <a name="Notas" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Notas y resoluciones </h2>  

      <RecursosCard nombre="Extensión de Uso -  COMIRNATY" 
   subt="24/2/2022."
   image="https://drive.google.com/uc?export=download&id=1SY2bvfCdglnERldV0stkafJk9Amym6rU" 
   pages="1"
   link="https://drive.google.com/file/d/1sVr2wWXIvrhl1XXX5DrmCKZldx_skvkf/view?usp=sharing"/>

   </div>

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Plantillas" className="myanchor"></a>
      <h2 className='s-cols-2 m-cols-2 xl-cols-6'> Formularios y Planillas </h2> 

      <RecursosCard nombre="Registro vacunas Covid-19 Nomivac" 
   subt="Con lotes vencidos"
   image="https://drive.google.com/uc?export=download&id=1aFe4hv1vMvSGo5rhmGhgUtkSnQl4ccCz"
   link="https://drive.google.com/file/d/1aFe4hv1vMvSGo5rhmGhgUtkSnQl4ccCz/view?usp=sharing"/>          

   </div>                    
   
   <div className="ed-grid s-grid-1 lg-grid-2 xl-grid-2">
      <h2 className='s-cols-2 xl-cols-2'> Videos</h2>           
              
      <div className="card">
               <div className="center s-radius-tr s-radius-tl">
               <h3>Almacenamiento, conservación y preparación Pfizer pediátrica</h3>
               <iframe width="380" height="250" src="https://www.youtube.com/embed/yV6r-Mf1cXI" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </div>   
             
            </div>
   </div>
                              
</div>
    )
    
export default Covid