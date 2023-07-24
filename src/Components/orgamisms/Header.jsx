import Button from "../atoms/Button"
import Logo from "../atoms/Logo"
import Links from "../molecules/Links"

export default function Header(){
  const pathname = window.location.href

  const linksHeader01 = [
    {
        Text:'Our rates',
        url:`${pathname}/#rates ` 
    },
    {
        Text:'Favorite projects',
        url:`${pathname}/#projects ` 
    },
    {
        Text:'Reviews',
        url:`${pathname}/#reviews ` 
    },
    {
        Text:'Contact',
        url:`${pathname}/#contact ` 
    },
 ]

  return(

    <header className=" 
    px-12 
    py-7
    flex
    justify-between
    border-b-2
    border - [#d9dbe0]

    "
    
    >
      <Logo />
      <Links links={linksHeader01}  />
    </header>
)






}