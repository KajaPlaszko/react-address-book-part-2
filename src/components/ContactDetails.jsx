import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function ContactDetails() {
	const { id } = useParams();
	const [contact, setContact] = useState(null);
    const navigate = useNavigate();


	useEffect(() => {
		fetch(`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${id}`)
			.then((response) => response.json())
			.then((data) => setContact(data));
	}, [id]);

    function handleDelete() {
		fetch("https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact", {
			method: "DELETE",
		}).then((response) => {
			if (response.ok) {
				navigate("/contacts");
			}
		});
	}

	if (!contact) {
		return <p>Loading...</p>;
	}

	return (
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>Street: {contact.street}</p>
            <p>City: {contact.city}</p>
            <button onClick={handleDelete}>Delete Contact</button>
        </div>
    );
}

export default ContactDetails;
