const Input = (props)=>{

	return(

		<input type="text" className="color-input" placeholder="Ingrese un código de color: ej. #a32d1e" onChange={props.cambiarColorPr} />

	)

}

export default Input;