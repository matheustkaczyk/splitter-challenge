export const Button = ({ type, classN, handleClick, text, value }) => {
  return(
    <button
      type={type}
      className={classN}
      onClick={() => handleClick(value)}
    >
      {text}
    </button>
  )
}