import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
