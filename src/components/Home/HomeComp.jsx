import React from "react";

import {
  ButtonLink,
  Colors,
  Container,
  ContainerSubTitle,
  ContainerTitle,
} from "../../assets/styles/style.js";

const prop = {
  ContainerHome: {
    height: "calc(100vh - 79px)",
    justifyContent: "center",
    padding: "15px",
  },
  ContainerTitle: {
    padding: "15px",
  },
  ContainerSubtitle: {
    padding: "15px",
  },
};

const HomeComp = () => {
  return (
    <Container
      height={prop.ContainerHome.height}
      background={Colors.primaryColor}
      justifyContent={prop.ContainerHome.justifyContent}
      padding={prop.ContainerHome.padding}
    >
      <ContainerTitle padding={prop.ContainerTitle.padding}>
        Bienvenido/a a preguntame
      </ContainerTitle>
      <ContainerSubTitle padding={prop.ContainerSubtitle.padding}>
        Aqui encontraras preguntas de varios tipos de generos <br />
        ¿te animas?
      </ContainerSubTitle>
      <ButtonLink to="/question" >Iniciar</ButtonLink>
    </Container>
  );
};

export default HomeComp;
