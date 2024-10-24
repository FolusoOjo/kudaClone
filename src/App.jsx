import Header from "./static/Header";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Companies from "./pages/Companies";
import Footer from "./static/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Info from "./pages/Info";

function App() {
  return (
    <>
      {/* Browser router is in charge of all the routing */}
      <BrowserRouter>
        {/* Put in your static pages before you use the routes */}

        <Header />

        <Routes>
          {/* Routes in in charge of where we want to move to */}
          <Route path="/" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/companies" element={<Companies />} />
          {/* Route is the one to define the path and where we are going to.
          Default page should have a /- Path in route */}
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}
export default App;

// const Container = styled.div`
//   background-color: cornflowerblue;
//   font-size: 40px;
//   color: gray;
// `;
