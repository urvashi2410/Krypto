import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const Banner = () => {
    const useStyles = makeStyles({
        banner: {
            backgroundImage: 'url(./wallpaper.jpg)'
        },
        bannerContent: {
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            paddingTop: 25,
        },

        tagline: {
            display: 'flex',
            height: '40%',
            textAlign: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
      });

      const classes = useStyles();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography variant='h2' style={{
                    fontWeight: 'bold',
                    marginBottom: 15,
                    fontFamily: "Montserrat"
                }}>
                    Flydeck Crypto
                </Typography>

                <Typography variant='subtitle2' style={{
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                    color: 'darkgrey'
                }}>
                    Get all the information regrding your favourite Crypto
                </Typography>
            </div>
        </Container>
    </div>
  );
}

export default Banner