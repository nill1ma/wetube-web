import ReactPlayer from "react-player";
import YouTube from "react-youtube";
import styled from "styled-components";
import React from "react";

type VideoBoxContainerProps = {
	current: boolean;
};

export const Container = styled.div<VideoBoxContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: ${({ current }) => current && "calc(100% - 70px)"};
	align-items: center;
	color: #ffffff;
`;

export const Video = styled(ReactPlayer)`
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px; */
	/* background-color: orange; */
	/* border-radius: 10px; */
`;
export const opts = {
	height: "500",
	width: "1000",
};

export const optsNoCurrent = {
	height: "200",
	width: "400",
};
