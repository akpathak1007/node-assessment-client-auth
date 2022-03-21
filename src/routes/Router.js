import { Routes, Route } from 'react-router-dom';

import App from '../components/app/App';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import SignupScreen from '../screens/singupScreen/SignupScreen';

const AppRouter =  () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={ <HomeScreen/> }/>
         <Route path="login" element={<LoginScreen/>}/>
         <Route path="signup" element={<SignupScreen/>}/>
      </Route>
    </Routes>
  )
}
export default AppRouter;