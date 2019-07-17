import { useContext } from 'react';
import './MetadataItem.css';
import { MetadataContext } from '../../context/MetadataContext';

const MetadataItem = props => {
    const metadataContext = useContext(MetadataContext);

    const metadata = props.metadata;

    return (
        <div className="item">
            <div className="alias">
                {metadata.xmlName}
                {metadata.childXmlNames ? metadata.childXmlNames.map(value => (
                    <ul><li>{value}</li></ul>
                )) : ''}
            </div>
        </div>
    );
}

export default MetadataItem;

/*
    Expected METADATA JSON:
    {  
        "childXmlNames":[  
            "CustomLabel"
        ],
        "directoryName":"labels",
        "inFolder":false,
        "metaFile":false,
        "suffix":"labels",
        "xmlName":"CustomLabels"
    }
*/