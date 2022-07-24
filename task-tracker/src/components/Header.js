import Button from "./Button"


const Header = ({title}) => {

 const onclick = () => {
      console.log("click");
  }

  return (
    <header className="header">
        <h1 style={{color: 'blue'}}>{title}</h1>
        <Button color='green' text='Add' onclick={onclick} />
    </header>
  )
}

export default Header