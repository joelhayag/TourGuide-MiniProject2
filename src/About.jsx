import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import HeaderNoSearch from './components/HeaderNoSearch/HeaderNoSearch';

function AboutPage() {
  return (
    <>
      <CssBaseline />
      <HeaderNoSearch />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <div>About Page</div>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutPage;
