import { Videos } from "../models/videos";

export const get = () => JSON.parse(localStorage.getItem("researched") || "[]");

export const save = (videos: Videos[]) => {
  localStorage.setItem("researched", JSON.stringify([...videos]));
};