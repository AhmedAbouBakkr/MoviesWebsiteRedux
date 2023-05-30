import { useEffect } from "react";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/moviesSlice";
import Skeleton from "@mui/material/Skeleton";
import styles from "../css/movies.module.css";
import { Container } from "@mui/system";

const Movies = () => {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
    console.log("Hello");
  }, []);

  return (
    <div className={styles.background}>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        maxWidth="lg"
      >
        {movies ? (
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie}></Movie>;
          })
        ) : (
          <div className={styles.skelton}>
            <Skeleton
              sx={{ bgcolor: "grey.900", marginBottom: 4 }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900", marginBottom: 4 }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900", marginBottom: 4 }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900", marginBottom: 4 }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rounded"
              width={250}
              height={300}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rounded"
              width={250}
              height={300}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Movies;
