import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { getTopArtists } from "../../api";
import CardDetail from "../../components/partial/cardDetail";
import { Grid } from "@mui/material";

export default function TopArtists() {
  const queryClient = useQueryClient();
  const { data } = useQuery("topArtists", null);

  useEffect(() => {
    if (!Array.isArray(data)) {
      getTopArtistsCallback();
    }
  }, []);

  const getTopArtistsCallback = () => {
    const current = data?.length || 0;
    const pageCount = (current + 50) / 50;
    getTopArtists(pageCount).then((data) => {
      let updateData = [...data.artists.artist];
      const oldData = queryClient.getQueryData(["topArtists"]);
      if (Array.isArray(oldData)) {
        updateData = [...oldData, ...updateData];
      }
      queryClient.setQueriesData(["topArtists"], updateData);
      //setArtists((old) => [...old, ...data.artists.artist]);
    });
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
