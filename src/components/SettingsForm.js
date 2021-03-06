import React, { useState } from "react";



const SettingsForm = ({ onSubmit, settings: initialSettings }) => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (e) => {
    //console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="theme">Theme</label>
          <select
            onChange={handleChange}
            name="theme"
            type="text"
            value={settings.theme}
            className="form-control"
            id="theme">

            <option value="dark"> Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fontSize">FontSize</label>
          <input
            onChange={handleChange}
            value={settings.fontSize}
            name="fontSize"
            type="text"
            className="form-control"
            id="fontSize"
            placeholder="17" />
        </div>
        <button onClick={() => onSubmit(settings)}
          className="btn btn-primary btn-lg btn-block"
          type="button">Save Settings</button>
      </form>
    </>

  )
}


export default SettingsForm; 
