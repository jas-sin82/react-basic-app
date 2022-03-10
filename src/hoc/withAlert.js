
import React, { useState, useEffect } from "react";

// hoc is function that takes a component and return a new component
// newly returned component render orginal component and provides to it additional functioanlity


const initAlert = () => ({ success: null, error: null })

const withAlert = Component => props => {
  const [alert, setAlert] = useState(initAlert);

  const resetAlert = () => setAlert(initAlert);
  const resourceId = props?.resource?._id;

  useEffect(() => {
    resetAlert();
  }, [resourceId]);

  const displayAlert = (type, message) => {
    const _alert = initAlert();
    _alert[type] = message;
    setAlert(_alert);
    setTimeout(() => {
      resetAlert();
    }, 2000);
  }

  return (

    <Component
      alert={alert}
      displayAlert={displayAlert}
      {...props} />
  )
}


export default withAlert;
