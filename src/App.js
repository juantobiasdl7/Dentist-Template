import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';

function App() {
    console.log("Heo");
  return (
    <Router>
        <Routes>
            <Route
                exact
                path={`${ process.env.PUBLIC_URL + "/" }`}
                component={ Home }/>
                
            {/* <Route
                exact
                path={ `${ process.env.PUBLIC_URL + "/news" }` }
                component={ News }
            />
            <Route
                exact
                path={ `${ process.env.PUBLIC_URL + "/news-single-post" }` }
                component={ NewsSinglePost }
            />
            <Route
                exact
                path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                component={ SearchResults }
            />
            <Route
                exact
                path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                component={ UserInterface }
            />
            <Route exact component={ page404 } /> */}
        </Routes>
    </Router>
  );
}

export default App;
