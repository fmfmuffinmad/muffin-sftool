import React from 'react';

export const orgContextProps = {
    currentOrg: {},
    orgList: [],
    setCurrentOrg: () => {},
    setOrgList: () => {}
}

export const OrgContext = React.createContext(orgContextProps);