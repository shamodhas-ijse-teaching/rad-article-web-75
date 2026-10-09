import useAuth from "../hooks/useAuth"
import { Navigate } from "react-router-dom"

function Home() {
  // const { user, loading } = useAuth()

  // if (!loading) {
  //   if (!user) {
  //     return <Navigate to={"/login"} replace />
  //   }
  // }

  return <div>Home</div>
}

export default Home
