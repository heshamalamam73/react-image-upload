import React, { Component } from 'react'
import axios from 'axios'





export default class Photos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [
				"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				"https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			],
			image: '',
		}
	}


	handleChange = (e) => {
		const cFile = e.target.files[0];
		if (cFile === undefined) {
			alert('nothing file selected')
			return false;
		}
		else if (cFile && cFile.size >= 10485760) {
			alert('file selected is too larg please select another file ')
			cFile = ''
		} else {
			const data = new FormData();
			const file = cFile
			data.append('file', file)
			data.append('upload_preset', "$$$your upload preset password go here $$$ ");
			axios.post('https://cors-anywhere.herokuapp.com/ &&& your cloudinary link go here &&& ', data,
			)
				.then(res => {
					const url = res.data.secure_url
					const images = this.state.images
					images.push(url);
					this.setState({
						image: "",
						images: images
					})

				})
				.catch(err => { console.log(err) })
		}



	}

	render() {
		const { images } = this.state

		return (
			<div className='photo-page'>
				<form onSubmit={this.handleSubmit}>
					<label id='upload-btn'>
						uploud image
						<input style={{ display: 'none' }} onChange={this.handleChange} type='file' />
					</label>


				</form>
				<div className='images' >
					{
						images.map(image => (
							<div key={image._id} >
								<img height='206px' width='206px' src={image} />


							</div>
						))
					}
				</div>

			</div>
		)

	}
}





