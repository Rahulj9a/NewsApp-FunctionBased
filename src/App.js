import "./App.css";

import React, {useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
     let apiKey = "86a2c3d7283f445a9312dded5ba3abd4";
     const [progress, setProgress] = useState(2)
     
     
      
          return (
               <>
                    <Router>
                         <LoadingBar
                              color="#f11946"
                              progress={progress}
                         />
                         <Navbar />

                         <Routes>
                              <Route
                                   exact
                                   path="/"
                                   key="general"
                                   element={
                                        <News
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
                                             setProgress={ setProgress}
                                             pageSize="9"
                                             apiKey={ apiKey}
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
export default App
