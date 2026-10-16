import "./Header.css";
import { House, Phone, Mail } from 'lucide-react';

const Header = () => {

    return (
        <header className="header"> 
            <div className="item brand">
                <img src="./images/favicon-32x32.png" alt="" />
                &nbsp;&nbsp;<span> TODO List App</span>
            </div>
        </header>
    );

};

export default Header;