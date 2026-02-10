import {Link} from 'react-router-dom';
import { useState } from 'react';

function NavDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="nav-hamburger-button"
            >
                <div className="hamburger-lines">
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
            </button>

            {/* Sidebar Panel */}
            <div className={`nav-sidebar ${isOpen ? 'open' : 'closed'}`}>
                <nav className="nav-menu">
                    <Link
                        to="/"
                        onClick={toggleMenu}
                        className="nav-link nav-link-home"
                    >
                        🏠 Home
                    </Link>

                    <Link
                        to="/Settings"
                        onClick={toggleMenu}
                        className="nav-link nav-link-settings"
                    >
                        ⚙️ Settings
                    </Link>
                </nav>
            </div>
            
            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="nav-overlay"
                ></div>
            )}
        </>
    )
}

export default NavDropdown;