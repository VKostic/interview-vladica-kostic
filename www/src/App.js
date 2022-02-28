import { TodoListPage } from './TodoListPage';
import { View } from './View';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<TodoListPage/>}>
          </Route>
          <Route path='/:id' element={<View/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
