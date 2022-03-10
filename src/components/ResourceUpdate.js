
import React from "react";
import ResourceForm from "./ResourceForm";
import { updateResourceApi } from "../action";
import withAlert from "../hoc/withAlert";



const ResourceUpdate = ({ resource, onResourceUpdate, displayAlert, alert }) => {

  const updateResource = async (resourceData) => {

    try {
      const updatedResource = await updateResourceApi(resourceData._id, resourceData);
      onResourceUpdate(updatedResource);
      displayAlert("success", " Resource updated successfully!")
    } catch (e) {
      displayAlert("error", e)

    }

  }

  if (!resource?._id) {
    return " There is no such resource "
  }

  return (
    <ResourceForm
      alert={alert}
      onSubmit={updateResource}
      resource={resource} />
  )
}

export default withAlert(ResourceUpdate);
