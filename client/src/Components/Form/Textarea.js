import React from "react";

const Textarea = (props) => (
    <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea"{...props}></textarea>
        
    </div>
);

export default Textarea;