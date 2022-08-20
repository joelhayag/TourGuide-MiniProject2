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
                  <h2>About Us</h2>
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  <h2>Hi! We are full-stack engineers specializing in developing web solutions.</h2>
                </Typography>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Typography variant="h4" align="center" color="textSecondary" paragraph>
                Meet The Team
              </Typography>
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="images/joel.png"
                        title="Joel Hayag"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Joel Hayag
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          Project Lead
                        </Typography>
                        <Typography>
                          KodeGo - Full Stack Web Developer Student - Batch 13 (Partime)
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
                        image="images/tj.jpg"
                        title="Timothy John Recio"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Timothy John Recio
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          Project Member
                        </Typography>
                        <Typography>
                          KodeGo - Full Stack Web Developer Student - Batch 13 (Partime)
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
                        image="images/diether.jpg"
                        title="Diether Alag Cabaning"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h5">
                          Diether Alag Cabaning
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          Project Member
                        </Typography>
                        <Typography>
                          KodeGo - Full Stack Web Developer Student - Batch 13 (Partime)
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
