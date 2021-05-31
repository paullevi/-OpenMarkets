import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import clsx from  'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ReactComponent as GoogleIcon } from '../../icon/google.svg'
import TextField from '../../components/TextField';
import Button from '../../components/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display:'flex',
    '@media (max-width: 1024px)': {
      display:'block'
    }
  },
  signup: {
    marginTop: 50,
    fontSize: 15,
    fontWeight: 500,
    textDecoration:'underline',
    color: '#333333',
    '&:hover': {
      color:'#27C7FE'
    },
  },
  forgotButton: {
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.text.primary,
    marginBottom: 33,
    display: 'block',
    fontFamily: 'Source Sans Pro',
    cursor: 'pointer',
    textAlign:'right'
  },
  errorLabel: {
    marginBottom: 15,
    textAlign: 'center',
  },
  logoImg:{
    width:'65%',
    minWidth:'30%'
  },
  bgImageWrapper:{
    zIndex: 0,
    position: 'absolute',
    height: '100vh'
  },
  bgImage: {
    width:'100%',
    height:'100vh',
    '@media (max-width: 1024px)': {
      fontSize:28,
      display:'none'
    }
  },
  loginForm:{
    position: 'relative',
    width: '30%',
    padding:'90px 60px',
    display: 'inline-block',
    '@media (max-width: 1024px)': {
      width: '100%',
      padding:'120px 50px 80px',
      zIndex:999
    },
    '@media (max-width: 568px)': {
      width: '100%',
      padding:'120px 40px 50px',
      zIndex:999
    },
  },
  description:{
    position: 'relative',
    width:'70%',
    '@media (max-width: 1024px)': {
      width: '100%',
      zIndex:0
    }
  },
  bgContent:{
    textAlign:'left',
    '@media (max-width: 1024px)': {
      display:'none'
    }
  },
  cardLeftRoot:{
    maxWidth:'100%',
    borderRadius:8,
    border: '1px solid #c3b2d4',
    '@media (max-width: 1024px)': {
      width:'100%',
      display:'block'
    }
  },
  cardLeftRootInactive:{
    maxWidth:'100%',
    borderRadius:8,
    border: '1px solid #c3b2d4',
    '@media (max-width: 1024px)': {
      display:'none',
    }
  },
  cardRightRoot:{
    maxWidth:'100%',
    borderRadius:8,
    border: '1px solid #c3b2d4',
    '@media (max-width: 1024px)': {
      display:'none'
    }
  },
  cardRightRootActive:{
    maxWidth:'100%',
    borderRadius:8,
    border: '1px solid #c3b2d4',
    '@media (max-width: 1024px)': {
      display:'block'
    }
  },
  cardGroup:{
    display:'flex',
    marginTop:'15%',
    justifyContent:'space-between',
    '@media (max-width: 1024px)': {
      width:'100%',
      display:'block',
      marginTop:0
    }
  },
  card:{
    width:'50%',
    marginRight:'3%',
    borderRadius:'1px soild black',
    '@media (max-width: 1024px)': {
      width:'100%',
      margin:0
    }
  },

  bgDescription:{
    zIndex: 1,
    position:'relative',
    padding:'120px 70px 10px',
    color:'white',
    '@media (max-width: 1024px)': {
      padding:'0px 40px'
    },
  },
  bottomRightLabel:{
    marginTop:6,
    color:'#b8c0de',
    textAlign:'right',
  },
  bottomLeftLabel:{
    marginTop:6,
    color:'#b8c0de',
    textAlign:'right',
    '@media (max-width: 1024px)': {
      display:'none'
    },
  },
  stepper:{
    display:'none',
    '@media (max-width: 1024px)': {
      display:'block',
      position: 'relative', 
      width: '100%', 
      bottom:36
    },
  },
  sliderLabel:{
    textAlign:'center',
    fontSize: 13,
    backgroundColor:'#FFFFFF',
    display: 'block',
    height: 11,
    width: 11,
    borderRadius: '50%',
    color: 'white',
    border:'1px solid #9d9d9d'
  },
  sideBarItem:{
    display:'inline-block',
    // marginLeft:14
  },
  inlineLink:{
    color: '#3D9CC1',
    '&:hover': {
      color:'#27C7FE',
      textDecoration:'underline'
    },
  },
  media:{
    height:60,
    width:60
  },
  adImg: {
    width:80,
  },
  chageColor: {
    backgroundColor:'#9d9d9d',
  },

}));

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email. Please try again').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters required!').required('Password is required'),
});

