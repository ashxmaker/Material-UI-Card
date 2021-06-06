import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <div className={classes.container}>
        <Card className={classes.card} align="center">
          <Typography variant="h3" className={classes.heading} align="center">
            FIND A TEAM
          </Typography>
          <CardContent className={classes.cardcontent} align="center">
            <Grid container spacing={1} className={classes.margin}>
              <Grid item xs={5}>
                <Typography
                  className={classes.text}
                  variant="h6"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  In Game Name
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Container className={classes.skew}>
                  <TextField
                    fullWidth
                    className={classes.input}
                    placeholder="Enter IGN"
                  ></TextField>
                </Container>
              </Grid>
            </Grid>

            <Grid container className={classes.lastmargin}>
              <Grid item xs={5}>
                <Typography
                  className={classes.text}
                  variant="h6"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  Game ID
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Container className={classes.skew}>
                  <TextField
                    fullWidth
                    className={classes.input}
                    placeholder="Enter Game ID"
                    border={0}
                  ></TextField>
                </Container>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Container className={classes.buttonskew}>
                  <Button
                    fullWidth
                    className={classes.button}
                    variant="contained"
                    align="center"
                  >
                    PAY & REGISTER
                  </Button>
                </Container>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
