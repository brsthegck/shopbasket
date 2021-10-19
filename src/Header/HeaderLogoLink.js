import React from 'react';
import { Link } from 'react-router-dom';

import logoFallback from '../images/logo.png';
import logo from '../images/logo.svg';
import logoCompactFallback from '../images/logo-compact.png';
import logoCompact from '../images/logo-compact.svg';

const HeaderLogoLink = (props) => (
    <Link to='/' title='Shopbasket'>
        <img src={logo} alt='Shopbasket' />
    </Link>
);

export default HeaderLogoLink;