import React, { useState } from 'react';

import { api } from '../../services/api';
import validateEmail from '../../utils/validateEmail';
import { Container, ButtonError } from './styles';

export default function NewsDesk() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameErrorForm, setNameErrorForm] = useState('');
  const [emailErrorForm, setEmailErrorForm] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setNameErrorForm(name.length < 4 ? 'Digite um nome válido' : '');
    setEmailErrorForm(
      !validateEmail.test(email) ? 'Digite um email válido' : ''
    );

    if (name.length < 4 || !validateEmail.test(email)) {
      console.log('errado');

      return;
    }

    const body = {
      name,
      email,
    };
    await api.post('/newsletter', body);
    setName('');
    setEmail('');
  }

  return (
    <Container>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <form action="">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            type="text"
          />
          {nameErrorForm && <p className="error">{nameErrorForm}</p>}
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            type="text"
          />
          {emailErrorForm && <p className="error">{emailErrorForm}</p>}
        </div>
        <button onClick={handleSubmit}>Eu quero!</button>
      </form>
    </Container>
  );
}
