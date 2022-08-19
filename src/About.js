import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import HeaderNoSearch from './components/HeaderNoSearch/HeaderNoSearch';
import './about.css';

function AboutPage() {
  return (
    <>
      <CssBaseline />
      <HeaderNoSearch />
      <Grid container spacing={12} style={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <div>
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 className="main-heading">ABOUT</h3>
                    <div className="underline mx-auto" />
                    <p>
                      Travelling and connecting with places and people is so
                      important to us, it’s the cornerstone of why Tour Guide
                      exists. We believe that travelling broadens the mind and
                      changes the way you think. The people you meet and the
                      experiences you have give you an improved ability to
                      empathise with different situations and people. Travel is
                      the best way to learn about the world and how it works.
                      Our experiences both travelling and working in travel have
                      led us to where we are today.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section bg-c-light border-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-4 text-center">
                    <h3 className="main-heading">Vision & Mission</h3>
                    <div className="underline mx-auto" />
                  </div>
                  <div className="col-md-6 text-center">
                    <h6>Vision</h6>
                    <p>
                      To create a website, where everyone is encouraged to
                      travel.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <h6>Mission</h6>
                    <p>
                      Through travel, we connect people to positive experiences
                      enabling them to see the world differently.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutPage;
