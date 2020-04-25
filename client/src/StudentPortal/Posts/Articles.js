import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Appbar from "./appbar";
import Typography from "@material-ui/core/Typography";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img from "./dummy.png";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  root1: {
    maxWidth: 290,
    // width:'fit-content'
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    margin: "0.5rem",
    maxWidth: 500,
  },
  image: {
    width: 130,
    height: 130,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  img1: {
    display: "inline",
    width: "fit-content",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paper1: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "center",
    margin: "0.5rem",
  },
  gridParent: {
    margin: "auto",
    // margin:'1rem'
    // padding: "1rem"
  },
  gridFlex: {
    display: "flex",
    marginLeft: "50px",
    // border: "1px solid red"
  },
  gridFlexs: {
    margin: "auto",
    display: "flex",
  },
  ReadingB: {
    textAlign: "left",
  },
  card: {
    display: "flex",
    maxWidth: 750,
    maxHeight: 300,
    margin: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: "25px",

    // textAlign: "left"
  },
  description: {
    textAlign: "justfy",
    margin: "1rem",
    padding: "1rem",
  },
  Generalimg: {},
  author: {
    margin: "10px",
    textAlign: "left",
  },
  mediaDiv: {
    margin: "10px",
  },
  media: {
    height: "90px",
    width: "150px",
    paddingTop: "30.25%", // 16:9,
    // marginLeft: "20px",
    border: "1px solid red",
  },
}));

const Articles = ({ getPosts,
  post: { posts, loading, _id },

}) => {
  useEffect(() => {
    getCurrentProfile();
    getPosts();
  }, [getPosts]);

  let General = [];
  let Medical = [];

  posts.forEach((post) => {


    switch (post.category) {

      case 'General':
        General.push(post);
        break;

      case 'Medical':
        Medical.push(post);
        break;

    }


  })

  return (
    <div>
      <Appbar />
      <div>

        <div>

          <Grid item xs={6} style={{ marginLeft: "0.5rem" }}>
            <Card className="animated zoomIn" style={{ maxWidth: "650px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  className={classes.Generalimg}
                  image={General.length ? imgPath : ""}
                />
                <CardContent>
                  <Typography
                    style={{
                      maxHeight: "120px",
                      overflow: "hidden",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: General.length ? General[0].title : "",
                      }}
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ height: "20px" }}>
                <Link
                  to={`/article/${General.length ? General[0]._id : General._id}`}
                  className="link"
                >
                  <IconButton>
                    {" "}
                    <span style={{ fontSize: "15px" }}>See More</span>
                    <OpenInNewIcon
                      style={{
                        float: "right",
                      }}
                    />
                  </IconButton>
                </Link>
              </CardActions>
            </Card>
          </Grid>






         }
          </div>))
        }
      </div>

    </div>
  )
}

Articles.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getPosts, getCurrentProfile })(
  Articles
);