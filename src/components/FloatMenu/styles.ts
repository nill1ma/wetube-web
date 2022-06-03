import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuItem = styled(Link)``;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
  width: 30%;
  margin: 0 auto;
  ${MenuItem} {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange;
    color: #2c2c2c;
    text-decoration: none;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    padding: 5px;
    span {
      font-size: 0.7em;
      font-weight: bold;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)``;

// 70px
