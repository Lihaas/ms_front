import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TestHeader from "./Components/Header/TestHeader";
import AboutUs from "./View/AboutUs";
import SignUp from "./View/Sign Up/Index"
import Home from "./View/Home";
import NotesPaper1 from "./View/Notes/Paper1"
import NotesPaper2 from "./View/Notes/Paper2"
import ContactUs from "./View/ContactUs/index.jsx";
import Dashboard from "./View/dashboard/index"
import Login from "./View/Login/index"
import CoursesPaper1 from "./View/Courses/Paper1"
import CoursesPaper2 from "./View/Courses/Paper2"
import TestSeries from "./View/Test Series/Index"
import TestPage from "./View/TestPage/Index.jsx"

const App = () => {
  if(window.location.href==="http://localhost:3000/test-page" )
  {
    return(
      <Router>
        <switch>
          <TestHeader />
          <div style={{paddingTop: "5em"}}>
            <Route exact path="/test-page" component={TestPage} />
            </div>
        </switch>
      </Router>
    )
  }else
  {
    return (
      <Router>    
        <Header />
        <div className="content-wrapper" >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/courses/paper1" component={CoursesPaper1} />
            <Route exact path="/courses/paper2" component={CoursesPaper2} />
            <Route exact path="/notes/paper1" component={NotesPaper1} />
            <Route exact path="/notes/paper2" component={NotesPaper2} />
            <Route exact path="/notes/testseries" component={NotesPaper2} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test-series" component={TestSeries} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};

export default App;
