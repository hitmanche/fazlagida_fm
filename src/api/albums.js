import axiosInstance from "./axios";

export const getTopAlbums = async (artistName) => {
  const { data } = await axiosInstance.get(
    "?method=artist.gettopalbums&artist=" + artistName
  );
  return data;
};
