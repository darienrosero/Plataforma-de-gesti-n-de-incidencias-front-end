import { Route, Switch } from "wouter"
import Leanding from "./pages/Leanding.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import DasboardAdmin from "./pages/DasboardAdmin.jsx"
import DashboardUser from "./pages/DashboardUser.jsx"
import { UserProvider } from "./services/UseContext.jsx"

function App() {

  return (
    <>
      <UserProvider>
        <Switch>

          <Route path={'/'} component={Leanding} />
          <Route path={'/login'} component={Login} />
          <Route path={'/register'} component={Register} />
          <Route path={'/dashboard/admin'} component={DasboardAdmin} />
          <Route path={'/dashboard/user'} component={DashboardUser} />

        </Switch>
      </UserProvider>
    </>
  )
}

export default App
