import styles from './EventList.module.css';

export default function EventList({events, deleteItem}) {
  return (
      events.map((event) => (
        <div className={styles.event} key={event.id}>
          <h2>
            {event.title}
          </h2>
          <h2>
            {event.date} - {event.location}
          </h2>
          <button onClick={() => deleteItem(event.id)}>Delete</button>
        </div>
      ))
  )
}
