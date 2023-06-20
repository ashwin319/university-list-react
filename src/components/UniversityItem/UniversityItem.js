import './UniversityItem.css'

function UniversityItem(props) {

    const { updateUniDetails, university } = props
    const { name } = university;


    const handleUniItemClick = () => {
        updateUniDetails(university)
    }

    return (
        <div className="uni-list-item" onClick={handleUniItemClick}>
            {name}
        </div>
    )
}

export default UniversityItem;