import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

import { useState } from "react";

function App() {
	const [events, setEvents] = useState([]);
	const [showEvent, setShowEvent] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const addEvent = (event) => {
		setEvents((prevEvents) => {
			return [...prevEvents, event]
		})
		setShowModal(false);
	}

	const deleteItem = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return id !== event.id;
			});
		});
	};
	return (
		<div className="App">
			<Title title={"EventList"} subtitle={"List Your Events"} />
			{showEvent && (
				<div>
					<button onClick={() => setShowEvent(false)}>Hide</button>
				</div>
			)}
			{!showEvent && (
				<div>
					<button onClick={() => setShowEvent(true)}>Show</button>
				</div>
			)}
			{showEvent && <EventList events={events} deleteItem={deleteItem} />}
			{showModal && (
				<Modal>
					<NewEventForm addEvent={addEvent}/>
				</Modal>
			)}
			<div>
				<button className="add-event" onClick={() => setShowModal(true)}>Add Events</button>
			</div>
		</div>
	);
}

export default App;
