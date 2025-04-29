import React from 'react';

const Home = ({ onCreateAccount , onLogin}) => {
  return (
    <div style={styles.container}>
      <div style={styles.bottomSection}>
        <h2 style={styles.heading}>Welcome to PopX</h2>
        <p style={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button style={styles.primaryButton}  onClick={onCreateAccount}>
            Create Account</button>
        <button style={styles.secondaryButton} onClick={onLogin}>Already Registered? Login</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f8f8f8',
    padding: '20px',
  },
  bottomSection: {
    width: '100%',
  },
  heading: {
    marginBottom: '8px',
    fontSize: '20px',
    fontWeight: '600',
    color: '#000000',
  },
  subText: {
    fontSize: '14px',
    color: '#888888',
    marginBottom: '24px',
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6C47FF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  secondaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#E5DBFF',
    color: '#fffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center'
  },
};

export default Home;
