import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";




function App() {
  return (
   <div>
    <Router>
       <Navbar />
       <Routes>

         <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/contact" element={<Contact />} />
         <Route exact path="/education" element={<Education />} />
         <Route exact path="/project" element={<Experience />} />
         <Route exact path="/skills" element={<Skills />} />
         
       </Routes>
       
     </Router>

   </div>

  );
}




export default App;
