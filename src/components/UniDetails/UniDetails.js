import DetailItem from "./DetailItem";

function UniDetails(props) {
    const {details} = props;

    const hasDetails = details && Object.keys(details).length > 0;

    if (!hasDetails) {
        return (
            <div className="container no-details-found">
                No Details Found
            </div>
        )
    }


    const { name, domains, web_pages, country} = details;


    return (
        <div className="container uni-details">
            <DetailItem label="Name" value={name} />
            <DetailItem label="Country" value={country} />
            <DetailItem label="Domain" value={domains[0]} />
            <DetailItem label="Web Page" value={web_pages[0]} />
        </div>
    )
}

export default UniDetails;