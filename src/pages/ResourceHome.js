

import React, { useState } from "react";
import ResourceSerach from "../components/ResourceSearch";
import ResourceUpdate from "../components/ResourceUpdate";
import ResourceList from "../components/ResourceList";
import ResourceDetail from "../components/ResourceDetail";
import SettingsModal from "../components/SetttingsModal";
import { useSettings } from "../context/SettingsProvider";

import { useGetResources, deleteResourceApi, searchResourcesApi } from "../action";


const ResourceHome = () => {
  const { resources, setResources, refetchResources, loading } = useGetResources();
  const [isDetailView, setDetailView] = useState(true);
  const [selectedResources, setSelectedResources] = useState();
  const { settings } = useSettings();


  // search resources function
  const searchResources = (title) => {

    if (!title) {
      refetchResources();
    }
    searchResourcesApi(title)
      .then(resources => {
        hasResources ? setSelectedResources(resources[0]) : setSelectedResources(null);
        setResources(resources)
      })

  }


  const findResourcesIndex = (resource) => {
    return resources.findIndex(r => r._id === resource._id);
  }

  const mutateResourceList = (resource, task) => {
    const resourceIndex = findResourcesIndex(resource);
    const copy = [...resources];
    if (task === "update") {
      copy[resourceIndex] = resource;
    } else {
      copy.splice(resourceIndex, 1);
    }

    return copy;
  }

  // function to update resources 
  const handleResourceUpdate = (updatedResource) => {
    const updatedResources = mutateResourceList(updatedResource, "update");

    setResources(updatedResources);
    setSelectedResources(updatedResource);

  }

  // function to delete resources 
  const deleteResource = async () => {
    const isConfirm = window.confirm(" Are You Sure You Want To Delete This Resource ?");

    if (isConfirm) {
      const deletedResource = await deleteResourceApi(activeResource._id);
      const updatedResources = mutateResourceList(deletedResource, " Delete");

      setResources(updatedResources);
      setSelectedResources(updatedResources[0] || null);

      if (updatedResources.length === 0) {
        setDetailView(true);
      }
    }
  }


  const hasResources = resources && resources.length > 0;
  const activeResource = selectedResources || (hasResources && resources[0]) || null;


  return (
    <div className="row">
      <div className="col-md-4 order-md-2 mb-4">
        <SettingsModal />
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className={`text-muted ${settings?.theme}`}>Your Resources</span>
          <span className="badge badge-secondary badge-pill">{resources.length}</span>
        </h4>
        {/* Seach Inputs Starts */}
        < ResourceSerach
          onSearch={searchResources}
        />
        {/* Seach Inputs Ends */}
        {/* Resource List Starts */}
        < ResourceList
          activeId={activeResource?._id}
          resources={resources}
          onItemClick={setSelectedResources}
        />
        {/* Resource List Ends */}
      </div>
      {/* Update Form Starts */}
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">  Resource  {activeResource?._id}
          {hasResources &&
            <>
              <button onClick={() => setDetailView(!isDetailView)} className={`btn btn-sm ml-2 mr-2 ${isDetailView ? 'btn-warning' : 'btn-primary'}`}>
                {isDetailView ? `Edit ` : `Detail`}</button>
              <button onClick={() => { deleteResource() }} className="btn btn-sm btn-danger  ">Delete </button>
            </>
          }
        </h4>
        {isDetailView ? <ResourceDetail resource={activeResource} /> :
          <ResourceUpdate
            /* passing a function to update resources */
            onResourceUpdate={handleResourceUpdate}
            resource={activeResource} />}
      </div>
    </div>
  )
}

export default ResourceHome; 
