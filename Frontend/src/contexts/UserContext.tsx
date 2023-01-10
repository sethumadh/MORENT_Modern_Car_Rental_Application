import { createContext, useEffect, useState } from "react"
import axios from "axios"
import { AxiosResponse } from "axios"


type UserContextProviderProps = {
  children: React.ReactNode
}
type UserContextObjType = {
  _id: string;
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
}
type userObjectType = {
  _id: string;
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
}
const UserContextObj = createContext<UserContextObjType>(
  {} as UserContextObjType
)


function UserContextProvider(props: UserContextProviderProps) {
  const [userObject, setUserObject] = useState<userObjectType>(
    {} as userObjectType
  )

  useEffect(() => {
    const fetchUserData = () => {
      try {
        axios
          .get("http://localhost:9090/users/getCurrentUser", {
            withCredentials: true,
          })
          .then((res: AxiosResponse) => {
            if (res.data) {
              setUserObject(res.data)
            }
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <UserContextObj.Provider value={{ ...userObject }}>
      {props.children}
    </UserContextObj.Provider>
  )
}

export { UserContextProvider, UserContextObj }
