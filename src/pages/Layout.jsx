import { Outlet } from "react-router-dom"
import Header from "./Header";
function Layout () {
    return (
        <div className="h-screen flex flex-col">
            <Header>header</Header>
            <Outlet />
        </div>
    )
};

export default Layout;