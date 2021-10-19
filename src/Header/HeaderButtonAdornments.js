import React from 'react';
import Link from 'react-router-dom/Link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { Badge, makeStyles, MenuItem, ListItemText } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    badge: {
        marginInlineEnd: '10px'
    },
    icon: {
        fontSize: "40px",
        color: grey[500],
    }
});

function ShoppingCartButtonAdornment(props){
    const classes = useStyles();

    return (
        <Badge 
        badgeContent={props.itemQty}
        className={classes.badge}
        overlap="circular"
        color="secondary"
        >
            <ShoppingCartIcon
            className={classes.icon}/>
        </Badge>
    );
};

function UserButtonAdornment(props){
    const classes = useStyles();

    return (<PersonIcon className={classes.icon}/>)
}


{/* TODO: Conditionally render logged in menu if logged in */}
function UserButtonMenuItems(props){
    const {handleClose} = props;

    return (
    <div>
        <MenuItem component={Link} to='/uye-girisi' onClick={handleClose}>
            <ListItemText primary="Giriş Yap"/>
        </MenuItem>
        <MenuItem component={Link} to='/kayit-ol' onClick={handleClose}>
            <ListItemText primary="Ücretsiz Üye Ol"/>
        </MenuItem>
    </div>);
};

export {ShoppingCartButtonAdornment, UserButtonAdornment, UserButtonMenuItems}