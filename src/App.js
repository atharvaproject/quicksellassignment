
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import axios from "axios";
import Card from './Card';
function App() {

        
        const [tickets, setTickets] = useState([]);
      
  const [users, setUsers] = useState([]);
  const getTickets = async () => {
    try {
      const res = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      setTickets(res.data.tickets);
      console.log(res.data.tickets);
      setUsers(res.data.users);
      //setOrder();
      
    } catch (err) {}
  };
  useEffect(() => {
    getTickets();
  }, []);
 
  return (
    <div className="App">
      <Navbar />
      <div className="card-list">
      {tickets.map(tick => (
        <Card key={tick.id} tick={tick} />
      ))}
    </div>
    </div>


  );

}

export default App;
