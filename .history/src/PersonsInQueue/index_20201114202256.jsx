import Person from './Person'

export default ({showThis5}) => 
        <section className="PersonsInQueue">
            {showThis5.slice(0, 5).map(name => <Person name={name} />)}
        </section>