export const addUser = (user) =>{
  return {
    type:"FETCH_USER",
    payload:{
      user
    }
  }
}
