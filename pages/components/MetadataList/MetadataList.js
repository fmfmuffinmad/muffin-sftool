import { useContext } from 'react';
import MetadataItem from '../MetadataItem/MetadataItem';
import { MetadataContext } from '../../context/MetadataContext';

const MetadataList = props => {
    const metadataContext = useContext(MetadataContext);

    const metadataList = metadataContext.metadata;
    return (
        <div>
            {
                metadataList.map((value, index) => (
                    <MetadataItem metadata={value} key={value.xmlName}/>
                ))
            }
        </div>
    );
}

export default MetadataList;