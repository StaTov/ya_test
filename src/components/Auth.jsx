import { useEffect } from "react";
import { yandexInit } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Auth = ({ token, setToken }) => {

    const navigate = useNavigate()
 
if(token){
    navigate('/')
}

    useEffect( () => {
        yandexInit(setToken)          
    }, [ setToken])

    return (
        <>
            <div className='container_pageload'>
                <div>Авторизация</div>
                <i className='fa fa-refresh fa-spiner'></i>
                <div id='yaBtn'></div>
            </div>
        </>
    )
}

export default Auth;