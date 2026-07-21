import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CTA from "components/ubi_valencia/CTA"
import SelectMenuFormato from "components/rankings/SelectMenuFormato"
import SelectMenuRegion from "components/rankings/SelectMenuRegion"
import SelectMenuCategoria from "components/rankings/SelectMenuCategoria"
import Lista from "components/rankings/Lista"
import EncabezadoLista from "components/rankings/EncabezadoLista"
import Features from "components/home/Features"

import Features5 from "components/ubi_valencia/Features5"
import WhatsAppButton from "components/home/WhatsAppButton"

function Rankings(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <CTA/>
            
            
            <Features5/>
            <WhatsAppButton/>
            </div>
            
            
            
            
            <Footer/>
            
        </Layout>
    )
}

export default Rankings