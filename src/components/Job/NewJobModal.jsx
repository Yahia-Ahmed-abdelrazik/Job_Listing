import { useState } from "react";
//mui
import {
  Box,
  Button,
  CircularProgress,
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

//data
const skills = [
  "Javascript",
  "React",
  "Node",
  "Vue",
  "Firebase",
  "MongoDB",
  "SQL",
];

//styles
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
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
}));

const initState = {
  title: "",
  type: "full Time",
  companyName: "",
  companyUrl: "",
  location: "Remote",
  link: "",
  description: "",
  skills: [],
};

function NewJobModal({ postJob, closeModal, newJobModal }) {
  //styles
  const classes = useStyles();
  //state
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState(initState);
  // console.log(jobDetails);

  //handlers
  const handleChange = (e) => {
    setJobDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //handelSkills

  const addRemoveSkill = (skill) => {
    jobDetails.skills.includes(skill)
      ? //remove
        setJobDetails((prev) => ({
          ...prev,
          skills: prev.skills.filter((s) => s !== skill),
        }))
      : //add
        setJobDetails((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
  };

  //handelsubmit

  const handleSubmit = async () => {
    setLoading(true);
    await postJob(jobDetails);
    setLoading(false);
    handleCloseModal();
  };

  //handelClose
  const handleCloseModal = () => {
    setJobDetails(initState);
    setLoading(false);
    closeModal();
  };

  return (
    <Dialog open={newJobModal} fullWidth>
      <DialogTitle>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6">Post a Job </Typography>

          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="title"
              value={jobDetails.title}
              autoComplete="off"
              placeholder="Job Title *"
              disableUnderline
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
          
            <Select
              onChange={handleChange}
              name="type"
              value={jobDetails.type}
              fullWidth
              variant="filled"
              disableUnderline
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
              onChange={handleChange}
              name="companyName"
              value={jobDetails.companyName}
              autoComplete="off"
              placeholder="Company Name *"
              disableUnderline
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="companyUrl"
              value={jobDetails.companyUrl}
              autoComplete="off"
              placeholder="Company URL *"
              disableUnderline
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="location"
              value={jobDetails.location}
              fullWidth
              variant="filled"
              disableUnderline
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In Office">In Office</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="link"
              value={jobDetails.link}
              autoComplete="off"
              placeholder="Job link *"
              disableUnderline
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              name="description"
              value={jobDetails.description}
              autoComplete="off"
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
              <Box
                onClick={() => addRemoveSkill(skill)}
                className={`${classes.skillChip} ${
                  jobDetails.skills.includes(skill) ? classes.included : ""
                } `}
                mx={0.5}
                key={skill}
              >
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

          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disableElevation
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={22} color="secondary" />
            ) : (
              "Post Job"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default NewJobModal;
