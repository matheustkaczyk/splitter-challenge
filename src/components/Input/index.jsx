export const Input = ({ type, classN, handleChange, placeholder }) => {
  return(
    <input
      type={type}
      className={classN}
      onChange={(e) => handleChange(e.value)}
      placeholder={placeholder}
    />
  )
}