import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./App.css";
import { format } from "date-fns"; // for date formatting

const App = () => {
  // State for date, time, title, and description
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format date and time before sending to backend
    const formattedDate = format(startDate, "yyyy-MM-dd");
    const formattedTime = format(startTime, "HH:mm");

    const todo = { title, description, startDate: formattedDate, startTime: formattedTime };
    
    
    try {
      const { data } = await axios.post("http://localhost:9000/userrouter/todo", todo);
      
      if(title){
        alert("Form submitted succesfully")
        console.log("Data submitted:", data);
        console.log(todo);
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <Container className="container-custom">
      <Row className="row-custom">
        <Col lg={6} xs={12} className="col-custom">
          <Form onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center" }}>ToDo List</h2>
            <Form.Group className="mt-4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>Time</Form.Label>
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="mt-4" align="center">
              <Button className="submit-btn" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
