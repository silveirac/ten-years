import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
    return (
        <Link to={"/"} className='text-white text-4xl'>
            <HomeIcon fontSize='inherit'/>
        </Link>
    )
}