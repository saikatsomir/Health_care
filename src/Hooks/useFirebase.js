import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail,updateProfile   } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../components/Firebase/fireBase.init";
// import { useHistory, useLocation } from "react-router";


initializeAuthentication()
const useFirebase = () =>{
    // const location = useLocation()
    // const history = useHistory()
    // const redirect_uri = location.state?.from || '/home'
    const [name, setName] = useState('')
    const [user,  setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
        console.log(e.target.value);
        console.log('this');
    }

    const handleEmailLogin = e =>{
        setEmail( e.target.value)
    }
    const handlePasswordLogin = e =>{
        setPassword(e.target.value);
    }
    const handleEmailName = e =>{
        setName(e.target.value)
    }

    // LOGIN BY EMAIL

    const handleLogin = (e) =>{
        e.preventDefault()
        if(password.length < 6){
            return setError('Passwrod must be at least 6 charecter')
            
        }
        if(!/(?=(.*[A-Z]){2,})/.test(password)){
            return setError('Password must contain two upper case')
            
        }
       isLogin? processLogin(email, password) : registerNewUser(email,password)
    }

    // PROCESS LOGIN

    const processLogin = (email,password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
            setError('')
        })
        .finally(()=>setIsLoading(false))
        .catch((error5) =>{
            setError(error5.message)
        } )
    }

    // REGISTER EMAIL

    const registerNewUser = (email, password) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            // history.push(redirect_uri)  
              setError('')
              verifyEmail()
            setUserName()
          })
          .finally(()=>setIsLoading(false))
        .catch((error4) =>{
            setError(error4.message)
        } )
    }
    
    //SET USER NAME

    const setUserName = () =>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{})
        
    }

    //VERIFY EMAIL

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
            console.log(result);
            setError('')
        })
        .catch(error6=>{
            setError(error6)
        })
    }


    //RESET PASSWORD

    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result=>{
            setError('')
        })
        .catch(error7=>{
            setError(error7.message)
        })
    }


    //GOOGLE SIGN IN

    const signInUsingGoogle = () =>{
        
        return  signInWithPopup(auth, googleProvider)
        
        .catch((error1) =>{
            setError(error1.message)
        } )
    }

    //GITHUB SIGN IN

    const signInUsingGithub = () =>{
        return signInWithPopup(auth, githubProvider)
        
        .catch(error3=>{
            setError(error3.message)
        })
    }

    
    //LOG OUT

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
            setError('')
        })
        .finally(()=>setIsLoading(false))
        .catch((error2) => {
            setError(error2.message)
          });
          
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
          });
          
    },[])
    return{
        user,
        error,
        isLogin,
        isLoading,
        setIsLoading,
        setError,
        logOut,
        toggleLogin,
        handleEmailLogin,
        handlePasswordLogin,
        handleLogin,
        signInUsingGoogle,
        signInUsingGithub,
        handleResetPassword,
        handleEmailName
    }
}

export default useFirebase