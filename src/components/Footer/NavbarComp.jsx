import React from "react";
import { Colors, Container, Menu, Nav, } from "../../assets/styles/style";

const prop = {
  ContainerNav: {
    position: "fixed",
    width: "100vw",
    height: "80px",
    bottom: '0',
    margin: 'auto',
},
Nav: {
    width: "100vw",
    height: "80px",
    margin: '0',
    align: 'center',
    radius: '12px 12px 0 0'
  },
};

const NavbarComp = () => {
  return (
    <Container
      position={prop.ContainerNav.position}
      width={prop.ContainerNav.width}
      height={prop.ContainerNav.height}
      bottom={prop.ContainerNav.bottom}
      margin={prop.ContainerNav.margin}
      background={Colors.primaryColor}
    >
      <Nav
      width={prop.Nav.width}
      height={prop.Nav.height}
      margin={prop.Nav.margin}
      background={Colors.primaryDarkColor}
      radius={prop.Nav.radius}
      align={prop.Nav.align}
      >
        <Menu>
          <li>
            <p>Creado por Luis Hernandez</p>
          </li>
        </Menu>
      </Nav>
    </Container>
  );
};

export default NavbarComp;
