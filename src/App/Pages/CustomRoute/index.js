import AppLayout from "../../Components/AppLayout/AppLayout"
import { Route } from "react-router"

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <AppLayout>
      <Route {...rest} render={props => <Component {...props} />} />
    </AppLayout>
  )
  
}

export default CustomRoute