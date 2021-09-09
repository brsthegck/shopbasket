import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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

export {ShoppingCartButtonAdornment, UserButtonAdornment}