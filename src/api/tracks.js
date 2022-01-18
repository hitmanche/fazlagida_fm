import axiosInstance from "./axios";

export const getTopTracks = async (artistName) => {
  const { data } = await axiosInstance.get(
    "?method=artist.gettoptracks&artist=" + artistName
  );
  return data;
};
