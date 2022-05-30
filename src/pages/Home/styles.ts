import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	width: 100%;
	height: calc(100vh - 70px);
	/* span {
		padding: 5px 0;
	} */
`;
export const OtherVideosFound = styled.div``;

export const CurrentVideo = styled.div`
	width: 70%;
	height: 100%;
`;

export const SuggestionedVideos = styled.div`
	padding: 5px 0;
	width: calc(28% - 2px);
	height: calc(100vh - 10px);
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}

	::-webkit-scrollbar-thumb {
		background: #363636;
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: #363636;
	}
`;
