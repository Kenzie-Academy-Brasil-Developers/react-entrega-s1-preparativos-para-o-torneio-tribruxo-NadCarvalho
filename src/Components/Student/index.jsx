import './style.css'

const Student = ({ info }) => {
    const status = info.alive ? 'Alive' : 'Deceased';

    return (
        <div className={`Student ${info.house}`}>
            <img src={info.image} alt={`${info.name} from house ${info.house}`} />
            <span className="name">{info.name}</span>
            <span className="house">{info.house}</span>
            <div className={`status ${status}`} title={status}></div>
        </div>
    )
}

export default Student
