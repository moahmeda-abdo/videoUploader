import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
export default function VideoUploader() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoCategory, setVideoCategory] = useState("");
  const [video, setVideo] = useState(null);


  const submitHandler = async (e) => {

    e.preventDefault();

    const uploadToCloud = async (file) => {

      const formData = new FormData();
      formData.append("file", video);
      formData.append("upload_preset", "rnl3hvsh");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/drleayhps/video/upload",
        formData
      );
      console.log("Video uploaded successfully:", response.data.secure_url);
      return response.data.secure_url;
    };
    const videoUrl = await uploadToCloud(video);

    const sendingToServer = await axios.post(
      "http://localhost:5000/api/video/uploadvideo",
      {
        title: videoTitle,
        url: videoUrl,
        category: videoCategory,
      }
    );
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Video Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Video Title"
              onChange={(e) => setVideoTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              onChange={(e) => setVideoCategory(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Vdieo file</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>

    </div>
  );
}
