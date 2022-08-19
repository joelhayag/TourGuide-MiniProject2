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
          <div id="row">
            <div id="contactTitle">
              <div id="contactMainTitle">
                Contact
              </div>
              <div id="contactMainDesc">
                Description
              </div>
            </div>
            <div id="contactInfo">
              <div>
                <div>
                  Joel Hayag
                </div>
                <div>
                  Project Lead
                </div>
                <div>
                  Contact details
                </div>
              </div>
              <div>
                <div>
                  Diether Cabaning
                </div>
                <div>
                  Project Member
                </div>
                <div>
                  Contact details
                </div>
              </div>
              <div>
                <div>
                  Timothy John Recio
                </div>
                <div>
                  Project Member
                </div>
                <div>
                  Contact details
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
