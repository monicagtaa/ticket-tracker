import "./App.scss";
import team from "./data/team.js"
import AppCard from "./components/AppCard/AppCard";


function App() {
  return (
    <div className="app">
        <h1 className="app__title">Ticket Tracker</h1>
        <div className="app__container">
        <AppCard cardsArr={team} />
        </div>
    </div>
  );
}

export default App;
