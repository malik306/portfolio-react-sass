import Header from "./components/header.component";
import Project from "./components/project.component";
import GithubApi from "./components/githubapi.component";
import ContactUs from "./components/contactus.component";
import Footer from "./components/footer.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>{/*this is used to handle the Routing that is required*/}
        <Header />
        <Switch>{/*If we use switch then it is add the exact attribute in Route tag it will open single page */}
          <Route path="/" exact component={HomeCustom} />
          <Route path="/project" component={Project} />
          <Route path="/githubapi" component={GithubApi} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
const HomeCustom = () => {
  return (
    <>
      <h5>Home</h5>
    </>
  )
}