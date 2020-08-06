import React from 'react';

import { ReactComponent as Logo } from '../../assets/image/valflix.svg';

import { Button } from '../Button/styles.js';
import './Menu.css';

const Menu = ()  => {
    return(
        <nav className="Menu">
            <a href="/" >
                <Logo className="Logo" title="Valflix"/>
            </a>
            <Button href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
