import sheldonImg from '../PersonsInQueue/img/sheldonWin.jpg'
import leonardImg from '../PersonsInQueue/img/leonardWin.jpeg'
import pennyImg from '../PersonsInQueue/img/pennyWin.jpeg'
import rajeshImg from '../PersonsInQueue/img/rajeshWin.jpg'
import howardImg from '../PersonsInQueue/img/howardWin.jpg'

import './styles.scss'

const images = {
    sheldon: sheldonImg,
    leonard: leonardImg,
    penny: pennyImg,
    rajesh: rajeshImg,
    howard: howardImg,
}

export default ({name, howManyTimes, restart}) =>
        <div className="TheWinnerIs">
            <img onClick={restart} src={images[name]} alt="img-winner"/>

            <p onClick={restart}>{name} se tomo la double cola nro {howManyTimes}</p>
        </div>