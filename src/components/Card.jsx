import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({
  id,
  budget,
  date,
  name,
  handleDelete,
  handleCopy,
}) {
  let [edit, setEdit] = React.useState(false);
  let [nameState, setName] = React.useState(name);
  let [budgetState, setBudget] = React.useState(budget);
  let [dateState, setDate] = React.useState(date);

  function handleEdit() {
    setEdit((prev) => !prev);
  }

  function handleUpdate() {
    setEdit(false);
  }

  // function handleDelete() {
  //   console.log("dispatching delete");
  //   // dispatch({
  //   //   type: "del",
  //   //   payload: id,
  //   // });
  // }

  return (
    <Card
      sx={{
        width: "max-content",
        margin: "20px auto",
        backgroundColor: "#b5b9c5",
      }}
      xs={12}
    >
      <CardContent>
        <Typography variant="subtitle1" component="div">
          Name:{" "}
          {edit ? (
            <input
              type="text"
              size={10}
              value={nameState}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            `${nameState}`
          )}
        </Typography>

        <Typography variant="subtitle1" component="div">
          Project Budget:{" "}
          {edit ? (
            <input
              type="text"
              size={10}
              value={budgetState}
              onChange={(e) => setBudget(e.target.value)}
            />
          ) : (
            `  ${budgetState}`
          )}
        </Typography>

        <Typography variant="subtitle1" component="div">
          Project End Date:{" "}
          {edit ? (
            <input
              type="date"
              value={dateState}
              onChange={(e) => setDate(e.target.value)}
            />
          ) : (
            ` ${dateState}`
          )}
        </Typography>
        <hr />

        <CardActions>
          <Button
            variant="contained"
            onClick={edit ? handleUpdate : handleEdit}
            size="small"
          >
            {edit ? "Update" : "Edit"}
          </Button>
          <Button onClick={handleDelete} variant="contained" size="small">
            Delete
          </Button>
          <Button onClick={handleCopy} variant="contained" size="small">
            Copy
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
