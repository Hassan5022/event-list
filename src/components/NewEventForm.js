import { useRef } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
    
    const title = useRef();
    const location = useRef();
    const date = useRef();

    const reset = () => {
        title.current.value = '';
        date.current.value = '';
        location.current.value = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {
            title: title.current.value,
            date: date.current.value,
            location: location.current.value,
            id: Math.floor(Math.random() * 100)
        }
        addEvent(event);
        reset();
    }

	return (
		<form id="form" onSubmit={handleSubmit}>
			<label htmlFor="input">Event Title:</label>
			<input ref={title} type="text" id="input" placeholder="Enter event title..." />
			<label htmlFor="date">Event Date;</label>
			<input ref={date} type="date" id="date" />
			<label htmlFor="select">Event Location:</label>
			<select ref={location} id="select">
				<option value="karachi">Karachi</option>
				<option value="lahore">Lahore</option>
				<option value="islamabad">Islamabad</option>
            </select>
            <button className="modal-btn">Submit</button>
		</form>
	);
}
