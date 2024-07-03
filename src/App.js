import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/MoviePage";
import ScrollManager from "./components/ScrollManager";

const App = () => (
  <Router>
    <div className="App">
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
