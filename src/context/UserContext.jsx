import { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase.config"

const UserContext = createContext();
// import firebase password auth
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
     const PASSWORD_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
   const EMAIL_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const addUser = (email, password) => {
    if (EMAIL_Regex.test(email)) {
      if (PASSWORD_Regex.test(password)) {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
  setCurrentUser(user)
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

      } else {
        alert(
          "At least 6 chars incl. uppercase, lowercase, number and special.",
        );
      }
    } else {
      alert("Email don't match");
    }
  };
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
export const useUser = () => useContext(UserContext);
