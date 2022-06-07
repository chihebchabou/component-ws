import React from 'react';

const UserItem = () => {
  const user = {
    id: 1,
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={user.avatar_url} className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <a
          href={user.html_url}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
