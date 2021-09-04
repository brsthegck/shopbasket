import React from 'react';
import './styles/Header.sass';

import { BrowserRouter as Router } from 'react-router-dom';

//Import Header subcomponents
import HeaderLinksNavbar from './HeaderLinksNavbar';
import HeaderCategoryNavbar from './HeaderCategoryNavbar';
import HeaderControls from './HeaderControls';

//The whole header component
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //Mock link array data object for HeaderLinksNavbar component
        const testLinksArr = [
            {
                key: 0,
                label: 'Link1',
                to: '/link1'
            },
            {
                key: 1,
                label: 'Link2',
                to: '/link2'
            },
            {
                key: 2,
                label: 'Link3',
                to: '/link3'
            }
        ];

        return (
        <div className="header-container">
            <Router>
                <HeaderLinksNavbar linkArr={testLinksArr}/>
                <HeaderControls />
                <HeaderCategoryNavbar />
            </ Router>
        </div>);   
    }
}

export default Header;