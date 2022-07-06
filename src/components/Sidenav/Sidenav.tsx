import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './sidenav.css';
import { Link } from 'react-router-dom';

interface sidenavProps {
    name: string;
    link: string;
}

interface Props {
    items: sidenavProps[];
    style?: object;
}

const Sidenav: React.FC<Props> = (props) => {
    return (
        <Menu noOverlay styles={props.style}>
            {props.items.map((p) => (
                <Link to={p.link}>{p.name}</Link>
            ))}
            {/* <a className="menu-item" href={props.href}>
                {props.name}
            </a> */}
        </Menu>
    );
};

Sidenav.defaultProps = {
    // href: '/',
    // name: 'Home'
};

export default Sidenav;
