import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </Fragment>
  );
};

export default App;
