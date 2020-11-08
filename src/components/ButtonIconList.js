import React from "react";
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles({
    iconButtonList: {
        paddingRight: '20px',
        height: 56,
        textAlign: 'right',
        margin: 'auto 0'
    }
})


function ButtonIconList() { 
    const classes = useStyles()
    return (
        <div className={classes.iconButtonList}>
        <IconButton aria-label="github" target="_blank" href="https://github.com/chris-kh-han/youtube2020">
            <GitHubIcon />
        </IconButton>
        <IconButton aria-label="apps">
            <AppsIcon />
        </IconButton>
        <IconButton aria-label="notification">
            <NotificationsIcon />
        </IconButton>
        </div>
  );
}

export default ButtonIconList;
