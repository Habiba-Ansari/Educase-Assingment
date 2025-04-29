import React from 'react';

const Login = ({ setCurrentPage }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signin to your<br />PopX account</h2>
      <p style={styles.subheading}>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

      <div style={styles.field}>
        <label style={styles.floatingLabel}>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          readOnly
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.floatingLabel}>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          readOnly
          style={styles.input}
        />
      </div>

      <button
        style={styles.button}
        onClick={() => setCurrentPage('account')}
      >
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '320px',
    margin: '0 auto',
    padding: '24px 20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
    marginTop: '40px',
  },
  heading: {
    fontSize: '22px',
    fontWeight: '700',
    margin: 0,
    paddingBottom: '8px',
  },
  subheading: {
    color: '#888',
    fontSize: '14px',
    margin: 0,
    marginBottom: '24px',
    lineHeight: '1.4',
  },
  field: {
    position: 'relative',
    marginBottom: '20px',
  },
  floatingLabel: {
    position: 'absolute',
    top: '-6px',
    left: '12px',
    backgroundColor: '#fff',
    padding: '0 4px',
    fontSize: '12px',
    color: '#6C47FF',
    zIndex: 1,
  },
  input: {
    width: '100%',
    padding: '14px 12px 10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    backgroundColor: '#f9f9f9',
    color: '#999',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ccc',   // stays gray
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Login;
