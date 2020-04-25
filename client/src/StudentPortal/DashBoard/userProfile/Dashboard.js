import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./userProfile.css";
import Spinner from "./spinner";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import Paper from "@material-ui/core/Paper";
import { getPosts } from "../../../actions/post";
import { deletePost } from "../../../actions/post";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { updateDate } from "../../../actions/post";
import { showPost } from "../../../actions/post";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    border: "2px solid red",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  table: {
    minWidth: 550,
    // maxWidth: 1000,
  },
  tableh: {
    fontWeight: "bold",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cardroot: {
    flexGrow: 1,
  },
}));

const UserProfile = ({
  auth: { user },
  getPosts,
  deletePost,
  updateDate,
  showPost,
  post: { posts, loading, _id, Tide },
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [state, setState] = useState({
    checked: null,
    date: new Date(),
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });

    if (e.target.checked == true) {
      toast.error("Post has been Hide", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Post has been visible");
    }

    console.log("Elefante", e.target.checked);
  };

  const classes = useStyles();
  const deleteP = (e) => {
    toast.warn("Post been Deleted");
  };
  return loading && posts === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container
        maxWidth="lg"
        style={{
          marginTop: "5%",
        }}
      >
        <Typography variant="h4" style={{ margin: "auto" }}>
          {/* Welcome {user.email} */}
        </Typography>
        <br />
        <Link to="/write" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="primary" style={{ margin: "auto" }}>
            <Typography variant="object">Write an Article</Typography>
            <CreateIcon />
          </Button>
        </Link>{" "}
        <br />
        <br /> <br />
        <Link to="/articles" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="secondary"
            style={{ margin: "auto" }}
          >
            <Typography variant="object">View All Article</Typography>
          </Button>
        </Link>{" "}
        <br />
        <br />
        <TableContainer
          component={Paper}
          style={{ width: "fit-content", margin: "auto" }}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableh}>Image</TableCell>
                <TableCell align="center" className={classes.tableh}>
                  Author
                </TableCell>
                <TableCell align="center" className={classes.tableh}>
                  Title
                </TableCell>
                <TableCell align="center" className={classes.tableh}>
                  Edit
                </TableCell>{" "}
                <TableCell align="center" className={classes.tableh}>
                  Change Date
                </TableCell>{" "}
                <TableCell align="center" className={classes.tableh}>
                  Delete
                </TableCell>
                <TableCell align="center" className={classes.tableh}>
                  Hide
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.name}>
                  <TableCell component="th" scope="post">
                    <img
                      src={post.length ? post.image : post.image}
                      alt=""
                      style={{ width: "50px" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {post.name}
                    <span>{post.Tide}</span>
                  </TableCell>
                  <TableCell align="center">{post.title}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/article/edit/${post.length ? post._id : post._id}`}
                    >
                      <CreateIcon />
                    </Link>
                  </TableCell>{" "}
                  <TableCell align="center">
                    <span style={{ fontWeight: "bold" }}>
                      {new Date(post.date).toDateString()}
                    </span>{" "}
                    <span></span>
                    <span></span>
                    <input
                      type="date"
                      id={post._id}
                      name="Date"
                      onChange={(e) => {
                        updateDate(post._id, e.target.value);
                        toast.success("Date Has Been Upated");
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      onClick={(e) => {
                        deletePost(post._id);
                        deleteP(e);
                        console.log("Tidde", post.Tide ? post.Tide : "");
                      }}
                    />
                    <ToastContainer autoClose={2000} />
                  </TableCell>
                  <TableCell align="center">
                    {post.show == "true" ? (
                      <Typography component='span'>Show</Typography>
                    ) : (
                      <Typography component='span'>Hide</Typography >
                    )}
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={post.show}
                          onChange={(e) => {
                            handleChange(e);
                            showPost(post._id, e.target.checked);
                          }}
                          name="checked"
                          color="primary"
                        />
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Fragment>
  );
};

UserProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updateDate: PropTypes.func.isRequired,
  showPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});
export default connect(mapStateToProps, {
  getPosts,
  deletePost,
  updateDate,
  showPost,
})(UserProfile);
