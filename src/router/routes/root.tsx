import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";

export default function Root() {
  return (
    <>
      <Header/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}