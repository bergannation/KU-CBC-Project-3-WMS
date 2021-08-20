import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LOGIN_USER } from "../utils/mutations";
import { Player, ControlBar } from "video-react";
import video from "../images/wms.mp4";
import "../styles/footer.css";

import Auth from "../utils/auth";

import { useMutation, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    paddingTop: "0%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <h2>Warehouse Management System</h2>
      <Grid>
        <Player
          fluid={false}
          className="player-wrapper"
          autoPlay
          src={video}
          playsInline
        ></Player>
      </Grid>
    </>
  );
};

export default Home;
