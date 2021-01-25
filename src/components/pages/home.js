import FormComponent from "../organisms/form";
import { Container } from 'reactstrap';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import { Btn2 } from '../atoms/buttons'


const Home = (props) => {
    return (
        <Container className="mt-5">
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{'Welcome to React'}</h2>
                    <FormComponent />

                    <Link to='/customersuse'><Btn2 text='go to "Customer Usage page" ' /></Link>
                </div>

            </div>
        </Container>
    );
}


export default (Home);