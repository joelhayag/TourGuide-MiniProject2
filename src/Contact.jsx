import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import HeaderNoSearch from './components/HeaderNoSearch/HeaderNoSearch';
import './Style.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/home">
        Tour Guide
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

function About() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HeaderNoSearch />
      <Grid style={{ width: '100%' }}>
        <Grid>
          <main>
            {/* Hero unit */}
            <div>
              <Container maxWidth="sm">
                <Typography component="h2" variant="h2" align="center" gutterBottom>
                  <h2>Contact Us</h2>
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  <h2>Do you have something in mind? Please feel free to send us a message.</h2>
                </Typography>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Typography variant="h4" align="center" color="textSecondary" paragraph>
                Let us know by sending us an <a href="mailto:support@tourguide.com">e-mail</a> at <a href="mailto:support@tourguide.com">support@tourguide.com</a>
              </Typography>
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://64.media.tumblr.com/4b1ecbe460aa5097251612b910db456c/c2f3d52d894a7738-f2/s500x750/89d64f0c5a4cfe6fa74b531b72d079307ab68f70.gif"
                        title="1"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography>
                          Are you afraid to fly?
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://64.media.tumblr.com/4c8707a3d7e9177a8b5b158a9f7aa6d0/tumblr_ompjz60Ij01u5lqbno1_500.gif"
                        title="2"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography>
                          Do not look back, you are not goind that way.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://i1.wp.com/i.123g.us/c/gen_voyage/card/331398.gif"
                        title="3"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography>
                          My favourite think to do is to go where I have never been.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Copyright />
          </footer>
          {/* End footer */}
        </Grid>
      </Grid>
    </>
  );
}

export default About;
