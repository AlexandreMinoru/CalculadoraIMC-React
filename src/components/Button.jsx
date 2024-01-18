import "./Button.css"

function Button({text, id, action}) {

    const handleAction = (e) =>{
        action(e);
    }

  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default Button