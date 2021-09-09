import React from 'react';
import { makeStyles } from '@material-ui/core';

import HeaderHamburgerMenu from './HeaderHamburgerMenu';
import HeaderLogoLink from './HeaderLogoLink';
import HeaderSearch from './HeaderSearch';
import HeaderButton from './HeaderButton';
import { ShoppingCartButtonAdornment, UserButtonAdornment } from './HeaderButtonAdornments';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center'
    }
});



function HeaderControls(props){ 
    const classes = useStyles();

    return (
    <div className={classes.container}>
        {/* TODO: Conditionally and responsively render: <HeaderHamburgerMenu /> */}
        <HeaderLogoLink />
        <HeaderSearch />

        <HeaderButton 
        label="Giriş Yap"
        subLabel="veya üye ol"
        adornmentComponent={<UserButtonAdornment/>}/>
        
        <HeaderButton
        label="Sepetim" 
        adornmentComponent={<ShoppingCartButtonAdornment itemQty={31}/>}
        />
    </div>
    );  
}

export default HeaderControls;