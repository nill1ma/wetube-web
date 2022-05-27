import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content:space-between;
  width:20%;
  margin-left:40%;
  margin-right:40%;
  bottom:10px;
  position:fixed;
  div {
    cursor:pointer;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: 1px solid #2c2c2c;
    background-color:orange;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    padding:5px;
    span{
        font-size:0.7em;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)``