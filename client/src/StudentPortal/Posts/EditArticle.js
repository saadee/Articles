import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { getPost } from '../../actions/post';
import { updatePost } from '../../actions/post';
import htmlToDraft from 'html-to-draftjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let artcleLoaded = false;

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

class TextEditor extends Component {
	state = { editorState: EditorState.createEmpty(), image: '' };
	componentDidMount = () => {
		this.props.getPost(this.props.match.params.id);
		// setTimeout(()=>{

		//   console.log("Post Title", this.props.post.post);
		// }, 2000);
	};

	componentWillUnmount = () => {
		artcleLoaded = false;
	};

	componentWillUpdate = (propsA, propsB) => {
		if (!this.props.post.post.content) {
			return;
		}

		if (!artcleLoaded) {
			artcleLoaded = true;
		} else {
			return false;
		}
		const contentBlock = htmlToDraft(this.props.post.post.content);
		if (contentBlock) {
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			const editorState = EditorState.createWithContent(contentState);
			this.setState({
				editorState,
			});
		}
	};
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
	updatef = () => {
		let image = this.state.image;

		let content = this.state.editorContentHtml;
		let id = this.props.loggedInUserId;

		console.log('checking');
		console.log($(this.state.editorContentHtml).find('h1').prevObject);

		let title = $(this.state.editorContentHtml).find('h1').prevObject[0].innerText || 'Untitled Article';

		let data = {
			title: title,
			content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),

			image,

			_id: this.props.post.post._id,
		};

		this.props.updatePost(data);
		toast.success('Your Post Has benn Updated !');
	};

	render() {
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
											if (data.size > 65700) {
												alert('File size is too big!');
											}
											c({ data: { link: dataUrl } });
										});
										// console.log(data)
									});
								},
							},
						}}
					/>
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
					{' '}
					<Button onClick={this.updatef} variant="contained" color="secondary">
						PUBLISH
					</Button>
					<ToastContainer autoClose={2000} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	loggedInUserId: state.auth.user._id,
	post: state.post,
});

export default connect(mapStateToProps, { getPost, updatePost })(TextEditor);
