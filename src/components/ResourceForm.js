import React, { useEffect, useState } from "react";

const Resource_Type = ["book", "vedio", "blog"];
const BASE_RESOURCE = {
  title: '',
  description: '',
  type: '',
  link: ''
}

const ResourceForm = ({ resource, onSubmit, alert }) => {
  const [uResource, setUResource] = useState(resource || BASE_RESOURCE);

  useEffect(() => {
    resource?._id ? setUResource(resource) : setUResource(BASE_RESOURCE);
  }, [resource])


  const handleChange = (e) => {
    //console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    setUResource({ ...uResource, [name]: value })
  }

  const handleSubmit = () => {
    onSubmit(uResource);
  }


  return (
    <>
      {alert?.success && <div className="alert alert-success">{alert.success}</div>}
      {alert?.error && <div className="alert alert-danger">{alert.error}</div>}
      <form>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            value={uResource.title}
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="How to survice in mountains" />
        </div>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            value={uResource.description}
            className="form-control"
            id="description" placeholder="Just some description"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="link">Resource Link</label>
          <div className="input-group">
            <input
              onChange={handleChange}
              name="link"
              value={uResource.link}
              type="text"
              className="form-control"
              id="link"
              placeholder="Username" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="type">Type</label>
          <select
            onChange={handleChange}
            name="type"
            value={uResource.type}
            className="form-control"
            id="type">
            {Resource_Type.map(type =>
              <option key={type} value={type}>{type}</option>
            )}
          </select>

        </div>
        <hr className="mb-4" />
        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="button">Submit</button>
      </form>
    </>
  )
}

export default ResourceForm; 
