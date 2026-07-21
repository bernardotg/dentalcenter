import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

import Lista from "components/competencias/Lista"
import EncabezadoLista from "components/competencias/EncabezadoLista"
import BlogList from "components/home/BlogList"
import WhatsAppButton from "components/home/WhatsAppButton"

function Competencias(){
    return(
        <Layout>
            <Navbar/>
            
            
            <div className="pt-28">
            <BlogList/>
            <WhatsAppButton/>
            </div>
            
            
            
            <Footer/>
            
        </Layout>
    )
}

export default Competencias