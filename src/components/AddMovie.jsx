import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import style from "../css/addMovie.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, closeSuccessMsg } from "../redux/moviesSlice";

const AddMovie = () => {
  const { successMsg } = useSelector((state) => state.movies);
  const [movieData, setMovieData] = useState({
    title: "",
    releaseDate: "",
    overview: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMovieData({ ...movieData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(movieData));
    setMovieData({ movie: "", rating: "", imdb_url: "" });
    setTimeout(() => {
      // navigate("/");
      dispatch(closeSuccessMsg());
      // window.location.reload();
    }, 2000);
  };

  return (
    <div className={style.add_movie_form}>
      <h1 style={{ color: "red" }}>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.inputs}>
          <TextField
            required
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="dense"
            name="movie"
            value={movieData.movie}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            margin="dense"
            name="rating"
            value={movieData.rating}
            onChange={handleChange}
          />

          <TextField
            required
            id="outlined-basic"
            label="Imdb Url"
            variant="outlined"
            margin="dense"
            multiline
            name="imdb_url"
            value={movieData.imdb_url}
            onChange={handleChange}
          />
          <Button
            sx={{ marginTop: 2 }}
            color="error"
            type="submit"
            variant="outlined"
            margin="dense"
          >
            Add Movie
          </Button>
          {successMsg && (
            <Alert severity="success" sx={{ width: "100%", marginTop: "20px" }}>
              Movie added successfully!
            </Alert>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
