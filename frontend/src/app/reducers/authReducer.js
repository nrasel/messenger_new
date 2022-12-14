import decodeToken from 'jwt-decode'
import { REGISTER_FAIL, REGISTER_SUCCESS, SUCCESS_MESSAGE_CLEAR, ERROR_MESSAGE_CLEAR, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,LOGOUT_SUCCESS } from "../type/authType"
 
const authState={
    loading : true,
    authenticate : false,
    error:'',
    successMessage : '',
    myInfo: ''
}

const tokenDecode=(token)=>{
    const tokenDecoded = decodeToken(token);
    const expireTime = new Date(tokenDecoded.exp*1000);
    if(new Date()>expireTime){
        return null;
    }
    return tokenDecoded   
}

const getToken=localStorage.getItem('authToken')

if(getToken){
    const getInfo=tokenDecode(getToken);
    if(getInfo){
        authState.myInfo=getInfo;
        authState.authenticate=true;
        authState.loading=false;
    }
}

export const authReducer =(state = authState
    ,action)=>{

        const {payload,type}=action;
        if(type=== REGISTER_FAIL || type===USER_LOGIN_FAIL){
            return{
                ...state,
                error:payload.error,
                authenticate: false,
                myInfo:'',
                loading : true
            }
        }
        if(type===REGISTER_SUCCESS || type === USER_LOGIN_SUCCESS){
            const myInfo = tokenDecode(payload.token);
            return {
                ...state,
                myInfo:myInfo,
                successMessage:payload.successMessage,
                error:'',
                authenticate: true,
                loading: false
            }
        }
        if(type===SUCCESS_MESSAGE_CLEAR){
            return {
                ...state,
                successMessage:''
            }
        }
        if(type===ERROR_MESSAGE_CLEAR){
            return {
                ...state,
                error:''
            }
        }

        if(type===LOGOUT_SUCCESS){
            return{
                ...state,
                authenticate:false,
                myInfo:'',
                successMessage:'Logout successful'
            }
        }

        return state
    }