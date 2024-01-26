import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About/About";
import { HomePage } from "./pages/Home/Home";
import { Header } from "./layouts/Header";

const App = () => {
  return (
    <>


      {/* <Header /> */}

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about/:id" element={<AboutPage />} />

      </Routes>


    </>

  );
}

export default App;
