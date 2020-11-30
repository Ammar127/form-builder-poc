import './App.css';
import { Switch, Route } from "react-router-dom";
import {Create, Preview,
Home} from './app/containers';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
  
      <Switch>
        <Route path="/create">
             <DndProvider backend={HTML5Backend}> <Create />    </DndProvider>
        </Route>
        <Route path="/preview">
          <Preview />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
 
  );
}

export default App;
