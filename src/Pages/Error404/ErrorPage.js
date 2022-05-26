import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'

import './ErrorPage.css';


function ErrorPage() {
    return (
    <>
        <Header />
        <div className="main-errorpage">
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>

        <div className="btn-return">
            <span>Retourner sur la page d’accueil</span>
        </div>
        <Footer />
    </>
    )

}

export default ErrorPage