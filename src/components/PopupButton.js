import React from 'react';

const SelectionComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Let me know !</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>User</button>
        <button style={styles.button}>Service Provider</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff', // Optional, set the background color if needed
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default SelectionComponent;
