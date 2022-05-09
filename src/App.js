import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import PersonalMentalizer from './pages/PersonalMentalizer';
import Register from './pages/Register';
import SurveyCareer from './pages/SurveyCareer';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/personalmentalizer" element={<PersonalMentalizer />} />
      <Route path="/register" element={<Register />} />
      <Route path="/surveycareer" element={<SurveyCareer />} />
    </Routes>


 
  );
}

export default App;
