import React from 'react';
//import './styles/Header.sass';

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
                label: 'Süper Fiyatlar',
                to: '/super-fiyatlar'
            },
            {
                key: 1,
                label: 'Tüm Kampanyalar',
                to: '/tum-kampanyalar'
            },
            {
                key: 2,
                label: 'Yurt Dışı Alışveriş',
                to: '/yurtdisi-alisveris'
            },
            {
                key: 3,
                label: 'Kazananlar Kulübü',
                to: '/kazananlar-kulubu',
            },
            {
                key: 4,
                label: 'Satış Yap',
                to: '/urun-satmak/kategori-secim'
            },
            {
                key: 5,
                label: 'Mağaza Aç',
                to: '/Abonelik',
            },
            {
                key: 6,
                label: 'Bize Ulaşın',
                to: '/yardim',
            },
            {
                key: 7,
                label: 'İade Süreci',
                to: '/iade'
            },
            {
                key: 8,
                label: 'Sipariş Takibi',
                to: '/siparis-takibi'
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