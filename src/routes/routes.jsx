import { Routes, BrowserRouter, Route, Navigate} from "react-router-dom";

import { Home } from "../pages/home/home";
import { Sobre } from "../pages/sobre/sobre";
import { Aplicacao } from "../pages/aplicacao/aplicacao";

function MyRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/aplicacao" element={<Aplicacao />} />

        <Route path="*" element={<Navigate to ={"/"} />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;