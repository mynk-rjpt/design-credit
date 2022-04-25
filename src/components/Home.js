import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Row,
	Col,
	Button,
	Form,
} from "react-bootstrap";

const Home = () => {
	return(
		<div>
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				gap: 30,
				marginBottom: 50,
			}}
		>
			<Col md={10} style={{ alignSelf: "center" }}>
				<h1>Chest X-Ray Detection</h1>
			</Col>
			<Row style={{ justifyContent: "center" }}>
				<Col
					sm={12}
					style={{
						color: "rgba(0, 41, 71, 0.59)",
						fontWeight: "700",
					}}
				>
					Please upload an image of your chest x-ray to get the results!
				</Col>
			</Row>

			<Row
				style={{ justifyContent: "center", gap: 50, alignItems: "center" }}
			>
				<Col
					md="auto"
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Button style={{ background: "#002947" }}>TRY IT NOW</Button>
				</Col>
			</Row>
		</Container>
		<Container 
			style={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				gap: 30,
				marginBottom: 100,
				maxWidth: 500
			}}
		>
			<Form.Group controlId="formFile" className="mb-3">
			<Form.Label>Upload an image file</Form.Label>
			<Form.Control type="file" />
			</Form.Group>
		</Container>
		</div>
		
	)
}

export default Home;