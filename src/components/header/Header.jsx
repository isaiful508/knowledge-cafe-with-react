
import Profle from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className=' flex justify-between p-8 border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={Profle} alt="" />
        </header>
    );
};

export default Header;