import axios from "axios";
import { baseURL, KEY, MAX } from "../constants/youtube-config";
import { Videos } from "../models/videos";

export const findVideos = async (keyword: string, pageToken?: string) => {
	const params = pageToken ? `&pageToken=${pageToken}` : "";
	const response = await axios.get(
		`${baseURL}?key=${KEY}&part=snippet&maxResults=${MAX}&q=${keyword}${params}`
	);
	return response.data;
};
