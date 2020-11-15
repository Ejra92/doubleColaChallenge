import Person from './Person'

import './styles.scss'

import dispensador from './img/dispensador.jpg'

export default ({showThis5}) => 
        <section className="PersonsInQueue">
            {showThis5.slice(0, 5).reverse().map(name => <Person name={name} />)}

            <div className="dispensador">
                <img src={dispensador} alt={`dispensadorImg`} />
            </div>
        </section>