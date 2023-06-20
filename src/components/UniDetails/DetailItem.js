import './DetailItem.css'

function DetailItem({ label, value }) {
    return (
        <div className="detail-item">
            <span className="detail-key">{label}:</span>
            <span>{value}</span>
        </div>
    )
}

export default DetailItem;