import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "./font.css";

const Colors = {
  primaryColor: "#283593",
  primaryLigthColor: "#5f5fc4",
  primaryDarkColor: "#001064",
  primaryTextColor: "#ffffff",
  secondaryColor: "#455a64",
  secondaryLigthColor: "#718792",
  secondaryDarkColor: "#1c313a",
  secondaryTextColor: "#ffffff",
};

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  color: ${Colors.primaryTextColor}
}
html {
  min-height: 100vh;
}
body {
  margin: unset;
  padding: unset;
  font-family: 'Montserrat', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif !important;
}
`;

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  bottom: ${(props) => (props.bottom ? props.bottom : "auto")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "unset")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "unset")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "unset")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
`;

const ContainerTitle = styled.h1`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "auto")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const ContainerSubTitle = styled.h2`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const ContainerText = styled.p`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.position ? props.position : "unset")};
`;

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) => (props.border ? props.border : "1px solid transparent")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
  &:disabled {
    background: darkgray;
    cursor: auto;
  }
  & svg {
    margin: 0px 5px;
  }
`;

const ButtonLink = styled(Link)`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) => (props.border ? props.border : "1px solid transparent")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
  &:disabled {
    background: darkgray;
    cursor: auto;
  }
  & svg {
    margin: 0px 5px;
  }
`;

const Nav = styled.nav`
  width: ${(props) => (props.width ? props.width : "auto")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.position ? props.position : "unset")};
`;

const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: auto;
  padding: 0;
  list-style: ${(props) => (props.list ? props.list : "none")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  & p {
    margin: 5px;
    font-weight: bold;
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  }
`;

export {
  Button,
  ButtonLink,
  Colors,
  Container,
  ContainerTitle,
  ContainerSubTitle,
  ContainerText,
  GlobalStyle,
  Menu,
  Nav,
}