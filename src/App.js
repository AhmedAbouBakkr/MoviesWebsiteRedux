import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; 
// import NotFound from "./components/NotFound";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { Provider } from "react-redux";
import store from "./redux/store";
import ResponsiveAppBar from "./components/AppBar";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";

const Movies = lazy(() => import("./components/Movies"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <BrowserRouter>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/*" element={<Movies />} />
              <Route path="addMovie" element={<AddMovie />}></Route>
              <Route path="update/:id" element={<UpdateMovie />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Suspense>
    </Provider>
  );
}

export default App;
