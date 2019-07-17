import { useContext } from 'react';
import { OrgContext } from '../../context/OrgContext';
import './SFOrgItem.css';

const SFOrgItem = props => {
    const orgContext = useContext(OrgContext);

    const org = props.org;
    const setOrg = orgContext.setCurrentOrg;

    const handleClick = () => {
        setOrg(org);
    }
    return (
        <div className="org" key={org.username}>
            <div className="alias">
                {org.alias} <span className="username">{` -> ${org.username}`}</span>
            </div>
            <div><a href="javascript:void(0)" onClick={handleClick}>select</a></div>
        </div>
    );
}

export default SFOrgItem;

/*
    Expected ORG JSON:
    {
        "orgId": "00D0x000000CnviEAC",
        "accessToken": "expected_access_token",
        "instanceUrl": "https://sicredi--dev.cs95.my.salesforce.com",
        "loginUrl": "https://test.salesforce.com",
        "username": "org_username",
        "clientId": "SalesforceDevelopmentExperience",
        "connectedStatus": "Connected",
        "lastUsed": "2018-12-05T15:43:22.698Z",
        "alias": "sicredi_dev"
    }
*/