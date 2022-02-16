
import Collumns from "./components/Collumns/Collumns";
import "./App.css";
import Header from "./components/Header";

const mass = [
    {
      "title": "TODO",
      "content": [],
    },
    {
      "title": "In Progress,",
      "content": []
    },
    {
      "title": "Testing",
      "content": []
    },
    {
      "title": "Done",
      "content": []
    }
  ];

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <div className="board-container">
          <span className="board-container__title">
            <p>Trello in React</p>
          </span>
          <div className="container-collumns">
          {mass.map((item, index) => (
            <Collumns title={item.title}/>
          )
          )}
          
          </div>
          {/* {mass.map((item, index) => {
            console.log(item.title);
            
            <Collumns title={item.title}/>
          })} */}
          
        </div>
      </div>
    </div>
  );
}

export default App;
