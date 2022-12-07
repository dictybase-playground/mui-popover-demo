import { useRef, useState } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
)

export default function SimplePopover() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const id = open ? "simple-popover" : undefined

  return (
    <>
      <Button
        ref={buttonRef}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true)
        }}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => {
          setOpen(false)
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </>
  )
}
