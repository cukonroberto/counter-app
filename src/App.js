import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Box, Container, ThemeProvider, CssBaseline } from '@mui/material';
import darkTheme from './Theme';




function App() {


  const [count, setCount] = useState(
    () => {
      const saved = localStorage.getItem('counter-value');
      return saved !== null ? parseInt(saved, 10) : 0;
    }
  );

  useEffect(() => {
    localStorage.setItem('counter-value', count.toString());
  }, [count]);



  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">

        <Box textAlign="Center" mt={10} bgcolor={'background.paper'} p={4} borderRadius={3} boxShadow={3}>

          <Typography variant='h3' gutterBottom color='primary'>
            Simple Counter
          </Typography>


          <Box mt={4} p={4} borderRadius={2} bgcolor={'background.default'} boxShadow={6} display={'inline-block'} minWidth={200}
          >

            <Typography variant='h2' color='primary'>{count}</Typography>

          </Box>


          <Box mt={3} display="flex" justifyContent="center" gap={5} flexWrap={"wrap"}>


            {[
              { label: 'Lower', action: () => setCount(count - 1) },
              { label: 'Reset counter', action: () => setCount(0) },
              { label: 'Raise', action: () => setCount(count + 1) },
            ].map(({ label, action }) => (
              <Card
                key={label}
                sx={{
                  width: 100,
                  bgcolor: 'background.paper',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                elevation={4}
              >
                <CardContent sx={{ p: 1, textAlign: 'center' }}>
                  <Button
                    onClick={action}
                    fullWidth
                    variant="text"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {label}
                  </Button>
                </CardContent>
              </Card>
            ))}



          </Box>


          <Typography variant='h6' mt={4} color={count > 0 ? 'success.main' : count < 0 ? 'error.main' : 'text.secondary'}>

            {count > 0 ? 'The current count is higher than 0'
              : count < 0 ? 'The current count is lower than 0'
                : 'The current count is 0'
            }
          </Typography>


        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default App;
