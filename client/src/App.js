import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './views/Homescreen';
import { MycartProvider } from './contexts/CartContext';
import { BrowserRouter, Route } from 'react-router-dom'
import Nab from './component/Nab';
import CartScreen from './views/CartScreen';

function App() {

  return (
    <MycartProvider>
        <div>
        <BrowserRouter>
          <Nab />
          <Route path="/" exact component = {Homescreen}/>
          <Route path="/cart" exact component = {CartScreen}/>
        </BrowserRouter>
    </div>
      </MycartProvider>
  );
}

export default App;
