import sheldonImg from '../img/sheldon.jpg'
import leonardImg from '../img/leonard.jpg'
import pennyImg from '../img/penny.jpg'
import rajeshImg from '../img/rajesh.jpg'
import howardImg from '../img/howard.jpg'

const images = {
    sheldon: sheldonImg,
    leonard: leonardImg,
    penny: pennyImg,
    rajesh: rajeshImg,
    howard: howardImg,
}

export default ({name}) => 
        <div className="Person">
            <img src={images[name]} alt={`${name}Img`} />

            <p> {name} </p>
        </div>