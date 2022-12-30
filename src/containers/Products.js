import { Box, useMediaQuery } from '@mui/material';
import React, {useState} from 'react'
import {useGetProductsQuery} from '../state/api';
import Header from '../components/Header'
import Product from 'components/Product';
const Products = () => {
    const {data, isLoading} = useGetProductsQuery();
    const isNonMobile = useMediaQuery("(min-width: 800px)");
  return (
    <Box ml='2rem' >
        {/* "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4' by doing this every child component is going to have a span 4 (meaning that its going to have the entire width when its in Mobile screen)*/}
      <Header  title='Products' subtitle='see your list of products' />
      {data && !isLoading ? <Box display='flex' alignItems='center' maxWidth='100%' mt='20px' flexWrap='wrap' justifyContent='space-between'
       >
        {data.map((product) => {
            return <Box  width={isNonMobile ? '20rem' : '100%'} margin={!isNonMobile &&'auto'} mb='1rem'>
                <Product data={product} />
            </Box>
        })}
      </Box> : <>Loading...</> }
    </Box>
  )
}

export default Products;
