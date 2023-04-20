import './App.css';
import BucketList from './Example/BucketList';
import MyProfile, { Toolbar } from './Profile';
import {RenderList} from './RenderList';
import Sculpture from './sculpture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>App</h1>
       {/* <MyProfile /> */}
        {/* <RenderList /> */}
      {/* <Toolbar /> */}
      {/* <Sculpture /> */}
      <BucketList />
      </header>
    </div>
  );
}

export default App;
