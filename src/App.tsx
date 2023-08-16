import React from 'react';

import { ToastContainer } from "react-toastify";

import { ContentWrapper } from "./components";
import SearchUserProvider from "./Context";

function App() {
  return (
    <div className="App">
        <SearchUserProvider>
            <ContentWrapper/>
        </SearchUserProvider>
        <ToastContainer />
    </div>
  );
}

export default App;
