import style from './Card.module.css'
import Button from './../../buttons/button'

function Card(props) {

    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src='../../../../public/Uitachi5.png' alt="" />
            </figure>
            <div className={style.body}>
                <h3>
                    {props.title}
                </h3>
                <span>{props.tags}</span>
                <p className={style.description}>
                    {props.content}
                </p>
                <Button />
            </div>
        </div>
    )
}

export default Card