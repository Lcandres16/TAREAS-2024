import React, { useState } from 'react';

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16,
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  }

  const handleSave = () => {
    localStorage.setItem('character', JSON.stringify(character));
    alert('¡Cambios guardados!');
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Character Stats Form</h1>
        <form style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Name:</label>
            <input
              style={styles.input}
              name="name"
              value={character.name}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Strength:</label>
            <input
              style={styles.input}
              name="strength"
              value={character.strength}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Intelligence:</label>
            <input
              style={styles.input}
              name="intelligence"
              value={character.intelligence}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Charisma:</label>
            <input
              style={styles.input}
              name="charisma"
              value={character.charisma}
              onChange={handleChange}
            />
          </div>
          <button style={styles.button} type="button" onClick={handleSave}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  },
  formContainer: {
    width: '400px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#757575',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#616161',
  },
};
