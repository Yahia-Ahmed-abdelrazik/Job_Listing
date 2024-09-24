import { Box, Button, Grid, Typography } from "@mui/material";

function Header(props) {
  return (
    <Box bgcolor={"secondary.main"} color={"white"} py={10}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4">Open Job Listing</Typography>

            <Button
              onClick={props.openNewJobModal}
              variant="contained"
              color="primary"
              disableElevation
            >
              Post a Job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
