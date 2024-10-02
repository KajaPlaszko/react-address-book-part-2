import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact() {
	const [contact, setContact] = useState({
		firstName: "",
		lastName: "",
		gender:"",
		email:"",
		jobTitle:"",
		street: "",
		city: "",
		latitude: "",
		longitude: "",
		favouriteColour: "", 
		profileImage: ""

	});

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		fetch("https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(contact),
		})
			.then((response) => response.json())
			.then(() => {
				navigate("/contacts");
			});
	}

	function handleChange(e) {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div className="form-container">
			<div className="form-card">
				<h1>Create Contact</h1>
				<form onSubmit={handleSubmit}>
					<label>
						First Name:
						<input
							type="text"
							name="firstName"
							value={contact.firstName}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Last Name:
						<input
							type="text"
							name="lastName"
							value={contact.lastName}
							onChange={handleChange}
							required
						/>
					</label>
					<br />
					<label>
						Gender:
						<input
							type="text"
							name="gender"
							value={contact.gender}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Email:
						<input
							type="text"
							name="email"
							value={contact.email}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Job Title:
						<input
							type="text"
							name="jobTitle"
							value={contact.jobTitle}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Street:
						<input
							type="text"
							name="street"
							value={contact.street}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						City:
						<input
							type="text"
							name="city"
							value={contact.city}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						City:
						<input
							type="text"
							name="city"
							value={contact.city}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Latitude:
						<input
							type="text"
							name="latitude"
							value={contact.latitude}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Longitude:
						<input
							type="text"
							name="longitude"
							value={contact.longitude}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Favourite Colour:
						<input
							type="text"
							name="favouriteColour"
							value={contact.favouriteColour}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<label>
						Profile Image:
						<input
							type="text"
							name="profileImage"
							value={contact.profileImage}
							onChange={handleChange}
							required
						/>
					</label>
					<br />

					<button type="submit">Create</button>
				</form>
			</div>
		</div>
	);
}

export default CreateContact;
