import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from"react-router-dom";
 
function EditProjectComponent() {
 
  const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const history = useHistory();
    
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
     window.history.push('/api/projects')
      
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="projectnamee">Projekto pavadinimas</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            placeholder="Įveskite projekto pavadinimą"
            value={projectName}
            onChange={e => setProjectName(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="projectDescription" className="mt-2">Projekto aprašymas</label>
          <input
            type="text"
            className="form-control"
            id="projectDescription"
            placeholder="Įveskite projekto aprašymą"
            value={projectDescription}
            onChange={e => setProjectDescription(e.target.value)} />
              </div>
              <div classNames="form-group">
          <label htmlFor="projectStatus" className="mt-2">Projekto statusas</label>
          <input
            type="text"
            className="form-control"
            id="projectStatus"
            placeholder="Įveskite projekto statusą"
            value={projectStatus}
            onChange={e => setProjectStatus(e.target.value)} />
        </div>
        {isError && <small className="mt-3 d-inline-block text-danger">Kažkas negerai. Bandykite iš naujo.  </small>}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Atnaujinti'}</button>
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
