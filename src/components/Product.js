import { useTheme } from '@emotion/react';
import { Card, CardActions, CardContent, IconButton, Rating, Typography, ExpandMore, Button, Collapse } from '@mui/material';
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Product = ({data}) => {
  const {_id, name, description, price, rating, category, supply, yearlySalesTotal, yearlyTotalSoldUnits} = data;  
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card sx={{backgroundImage: 'none', backgroundColor: theme.palette.background.alt}} borderRadius='.55rem' >
      <CardContent>
        <Typography sx={{fontSize: 14}} color={theme.palette.secondary[700]} gutterBottom >
            {category}
        </Typography>
        <Typography variant='h5' component='div'>
            {name}
        </Typography>
        <Typography sx={{mb: '1rem'}} color={theme.palette.secondary[400]}  >
            ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readonly  />
        <Typography variant='body2' sx={{fontSize: 13}}>
            {description}
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <Button variant='primary' size='small' onClick={() => setIsExpanded(!isExpanded)}>
          See More
        </Button>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{color: theme.palette.neutral[300]}}>
            <CardContent>
                <Typography paragraph>id: {_id}</Typography>
                <Typography paragraph>
                   Supply Left: {supply}
                </Typography>
                <Typography>
                    Yearly Sales This Year: {yearlySalesTotal}
                </Typography>
                <Typography>
                    Yearly Units Sold This Year: {yearlyTotalSoldUnits}
                </Typography>
            </CardContent>
      </Collapse>
        
      </CardActions>

    </Card>
  )
}

export default Product
