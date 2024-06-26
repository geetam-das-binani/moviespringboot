import {Form,Button} from 'react-bootstrap'

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (
   <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>{labelText}</Form.Label>
      <Form.Control as="textarea" rows={3} ref={revText} defaultValue={defaultValue}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Submit
    </Button>
   </Form>
  )
}

export default ReviewForm
