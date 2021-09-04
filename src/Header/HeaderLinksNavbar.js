import React from 'react';
import Chip from '@material-ui/core/Chip';
import Link from 'react-router-dom/Link';

const HeaderLinksNavbar = props => (<ul className="header-links-navbar">
{
    props.linkArr.map(({key, label, to}) => <li key={key}><Chip label={label} component={Link} to={to} clickable/></li>)
}
</ul>);

export default HeaderLinksNavbar;