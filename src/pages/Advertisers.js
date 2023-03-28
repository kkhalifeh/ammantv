import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Button } from '@mui/material';


const Advertisers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advertisers, setAdvertisers] = useState([]);

  // handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // fetch advertisers from API on component mount
  React.useEffect(() => {
    fetch('/api/advertisers')
      .then((response) => response.json())
      .then((data) => setAdvertisers(data));
  }, []);

  // filter advertisers by search term
  const filteredAdvertisers = advertisers.filter((advertiser) =>
    advertiser.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fixed>
      <Box
        sx={{ p: 2 }}
      >
        <TextField
          label="Search Advertisers"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ float: 'right', mr: '10px' }}
        >
          Add Advertiser
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAdvertisers.map((advertiser) => (
              <TableRow key={advertiser.id}>
                <TableCell>{advertiser.name}</TableCell>
                <TableCell>{advertiser.address}</TableCell>
                <TableCell>{advertiser.phoneNumber}</TableCell>
                <TableCell>{advertiser.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Advertisers;
