import React, { useState } from "react";
import "../App.css";

const ContactForm = ({ name, email }) => {
	const [formData, setFormData] = useState({
		name: name || "",
		email: email || "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await fetch("https://api.emailjs.com/api/v1.0/email/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					service_id: "YOUR_SERVICE_ID",
					template_id: "YOUR_TEMPLATE_ID",
					user_id: "YOUR_USER_ID",
					template_params: {
						name: formData.name,
						email: formData.email,
						message: formData.message,
					},
				}),
			});
			alert("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Error sending message. Please try again later.");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='form-container'>
				<label className='drawer-text' htmlFor='name'>
					Name(optional):
				</label>
				<input
					className='input-field'
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
				/>

				<label className='drawer-text' htmlFor='email'>
					Email*:
				</label>
				<input
					className='input-field'
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label className='drawer-text' htmlFor='message'>
					Message*:
				</label>
				<textarea
					id='message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					rows='10'
				/>

				<button
					style={{
						margin: "2%",
						width: "fit-content",
						padding: "1%",
					}}
					type='submit'
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
