import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';
import { dishes } from './shared/dishes';

function App() {
  
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">MeDo</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
