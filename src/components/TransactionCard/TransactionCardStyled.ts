import { Row } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";
import styled from "styled-components/macro";

export const StyledArticle = styled(Row)`
  padding-top: 10px;
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
  button {
    color: inherit;
    margin-left: 10px;
    background: none;
    border: none;
    display: none;
  }
  &:hover button {
    display: inline;
  }
`;

export const StyledDate = styled.span`
  font-size: 0.9em;
`;

export const StyledTags = styled.span`
  font-size: 0.9em;
  position: relative;
  bottom: 2px;
  a {
    color: inherit;
  }
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

export const StyledPlus = styled(FaPlus)`
  border-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  padding: 2px;
`;

export const StyledClose = styled(FaTimes)`
  border-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  padding: 2px;
`;

export const StyledCheckbox = styled.input`
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 10px;
`;
