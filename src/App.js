import React from "react";
import SideBar from "./components/side-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Motor from "./page/motor";
import Car from "./page/car";
import Bike from "./page/bike";
import Walking from "./page/walking";
import Airplane from "./page/airplane";
import Error from "./page/error";

function App() {
    return (
        <Router>
            <div className="flex relative">
                <SideBar />
            </div>
            {/* <div className="relative text-center bg-red-500 left-20 max-w-4xl">
            Hello
            </div> */}
            <Switch>
                <Route path={"/"} exact>
                    <Motor />
                </Route>
                <Route path={"/car"}>
                    <Car />
                </Route>
                <Route path={"/walking"}>
                    <Walking />
                </Route>
                <Route path={"/bike"}>
                    <Bike />
                </Route>
                <Route path={"/airplane"}>
                    <Airplane />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
