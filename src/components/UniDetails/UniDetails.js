import DetailItem from "./DetailItem";
import { Animate, AnimateGroup } from "react-simple-animate";
import { useState } from "react";

function UniDetails(props) {
    const {details} = props;
    const [loading, setLoading] = useState(false)

    const hasDetails = details && Object.keys(details).length > 0;

    if (!hasDetails) {
        return (
                <div className="container no-details-found">
                    <button onClick={() => setLoading(!loading)}>Bring value in now</button>
                    <Animate play={loading}
                        start={{opacity: 0}}
                        end={{opacity: 1}}
                        duration={2}
                    >
                        No Details Found
                    </Animate>
                </div>

        )
    }

    const { name, domains, web_pages, country} = details;


    return (
        <div className="container uni-details">
            <AnimateGroup play>
                <Animate 
                    start={{ opacity: 0 }} 
                    end={{ opacity: 1 }}
                    duration={0.5}
                    delay={0.2}
                    sequenceIndex={0}
                >
                <DetailItem label="Name" value={name} />
                </Animate>

                <Animate 
                    start={{ opacity: 0 }} 
                    end={{ opacity: 1 }}
                    duration={0.5}
                    delay={0.2}
                    sequenceIndex={1}
                >
                    <DetailItem label="Country" value={country} />
                </Animate>

                <Animate 
                    start={{ opacity: 0, color: 'blue', transform: 'rotate(360deg)' }} 
                    end={{ opacity: 1, color: 'red' }}
                    duration={2}
                    delay={0.2}
                    sequenceIndex={2}
                >
                    <DetailItem label="Domain" value={domains[0]} />
                </Animate>

                <Animate 
                    start={{ opacity: 0 }} 
                    end={{ opacity: 1 }}
                    duration={1}
                    delay={0.2}
                    sequenceIndex={3}
                >
                    <DetailItem label="Web Page" value={web_pages[0]} />
                </Animate>
            </AnimateGroup>

        </div>
    )
}

export default UniDetails;