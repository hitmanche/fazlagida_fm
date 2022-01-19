import { Grid, Typography } from "@mui/material";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertMessage } from "../../redux/slice/settingSlice";
import {
  selectArtistDetailList,
  fetchArtistDetail,
} from "../../redux/slice/lastfmSlice";
import CardDetail from "./cardDetail";

function ArtistDetail() {
  const dispatch = useDispatch();
  const urlSearchParams = new URLSearchParams(window.location.search);
  const artistName = urlSearchParams.get("name");

  const { loading, message } = useSelector(selectArtistDetailList);
  const rdArtistDetail = useSelector(
    (state) => state.lastfm.artistDetailList.data[artistName]
  );

  useEffect(() => {
    if (!rdArtistDetail) {
      dispatch(fetchArtistDetail(artistName));
    }
  }, []);

  useEffect(() => {
    if (message) {
      dispatch(setAlertMessage(message));
    }
  }, [message]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!artistName || !rdArtistDetail?.tracks) {
    return <Typography>Artist Name not found</Typography>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardDetail
          key={"artist_detail"}
          type={"Artist"}
          name={rdArtistDetail?.tracks[0]?.artist.name}
          image={rdArtistDetail?.tracks[0]?.image[3]["#text"]}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography borderBottom={1} variant="h6">
          Top Albums
        </Typography>
        {rdArtistDetail?.albums?.map((album, key) => (
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
        {rdArtistDetail?.tracks?.map((track, key) => (
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

export default memo(ArtistDetail);