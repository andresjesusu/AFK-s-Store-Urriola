// import { Form, Container, Button} from "react-bootstrap";
// import {useState} from 'react'  
// import {colletion, addDoc, collection} from 'firebase/firestore'
// // import {getStore, ref, uploadBytes} from 'firebase/storage'
// import {db} from '../firebase'

// const AddItem = () => {

//     const [image, setImage] = usestate('');
     
//     const onSubmit = (event) => {
//      event.preventDefault();
//      const name = event.targer.elements.name.value;
//      const description = event.targer.elements.name.value;
//      const price = event.targer.elements.name.value;
//      addToFirebase(name, description, price)
//      }
    
//      const addToFirebase = async (name, description, price) => {
//      try {
// const docRef = await addDoc(collection(db, "productListData"){

//         name: name,
//         description: description,
//         price: price
      
// })
//      }catch (e){
//          console.log("ha ocurrido un error")
//      }
// }
     

//     return (
//         <Container style={{marginTop:"30px"}}>
//     <Form onSubmit={onSubmit}>
//         <Form.Control size="lg" type="text" placeholder="Large text" />
//         <Form.Text className="text-muted">
//       Agregar Nombre del Producto
//     </Form.Text>
//   <br />
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Descripcion</Form.Label>
//     <Form.Control as="textarea" rows={3} />
//   </Form.Group>

//   <Form.Group controlId="formFileLg" className="mb-3">
//     <Form.Label>Imagen</Form.Label>
//     <Form.Control type="file" size="lg" />
//   </Form.Group>
//   <Button variant="primary">Enviar Producto</Button>
//     </Form>
//     </Container>


//     )
//   };
  
//   export default AddItem;
  