import { Route, Routes } from "react-router-dom";
import Flights from "./component/container/Flights/Flights";
import Hotels from "./component/container/Hotels/Hotels";
import Layout from "./component/container/Layout/Layout";
import NoMatch from "./component/container/NoMatch/NoMatch";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Flights />}/>
        <Route path="air" element={<Flights />}/>
        <Route path="hotels" element={<Hotels />}/>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
