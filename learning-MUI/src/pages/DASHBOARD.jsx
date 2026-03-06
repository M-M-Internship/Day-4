import React from "react";
import { Grid, Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import Box from '@mui/material/Box';
const students = [
  { id: 1, name: "Rahul", course: "React Development" },
  { id: 2, name: "Ankit", course: "Full Stack Development" },
  { id: 3, name: "Priya", course: "UI/UX Design" },
  { id: 4, name: "Sneha", course: "Python Programming" }
];

function Dashboard() {
  return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", padding: 4 }}>

      <Grid container spacing={3} justifyContent="center" maxWidth="1000px">
      {students.map((student) => (
        <Grid item xs={12} sm={6} md={4} key={student.id}>

          <Card>

            <CardContent>
              <Typography variant="h5">
                {student.name}
              </Typography>

              <Typography variant="body2">
                Course: {student.course}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">View</Button>
            </CardActions>

          </Card>

        </Grid>
        
      ))}
    </Grid>
    </Box>
  );
}

export default Dashboard;