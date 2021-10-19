import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import DentalDetails from './components/pages/Services/DentalDetails/DentalDetails';
import Header from './components/pages/Home/Home/Header/Header';
import Footer from './components/pages/Footer/Footer';
import Blog from './components/pages/Home/Blog/Blog';
import Service from './components/pages/OurServices/Service';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Example from './components/pages/Home/Home/Example';
import NoutFound from './components/pages/NotFound/NoutFound';
import Dental from './components/pages/Services/Dental/Dental';
import DentalServices from './components/pages/Services/DentalServices/DentalServices';


{/*  <Link to="/home"><button className="rounded px-5 py-2 bg-pink-600 text-white mt-7 items-center"><i class="fas fa-arrow-left "></i> Home</button></Link>
            </div>*/}

function App() {
  return (
  <AuthProvider>
     <Router>
    <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
         <Dental></Dental>
       </Route>
       <Route path="/home">
       <Home></Home>
       </Route>
       <PrivetRoute path="/services">
         <Service></Service>
       </PrivetRoute>
      <PrivetRoute  path="/detail/:detailId">
        <DentalDetails></DentalDetails>
      </PrivetRoute>
      <Route path="/blog">
        <Blog></Blog>
      </Route>
      <Route path="/about">
        <AboutUs></AboutUs>
      </Route>
      <PrivetRoute path="/contact">
        <Contact></Contact>
      </PrivetRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="*">
        <NoutFound></NoutFound>
      </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  </AuthProvider>
  );
}

export default App;
