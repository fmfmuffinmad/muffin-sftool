import React from 'react';

export const metadataProps = {
    metadata: [],
    metadataTypes: [],
    setMetadata: () => {},
    setMetadataTypes: () => {}
}

export const MetadataContext = React.createContext(metadataProps);