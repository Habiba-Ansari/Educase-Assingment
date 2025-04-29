import React from 'react';

const CreateAccount = ({setCurrentPage}) => {
    
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Create your<br />PopX account
      </h2>

      {/* Full Name */}
      <div style={styles.inputGroup}>
        <label style={styles.floatingLabel}>Full Name<span style={styles.required}>*</span></label>
        <input style={styles.floatingInput} value="Marry Doe" readOnly />
      </div>

      {/* Phone Number */}
      <div style={styles.inputGroup}>
        <label style={styles.floatingLabel}>Phone number<span style={styles.required}>*</span></label>
        <input style={styles.floatingInput} value="Marry Doe" readOnly />
      </div>

      {/* Email */}
      <div style={styles.inputGroup}>
        <label style={styles.floatingLabel}>Email address<span style={styles.required}>*</span></label>
        <input style={styles.floatingInput} value="Marry Doe" readOnly />
      </div>

      {/* Password */}
      <div style={styles.inputGroup}>
        <label style={styles.floatingLabel}>Password<span style={styles.required}>*</span></label>
        <input style={styles.floatingInput} value="Marry Doe" readOnly />
      </div>

      {/* Company Name */}
      <div style={styles.inputGroup}>
        <label style={styles.floatingLabel}>Company name</label>
        <input style={styles.floatingInput} value="Marry Doe" readOnly />
      </div>

      {/* Agency Question */}
      <div style={{ marginTop: '20px' }}>
        <label style={styles.radioLabel}>Are you an Agency?<span style={styles.required}>*</span></label>
        <div style={styles.radioGroup}>
          <label style={styles.radioOption}>
            <input type="radio" checked readOnly />
            <span style={styles.radioText}>Yes</span>
          </label>
          <label style={styles.radioOption}>
            <input type="radio" disabled />
            <span style={styles.radioText}>No</span>
          </label>
        </div>
      </div>

      {/* Create Button */}
      <button style={styles.createBtn} onClick={() => setCurrentPage('account')}>Create Account</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#000',
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '24px',
  },
  floatingLabel: {
    position: 'absolute',
    top: '-10px',
    left: '12px',
    backgroundColor: '#fff',
    padding: '0 6px',
    fontSize: '12px',
    color: '#6C47FF',
    zIndex: 1,
  },
  floatingInput: {
    width: '100%',
    padding: '16px 12px 10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    color: '#000',
    boxSizing: 'border-box',
  },
  required: {
    color: 'red',
    marginLeft: '2px',
  },
  radioLabel: {
    fontSize: '12px',
    color: '#6C47FF',
    fontWeight: '500',
  },
  radioGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  radioText: {
    marginLeft: '6px',
    fontSize: '13px',
  },
  createBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6C47FF',
    color: '#fff',
    fontWeight: '600',
    borderRadius: '6px',
    fontSize: '14px',
    border: 'none',
    marginTop: '30px',
    cursor: 'pointer',
  },
};

export default CreateAccount;
