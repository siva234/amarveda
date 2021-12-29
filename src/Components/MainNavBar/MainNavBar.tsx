import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Button,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../Home/Home';
import Products from '../../Pages/Products/Products';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import LangSelector from '../LangSelector/LangSelector';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const MainNavBar: React.FC = (_props: any) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                <FormattedMessage id="app.title" defaultMessage="AmarVeda" />
            </Typography>
            <LangSelector />
          </Toolbar>
          <Grid container spacing={0} justify="center">
            <Grid item xs={3}><Button href="/">HOME</Button></Grid>
            <Grid item xs={3}><Button href="/products">Products</Button></Grid>
            <Grid item xs={3}><Button href="/contactus">Contact Us</Button></Grid>
          </Grid>
        </AppBar>
      </div>
  );
};

export default MainNavBar;