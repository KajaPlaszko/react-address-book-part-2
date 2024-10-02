import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import CreateContact from "./components/CreateContact";


function App() {
    return (
        <Router>
        <nav>
          <Link to="/contacts">Contacts</Link> |{" "}
          <Link to="/create">Create Contact</Link>
        </nav>
  
        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/create" element={<CreateContact />} />
        </Routes>
      </Router>
    );
    
}

export default App;
