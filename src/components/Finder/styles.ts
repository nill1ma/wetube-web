import styled from "styled-components";

export const Container = styled.div`
	padding: 10px 0;
	display: flex;
	height: 50px;
	justify-content: center;
`;

export const Input = styled.input`
	background-color: none;
	font-size: 1.5em;
	padding: 0 10px;
	width: calc(80% - 40px);
`;

export const Button = styled.button`
	background-color: orange;
	color: #2c2c2c;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 10px;
`;
