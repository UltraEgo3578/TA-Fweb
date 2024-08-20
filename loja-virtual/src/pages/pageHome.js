import { Link } from "react-router-dom";
import Header from "../components/compHome";

function PHome() {
    return (
        <div>
            <Header />
            <Link to='/shopcar'>Shopcar</Link>
        </div>

    )
}
export default PHome;

