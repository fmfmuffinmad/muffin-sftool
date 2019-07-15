import { useContext } from 'react';
import SFOrgItem from '../SFOrgItem/SFOrgItem';
import { OrgContext } from '../../context/OrgContext';

const SFOrgList = props => {
    const orgProps = useContext(OrgContext);

    const orgList = orgProps.orgList;
    return (
        <div>
            {
                orgList.map((value, index) => (
                    <SFOrgItem org={value} key={index}/>
                ))
            }
        </div>
    );
}

export default SFOrgList;