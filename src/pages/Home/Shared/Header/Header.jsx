import { Container } from 'react-bootstrap';
import logo from '../../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary fs-4'><small>Lorem ipsum dolor sit amet.</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>

        </Container>
    );
};

export default Header;