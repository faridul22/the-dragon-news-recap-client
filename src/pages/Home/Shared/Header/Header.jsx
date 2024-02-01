import logo from '../../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></p>
            </div>
        </div>
    );
};

export default Header;