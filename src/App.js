import './assets/css/style.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import { properties } from './mock/properties';
import Home from './components/Home';

function App() {
  return (
<>
<Router>
  <Switch>
       <Route exact path="/" render={ () => <Home/> } />
        <Route
          exact
          path="/property/:id"
          render={({ match }) => (
            <ProductDetails
              product={properties.find(
                (product) => String(product.id) === match.params.id
              )}
            />
          )}
        />
  </Switch>
   <Contact />
   <Footer />
  </Router>
</>
 
   
  );
}

export default App;