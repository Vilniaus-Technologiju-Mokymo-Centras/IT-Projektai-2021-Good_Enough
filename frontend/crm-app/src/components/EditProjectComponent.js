import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function EditProjectComponent() {
 
  const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

    
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      projectName: projectName,
        projectDescription: projectDescription,
      projectStatus: projectStatus
    }
    axios.put('http://localhost:8080/api/projects/', data).then(res => {
      setData(res.data);
      setProjectName('');
        setProjectDescription('');
        setProjectStatus('');
      setLoading(false);
     history.push('/api/projects')
      
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="projectnamee">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            placeholder="Enter project name"
            value={projectName}
            onChange={e => setProjectName(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="projectDescription" className="mt-2">Project Description</label>
          <input
            type="text"
            className="form-control"
            id="projectDescription"
            placeholder="Enter project description"
            value={projectDescription}
            onChange={e => setProjectDescription(e.target.value)} />
              </div>
              <div classNames="form-group">
          <label htmlFor="projectStatus" className="mt-2">Project Status</label>
          <input
            type="text"
            className="form-control"
            id="projectStatus"
            placeholder="Enter project status"
            value={projectStatus}
            onChange={e => setProjectStatus(e.target.value)} />
        </div>
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Update'}</button>
        {data && <div className="mt-3">
          <strong>Output:</strong><br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        }
      </div>
    </div>
  );
}
 
export default EditProjectComponent;
