import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { Formik } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display:'flex',
    '@media (max-width: 1024px)': {
      display:'block'
    }
  },
  subtitle: {
    marginBottom: 28,
  },
  signup: {
    marginTop: 50,
  },
  signupLink: {
    fontSize: 16,
    lineHeight: '24px',
    color: theme.palette.secondary.main,
    marginTop:40
  },
  textButton: {
    fontSize: 14,
    lineHeight: '22px',
    color: theme.palette.secondary.main,
    textTransform: 'none',
    letterSpacing: '0.01rem',
    cursor: 'pointer',
  },
  fieldMargin: {
    marginBottom: 15,
  },
  forgotButton: {
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.secondary.main,
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
    float: 'left',
    width: '30%',
    padding:'100px 70px',
    display: 'inline-block',
    '@media (max-width: 1024px)': {
      width: '100%',
      padding:'120px 50px'
    },
    '@media (max-width: 568px)': {
      width: '100%',
      padding:'120px 30px'
    },
  },
  description:{
    position: 'relative',
    width:'70%',
    '@media (max-width: 1024px)': {
      width: '100%'
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
  cardGroup:{
    display:'flex',
    marginTop:'15%',
    justifyContent:'space-between',
    '@media (max-width: 1024px)': {
      width:'100%',
      top:480,
      display:'block'
    }
  },
  bodyText:{
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color:'#FFFFFF',
    '@media (max-width: 1024px)': {
      // display:'none'
    }
  },
  equipped:{
    color: '#3D9CC1',
    "&:hover": {
      border: '1px solid #007EE6',
    },
  },
  cardLeft:{
    width:'50%',
    marginRight:'3%',
    borderRadius:'1px soild black',
    '@media (max-width: 1024px)': {
      width:'100%',
      margin:0
    }
  },
  cardRight:{
    width:'50%',
    marginLeft:'3%',
    '@media (max-width: 1024px)': {
      display:'none'
    },
  },
  bgDescription:{
    zIndex: 1,
    position:'relative',
    padding:'120px 70px 10px',
    color:'white',
  },
  bottomRightLabel:{
    float:'right',
    marginTop:6,
    color:'#b8c0de',
    '@media (max-width: 1024px)': {
      display:'none'
    },
  },
  bottomLeftLabel:{
    float:'right',
    marginTop:6,
    color:'#b8c0de',
  },
  stepper:{
    display:'none',
    '@media (max-width: 1024px)': {
      display:'block',
      position: 'relative', 
      width: '100%', 
    },
  },
  sliderLabel:{
    textAlign:'center',
    fontSize: 13,
    backgroundColor:'#333',
    display: 'block',
    height: '0.75em',
    lineHeight: '0.75em',
    width: '0.75em',
    borderRadius: '50%',
    color: 'white',
},
sideBarItem:{
  display:'inline-block',
  marginLeft:14
}
}));

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters required!').required('Required'),
});

export default function CPLoinForm({
  error,
}) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

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
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                bottomMargin={12}
              />
              <TextField
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={values.password}
                placeholder="Password"
                className={classes.textInput}
                onChange={handleChange}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      className={classes.textButton}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </span>
                  </InputAdornment>
                }
                error={errors.password && touched.password}
                helperText={errors.password && touched.password && errors.password}
                fullWidth
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
                color="secondary"
                size="medium"
              >
                Log in
              </Button>
              <Button
                style={{marginTop:20}}
                type="submit"
                disabled={isSubmitting}
                fullWidth
                variant="contained"
                disableElevation
                color="primary"
                size="medium"
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
            className={classes.signup}
            variant="body1"
            align="center"
          >
            <Link to="/signup" className={classes.signupLink}>
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
            <span>OpenMarkets</span>
            <h1>Simplifying Healthcare<br/>Equipment Purchasing</h1>
            <p className={classes.bodyText}>OpenMarkets is the leading online platform for buying, selling<br/> 
                and managing health care equipment, used by hundreds of <br/>
                hospitals and equipment suppliers to facilitate transactions <br/>
                and communications in the $80BN health care capital market.
            </p>
          </div>
          <div className={classes.cardGroup}>
            <div className={classes.cardLeft}>
              <Card className={classes.cardLeftRoot}>
                <CardContent style={{padding:2}}>
                  <Typography gutterBottom variant="h5" component="h4">
                    Lizard
                  </Typography>
                  <Divider/>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                  </Typography>
                    <Link to ="#" className={classes.equipped}>
                      Connect With Equipped MD Here
                    </Link>
                </CardContent>
              </Card>
              <h5 className={classes.bottomLeftLabel}>promotion</h5>
            </div>
              <div className={classes.cardRight}>
                <Card className={classes.cardRightRoot}>
                  <CardContent style={{padding:2}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species. 
                    </Typography>
                    <Link to ="#" className={classes.equipped}>
                      Order N95s, Nitrile Gloves, and more
                    </Link>
                  </CardContent>
                </Card>
                <h5 className={classes.bottomRightLabel}>promotion</h5>
              </div>
              <div className={classes.stepper}>
                <ul>
                  <li className={classes.sideBarItem}>
                    <label className ={classes.sliderLabel}> </label>
                  </li>
                  <li className={classes.sideBarItem}>
                    <label className ={classes.sliderLabel}> </label>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}
