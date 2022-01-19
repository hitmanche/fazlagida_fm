import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { getTopArtists } from "../../api";
import CardDetail from "../../components/partial/cardDetail";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopArtists,
  selectTopArtists,
} from "../../redux/slice/lastfmSlice";

export default function TopArtists() {
  const dispatch = useDispatch();
  const { data } = useSelector(selectTopArtists);

  useEffect(() => {
    if (!data || data?.length === 0) {
      getTopArtistsCallback();
    }
  }, []);

  const getTopArtistsCallback = () => {
    dispatch(fetchTopArtists((data?.length || 0 + 50) / 50));
  };
  return (
    <InfiniteScroll
      dataLength={data ? data.length : 0}
      next={getTopArtistsCallback}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container spacing={4}>
        {data?.map((artist, index) => (
          <Grid item key={index} xs={12} sm={12} md={6}>
            <CardDetail
              type={"Artist"}
              name={artist.name}
              image={artist?.image[3]["#text"]}
              listeners={Number(artist.listeners)}
              playcount={Number(artist.playcount)}
              link
            />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}
