import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTopTracks, getTopAlbums } from "../../api";
import { useDispatch } from "react-redux";
import { setAlertMessage } from "../../redux/slice/settingSlice";
import CardDetail from "./cardDetail";
import { useQuery, useQueryClient } from "react-query";

export default function ArtistDetail() {
  const dispatch = useDispatch();
  const urlSearchParams = new URLSearchParams(window.location.search);
  const artistName = urlSearchParams.get("name");
  //const [artistData, setArtistData] = useState({});
  const [loading, setLoading] = useState(false);

  const artistQueryName = `artist-data-${artistName}`;
  const queryClient = useQueryClient();
  const { data } = useQuery(artistQueryName, null);

  useEffect(() => {
    if (!data) {
      setLoading(true);
      Promise.all([getTopTracks(artistName), getTopAlbums(artistName)])
        .then((data) =>
          queryClient.setQueriesData(artistQueryName, {
            tracks: data[0].toptracks.track,
            albums: data[1].topalbums.album,
          })
        )
        .catch((err) => dispatch(setAlertMessage(err.message)))
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!artistName || !data?.tracks) {
    return <Typography>Artist Name not found</Typography>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardDetail
          key={"artist_detail"}
          type={"Artist"}
          name={data?.tracks[0]?.artist.name}
          image={data?.tracks[0]?.image[3]["#text"]}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography borderBottom={1} variant="h6">
          Top Albums
        </Typography>
        {data?.albums?.map((album, key) => (
          <CardDetail
            key={key}
            type={"Graduation"}
            name={album.name}
            image={album?.image[3]["#text"]}
            listeners={Number(album.listeners)}
            playcount={Number(album.playcount)}
          />
        ))}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography borderBottom={1} variant="h6">
          Top Tracks
        </Typography>
        {data?.tracks?.map((track, key) => (
          <CardDetail
            key={key}
            type={"Stranger"}
            name={track.name}
            image={track.image[3]["#text"]}
            listeners={Number(track.listeners)}
            playcount={Number(track.playcount)}
          />
        ))}
      </Grid>
    </Grid>
  );
}
