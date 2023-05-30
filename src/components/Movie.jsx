import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteMovie } from "../redux/moviesSlice";
import { Link } from "react-router-dom";

export default function Movie({ id, movie, rating, image, imdb_url }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this movie?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted successfully", "", "success");
        dispatch(deleteMovie(id));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 4,
        width: 250,
        minHeight: 250,
        borderRadius: 5,
        backgroundColor: "#161616",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image || "../images/nophoto.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {movie}
        </Typography>
        <Typography variant="body2" fontWeight={700} color="#E3BF3B">
          {rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            fontWeight: 700,
            color: "black",
            marginBottom: 2,
            marginLeft: 1,
            backgroundColor: "#E3BF3B",
          }}
          color="error"
          variant="contained"
          size="small"
          onClick={() => {
            window.open(
              imdb_url,
              "_blank" // <- This is what makes it open in a new window.
            );
          }}
        >
          IMDB
        </Button>
        <Link to={`/update/${id}`}>
          <Button
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: "black",
              marginBottom: 2,
              marginLeft: 2,
              backgroundColor: "orange",
            }}
            color="error"
            variant="contained"
            size="small"
            onClick={() => {}}
          >
            Update
          </Button>
        </Link>
        <Button
          sx={{
            marginRight: 2,
            marginBottom: 2,
            fontWeight: 700,
          }}
          onClick={() => {
            handleDelete(id);
          }}
          color="error"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
