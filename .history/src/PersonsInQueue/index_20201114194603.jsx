import Person from '../Person'

export default ({showThis5}) => 
        <div className="PersonsInQueue">
            {showThis5.slice(0, 4).map(name => <Person name={name} />)}
        </div>