import { useEffect, useState } from "react";
//components
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SerchBar";
import JobCard from "./components/job/jobCard";
import NewJobModal from "./components/Job/NewJobModal";
//mui
import { ThemeProvider } from "@mui/material/styles";
import { Box, CircularProgress, Grid } from "@mui/material";
import theme from "./Theme/Theme";
//db
import { db } from "./firebase/Config";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loding, setLoading] = useState(true);
  const [newJobModal, setNewJobModal] = useState(false);

  // Fetch jobs from Firestore
  const fetchJobs = async () => {
    const jobsQuery = query(
      collection(db, "jobs"),
      orderBy("postedOn", "desc") // Order by postedOn in descending order
    );
    const querySnapshot = await getDocs(jobsQuery); // Execute the query
    const jobsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      postedOn: doc.data().postedOn.toDate(),
    }));

    setJobs(jobsData);

    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(); // Call the async function to fetch data
  }, []);

  //post a job

  const postJob = async (jobDetails) => {
    try {
      // Add job to Firestore 'jobs' collection
      await addDoc(collection(db, "jobs"), {
        ...jobDetails,
        postedOn: serverTimestamp(), // Adds server timestamp correctly
      });
      fetchJobs();
      console.log("Job posted successfully");
    } catch (error) {
      console.error("Error posting job: ", error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Header openNewJobModal={() => setNewJobModal(true)} />
      <NewJobModal
        newJobModal={newJobModal}
        closeModal={() => setNewJobModal(false)}
        postJob={postJob}
      />

      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <SearchBar />

          {loding ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              py={5}
            >
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
