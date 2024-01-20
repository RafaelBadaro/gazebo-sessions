import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import MyNavBar from './components/MyNavBar/MyNavBar';

function App() {
  return (
    <div className="app">
      <MyNavBar />
      <Home />
      {/* <Main /> Router to other components  */}
    </div>
  );
}

export default App;
