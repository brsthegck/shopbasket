import React from 'react';
import { Button, Box, makeStyles, Menu, Fade } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        borderRadius: '50px',
        borderColor: grey[200],
        color: grey[800],
        textTransform: 'none',
        blockSize: '64px',
    },
    container: {
        padding: '0 2px'
    },
    menu: {
        marginBlockStart: '4px'
    }
});

function HeaderButton(props){
    const classes = useStyles();
    const fullLabel = props.subLabel ? (props.label + ' ' + props.subLabel) : props.label;
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const MenuItems = props.menuItems; 

    return (
    <div className={classes.container}>
        <Button 
        className={classes.button}
        variant="outlined"
        size="large"
        title={fullLabel}
        alt={fullLabel}
        component={props.to && Link}
        to={props.to}
        onClick={props.menuItems && handleClick}>
            {props.children}
            <Box display="flex" flexDirection="column">
            <Box padding="0 2px" margin="0">{props.label}</Box>
            {props.subLabel && <Box padding="0 2px" margin="0" fontSize="12px">{props.subLabel}</Box>}
            </Box>
        </Button>
        
        <Menu
            className={classes.menu}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
            anchorEl={anchorEl}
            keepMounted
            elevation={1}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                {MenuItems && <MenuItems handleClose={handleClose}/>}
        </Menu>
    </div>
    );
}  

export default HeaderButton;