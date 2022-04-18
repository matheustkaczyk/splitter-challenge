export const Input = ({ type, classN, handleChange, placeholder, value }) => {
  return(
    <input
      type={type}
      className={classN}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      value={value}
    />
  )
}