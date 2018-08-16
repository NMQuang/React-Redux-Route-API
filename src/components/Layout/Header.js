import React, { Component } from 'react';
import Menu from '../Menu/Menu';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Menu/>
                </nav>

                {/* <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                    <ul className="nav navbar-nav nav-flex-icons">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-bars"></i></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                                <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                                <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                            </div>
                        </li>
                    </ul>
                    <Menu/>
                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-user"></i> Tài Khoản</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                                <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                                <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                            </div>
                        </li>
                    </ul>
                </nav> */}
            </header>
        );
    }
}

export default Header;
