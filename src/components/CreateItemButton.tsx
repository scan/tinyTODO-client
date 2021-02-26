import React, { useCallback, useState } from "react";

import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const CreateItemButton: React.FC = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();

    setDialogOpen(true);
  }, [setDialogOpen]);

  return (
    <>
      <Fab
        color="primary"
        onClick={handleClick}
        aria-label="Add Item"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

CreateItemButton.displayName = "CreateItemButton";

export default CreateItemButton;
