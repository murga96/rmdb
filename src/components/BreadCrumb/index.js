import React from "react";
import { Wrapper, Content } from "./BreadCrumb.styles";
import { Link } from "react-router-dom";

export const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/" style={{textDecoration: 'none'}}>
          <span>Home</span>
        </Link>
        <span>|</span>
          <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};
