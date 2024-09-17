import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const skills = [
  "Javascript",
  "React",
  "Node",
  "Vue",
  "Firebase",
  "MongoDB",
  "SQL",
];

const useStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    transition: "0.3s",
    fontWeight: "600 !important",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
}));

function NewJobModal() {
  const classes = useStyles();
  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6">Post a Job </Typography>

          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder="Job Title *" disableUnderline fullWidth />
          </Grid>

          <Grid item xs={6}>
            <Select
              fullWidth
              variant="filled"
              disableUnderline
              defaultValue={"full Time"}
            >
              <MenuItem value="full Time">Full Time</MenuItem>
              <MenuItem value="part Time">Part Time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Company Name *"
              disableUnderline
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              placeholder="Company URL *"
              disableUnderline
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Select
              fullWidth
              variant="filled"
              disableUnderline
              defaultValue={"Remote"}
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In Office">In Office</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput placeholder="Job link *" disableUnderline fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <FilledInput
              multiline
              placeholder="Job description *"
              disableUnderline
              fullWidth
              rows={4}
            />
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography variant="subtitle1">Skills</Typography>
          <Box display={"flex"}>
            {skills.map((skill) => (
              <Box className={classes.skillChip} mx={0.5} key={skill}>
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Box
          color={"red"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography variant="caption">* Required fields</Typography>

          <Button variant="contained" color="primary" disableElevation>
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default NewJobModal;
