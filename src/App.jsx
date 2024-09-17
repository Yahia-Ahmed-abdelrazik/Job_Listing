import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SerchBar";
import JobCard from "./components/job/jobCard";
import { Grid } from "@mui/material";
import NewJobModal from "./components/Job/NewJobModal";
import jobData from "./db/dummy";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <NewJobModal /> */}

      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <SearchBar />
          {jobData.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