export default function CPLoinForm({
  error,
}) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [toggleSelect, setToggleSelect] = useState(true);

  const onChangeView = () => {
    setToggleSelect(!toggleSelect);
  }

  return (
    <div className={classes.root}>
      <div className={classes.loginForm}>
        <img className={classes.logoImg} alt="logo" src='https://s3.amazonaws.com/om-exchange-production/assets/images/om_logo.png'/>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={schema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form style={{marginTop:60}}>
              <TextField
                id="email"
                placeholder="Email address"
                value={values.email}
                fullWidth
                onChange={handleChange}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                onBlur={handleBlur}
                bottomMargin={12}
              />
              <TextField
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                placeholder="Password"
                fullWidth
                onChange={handleChange('password')}
                onBlur={handleBlur}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      className={classes.textButton}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </span>
                  </InputAdornment>
                }
                error={errors.password && touched.password}
                helperText={errors.password && touched.password && errors.password}
                bottomMargin={10}
              />
              <span
                className={classes.forgotButton}
                onClick={() => window.Intercom('showNewMessage', 'I forgot password and needs to replace it')}
              >Forgot password?</span>
              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
                variant="contained"
                disableElevation
                color="primary"
                customColor="#56D4FF"
                size="medium"
              >
                Log in
              </Button>
              <Button
                style={{marginTop:20, border:'1px solid #9d9d9d'}}
                type="submit"
                disabled={isSubmitting}
                fullWidth
                variant="contained"
                disableElevation
                color="secondary"
                size="medium"
                customColor="#FFFFFF"
                startIcon={<GoogleIcon/>}
              >
                Log in with Google
              </Button>
              <FormHelperText error={!!error} classes={{ root: classes.errorLabel }}>
                {error}
              </FormHelperText>
            </form>
          )}
        </Formik>
        <Typography
          style={{marginTop:50}}
          variant="body2"
          align="center"
        >
          <Link to="/signup" className={classes.signup}>
            New user? Sign up here.
          </Link>
        </Typography>
      </div>
      <div className={classes.description}>
        <div className={classes.bgImageWrapper}>
          <img className={classes.bgImage} alt="Background" src='https://om-exchange-production.s3.amazonaws.com/assets/images/background-microscope.jpg'/>
        </div>
        <div className={classes.bgDescription}>
          <div className={classes.bgContent}>
            <Typography variant="body1">OpenMarkets</Typography>
            <Typography variant="h1" style={{marginTop:12}}>Simplifying Healthcare<br/>Equipment Purchasing</Typography>
            <Typography variant="body1" style={{marginTop:14}}>OpenMarkets is the leading online platform for buying, selling<br/> 
                and managing health care equipment, used by hundreds of <br/>
                hospitals and equipment suppliers to facilitate transactions <br/>
                and communications in the $80BN health care capital market.
            </Typography>
          </div>
          <div className={classes.cardGroup}>
            <div className={classes.card}>
              <Card className={toggleSelect? classes.cardLeftRoot:classes.cardLeftRootInactive}>
                <CardContent style={{padding:2}}>
                  <Typography variant="h2">
                    Lizard
                  </Typography>
                  <Divider/>
                  <div style={{display:'flex', textAlign:'left'}}>
                    <img className = {classes.adImg} src="https://www.openmarketshealth.com/uploads/logos/suppliers/cropped-kenmed-medium-1-1024x413.png" alt="cardLeftImage"/>
                    <Divider orientation="vertical" flexItem/>
                    <Typography variant="subtitle2" style={{padding:'8px 10px'}}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                      <Typography>
                        <Link to ="#" className={classes.inlineLink}>
                          Connect With Equipped MD Here
                        </Link>
                      </Typography>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <h5 className={classes.bottomLeftLabel}>promotion</h5>
            </div>
            <div className={classes.card}>
              <Card className={toggleSelect? classes.cardRightRoot : classes.cardRightRootActive}>
                <CardContent style={{padding:2}}>
                  <Typography variant="h2">
                    Lizard
                  </Typography>
                  <Divider/>
                  <div style={{display:'flex', textAlign:'left'}}>
                    <img className = {classes.adImg} src="https://www.openmarketshealth.com/uploads/posts/cover-images/surgicaldirectlogo.jpg" alt="cardRightImage"/>
                    <Divider orientation="vertical" flexItem/>
                    <Typography variant="subtitle2" style={{padding:'8px 10px'}}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                      <Typography>
                        <Link to ="#" className={classes.inlineLink}>
                          Order N95s, Nitrile Gloves, and more
                        </Link>
                      </Typography>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <h5 className={classes.bottomRightLabel}>promotion</h5>
            </div>
            <div className={classes.stepper}>
              <li className={classes.sideBarItem}>
                <label className ={clsx(classes.sliderLabel,toggleSelect? classes.chageColor : '')} style={{marginRight:6}} onClick={onChangeView}> </label>
              </li>
              <li className={classes.sideBarItem}>
                <label className ={clsx(classes.sliderLabel,toggleSelect? '' : classes.chageColor)} onClick={onChangeView}> </label>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
