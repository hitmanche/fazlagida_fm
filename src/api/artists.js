import axiosInstance from "./axios";

export const getTopArtists = async (page) => {
  const { data } = await axiosInstance.get(
    `?method=chart.gettopartists&page=${page}`
  );
  return data;
};
