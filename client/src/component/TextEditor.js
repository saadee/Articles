import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import Button from '@material-ui/core/Button';
import { addArticle } from '../actions/post';
import $ from 'jquery';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link} from 'react-router-dom';

function toDataURL(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		var reader = new FileReader();
		reader.onloadend = function () {
			callback(reader.result);
		};
		reader.readAsDataURL(xhr.response);
	};
	xhr.open('GET', url);
	xhr.responseType = 'blob';
	xhr.send();
}
let category = ['General', 'Social', 'Medical', 'Crisis'];
class TextEditor extends Component {
	state = { editorState: EditorState.createEmpty(), image: '', category: '' };
	changeFileHandle = (e) => {
		const objectURL = e.target.files[0];
		if (objectURL.size > 52000) {
			alert('File size is too big!');
		}
		toDataURL(URL.createObjectURL(e.target.files[0]), (dataUrl) => {
			console.log('RESULT:', dataUrl);
			this.setState({ image: dataUrl });
		});
	};
	onCategory = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};
	onChange = (editorState) => {
		this.setState({
			editorState,
			editorContentHtml: stateToHTML(editorState.getCurrentContent()),
		});
	};
	onPublish = () => {
		let image = this.state.image;
		let content = this.state.editorContentHtml;
		let id = this.props.loggedInUserId;
		let ctg = this.state.category;
		console.log('checking');
		console.log($(this.state.editorContentHtml).find('h1').prevObject);
		console.log('Image', $(this.state.editorContentHtml).find('img').prevObject);

		let title = $(this.state.editorContentHtml).find('h1').prevObject[0].innerText || 'Untitled Article';

		let data = {
			title: title,
			content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),

			image,
			ctg,
			id,
		};
		data.ArtImg = $(this.state.editorContentHtml).find('img').prevObject[0].src;
		debugger;
		this.props.addArticle(data);
		toast.success('Article has been Publshed');
	};

	render() {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/login" />;
		}
		return (
			<div id="textEditorDiv">
				<div
					style={{
						// border: "1px solid red",
						width: '1000px',
						height: '600px',
						overflow: 'scroll',
						backgroundColor: '#C0C0C0',
						margin: 'auto',
					}}
				>
					<Editor
						style={{ overflow: 'scroll', border: '12px solid green' }}
						id="textEditorID"
						editorState={this.state.editorState}
						wrapperClassName="demo-wrapper"
						editorClassName="editer-content"
						onEditorStateChange={this.onChange}
						value="Begin Typing here"
						toolbar={{
							image: {
								uploadEnabled: true,
								previewImage: true,
								urlEnabled: true,

								uploadCallback: (data) => {
									return new Promise((c, e) => {
										debugger;
										toDataURL(URL.createObjectURL(data), (dataUrl) => {
											// console.log("RESULT:", dataUrl);
											c({ data: { link: dataUrl } });
										});
										// console.log(data)
									});
								},
							},
						}}
					/>
				</div>
				<div>
					<FormControl
						variant="filled"
						style={{
							width: '200px',
						}}
					>
						<InputLabel id="demo-simple-select-filled-label">Select Category</InputLabel>
						<Select
							labelId="demo-simple-select-filled-label"
							id="demo-simple-select-filled"
							name="category"
							value={this.state.category}
							onChange={(e) => this.onCategory(e)}
						>
							{category.map((cty) => (
								<MenuItem value={cty}>{cty}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div
					id="editorPublishButton"
					style={{
						width: 'fit-content',
						margin: 'auto',
						marginTop: '1rem',
						// position: "absolute",
						// right: "10%",
						// top: "30%"
					}}
				>
					<Button onClick={this.onPublish} variant="contained" color="secondary">
						PUBLISH
					</Button>
					<ToastContainer />
					<Link to="/" style={{ textDecoration: 'none', margin: '1rem' }}>
						<Button variant="outlined" color="primary" style={{ margin: '1rem' }}>
							View Articles
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	loggedInUserId: state.auth.user._id,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addArticle })(TextEditor);
