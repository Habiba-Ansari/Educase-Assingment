import React from 'react';
import profilePic from './profilepic.jpeg';
import camera from './camera.png';

const Account = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.topSection}>
        <h5 style={styles.heading}>Account Settings</h5>
      </div>
      <div style={styles.bottomSection}>
        <div style={styles.profileCard}>
          <div style={styles.leftSection}>
            <div style={styles.imageWrapper}>
              <img src={profilePic} alt="Profile" style={styles.profilePic} />
              <img src={camera} alt="Edit" style={styles.cameraIcon} />
            </div>
          </div>
          <div style={styles.rightSection}>
            <div style={styles.name}>Marry Doe</div>
            <div style={styles.email}>Marry@Gmail.Com</div>
          </div>
        </div>
        <p style={styles.description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div style={styles.bottomBorder}></div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: 'sans-serif',
  },
  topSection: {
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  heading: {
    fontSize: '16px',
    color: '#000000',
    fontWeight: 'normal',
    margin: 0,
  },
  bottomSection: {
    backgroundColor: '#F5F5F5', // very light grey
    padding: '20px',
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  leftSection: {
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    width: '60px',
    height: '60px',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: '-4px',
    right: '-4px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },
  rightSection: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: '14px',
    marginBottom: '4px',
  },
  email: {
    fontSize: '12px',
    color: 'gray',
  },
  description: {
    fontSize: '11px',
    color: '#333',
    marginTop: '20px',
    paddingRight: '20px',
    borderBottom: '1px dashed #aaa',
    paddingBottom: '10px',
  },
  bottomBorder: {
    marginTop: '20px',
    borderBottom: '1px dashed #aaa',
  },
};

export default Account;
