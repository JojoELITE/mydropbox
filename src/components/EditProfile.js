import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const EditProfile = () => {
  const [newEmail, setNewEmail] = useState('');
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const handleUpdateProfile = async () => {
    try {
      const updatedUser = await Auth.updateUserAttributes(Auth.user, { email: newEmail });
      console.log('Profile updated successfully:', updatedUser);
      setIsUpdateSuccess(true);
    } catch (error) {
      console.error('Error updating profile:', error);
      setIsUpdateSuccess(false);
    }
  };

  return (
    <div className='mt-5 pt-5'>
      <h2>Edit Profile</h2>
      <div className='my-3'>
        <label>New Email:</label><br/>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className='p-1'
          style={{border: '1px solid gray'}}
        />
      </div>
      <button className='btn btn-primary border p-2' onClick={handleUpdateProfile}>Update Profile</button>
      {isUpdateSuccess && <p>Profile updated successfully!</p>}
    </div>
  );
};

export default EditProfile;
