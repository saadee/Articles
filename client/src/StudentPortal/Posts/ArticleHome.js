import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Appbar from './appbar';
import Typography from '@material-ui/core/Typography';
import { getPosts } from '../../actions/post';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import img from './dummy.png';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import lizard from './i.jpg';
import { fadeIn } from 'react-animations';
import $ from 'jquery';
import { Container } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 'auto',
	},
	root1: {
		maxWidth: 400,
		// width:'fit-content'
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		margin: '0.5rem',
		maxWidth: 500,
	},
	image: {
		width: 130,
		height: 130,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	img1: {
		display: 'inline',
		width: 'fit-content',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	paper1: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
		textAlign: 'center',
		margin: '0.5rem',
	},
	gridParent: {
		margin: 'auto',
		// margin:'1rem'
		// padding: "1rem"
	},
	gridFlex: {
		display: 'flex',
		marginLeft: '50px',
		// border: "1px solid red"
	},
	gridFlexs: {
		margin: 'auto',
		display: 'flex',
	},
	ReadingB: {
		textAlign: 'left',
	},
	card: {
		display: 'flex',
		maxWidth: 750,
		maxHeight: 300,
		margin: 'auto',
	},
	title: {
		fontWeight: 'bold',
		fontSize: '25px',

		// textAlign: "left"
	},
	description: {
		textAlign: 'justfy',
		margin: '1rem',
		padding: '1rem',
	},
	Generalimg: {},
	author: {
		margin: '10px',
		textAlign: 'left',
	},
	mediaDiv: {
		margin: '10px',
	},
	link: {
		textDecoration: 'none',
	},
	media: {
		height: '90px',
		width: '150px',
		paddingTop: '30.25%', // 16:9,
		// marginLeft: "20px",
		border: '1px solid red',
	},
}));

