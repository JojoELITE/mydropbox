import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userProfile = await Auth.currentAuthenticatedUser();
      setUser(userProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-5 pt-5'>
      <h2 className='my-3'>User Profile</h2>
      <p>Username:</p>
      <h5><strong>{user.username}</strong></h5>
      <p className='mt-5 mb-2'>Email:</p>
      <h5><strong>{user.attributes.email}</strong></h5>
      {/* Add more profile information as needed */}
    </div>
  );
};

export default Profile;
