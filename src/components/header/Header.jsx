
import Profle from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='container mx-auto flex justify-between p-8 border-b-2'>
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={Profle} alt="" />
        </header>
    );
};

export default Header;