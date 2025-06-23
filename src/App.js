import React, { useState } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';





function App() {


  const [count, setCount] = useState(0);



  return (
    <Container maxWidth="sm">

      <Box textAlign="start" mt={4}>

        <Typography variant="h3" gutterBottom>Simple Counter</Typography>

        <Box mt={2}>

          <Button onClick={() => setCount(count + 1)}>Raise</Button>
          <Button onClick={() => setCount(count - 1)}>Lower</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </Box>

        <Typography variant='h7'>{count}</Typography>

        <Typography variant="h5" gutterBottom>
          {count > 0 ? 'The current count is higher than 0' : count < 0 ? 'The current count is lower than 0' : 'The current count is 0'}
        </Typography>





      </Box>


    </Container>
  );
}

export default App;
