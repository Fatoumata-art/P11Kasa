import error404 from '../assets/images/error404.png';
import { Link } from 'react-router-dom';

function NotFound() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div className='error-page'>
            <img src={error404} alt='erreur 404' />
            <p className='text-error'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound;