/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
// material
import { experimentalStyled as styled, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Link, Button, Divider, Slider } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(( theme ) => ({
  active: {
    textDecoration: 'none',
    backgroundColor: '#fff',
    color: '#6b6b6b',
    opacity: 1,
    '&:hover': {
      background: '#fff',
      color: '#6b6b6b'
    },
  },
  label: {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    color: '#e7e7e7',
    display: 'block',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    }
  },
  value: {
    fontSize: '1.2rem',
    lineHeight: '1.55rem',
    fontWeight: 600,
    color: '#ffffff',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    }
  },
  textRight: {
    textAlign: 'right'
  },
  textMiddle: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0),
  background: 'url("/static/home/landing-stake-bg.svg")',
  backgroundSize: 'cover',
  backgroundPosition: 'left top'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: 0,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

const CalculatorStyle = styled('div')(() => ({
  position: 'relative',
  background: '#7f7f7f',
  minHeight: '520px',
  borderRadius: '4px'
}));

const NavStyle = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  marginTop: '1.5rem',
  marginBottom: 0,
  columnGap: '1rem'
}));

const NavItemStyle = styled('li')(() => ({
  marginBottom: 0
}));

const NavLinkStyle = styled(Link)(() => ({
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '20px',
  padding: '0.5rem 1rem',
  textDecoration: 'underline',
  textTransform: 'uppercase',
  opacity: 0.8,
  '&:hover': {
    color: '#fff',
    background: 'transparent',
    opacity: 1
  }
}));

const DividerBoxStyle = styled('div')(({ theme }) => ({
  margin: '1.5rem 3rem 0',
  [theme.breakpoints.down('sm')]: {
    margin: '1.5rem 1.5rem 0'
  }
}));

const InputBoxStyle = styled('div')(({ theme }) => ({
  padding: '1.5rem 3rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 1.5rem'
  }
}));

const OutputBoxStyle = styled('div')(({ theme }) => ({
  padding: '1.5rem 3rem 3rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 1.5rem 1.5rem'
  }
}));

const PeriodStyle = styled(Grid)(({ theme }) => ({
  textAlign: 'right',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
    marginTop: '0.5rem'
  }
}));

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 18,
    width: 18,
    marginTop: '-4px',
    backgroundColor: '#fff',
    boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
      }
    }
  },

  '& .MuiSlider-track': {
    border: 'none',
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '#a6a8a9'
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '#212529'
  },
  '& span:nth-child(3)': {
    left: '3px !important',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#212529',
    height: 8,
    width: 1,
    marginTop: '10px',
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: '#212529'
    },
  },
  '& .MuiSlider-markLabel': {
    color: '#212529',
    top: '35px',
    fontWeight: '600',
    '&:first-of-type': {}
  }
}));

const items = [
  {
    name: 'liquidity',
    reward: 0.01
  },
  {
    name: 'assets',
    reward: 0.1
  }
];

const marks = [
  {
    value: 0,
    scaledValue: 10,
    label: '10'
  },
  {
    value: 50,
    scaledValue: 177,
    label: '177'
  },
  {
    value: 100,
    scaledValue: 3160,
    label: '3.16k'
  },
  {
    value: 150,
    scaledValue: 56230,
    label: '56.23k'
  },
  {
    value: 200,
    scaledValue: 1000000,
    label: '1M'
  }
];

const rewardLists = [
  {
    name: 'daily',
    token: 0,
    usd: 0
  },
  {
    name: 'monthly',
    token: 0,
    usd: 0
  },
  {
    name: 'yearly',
    token: 0,
    usd: 0
  }
];

// ----------------------------------------------------------------------

