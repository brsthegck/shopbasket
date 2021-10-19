import React from 'react';
import { makeStyles } from '@material-ui/core';

import HeaderHamburgerMenu from './HeaderHamburgerMenu';
import HeaderLogoLink from './HeaderLogoLink';
import HeaderSearch from './HeaderSearch';
import HeaderButton from './HeaderButton';
import { ShoppingCartButtonAdornment, UserButtonAdornment, UserButtonMenuItems} from './HeaderButtonAdornments';

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

        {/* TODO: Conditionally render username label if logged in, fix these warnings too*/}
        <HeaderButton 
        label="Giriş Yap"
        subLabel="veya üye ol"
        menuItems={UserButtonMenuItems}>
            <UserButtonAdornment/>
        </HeaderButton>
        
        <HeaderButton
        label="Sepetim" 
        to="/sepetim">
            <ShoppingCartButtonAdornment itemQty={32}/>
        </HeaderButton>
    </div>
    );  
}

export default HeaderControls;