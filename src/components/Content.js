
import { useKeycloak } from '@react-keycloak/web'
import UserInfo from '../components/UserInfo'
import Logout from '../components/Logout'

function Content() {
    const { keycloak, initialized } = useKeycloak()

    if( keycloak.authenticated ) {
        return (
            <div>
            <p>This is a Keycloak-secured component of your application. You shouldn't be able
            to see this unless you've authenticated with Keycloak.</p>
            <p>Authenticated: {keycloak.token}</p>
            <UserInfo keycloak={keycloak}/>
            <Logout keycloak={keycloak} />
            </div>
    
        )    
    } else {
        return (
            <p>Only authenticated can access</p>
        )
    }

}

export default Content;