import Person from './Person'

import './styles.scss'

import dispensador from './img/dispensador.jpg'

export default ({showThis5}) => 
        <section className="PersonsInQueue">
            <div className="dispensador">
                <img src={dispensador} alt={`dispensadorImg`} />
            </div>

            {showThis5.slice(0, 5).map(name => <Person name={name} />)}
        </section>