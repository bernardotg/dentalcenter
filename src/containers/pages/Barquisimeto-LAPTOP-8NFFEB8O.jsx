import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CTA from "components/ubi_barquisimeto/CTA"
import SelectMenuFormato from "components/rankings/SelectMenuFormato"
import SelectMenuRegion from "components/rankings/SelectMenuRegion"
import SelectMenuCategoria from "components/rankings/SelectMenuCategoria"
import Lista from "components/rankings/Lista"
import EncabezadoLista from "components/rankings/EncabezadoLista"
import Features from "components/ubi_barquisimeto/Features"
import Features2 from "components/ubi_barquisimeto/Features2"
import Features3 from "components/ubi_barquisimeto/Features3"
import Features4 from "components/ubi_barquisimeto/Features4"
import WhatsAppButton from "components/home/WhatsAppButton"
function Barquisimeto(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <CTA/>
            
            <Features/>
            <Features2/>
            <Features3/>
            
            <WhatsAppButton/>
            </div>
            
            
            
            
            <Footer/>
            
        </Layout>
    )
}

export default Barquisimeto