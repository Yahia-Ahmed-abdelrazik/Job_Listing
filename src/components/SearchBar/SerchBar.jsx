import { Box, Button, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#FFF",
    display: "flex",
    boxShadow: "0 1px 5px  rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});
function SerchBar() {
  const classes = useStyles();
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper} alignItems={"center"}>
      <Select variant="filled" disableUnderline defaultValue={"full Time"}>
        <MenuItem value="full Time">Full Time</MenuItem>
        <MenuItem value="part Time">Part Time</MenuItem>
        <MenuItem value="contract">Contract</MenuItem>
      </Select>

      <Select variant="filled" disableUnderline defaultValue={"Remote"}>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In Office">In Office</MenuItem>
      </Select>

      <Button variant="contained" color="primary" disableElevation>
        Search
      </Button>
    </Box>
  );
}

export default SerchBar;
