import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter'
import { Header } from './components/Header';
import { AllPetsPage } from './components/petsPage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from './components/Home';
import { SignInPage } from './components/SignIn';
import { MyPage } from './components/MyPage';
import { ComplitePetInfoCard } from './components/petsPage/ComplitePetInfoCard';
import { SignUpPage } from './components/SignUp';

export const AuthContext = React.createContext(undefined)


function App() {
  const [isAuth, setIsAth] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('petStoreToken')
    if(token) setIsAth(true)
  }, [])


  return (
    <AuthContext.Provider value={[isAuth, setIsAth]}>
      <Router>
        <div className="App">
          <Header />

          <Switch>

            <Route exact path="/allPets">
              <AllPetsPage />
            </Route>

            <Route  path="/allPets/:id">
              <ComplitePetInfoCard />
            </Route>

            <Route path="/statistic">
              <Counter />
            </Route>            

            {isAuth ? 
              <Route path="/myPage">
                <div><MyPage /></div>
              </Route>
              : 
              <Switch>
                <Route path="/signIn">
                  <SignInPage />
                </Route>           

                <Route path="/signUp">
                  <SignUpPage />
                </Route>               
              </Switch>
            }

            <Route exact={true} path="/">
              <Home />
            </Route>
          </Switch> 
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
