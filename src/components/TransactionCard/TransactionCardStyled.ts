import styled from "styled-components";

export const StyledArticle = styled.article`
  color: #fff;
  padding: 10px;
  padding-bottom: 0;
  font-size: 12px;
  position: relative;
  .danger {
    background-color: red;
    display: inline-block;
  }
`;

export const StyledCategory = styled.span`
  font-size: 1.1em;
`;

export const StyledTitle = styled.h3`
  font-size: 1.5em;
  a {
    color: inherit;
    margin-left: 10px;
  }
`;

export const StyledSide = styled.h4`
  font-size: 1.2em;
`;

export const StyledTutor = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  text-align: center;
`;

export const StyledLogo = styled.span`
  position: absolute;
  right: 10px;
  top: 40px;
`;
