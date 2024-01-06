import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginView from './presentation/view/login/LoginView';
import SignupView from './presentation/view/signup/SignupView';
import MainView from './presentation/view/main/MainView';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route exact path="/" element={<LoginView/>} />
        <Route exact path="/signup" element={<SignupView/>} />
        <Route exact path ="/main/:address" element={<MainView/>} />
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
