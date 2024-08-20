import Login from "../components/compLogin";
import { Link } from 'react-router-dom';

function PLogin() {
    return (
        <div>
            <Login />
            <Link to='/shopcar'></Link>
        </div>

    )
}
export default PLogin;