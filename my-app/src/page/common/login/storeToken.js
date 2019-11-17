var storage=window.localStorage;
export function setToken(token){
    const{username,password}=token
    storage.setItem('username',username)
    storage.setItem('password',password)
}
export function clearToken(){
    storage.clear()
}