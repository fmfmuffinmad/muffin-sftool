const execSync = require('child_process').execSync;

export default (req, res) => {
  const {
    query: { 
        sfdx,
        user
    }
  } = req;

  let exec;
  switch(sfdx) {
    case 'getOrgList':
        exec = execSync(`sfdx force:org:list --json`, { encoding: 'utf-8' });
        res.status(200).json(exec);
        break;
    case 'getComponentList':
        exec = execSync(`sfdx force:mdapi:describemetadata -u ${user} --json`, { encoding: 'utf-8' });
        res.status(200).json(exec);
        break;
    default:
        
        res.status(200).json('{}');
  }
  res.end(`Post: ${sfdx}`);
};
