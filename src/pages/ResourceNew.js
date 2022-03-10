import React from "react";
import ResourceForm from "../components/ResourceForm";
import { createResourceApi } from '../action';
import withAlert from "../hoc/withAlert";

import { useHistory } from "react-router-dom"



const ResourceNew = ({ alert, displayAlert }) => {
  const router = useHistory();

  const createResource = async resource => {
    try {
      const { _id } = await createResourceApi(resource);
      displayAlert("success", "Resource is created!");
      // to navigate direct to detail page
      router.push(`/resources/${_id}`);

    } catch (e) {
      displayAlert("error", e);
    }
  }


  return (
    <ResourceForm
      onSubmit={createResource}
      alert={alert}
    />
  )

}

export default withAlert(ResourceNew);
