import React from "react";
import { Form, Row, Col } from "react-bootstrap";
const MetaTagForm = ({ metaTagCollections, setMetaTagCollections }) => {
  const handleInputChange = (name, value) => {
    let newTags = { ...metaTagCollections };
    newTags[name] = value;
    setMetaTagCollections(newTags); // Update the state here
  };

  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>Website Name or Page Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter A Website or Title"
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>Website Address</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Website URL"
              onChange={(e) => handleInputChange("url", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>Website Meta Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter the Website Meta Description"
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>Website Meta Keywords</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Website Keywords"
              onChange={(e) => handleInputChange("keywords", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>Website URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter The URL of LOGO"
              onChange={(e) => handleInputChange("imageUrl", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Label>Author of Website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            onChange={(e) => handleInputChange("author", e.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default MetaTagForm;
