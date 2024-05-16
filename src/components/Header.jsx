import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-5 border-b-2'>
            <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;