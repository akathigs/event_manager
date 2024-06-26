import React, { useState, useEffect } from 'react';
import { Header } from './index.js';
import '../style/App.css';

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    try {
      const response = await fetch('http://192.168.0.110:3001/event'); // Ajuste a URL conforme necessário
      if (!response.ok) {
        throw new Error('Erro ao buscar eventos');
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  }

  async function participateEvent(eventId) {
    try {
      const response = await fetch(`http://192.168.0.110:3001/event/${eventId}/participate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: 'user-id' }) // Substitua pelo ID do usuário atual
      });
      if (!response.ok) {
        throw new Error('Erro ao participar do evento');
      }
      alert('Participação confirmada!');
      getEvents(); // Atualiza a lista de eventos após participar
    } catch (error) {
      console.error('Erro ao participar do evento:', error);
    }
  }

  return (
    <div>
      <Header />
      <div className="event-container">
        <h1>Eventos</h1>
        <ul className="event-list">
          {events.map((event) => (
            <li key={event._id} className="event-item">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p><strong>Data:</strong> {event.date}</p>
              <p><strong>Local:</strong> {event.location}</p>
              <button onClick={() => participateEvent(event._id)}>Participar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Event;
