import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
    width: 200px;
    background: blue;
`

class NavbarRotate extends React.Component {
    <Navbar>
        <div><a>HOME</a></div>
        <div><a>VIDEOS</a></div>
        <div><a>BOOKS</a></div>
        <div><a>STORES</a></div>
    </Navbar>
}

export default NavbarRotate;