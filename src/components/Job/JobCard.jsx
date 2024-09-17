import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { differenceInMinutes } from "date-fns";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      boxShadow: "0 5px 25px  rgba(0, 0, 0, 0.1)",
      borderLeft: "6px solid #4d64e4",
    },
  },
  companeName: {
    fontSize: "13.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: "600 !important",
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    transition: "0.3s",
    fontWeight: "600 !important",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
}));

function jobCard(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} p={2}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companeName} variant="subtitle1">
            {props.companyName}
          </Typography>
        </Grid>

        <Grid item container xs>
          {props.skills.map((skill) => (
            <Grid className={classes.skillChip} mx={0.5} key={skill} item>
              {skill}
            </Grid>
          ))}
        </Grid>

        <Grid item container xs direction={"column"} alignItems={"flex-end"}>
          <Grid item>
            <Typography variant="caption">
              {differenceInMinutes(new Date(), props.postedOn)} | {props.type} |
              {props.location}
            </Typography>
          </Grid>

          <Grid item>
            <Box mt={2}>
              <Button variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default jobCard;
