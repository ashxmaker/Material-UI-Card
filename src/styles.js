import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    flexGrow: "1",
  },
  heading: {
    background: "rgb(230, 0, 0)",
    color: "white",
    fontWeight: "Bold",
    padding: "1.5rem 7.75rem",
  },

  skew: {
    display: "block",
    border: "ridge grey",
    padding: "0px 10px ",
    borderRadius: "0",
    transform: "skewX(-10deg)",
  },
  input: {
    transform: "skewX(10deg)",
  },
  text: {
    maxWidth: "100%",
    fontWeight: "Bold",
  },
  margin: {
    marginBottom: "2rem",
  },
  lastmargin: {
    marginBottom: "3rem",
  },
  cardcontent: {
    padding: "1.5rem 2rem ",
  },
  buttonskew: {
    display: "inline-block",
    padding: "0",
    background: "rgb(230, 0, 0)",
    border: "solid rgb(230, 0, 0)",
    borderRadius: "0",
    transform: "skewX(-10deg)",
  },
  button: {
    background: "rgb(230, 0, 0)",
    border: "0",
    boxShadow: "none",
    color: "white",
    fontWeight: "550",
    borderRadius: "0",
    transform: "skewX(10deg)",
    "&:hover": {
      backgroundColor: "rgb(230, 0, 0)",
      borderColor: "rgb(230, 0, 0)",
      boxShadow: "none",
    },
  },
});
export default useStyles;
