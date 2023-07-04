// import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/Profile';
import ProfileList from './components/profile/ProfileList';
import profile1 from './assets/profile1.png'

function App() {
  return (
    <div>
      {/* <h1>Hi this is a profile app</h1> */}
      {/* <h2><b>My profile</b></h2>
      <p>Name:</p>
      <p>Job:</p>
      <p>Company:</p> */}
      <ProfileList />
      
    </div>
  );
}

export default App;
