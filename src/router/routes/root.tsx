import { Outlet } from "react-router-dom";
import { Header } from "@components/header/header";
import './root.scss';

export default function Root() {
  return (
    <div className="root">
      <Header/>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}