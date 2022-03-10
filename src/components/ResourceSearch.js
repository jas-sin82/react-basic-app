import React from "react";
import { DebounceInput } from "react-debounce-input"

const ResourceSerach = ({ onSearch }) => {


  return (
    <form className="card p-2">
      <div className="input-group">
        <DebounceInput
          onChange={(e) => onSearch(e.target.value)}
          debounceTimeout={400}
          type="text" className="form-control" placeholder="Some title" />
      </div>
    </form>
  )
}

export default ResourceSerach;

