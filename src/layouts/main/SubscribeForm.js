import React, { useState } from 'react';
import PropTypes from 'prop-types';

// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, Stack, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(() => ({
  position: 'relative'
}));

SubscribeForm.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func
};

export default function SubscribeForm({ status, message, onValidated }) {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const handleInputKeyEvent = (e) => {
    setError(null);
    if (e.keyCode === 13) {
      e.preventDefault();
      handleFormSubmit();
    }
  };

  // handle form submit
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success retur true
    return email && email.indexOf('@') > -1 && isFormValidated;
  };

  return (
    <RootStyle>
      <Stack direction="row" mt={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
        <Box
          component="input"
          type="email"
          placeholder="Enter Your Email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={(e) => handleInputKeyEvent(e)}
          sx={{
            padding: '17px',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '16px',
            background: '#3B4857',
            border: '1px solid #636D79',
            color: '#FFF',
            flex: 1,
            maxWidth: 296,
            '&:focus': { borderColor: '#CCC', outline: 'none' }
          }}
        />
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            padding: '10px 10px',
            minWidth: 150,
            borderRadius: '0px',
            background: '#FFF',
            color: '#000',
            marginLeft: '0px',
            '&:hover': {
              background: '#EEE'
            }
          }}
        >
          Subscribe
        </Button>
      </Stack>
      <Box sx={{ paddingTop: '0.5rem' }}>
        {status === 'sending' && <Typography sx={{ color: 'blue' }}>sending...</Typography>}
        {status === 'error' || error ? (
          <Typography sx={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: error || message }} />
        ) : null}
        {status === 'success' && status !== 'error' && !error ? (
          <Typography sx={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />
        ) : null}
      </Box>
    </RootStyle>
  );
}
