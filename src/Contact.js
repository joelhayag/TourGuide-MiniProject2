import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import HeaderNoSearch from './components/HeaderNoSearch/HeaderNoSearch';
import './Contact.css';

function Contact() {
  return (
    <>
      <CssBaseline />
      <HeaderNoSearch />
      <Grid style={{ width: '100%' }}>
        <Grid>
          <div id="main">
            <div id="contactTitle">
              <div id="contactMainTitle">
                Contact
              </div>
              <div id="contactMainDesc">
                Do you have something in mind? Please feel free to send us a message.
              </div>
            </div>
            <div id="contactInfo">
              <div>
                <div id="contactInfoMain">
                  <p>
                    <strong style={{ fontSize: '25px' }}>Joel Hayag</strong><br />
                    Project Lead <br />
                    email: hayagjoel@gmail.com <br />
                    <br />
                    <strong style={{ fontSize: '25px' }}>Diether Alag Cabaning</strong><br />
                    Project Member <br />
                    email: cabaning.diether19@gmail.com <br />
                    <br />
                    <strong style={{ fontSize: '25px' }}>Timothy Recio</strong><br />
                    Project Member <br />
                    email: teejay.recio@gmail.com <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
