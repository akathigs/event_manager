import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Header } from './index.js';
import '../style/App.css';
import { FaPlus } from 'react-icons/fa';

const MyEvent = () => {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [participatingEvents, setParticipatingEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const createdResponse = await axios.get('http://192.168.0.110:3001/event/'); // Ajuste a URL conforme necessário
        setCreatedEvents(createdResponse.data);

        const participatingResponse = await axios.get('http://192.168.0.110:3001/event/'); // Ajuste a URL conforme necessário
        setParticipatingEvents(participatingResponse.data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = () => {
    navigate('/createEvent');
  };

  return (
    <div>
      <Header />
      <div className="my-events-container">
        <h1>Meus Eventos</h1>
        <div className="events-section">
          <h2>Eventos que eu criei</h2>
          <ul className="event-list">
            {createdEvents.map((event) => (
              <li key={event.id} className="event-item">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p><strong>Data:</strong> {event.date}</p>
                <p><strong>Local:</strong> {event.location}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="events-section">
          <h2>Eventos que eu participo</h2>
          <ul className="event-list">
            {participatingEvents.map((event) => (
              <li key={event.id} className="event-item">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p><strong>Data:</strong> {event.date}</p>
                <p><strong>Local:</strong> {event.location}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="floating-button" onClick={handleCreateEvent}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default MyEvent;
