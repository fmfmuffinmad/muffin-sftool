import { useState, useContext, useEffect } from "react";
import { MetadataContext } from "../../context/MetadataContext";
import { OrgContext } from "../../context/OrgContext";

import MetadataList from "../MetadataList/MetadataList";

const MetadataContainer = () => {
  const [metadata, setMetadata] = useState([]);
  const [metadataTypes, setMetadataTypes] = useState([]);

  const orgContext = useContext(OrgContext);

  useEffect(() => {
    if (orgContext.org) {
        alert(orgContext.org.username);
        fetchComponentList();
    } else {

    }
  }, [Object.values(orgContext)]);

  const metadataProps = {
    metadata,
    metadataTypes,
    setMetadata,
    setMetadataTypes
  };

  const fetchComponentList = async () => {
    let res = await fetch(
      `http://localhost:3000/api/sf/getComponentList?user=${org.username}`
    );
    let data = await res.json();
    setMetadata(data.result.metadataObjects);
  };

  return (
    <MetadataContext.Provider value={metadataProps} >
        <MetadataList />
    </MetadataContext.Provider>
  );
};

export default MetadataContainer;
