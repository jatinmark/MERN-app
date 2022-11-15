// eslint-disable-next-line

import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './accountdetail';
import Finalchat from './finalchat';

function App() {
  
 
//client id : 870774976201-e8pj9ekudefr7bit4dqj6hmvl0lkmcpn.apps.googleusercontent.com
const clientId= '870774976201-e8pj9ekudefr7bit4dqj6hmvl0lkmcpn.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
    
        <Finalchat />
    </AccountProvider>
    </GoogleOAuthProvider>
  );
}


export default App;
