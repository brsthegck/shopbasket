import React from 'react';
import { makeStyles } from '@material-ui/core';

import HeaderHamburgerMenu from './HeaderHamburgerMenu';
import HeaderLogoLink from './HeaderLogoLink';
import HeaderSearch from './HeaderSearch';
import HeaderButton from './HeaderButton';

const useStyles = makeStyles({
    container: {
        display: 'flex'
    }
});

function HeaderControls(props){ 
    const classes = useStyles();

    return (
    <div className={classes.container}>
        {/* TODO: Conditionally and responsively render: <HeaderHamburgerMenu /> */}
        <HeaderLogoLink />
        <HeaderSearch />
        <HeaderButton />
        <HeaderButton />
    </div>
    );  
}

export default HeaderControls;