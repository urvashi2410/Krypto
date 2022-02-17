import { AppBar, Button, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const useStyles = makeStyles({
    title: {
      flex: 1,
      color: 'gold',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: 'Montserrat'
    },
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: 'dark',
    },
  });

  // const darkTheme = darkTheme()
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position="static">
        <Container>
          <Toolbar>
            <Typography className={classes.title} onClick={() => navigate('/')}>
              Flydeck Krypto
            </Typography>
            <Select variant='outlined' style={{
              height: 40,
              width: 100
            }}>
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header