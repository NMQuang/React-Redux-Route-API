import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Sản Phẩm',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Hiệu Sản Phẩm',
        to: '/brand-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'nav-item active' : 'nav-item';
                return (
                    <li className={active}>
                        <a class="nav-link" href="#">
                            <Link to={to}>
                                {label}
                            </Link>
                        </a>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">React Redux API</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.showMenus(menus)}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            
            // <div className="navbar navbar-default">
            //     <a className="navbar-brand">CALL API</a>
            //     <ul className="nav navbar-nav">
            //         {this.showMenus(menus)}
            //     </ul>
            // </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }

}

export default Menu;
