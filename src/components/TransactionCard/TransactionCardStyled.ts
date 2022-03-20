import { Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledArticle = styled(Row)`
  padding: 10px;
  padding-bottom: 0;
  position: relative;
  font-size: 16px;
  .danger {
    background-color: red;
    display: inline-block;
  }
`;

export const StyledCategory = styled.span`
  font-size: 0.9em;
`;
export const StyledDate = styled.span`
  font-size: 0.9em;
`;

export const StyledDescription = styled.p`
  font-size: 1.1em;
  margin-bottom: 0;
  a {
    color: inherit;
    margin-left: 10px;
    display: none;
  }
  &:hover a {
    display: inline;
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
