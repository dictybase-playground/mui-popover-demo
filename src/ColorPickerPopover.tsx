import { useState, useRef } from "react"
import { Popover, Button } from "@material-ui/core"
import { HexColorPicker } from "react-colorful"

const ColorPickerPopover = () => {
  const [color, setColor] = useState("#aabbcc")
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  return (
    <>
      <Button
        ref={buttonRef}
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true)
        }}>
        Open ColorPicker
      </Button>
      <Popover
        onClose={() => {
          setOpen(false)
          console.log("closing with colors %s", color)
        }}
        open={open}
        anchorEl={buttonRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <HexColorPicker color={color} onChange={setColor} />
      </Popover>
    </>
  )
}

export default ColorPickerPopover
