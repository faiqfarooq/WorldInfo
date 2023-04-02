import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <React.Fragment>
        <Container disableGutters maxWidth="xl">
        <Divider />
            <Box display="flex" justifyContent="center" py="1rem">
           <Typography >&#169; Faiq Farooq 2023</Typography>
            </Box>
        </Container>
    </React.Fragment>
  )
}

export default Footer