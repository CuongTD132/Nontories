import { BrowserRouter } from "react-router-dom";
import UserRouter from "./routers/UserRouter";
import { UserProvider } from "./context/UserContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer />
        <UserRouter />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
