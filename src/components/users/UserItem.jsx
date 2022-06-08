import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ login, html_url, children, myFunc }) => {
  // const { login, avatar_url, html_url } = props;
  // console.log(props);

  // const name = 'John';

  const handleClick = () => myFunc(login);

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        {children}
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a
            href={html_url}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            More
          </a>
          <a
            href="#!"
            onClick={handleClick}
            className="card-link"
            style={{ display: 'block' }}
          >
            show name
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  // avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default UserItem;
