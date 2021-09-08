import React from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        paddingInline: '20px'
    },
    textfield: {
        blockSize: '56px',
        paddingInlineEnd: '5px'
    },
    button: {
        transition: 'none',
        blockSize: '56px',
        background: blue[400],
        border: '1px solid',
        borderColor: blue[500],
        '&:hover': {
            background: blue[500],
        },
        '&:focus-visible': {
            background: blue[500]
        },
        '&:active': {
            background: blue[600],
            borderColor: blue[700],
        },
        
        color: 'white'
    }
});
const handleSubmit = (e) => {
    console.log("Search form submitted");
}

function HeaderSearch(props){
    const classes = useStyles();

    return (<form className={classes.container} onSubmit={handleSubmit}>
        <TextField
            className={classes.textfield}
            variant="outlined"
            type="search"
            placeholder="Keşfetmeye başla"
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon style={{color: grey[400]}} />
                    </InputAdornment>
                ),
            }}
        />
        <Button
            className={classes.button}
            variant="contained"
            size="large"
            disableElevation
            disableRipple
            disableFocusRipple
            type="submit"
            >
            Ara
        </Button>
    </form>);  
}

export default HeaderSearch;