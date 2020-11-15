export default ({name}) => 
        <div className="Person">
            <img src={`../img/${name}.jpg`} alt={`${name}Img`} />
            
            <p> {name} </p>
        </div>