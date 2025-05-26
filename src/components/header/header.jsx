import React, { useEffect, useState, useRef } from 'react';
import './header.css'
import menuIcon from "../../assets/menu.png"
import logo from "../../assets/logo.png"

export const Header = ({ }) => {

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };


    useEffect(() => {
        // Adiciona o ouvinte de eventos quando o componente é montado
        document.addEventListener('mousedown', handleClickOutside);

        // Remove o ouvinte de eventos quando o componente é desmontado
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };

    }, []);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="headerMenu">
            <div className="mobileMenuAndTitle">
                <div className='mobileMenu' ref={dropdownRef}>
                    <button className='mobileDropdownButton' onClick={toggleDropdown}>
                        <img src={menuIcon} />
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <a onClick={() => {
                                        window.location.href = "/"
                                    }}>Home</a>
                                </li>
                                <li>
                                    <a onClick={() => {
                                        window.location.href = "/sobre"
                                    }}>Sobre</a>
                                </li>
                                <li>
                                    <a onClick={() => {
                                        window.location.href = "/aplicacao"
                                    }}>Aplicação</a>
                                </li>
                            </ul>
                        </div>
                    )}

                </div>

                <div className='logoAndOptions'>
                    <img src={logo} className='logo' />
                    <ul className='options'>
                        <li><a onClick={() => {
                            window.location.href = "/"
                        }}>Home</a></li>
                        <li><a onClick={() => {
                            window.location.href = "/sobre"
                        }}>Sobre</a></li>
                        <li><a onClick={() => {
                            window.location.href = "/aplicacao"
                        }}>Aplicação</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}