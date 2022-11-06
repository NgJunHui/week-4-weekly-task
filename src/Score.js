import React from 'react'
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import { useDispatch } from 'react-redux';
import { onDelete } from './actions';

const Score = () => {
  const btnHover = {
    ml: 13,
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
      color: 'white',
      backgroundColor: '#50577A'
    }
  }

  const employeeList = useSelector(state => state.employee)

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(onDelete(id));
  }
  return (
    <div>
      <Box display='flex' flexWrap='wrap' sx={{ gap: 10, m: 4 }}>
        {employeeList.length ? employeeList.map(info => {
          return (
            <React.Fragment key={info.id}>
              <Card sx={{ width: 300 }}>
                <CardContent>
                  <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    Name: {info.name}
                  </Typography>
                  <Typography textAlign={'center'} variant="h6" color="text.secondary">
                    Your score is: {info.score}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box>
                    <Button sx={btnHover}
                      size="small" onClick={() => handleDelete(info.id)}>Delete</Button>
                  </Box>
                </CardActions>
              </Card>
            </React.Fragment>
          )
        })
          : (
            <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{m: '150px auto 0 auto',}}
            >
              <Typography
                variant='h4'
                fontWeight='600'
                sx={{ textAlign: 'center' }}
              >
                No score records
              </Typography>
            </Box>
          )}
      </Box>
    </div>
  )
}

export default Score;