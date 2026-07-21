import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Lista from "components/competencias/Lista"
import UseCases from "components/servicios/UseCases"
import WhatsAppButton from "components/home/WhatsAppButton"

function EnVivo(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <UseCases/>
            <WhatsAppButton/>
            </div>
            
            <Footer/>
            
        </Layout>
    )
}

export default EnVivo