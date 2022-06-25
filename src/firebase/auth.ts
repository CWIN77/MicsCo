import firebase from './config'
import {IUser,ISetState} from "../types"

const user = firebase.auth().currentUser;

export const loginGoogle = (setLoading:ISetState<boolean>) => {
  sessionStorage.setItem("loading",JSON.stringify(true))
  setLoading(true)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
  })
  .catch(({message}) => {
    setLoading(false)
    alert('로그인 에러\n' + message)
  });
}

export const logOut = (setLoading:ISetState<boolean>) => {
  if(window.confirm('로그아웃 하겠습니까?')){
    setLoading(true)
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('user')
      alert('로그아웃완료');
      window.location.reload();
    }).catch(() => {
      alert('로그아웃 실패')
      setLoading(false)
    });
  }
}

export const getCurrentUser = (setUser:ISetState<IUser | null>,setLoading:ISetState<boolean>) => {
  const userStorage = JSON.parse(localStorage.getItem("user")||JSON.stringify(null))
  
  if(userStorage) setUser(userStorage)

  firebase.auth().onAuthStateChanged((user) => {
    setLoading(false)
    sessionStorage.removeItem("loading")
    if (user) {
      const name = user.displayName;
      const id = user.uid;
      const img = user.photoURL;
      if(name && id && img){
        const userData:IUser = {name,id,img};
        if(userData !== userStorage){
          localStorage.setItem("user",JSON.stringify(userData))
          setUser(userData)
        }
      }
    }
  });
}