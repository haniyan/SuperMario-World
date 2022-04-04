import React from "react";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {StartView} from "./components/StartView"
import ReactDOM from "react-dom";


export const App = ()=>{
    return(
        <StartView/>
    )

}




//
// function App() {
//     return (
//         //browser router opakowuje wszystko co jest wewnatrz, wszystko operuje w ramach routera, żeby przechodzic miedzy komponentami
//         // <Router>
//         //     <Switch>
//         //         {/*mając komponent route moge okreslac jaki komponent pod jaka sciezka ma sie wyrenderowac
//         //         dzieki temu osadzam i renderuje tylko to co chce*/}
//         //         <Route path={"/about"}>
//         //             <About/>
//         //         </Route>
//         //
//         //     </Switch>
//         //
//         //
//         // </Router>
//     );
// }
//
// export default App;

//https://www.youtube.com/watch?v=5HNr8Qc6HLY&ab_channel=WebAmigos-PatrykOmiotek