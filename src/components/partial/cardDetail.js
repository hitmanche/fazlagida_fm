import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardDetail({
  image,
  name,
  listeners,
  playcount,
  type,
  link,
}) {
  return (
    <Card sx={{ display: "flex", margin: "10px", padding: "5px" }}>
      <CardMedia component="img" sx={{ width: 120 }} image={image} alt={name} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {type}
          </Typography>
          {link ? (
            <Link to={"artist?name=" + name} style={{ textDecoration: "none" }}>
              <Typography variant="h5" color="text.secondary" component="div">
                {name}
              </Typography>
            </Link>
          ) : (
            <Typography variant="h5" color="text.secondary" component="div">
              {name}
            </Typography>
          )}
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 1,
          pb: 1,
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" component="div">
          {listeners > 0 &&
            "listeners= " + new Intl.NumberFormat().format(listeners)}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          {playcount > 0 &&
            "playcount= " + new Intl.NumberFormat().format(playcount)}
        </Typography>
      </Box>
    </Card>
  );
}

CardDetail.propTypes = {
  /**
   * Image field that can be taken as base64 or link
   */
  image: PropTypes.string,
  /**
   * Value field under the title in the card field
   */
  name: PropTypes.string,
  /**
   * Value to be given to the title in the card field
   */
  type: PropTypes.string,
  /**
   * Number field where you can give the number of rests
   */
  listeners: PropTypes.number,
  /**
   * Number field where you can show the number of plays
   */
  playcount: PropTypes.number,
  /**
   * Allows us to determine if there is a detail page
   */
  link: PropTypes.bool,
};

CardDetail.defaultProps = {
  image: "",
  name: "",
  listeners: 0,
  playcount: 0,
  type: "",
  link: false,
};
