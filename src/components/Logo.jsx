const Logo = (props)=>{

	return(

		<div className="logo-container" onClick={props.cambiarColorPr} onMouseOver={props.animacionPr} >
			<div className="mascara">
				<img id="logo-img" src={props.logoSrcPr} />
			</div>
		</div>

	)
}

export default Logo;