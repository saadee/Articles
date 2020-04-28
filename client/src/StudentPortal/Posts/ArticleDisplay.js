import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import { getPosts } from '../../actions/post';
import img from './dummy.png';
import { getCurrentProfile } from '../../actions/profile';
import Nav from './appbar';
import Spinner from '../DashBoard/userProfile/spinner';
import { getPost } from '../../actions/post';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TelegramIcon from '@material-ui/icons/Telegram';
import { getViews } from '../../actions/post'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 900,
		margin: 'auto',
		marginTop: '3%',
	},
	media: {
		height: 0,
		paddingTop: '40%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	mainCardContainer: {
		// border: "1px solid green",
		margin: 'auto',
		width: '80%',
		marginTop: '3%',
	},
	heading: {
		fontFamily: ' ',
		textAlign: 'left',
		fontWeight: 'bold',
		height: '10%',
		width: '80%',
		margin: 'auto',
	},
	name: {
		textAlign: 'left',
		// margin:'auto',
		// border: "1px solid blue",
		width: 'fit-content',
	},
}));

const ArticleDisplay = ({ getPost, getViews, post: { post, loading }, match }) => {
	const classes = useStyles();
	useEffect(() => {
		getPost(match.params.id);
		getViews(match.params.id);

	}, [getPost,]);
	// const classes = useStyles();

	return loading == null ? (
		<Spinner />
	) : (
			<Container maxWidth="xl">
				<div style={{ marginLeft: '-20px' }}>
					<Nav />
				</div>
				<Container maxWidth="lg" className={classes.mainCardContainer}>
					<Container>
						<Card className={classes.root}>
							<CardHeader
								title={
									<Typography variant='h6' color="primary" style={{ fontWeight: 'bolder', float: 'left' }} >
										<span>
											<RemoveRedEyeIcon style={{ fontSize: '40px', marginTop: '10px',marginRight:'0px', position: 'absolute' }} />

										</span>
										<span style={{
											 position: 'relative'
											, fontSize: '30px', color: 'black',marginLeft:'40px'
										}} >
											{post.views > 1000 ? (post.views / 1000).toFixed(2) + 'k' : post.views}
										</span>		 <span style={{ fontSize: '25px', color: "black" }}>Views</span>

									</Typography>
								}

								subheader={
									<Typography variant="h6" style={{ fontFamily: 'bold' }} className={classes.date}>
										{new Date(post.date).toDateString()}
									</Typography>
								}
								action={
									<Link to={`/article/edit/${post._id}`} style={{ textDecoration: 'none' }}>
										<IconButton aria-label="share" variant='outlined'>
											<Typography>Edit</Typography>
											<span> {''}</span>
											<CreateIcon />
										</IconButton></Link>
								}
							/>

							<CardContent>
								<Typography component="div">
									<div
										dangerouslySetInnerHTML={{
											__html: post.content,
										}}
									/>
								</Typography>
							</CardContent>
						</Card>
					</Container>
				</Container>
			</Container>
		);
};

ArticleDisplay.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	getViews: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	post: state.post,
});
export default connect(mapStateToProps, { getPost, getViews })(ArticleDisplay);
