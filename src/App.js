import React, { Fragment} from "react";
import Layout from "./components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import AllTodos from "./components/pages/AllTodos";
import NewTodos from "./components/pages/NewTodos";
import NotFoundPage from "./components/pages/NotFoundPage";


function App() {

  return (
    <Fragment>
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to='/all-todos'/>}/>
                <Route path="/all-todos" element={<AllTodos/>}/>
                <Route path="/new-todos" element={<NewTodos/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </Layout>
    </Fragment>
  );
}

export default App;
