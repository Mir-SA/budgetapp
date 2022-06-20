import "./App.css";
import { useState } from "react";
import Bar from "./components/Bar";
import Card from "./components/Card";
import { data } from "./state/data";

function App() {
  let [stateData, setData] = useState(data);

  function handleDelete(id) {
    return () => setData(stateData.filter((project) => project.id !== id));
  }

  let budgetTotal = function () {
    return stateData.reduce((acc, curr) => {
      return acc + curr.budget;
    }, 0);
  };

  return (
    <div className="App">
      <Bar totalProject={stateData.length} totalBudget={budgetTotal()} />
      <main>
        {stateData.map((proj) => {
          return (
            <Card
              key={proj.id}
              id={proj.id}
              budget={proj.budget}
              date={proj.date}
              name={proj.name}
              handleDelete={handleDelete(proj.id)}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