const ArticleHome = ({ getPosts, post: { posts, loading, _id }, user, getCurrentProfile, isAuthenticated }) => {
	useEffect(() => {
		getCurrentProfile();
		getPosts();
	}, [getPosts]);
	const classes = useStyles();
	console.log('hey', posts[0]);
	const Medical = [];
	const Social = [];
	const General = [];
	const Crisis = [];
	const Humor = [];
	const Hidden = [];

	posts.forEach((post) => {
		switch (post.category) {
			case 'General':
				General.push(post);
				break;

			case 'Medical':
				Medical.push(post);
				break;
			case 'Social':
				Social.push(post);
				break;
			case 'Crisis':
				Crisis.push(post);
				break;
			case 'Humor':
				Humor.push(post);
				break;
		}
	});
	console.log('Medical', Medical);
	let generalImg = General[0] ? General[0].titleImg : '';
	let medicalImg = Medical[0] ? Medical[0].titleImg : '';
	let socialImg = Social[0] ? Social[0].titleImg : '';

	return loading === null ? (
		<div>Hi </div>
	) : (
		<div className={classes.root}>
			<Appbar />

			<Grid container spacing={3} className={classes.gridParent}>
				<Grid item xs={12}></Grid>
				<Grid item xs={6} style={{ marginLeft: '0.5rem' }}>
					<Link to={`/article/${General.length ? General[0]._id : General._id}`} className={classes.link}>
						<Card style={{ width: '100%', height: '400px' }} className="animated zoomIn delay-1s">
							{' '}
							<Container
								style={{
									background: `url(${General.length ? generalImg : img})`,
									height: '400px',
									width: '100%',
									color: 'white',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<div
									style={{
										top: '60%',
										position: 'relative',
										width: '100%',
									}}
								>
									<div
										style={{
											height: '150px',
											paddingTop: '10%',
											paddingBottom: '10%',
											// height: '100px',
											width: '100%',
											fontSize: '25px',
											fontWeight: 'bold',
											background:
												'linear-gradient(90deg, rgba(122,109,109,0) 0%, rgba(207,207,221,0.6334908963585435) 45%, rgba(227,237,238,0) 100%)',
										}}
										dangerouslySetInnerHTML={{
											__html: General.length ? General[0].title : '',
										}}
									/>
									<div
										style={{
											position: 'absolute',
											top: '45%',
											right: '5%',
											display: 'flex',
											color: 'lightblue',
											fontFamily: 'cursive',
											fontSize: '1rem',
											fontWeight: 'bolder',
										}}
									>
										<div style={{ marginRight: '5px' }}>
											<RemoveRedEyeIcon />
										</div>
										<div>Views : {General.length ? General[0].views : ''}</div>
									</div>
								</div>
							</Container>
						</Card>
					</Link>
				</Grid>
				<Grid
					className="animated fadeIn delay-2s"
					item
					xs={5}
					style={{
						height: '400px',
						marginLeft: '0rem',
						overflow: 'scroll',
						overflowX: 'hidden' /* Hide horizontal scrollbar */,
					}}
				>
					{General.slice(1).map((post) => (
						<Link to={`/article/${General.length ? post._id : post._id}`} className={classes.link}>
							<Paper style={{ width: '500px' }}>
								<Card style={{ width: 'fit-content' }}>
									{' '}
									<Container
										style={{
											background: `url(${General.length ? post.titleImg : img})`,
											height: '250px',
											width: '500px',
											margin: '0.5rem',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
										}}
									>
										<div
											style={{
												top: '60%',
												position: 'relative',
												width: '100%',
												textAlign: 'center',
												height: '10rem',
											}}
										>
											<div
												style={{
													fontSize: '25px',
													opacity: '1',
													width: '100%',
													height: '400px',
													paddingTop: '5%',
													paddingBottom: '5%',
													background:
														'linear-gradient(90deg, rgba(122,109,109,0) 0%, rgba(207,207,221,0.6334908963585435) 45%, rgba(227,237,238,0) 100%)',
													fontWeight: 'bold',
												}}
												dangerouslySetInnerHTML={{
													__html: General.length ? post.title : '',
												}}
											/>
											<div
												style={{
													position: 'absolute',
													top: '45%',
													right: '3%',
													display: 'flex',
													color: 'lightblue',
													fontFamily: 'cursive',
													fontSize: '1rem',
												}}
											>
												<div style={{ marginRight: '5px' }}>
													<RemoveRedEyeIcon />
												</div>
												<div>
													Views :{' '}
													{post.views > 1000
														? (post.views / 1000).toFixed(2) + 'k'
														: post.views}
												</div>
											</div>
										</div>
									</Container>
								</Card>
							</Paper>
						</Link>
					))}
				</Grid>

				<Grid item xs={4} className="animated bounceIn delay-3s">
					<Grid item>
						<Link to={`/article/${Medical.length ? Medical[0]._id : Medical._id}`} className={classes.link}>
							<Card className={classes.root1}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="150"
										width="120"
										image={Medical.length ? medicalImg : img}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											style={{
												maxWidth: '400px',
												maxHeight: '130px',
												overflow: 'hidden',
												fontWeight: 'bold',
												fontSize: '1.2rem',
											}}
										>
											<div
												dangerouslySetInnerHTML={{
													__html: Medical.length ? Medical[0].title : '',
												}}
											/>
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<div
										style={{
											position: 'relative',
											right: '-70%',
											display: 'flex',
											color: 'black',
											fontFamily: 'cursive',
											fontSize: '1rem',
										}}
									>
										<div style={{ marginRight: '5px' }}>
											<RemoveRedEyeIcon />
										</div>
										<div>Views : {Medical.length ? Medical[0].views : ''}</div>
									</div>
								</CardActions>
							</Card>
						</Link>
					</Grid>
				</Grid>
				<Grid item xs={4} className="animated bounceIn delay-4s">
					<Grid item>
						<Link to={`/article/${Social.length ? Social[0]._id : Social._id}`} className={classes.link}>
							<Card className={classes.root1}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="150"
										width="100"
										image={Social.length ? socialImg : img}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											style={{
												maxWidth: '400px',
												fontWeight: 'bold',
												fontSize: '1.2rem',
												maxHeight: '130px',
												overflow: 'hidden',
											}}
										>
											<div
												dangerouslySetInnerHTML={{
													__html: Social.length ? Social[0].title : '',
												}}
											/>
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<div
										style={{
											position: 'relative',
											right: '-70%',
											display: 'flex',
											color: 'black',
											fontFamily: 'cursive',
											fontSize: '1rem',
										}}
									>
										<div style={{ marginRight: '5px' }}>
											<RemoveRedEyeIcon />
										</div>
										<div>Views : {Social.length ? Social[0].views : ''}</div>
									</div>
								</CardActions>
							</Card>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

ArticleHome.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
	user: state.auth.user,
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getPosts, getCurrentProfile })(ArticleHome);