export default function LandingStake() {
  const classes = useStyles();

  const initialItem = items[0];

  const [nav, setNav] = useState(initialItem.name);
  const [reward, setReward] = useState(initialItem.reward);
  const [rewards, setRewards] = useState(rewardLists);
  const [value, setValue] = useState(0);
  const [scale, setScale] = useState(10);

  useEffect(() => {
    calculateReward();
  }, [scale, reward]);

  const handleNav = (item) => {
    setNav(item.name);
    setReward(item.reward);
  };

  const handleSlider = (event, newValue) => {
    setValue(newValue);

    const previousMarkIndex = Math.floor(value / 50);
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 50;
    let currentScale;
    if (remainder === 0) {
      currentScale = previousMark.scaledValue;
    } else {
      const nextMark = marks[previousMarkIndex + 1];
      const increment = (nextMark.scaledValue - previousMark.scaledValue) / 50;
      currentScale = Math.round(remainder * increment + previousMark.scaledValue);
    }
    setScale(currentScale);
  };

  const calculateReward = () => {
    const newRewards = rewards.map(a => {
      const returnValue  = {...a};
      if (a.name === 'daily') {
        const token = reward * 1 * scale;
        const usd = reward * 1 * scale;
        returnValue.token = token.toFixed(2);
        returnValue.usd = usd.toFixed(2);
      } else if (a.name === 'monthly') {
        const token = reward * 30 * scale;
        const usd = reward * 30 * scale;
        returnValue.token = token.toFixed(2);
        returnValue.usd = usd.toFixed(2);
      } else if (a.name === 'yearly') {
        const token = reward * 365 * scale;
        const usd = reward * 365 * scale;
        returnValue.token = token.toFixed(2);
        returnValue.usd = usd.toFixed(2);
      }
      return returnValue
    });
    setRewards(newRewards);
  }
  
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between" alignItems="flex-end">
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <CalculatorStyle>
              <Box>
                <Box
                  sx={{
                    display: 'block',
                    background: '#343a40',
                    padding: '1rem 2rem 0.8rem 2rem',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px'
                  }}
                >
                  <Typography component="span" sx={{ fontSize: '1.125rem', color: '#fff', margin: 0, padding: 0 }}>
                    Staking Calculator
                  </Typography>
                </Box>
                <Box>
                  <NavStyle>
                    {items.map((item, i) => (
                      <NavItemStyle key={i}>
                        <NavLinkStyle
                          component={Button}
                          className={nav === item.name ? classes.active : ''}
                          onClick={() => handleNav(item)}
                        >
                          {item.name}
                        </NavLinkStyle>
                      </NavItemStyle>
                    ))}
                  </NavStyle>
                </Box>
                <DividerBoxStyle>
                  <Divider sx={{ borderTop: '1px solid #bfbfbf', margin: '0.8rem 0' }} />
                </DividerBoxStyle>
                <InputBoxStyle>
                  <Box>
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ fontSize: '0.875rem', lineHeight: '1.5rem', color: '#e7e7e7' }}
                    >
                      <Grid item sm={8} xs={12}>
                        <Typography>Your Tokenized asset (Token) stake</Typography>
                        <Typography
                          component="span"
                          className={classes.value}
                          sx={{
                            fontSize: '2rem !important',
                            fontWeight: 600,
                            marginTop: '0.5rem'
                          }}
                        >
                          <NumberFormat value={scale} displayType='text' thousandSeparator />
                        </Typography>
                      </Grid>
                      <PeriodStyle item sm={4} xs={12}>
                        <Typography sx={{ marginBottom: '0.5rem' }}>Staking Period</Typography>
                        <Typography
                          component="span"
                          className={classes.value}
                          sx={{
                            fontSize: '2rem !important',
                            fontWeight: 600,
                            marginTop: '0.5rem'
                          }}
                        >
                          1 Year
                        </Typography>
                      </PeriodStyle>
                    </Grid>
                  </Box>
                  <Box sx={{ marginTop: '1rem' }}>
                    <IOSSlider
                      value={value}
                      min={0}
                      step={1}
                      max={200}
                      // valueLabelFormat={numFormatter}
                      marks={marks}
                      // scale={scale}
                      onChange={handleSlider}
                      valueLabelDisplay="off"
                      aria-labelledby="non-linear-slider"
                    />
                  </Box>
                </InputBoxStyle>
                <OutputBoxStyle>
                  {rewards.map((reward, i) => (
                    <Box key={i}>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Typography className={`${classes.label} ${classes.textMiddle}`}>{reward.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography className={`${classes.value} ${classes.textRight}`}>
                            <NumberFormat value={reward.token} displayType='text' thousandSeparator /> EQUITY
                          </Typography> 
                        </Grid>
                        <Grid item xs={4}>
                          <Typography className={`${classes.value} ${classes.textRight}`}>
                            <NumberFormat value={reward.usd} displayType='text' thousandSeparator prefix='$' />
                          </Typography>
                        </Grid>
                      </Grid>
                      {i < rewards.length - 1 ? (
                        <Box sx={{ margin: '1rem 0' }}>
                          <Divider sx={{ borderTop: '1px solid #bfbfbf' }} />
                        </Box>
                      ) : (
                        <></>
                      )}
                    </Box>
                  ))}
                </OutputBoxStyle>
              </Box>
            </CalculatorStyle>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <Box>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{
                    textTransform: 'none',
                    marginBottom: 4,
                    color: 'common.black',
                    display: 'block',
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: { xs: 40, md: 64 },
                    lineHeight: '72px',
                    letterSpacing: 0
                  }}
                >
                  Stake your tokens and <br /> get rewards
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="p"
                  sx={{
                    maxWidth: 540,
                    marginBottom: 4,
                    textTransform: 'none',
                    color: '#7C7B7B',
                    display: 'block',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '28px',
                    opacity: 0.6,
                    margin: { xs: 'auto', md: 'auto auto 32px auto' }
                  }}
                >
                  You can stake your tokenized assets or stablecoin to increase the liquidity of the protocol. In
                  return, you will be rewarded with the protocol’s native EQUITY token
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="p"
                  sx={{
                    diplay: 'block',
                    maxWidth: 540,
                    textTransform: 'none',
                    color: '#7C7B7B',
                    display: 'block',
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 12,
                    lineHeight: '28px',
                    opacity: 0.6,
                    margin: { xs: 'auto', md: 'auto auto 32px auto' }
                  }}
                >
                  *Staking rewards are limited, EQUITY token has max supply
                </Typography>
              </Box>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
