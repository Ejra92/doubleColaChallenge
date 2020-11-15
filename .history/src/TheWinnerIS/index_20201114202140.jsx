export default ({name, howManyTimes}) =>
        <div className="TheWinnerIs">
            <img src={`../PersonsInQueue/img/${name}.jpg`} alt="img-winner"/>

            <p>{name} se tomo la double cola nro {howManyTimes}</p>
        </div>