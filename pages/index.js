import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Dexie from 'dexie';
import './index.css';
import {OrgContext} from './context/OrgContext';

// components 
import SFOrgList from './components/SFOrgList/SFOrgList';
import MetadataContainer from './components/MetadataContainer/MetadataContainer';

const Index = () => {
  // ---------------- HOOKS -----------------------

  // ======= STATES ========
  const [orgList, setOrgList] = useState([]);
  const [status, setStatus] = useState('');
  const [org, setOrg] = useState(null);
  const [showList, setShowList] = useState(false);
  const [dummy, setDummy] = useState('');

  const [orgProps, setOrgProps] = useState({
    currentOrg: org,
    orgList: orgList,
    setCurrentOrg: setOrg,
    setOrgList: setOrgList
  });

  // ======= EFFECTS ========

  useEffect(() => {
    fetchOrgs();
  }, []);

  useEffect(() => {
    if (org) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }, [org]);

  // ---------------- VARIABLES -------------------

  // ---------------- METHODS ---------------------

  const fetchOrgs = async () => {
    setOrg(null);
    setStatus('Fetching authorized orgs');
    let res = await fetch("http://localhost:3000/api/sf/getOrgList");
    let data = await res.json();
    setOrgList(data.result.nonScratchOrgs);
    setStatus('');
  }

  return (
    <div>
      <p>Muffin's Helper Tool! 
        {
          org ? 
            <span>
              <span>{` Selected Org: `}</span>
              <span className="org-name">{`${org.alias} `}</span>
              <a href="javascript:void(0)" onClick={fetchOrgs}>change</a>
            </span> 
          : 
            ''
        }
      </p>
      {status ? <p>{status}</p> : ''}
      <OrgContext.Provider value={orgProps}>
        {showList ? <SFOrgList/> : ''}
        <MetadataContainer />
      </OrgContext.Provider>
    </div>
  );
};

export default Index;
