import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import UseCases from "components/servicios/UseCases";
import BlogList from "components/home/BlogList";
import SedesTabs from "components/home/SedesTabs";
import Redes from "components/home/Redes";
import WhatsAppButton from "components/home/WhatsAppButton";

function Home() {
    return (
        <Layout>
            <Navbar />
            
            <div className="relative pt-20">
                {/* 1. Inicio */}
                <section id="inicio">
                    <Header />
                </section>

                {/* 2. Sedes */}
                <section id="sedes" className="scroll-mt-20">
                    <SedesTabs />
                </section>

                {/* 3. Servicios */}
                <section id="servicios" className="scroll-mt-20">
                    <UseCases />
                </section>

                {/* 4. Casos */}
                <section id="casos" className="scroll-mt-20">
                    <BlogList />
                </section>

                {/* 5. Contacto */}
                <section id="contacto" className="scroll-mt-20">
                    <Redes />
                </section>

                {/* Optional: Beneficios (Nosotros) - Not requested in scroll order but good to keep if user didn't ask to remove, however they said "quiero que aparezca lo del inicio, luego lo de sedes, luego servicios, casos, contacto". So I will put Incentives at the end or comment it out. Let's comment it out to perfectly respect the order. */}
                {/* 
                <section id="nosotros">
                    <Incentives />
                </section> 
                */}

                <WhatsAppButton />
            </div>

            <Footer />
        </Layout>
    );
}

export default Home;