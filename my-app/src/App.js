import logo from './logo.svg';
import './App.css';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
      <HTTPHooks />
      {/* <HTTPRequests /> */}
      {/* <HTTPPost /> */}
    </div>
  );
}

export default App;
