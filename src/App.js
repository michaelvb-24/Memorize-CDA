import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;