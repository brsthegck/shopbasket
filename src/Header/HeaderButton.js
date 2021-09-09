import React from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    button: {
        borderRadius: '30px',
        borderColor: grey[200],
        color: grey[800],
        textTransform: 'none',
        blockSize: '64px',
    },
    container: {
        padding: '0 2px'
    }
});

function HeaderButton(props){
    const classes = useStyles();

    return (
    <div className={classes.container}>
        <Button 
        className={classes.button}
        variant="outlined"
        size="large">
            {props.adornmentComponent}
            <Box display="flex" flexDirection="column">
            <Box padding="0 2px" margin="0">{props.label}</Box>
            {props.subLabel && <Box padding="0 2px" margin="0" fontSize="12px">{props.subLabel}</Box>}
            </Box>
        </Button>
    </div>
    );
}  

export default HeaderButton;