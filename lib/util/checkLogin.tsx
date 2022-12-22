const checkLogin = (currentUser: any) =>{
    // console.log('user', currentUser);
    // console.log(!!currentUser);
    // console.log(currentUser.constructor === String);
    // console.log(Object.keys(currentUser).length !== 0);
    
    //test user name string version
    return !!currentUser &&
    currentUser?.constructor === String &&
    Object.keys(currentUser).length !== 0;
  
}
export default checkLogin;