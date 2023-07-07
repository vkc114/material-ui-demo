import React, { useEffect, useState } from "react";
import { getDummyNotes } from "./api";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    margin: "20px",
    padding: "10px",
  },
});

const DummyNotes = () => {
  const classes = useStyles();
  const [dummyNotes, setDummyNotes] = useState([]);

  useEffect(() => {
    const fetchDummyNotes = async () => {
      const data = await getDummyNotes();
      setDummyNotes(data);
    };
    fetchDummyNotes();
  }, []);

  return (
    <div>
      {dummyNotes.map((note) => (
        <Card key={note.id} className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {note.id}
            </Typography>
            <Typography variant="h6" component="h2">
              {note.user}
            </Typography>
            <Typography variant="h4" component="h2">
              {note.title}
            </Typography>
            <Typography variant="h5" component="h2">
              {note.category}
            </Typography>
            <Typography>{note.notes}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DummyNotes;
