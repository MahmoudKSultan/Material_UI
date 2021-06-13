import React from "react";
import { Button, Typography, ButtonGroup, Container } from "@material-ui/core";

function Create() {
	return (
		<Container>
			<Typography variant="h6" component="h2" color="secondary" gutterBottom>
				Create a New Note
			</Typography>
			<Button
				color="secondary"
				variant="contained"
				disableElevation
				onClick={() => console.log("yes")}
			>
				Submit
			</Button>
			{/* <Button variant="contained" color="secondary">
				Submit
			</Button>
			<Button variant="outlined" color="secondary">
				Submit
			</Button>
			<br />
			<br />
			<br />
			<ButtonGroup color="secondary" variant="outlined">
				<Button>Submit</Button>
				<Button>Submit</Button>
			</ButtonGroup> */}
		</Container>
	);
}

export default Create;
