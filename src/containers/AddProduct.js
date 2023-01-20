import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Header from 'components/Header'
import React, { useState } from 'react'

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    supply: '',
  });
  const addProductImage = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
    }
    reader.onload = (readerEvent) => {
        setNewProduct({...newProduct, image: readerEvent.target.result});
    }
  }
  const createNewProduct = () => {
    console.log(newProduct)
  }
  
  return (
    <Box ml='2rem' >
        <Header title='Adding New Product' subtitle={'add new product to your store'} />
        <Box className='' display={'flex'} flexDirection='column' width='65%' ml={'3rem'}   >
            <TextField sx={{marginTop: '1rem'}} type='text' placeholder='Product Name ...' label='Product Name' onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
            <TextField sx={{marginTop: '1rem'}} type='number' placeholder='Product Price ...' label='Product Name' onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
            <Typography sx={{display: 'flex', alignItems: 'center', margin: '1rem', marginLeft: 0, mb: 0,}}>Product Image <TextField  onChange={(e) => addProductImage(e.target.files[0])}type='file' placeholder='Product Image ...' /></Typography>
            <TextField sx={{marginTop: '1rem'}} type='text' placeholder='Product Description ...' label='Product Description' onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}/>
            <TextField sx={{marginTop: '1rem'}} type='text' placeholder='Product Category ...' label='Product Category' onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}/>
            <TextField sx={{marginTop: '1rem'}} type='number' placeholder='Product Supply ...' label='Product Supply' onChange={(e) => setNewProduct({...newProduct, supply: e.target.value})}/>
            <Button sx={{marginTop: '1rem',}} variant='contained' onClick={() => createNewProduct()}>Save Product</Button>
        </Box>
    </Box>
  )
}

export default AddProduct
