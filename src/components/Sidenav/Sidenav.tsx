import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './sidenav.css';

export const Sidenav = (props: { href: string | undefined; name: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; }) => {
  return (
    <Menu>
      <a className="menu-item" href={props.href}>
        {props.name}
      </a>
    </Menu>
  );
};

Sidenav.defaultProps = {
  href: "/",
  name: "Home"
}