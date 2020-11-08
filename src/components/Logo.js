import React from 'react'
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import youtubeLogo from '../img/yt_logo.png'

const useStyles= makeStyles({
    img: {
      paddingLeft: '20px ',
    }
  })

function Logo() {
    const classes = useStyles()
    return (
        <CardMedia
          component="img"
          alt="Youtube Logo"
          height="56"
          image={youtubeLogo}
          title="Contemplative Reptile"
          className={classes.img}
        />
    )
}

export default Logo
