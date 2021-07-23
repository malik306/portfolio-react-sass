import Header from "./components/header.component";
import Project from "./components/project.component";
import GithubApi from "./components/githubapi.component";
import Footer from "./components/footer.component";
import About from "./components/aboutme.component";
import Resume from "./components/resume.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>{/*this is used to handle the Routing that is required*/}
        <Header />
        <Switch>{/*If we use switch then it is add the exact attribute in Route tag it will open single page */}
          <Route path="/" exact />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/project" component={Project} />
          <Route path="/githubapi" component={GithubApi} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}