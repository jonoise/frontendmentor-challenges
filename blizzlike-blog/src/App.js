import "./App.css";
import ScrollToTop from "./Router/scrollToTop";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <div className="main-background">
              <Navbar />
              <div className="main-content">
                <div className="container">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/blog" component={Blog} />
                </div>
              </div>
            </div>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
