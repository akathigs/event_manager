import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from './index.js';
import '../style/App.css';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      name: title,
      description: description,
      date: date,
      location: location
    };

    try {
      await axios.post('http://192.168.0.110:3001/event', newEvent);
      alert('Evento criado com sucesso!');
      navigate('/myEvent');
    } catch (error) {
      console.error('Erro ao criar evento:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="create-event-container">
        <h1>Criar Evento</h1>
        <form className="create-event-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Título do Evento</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="date">Data do Evento</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="location">Local</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Criar Evento</button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
