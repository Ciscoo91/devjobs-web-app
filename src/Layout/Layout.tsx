import { useContext } from "react"
import Header from "../components/header/Header"
import { ThemeContext } from "../contexts/themeContext"
import "./Layout.css"

type LayoutPropType = {
    children: React.ReactNode
}


export default function Layout({children}: LayoutPropType) {

  const {theme} = useContext(ThemeContext)
  return (
    <div className={`page page-${theme}`}>
        <Header></Header>
        {children}
    </div>
  )
}
