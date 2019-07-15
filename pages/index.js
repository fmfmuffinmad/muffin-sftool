import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Dexie from "dexie";
import './index.css';
import {OrgContext, orgContextProps} from './context/OrgContext';

// components
import SFOrgList from "./components/SFOrgList/SFOrgList";
import SFOrgItem from "./components/SFOrgItem/SFOrgItem";

const Index = () => {
  // ---------------- HOOKS -----------------------

  // ======= STATES ========
  const [orgList, setOrgList] = useState([]);
  const [status, setStatus] = useState('');
  const [org, setOrg] = useState(null);
  const [showList, setShowList] = useState(false);

  // const [orgProps, setOrgProps] = useState(orgContextProps);

  // ======= EFFECTS ========

  useEffect(() => {
    fetchOrgs();
  }, []);

  useEffect(() => {
    setShowList(false);
  }, [org]);

  // ---------------- VARIABLES -------------------

  const orgProps = {
    currentOrg: org,
    orgList: orgList,
    setCurrentOrg: setOrg,
    setOrgList: setOrgList
  }

  // ---------------- METHODS ---------------------

  const fetchOrgs = async () => {
    setOrg(null);
    setStatus('Fetching authorized orgs')
    let res = await fetch("http://localhost:3000/api/sfdx/getOrgList");
    let data = await res.json();
    setOrgList(data.result.nonScratchOrgs);
    setStatus('');
    setShowList(true);
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
      </OrgContext.Provider>
    </div>
  );
};

export default Index;
