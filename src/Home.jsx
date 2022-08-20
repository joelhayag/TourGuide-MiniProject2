import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import HeaderNoSearch from './components/HeaderNoSearch/HeaderNoSearch';
import './Style.css';

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

function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HeaderNoSearch />
      <Grid style={{ width: '100%' }}>
        <Grid>
          <main>
            {/* Hero unit */}
            <div className="hero-container">
              <video src="/videos/video-1.mp4" autoPlay loop muted />
              <Container maxWidth="sm">
                <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                  <h1>Adventure Awaits</h1>
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  <h3>Plan your travel ahead by using our</h3>
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button href="/webapp" variant="contained" color="primary">
                        <h2>Tour Guide Web Application</h2>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </main>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
