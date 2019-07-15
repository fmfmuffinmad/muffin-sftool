const execSync = require('child_process').execSync;

export default function handle(req, res) {
    const {
        query: { pid }
    } = req;
    
    console.log(pid);

    let exec = execSync(`sfdx force:org:list --json`, { encoding: 'utf-8' });
    res.status(200).json(exec);
}