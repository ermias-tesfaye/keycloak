import Keycloak from "keycloak-js";
import { useEffect, useState } from "react"

const useAuth = () => {
    const [isLoging, setIsLogin] = useState(false);

    useEffect(() => {
        const clinet = new Keycloak({
            url: 0,
            realm: 0,
            clientId:0
        })
    }, [])
    return isLoging;
}
export default useAuth