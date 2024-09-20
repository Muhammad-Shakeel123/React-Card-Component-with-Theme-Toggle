import React, { useEffect, useState } from 'react';

const GitHubProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Fetch the GitHub user profile
    fetch('https://api.github.com/users/Muhammad-Shakeel123')
      .then(response => response.json())
      .then(data => {
        // Set the avatar URL
        setAvatarUrl(data.avatar_url);
      })
      .catch(error => {
        console.error('Error fetching the GitHub profile:', error);
      });
  }, []);

  return (
    <div>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="GitHub Avatar"
          className='w-full p-4 rounded-full'
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GitHubProfile;
