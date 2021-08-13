import React from 'react';
import Footer from './footer/Footer';
import MenuBar from './header/Appbar';
import '../styles/main.css';


function Layout(props) {
    return (
        <div className="Layout">
            <MenuBar/>
            <div className="content">{props.children}</div>
            <Footer/>
        </div>
    );
}

export default Layout;