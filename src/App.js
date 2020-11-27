import './App.css';
import { Switch, Route } from "react-router-dom";
import {Create, Preview,
Home} from './app/containers';

function App() {
  return (

      <Switch>
        <Route path="/create">
          <Create />
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
