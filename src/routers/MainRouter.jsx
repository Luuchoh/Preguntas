import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Navigate 
} from "react-router-dom";

//Views
import Home from "../views/Home";
import Question from "../views/Question";
import Results from "../views/Results";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="question" element={<Question />} />
        <Route exact path="result" element={<Results />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
