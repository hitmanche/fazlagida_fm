import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAlertMessage,
  setAlertMessage,
} from "../../redux/slice/settingSlice";

export default function MessageProvider() {
  const dispatch = useDispatch();
  const slAlertMessage = useSelector(selectAlertMessage);

  const handleClose = () => {
    dispatch(setAlertMessage(""));
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={slAlertMessage ? true : false}
        onClose={handleClose}
        message={slAlertMessage}
      />
    </div>
  );
}
