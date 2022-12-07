import React from "react"
import ReactDOM from "react-dom"
import SimplePopover from "./Demo"
import ColorPickerPopover from "./ColorPickerPopover"
import Box from "@material-ui/core/Box"

ReactDOM.render(
  <React.StrictMode>
    <Box display="flex" flexDirection="column" m={4}>
      <Box m={2}>
        <SimplePopover />
      </Box>
      <Box m={2}>
        <ColorPickerPopover />
      </Box>
    </Box>
  </React.StrictMode>,
  document.querySelector("#root"),
)
