import React,{createContext,useState} from 'react'

export const Appcontext=createContext()


export default function AppContextProvider({children}) {
 const [User,setUser]=useState(JSON.parse(localStorage.getItem("USER")))

  return (
    <Appcontext.Provider value={[User,setUser]}>
        {children}
    </Appcontext.Provider>
  )
}
