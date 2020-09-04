import React from "react";

export class Forms extends React.Component {
  render() {
    return (
      <div className="Forms">
      <h1>Forms Here</h1>
      <p>If your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don't provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution.

</p>
<p>For textual form controls—like inputs, selects, and textareas—use the FormControl component. FormControl adds some additional styles for general appearance, focus state, sizing, and more.

</p>
      </div>
    )
 }
}


export default Forms;
