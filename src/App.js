import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
     apiKey = process.env.REACT_APP_NEWS_API 
     state = {
          progress: 2,
     };
     setProgress = (progress) => {
          this.setState({ progress: progress });
     };
     render() {
          return (
               <>
                    <Router>
                         <LoadingBar
                              color="#f11946"
                              progress={this.state.progress}
                         />
                         <Navbar />

                         <Routes>
                              <Route
                                   exact
                                   path="/"
                                   key="general"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="general"
                                        />
                                   }
                              ></Route>
                              <Route
                                   exact
                                   path="/business"
                                   key="business"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="business"
                                        />
                                   }
                              ></Route>
                              <Route
                                   exact
                                   path="/entertainment"
                                   key="entertainment"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="entertainment"
                                        />
                                   }
                              ></Route>
                              <Route
                                   exact
                                   path="/health"
                                   key="health"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="health"
                                        />
                                   }
                              ></Route>
                              <Route
                                   exact
                                   path="/science"
                                   key="science"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="science"
                                        />
                                   }
                              ></Route>
                              <Route
                                   exact
                                   path="/sports"
                                   key="sports"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="sports"
                                        />
                                   }
                              ></Route>
                              <Route
                                   exact
                                   path="/technology"
                                   key="technology"
                                   element={
                                        <News
                                             setProgress={this.setProgress}
                                             pageSize="9"
                                             apiKey={this.apiKey}
                                             country="in"
                                             category="technology"
                                        />
                                   }
                              ></Route>
                         </Routes>
                    </Router>
               </>
          );
     }
}
