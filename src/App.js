import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem';

const App = () => {
  const myTitle = 'Github Users';
  const users = [
    {
      id: 1,
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    },
    {
      id: 2,
      login: 'defunkt',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      html_url: 'https://github.com/defunkt',
    },
    {
      id: 3,
      login: 'pjhyett',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      html_url: 'https://github.com/pjhyett',
    },
  ];

  const showUserName = x => alert('Hello ' + x);
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          {users.map((user, i) => (
            <UserItem
              login={user.login}
              // avatar_url={user.avatar_url}
              html_url={user.html_url}
              key={user.id}
              myFunc={showUserName}
              // key={i}
            >
              <img
                src={user.avatar_url}
                className="card-img-top"
                alt="avatar"
              />
            </UserItem>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
