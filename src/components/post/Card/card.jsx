import style from './Card.module.css'
import Button from './../../buttons/button'
import placeholderImage from '/src/assets/placeholder.webp'

function Card({ title = '', tags = [], content = '', image }) {

    tags = tags ? tags.join(' ') : ''
    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src={image ? image : placeholderImage} alt="" />
            </figure>
            <div className={style.body}>
                <h3>
                    {title}
                </h3>
                <span>{tags}</span>
                <p className={style.description}>
                    {content}
                </p>
                <Button />
            </div>
        </div>
    )
}

export default Card