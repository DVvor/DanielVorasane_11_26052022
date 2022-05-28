import './ErrorPage.css';


function ErrorPage() {
    return (
    <>
        <div className="main-errorpage">
            <span className='error-number'>404</span>
            <p className='message-errorpage'>Oups! La page que vous demandez n'existe pas.</p>
        </div>

        <div className="btn-return">
            <span>Retourner sur la page d’accueil</span>
        </div>
    </>
    )

}

export default ErrorPage