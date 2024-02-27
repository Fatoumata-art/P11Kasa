import error404 from '../assets/images/error404.png'

function NotFoundPage() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div className='error-page'>
            <img src={error404} alt='erreur 404' />
            <p className='text-error'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
    )
}

export default NotFoundPage;