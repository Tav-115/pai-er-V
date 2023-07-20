import React from "react"
import { NavLink } from "react-router-dom" 


const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-10 m-grid-6 lg-grid-6">
        <div className="m-cols-1 img-container medio">
          <a href="/"><img src={`${process.env.PUBLIC_URL}/Assets/images/LogoPAI.png`} alt="logo"
        />Inicio
        </a>
        </div>
        <div className="s-ratio-16-9 s-cols-2 img-container small icono">
          <a href="/">
          <img 
          src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png" alt="logo"/>
           </a>
        </div>
        {/* medio */}
          <div className="m-cols-4 s-cols-4 m-cross-center s-main-center p-t-1 medio"><h3>Programa Ampliado de Inmunizaciones</h3> </div> 
          {/* small */}
          <div className="s-x-3 s-cols-6 s-cross-center s-main-center small small-center"><h3>Programa Ampliado de Inmunizaciones</h3> </div>
        <div className="s-x-6 s-cols-1 s-cross-center s-main-end header-links medio lg-x-6 lg-cols-1">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/ContactUs">Contactanos</a></li>
              <li><a href="/AboutUs">Nosotros</a></li>
            </ul>
          </nav> 
          
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
        <div className="s-x-10 s-cols-1  s-cross-center header-links">
          <nav className="small main-menu showColr" id="main-menus">
            <ul className="ulCaja" id="navM">
              <li><a href="/" className="link s-column s-cross-center active NavR ">Inicio</a></li>
              <li><a href="/ContactUs">Contactanos</a></li>
              <li><a href="/AboutUs">Nosotros</a></li>
            </ul>
          </nav>
          
          <div className="main-menu-toggle to-l" id="main-menu-toggles"></div>
         
        </div>

        
      </div>
      
      
    </header>
)

export default Header