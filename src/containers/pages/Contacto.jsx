import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import WhatsAppButton from "components/home/WhatsAppButton"
import Incentives from "components/contacto/Incentives"
import Redes from "components/home/Redes"

function Contacto(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            
            <Redes/>
            <WhatsAppButton/>
            </div>
            <Footer/>
            
        </Layout>
    )
}

export default Contacto