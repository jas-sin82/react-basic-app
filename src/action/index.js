

import axios from "axios";
import { useState, useEffect, useCallback } from "react";


// getting a data from server 
function getResources() {
  return axios.get('/api/resources')
    .then(res => res.data)
}

// seaching resources by title

export function searchResourcesApi(title) {
  return axios.get(`/api/resources/s/${title}`)
    .then(res => res.data)
}

// resources function / customize hook function
export function useGetResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);



  const _getResources = useCallback(async () => {
    const _resources = await getResources();
    setResources(_resources)
    setLoading(false);
  }, [])

  const refetchResources = () => {
    setLoading(true);
    _getResources();
  }

  useEffect(() => {
    _getResources();
  }, [_getResources])

  return { resources, setResources, refetchResources, loading }
}


// getting data for detail page 
function getResourceById(resourceId) {
  return axios.get(`/api/resources/${resourceId}`)
    .then(res => res.data)
}

// customize hook function
export function useGetResource(id) {
  const [resource, setResource] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getResource = async () => {
      const _resources = await getResourceById(id);
      setResource(_resources);
      setLoading(false);
    }
    _getResource();
  }, [id])
  return { resource, loading };
}


// update resource function
export function updateResourceApi(resourceId, resourceData) {
  // patch end point to update resources 
  return axios.patch(`/api/resources/${resourceId}`, resourceData)
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data))
}

// delete resource function

export function deleteResourceApi(resourceId) {
  return axios.delete(`/api/resources/${resourceId}`)
    .then(res => res.data)
}


export function createResourceApi(resource) {
  return axios.post(`/api/resources/`, resource)
    .then(res => res.data)
    .catch(err => Promise.reject(err?.response?.data))
}
