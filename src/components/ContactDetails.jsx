import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactDetails() {
	const { id } = useParams();
	const [contact, setContact] = useState(null);

	useEffect(() => {
		fetch(`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${id}`)
			.then((response) => response.json())
			.then((data) => setContact(data));
	}, [id]);

	if (!contact) {
		return <p>Loading...</p>;
	}

	return (
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>Street: {contact.street}</p>
            <p>Cityr: {contact.city}</p>
        </div>
    );
}

export default ContactDetails;
