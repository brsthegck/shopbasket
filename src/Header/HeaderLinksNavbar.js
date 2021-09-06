import React from 'react';
import Chip from '@material-ui/core/Chip';
import Link from 'react-router-dom/Link';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    chip: {
        background: 'transparent',
        transition: 'none',
        '&:hover': {
            background: grey[200],
        },
        '&:active': {
            background: grey[300],
        },
        padding: '0 4px',
        cursor: 'pointer'
    },
    container:{
        display: 'flex',
        listStyleType: 'none'
    }
});


export default function HeaderLinksNavbar(props){
    const classes = useStyles();
    
    return (
        <nav>
            <ul className={classes.container}>
                {props.linkArr.map(({key, label, to}) => (
                    <li key={key}>
                        <Chip className={classes.chip} label={label} component={Link} title={label} to={to} size="small"/>
                    </li>
                ))}
            </ul>
        </nav>
    );
}