import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@material-ui/core';

const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    borderRadius: '0px',
    "& $notchedOutline": {
      borderColor: theme.palette.secondary.lighter,
    },
    "&:hover $notchedOutline": {
      border: '1px solid #9d9d9d',
    },
    "&$focused $notchedOutline": {
      border: '1px solid #9d9d9d',
    }
  },
  input: {
    padding: '10px 12px 10px 12px',
    fontSize: 16,
    lineHeight: '22px',
    letterSpacing: '0.01rem',
  },
  focused: {},
  notchedOutline: {},
  adornedStart: {
    paddingLeft: 9,
  },
  multiline: {
    padding: 0,
  }
}));

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: 4,
  },
  subLabel: {
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.primary.main,
    marginBottom: 8,
    display: 'block',
  }
}));

export default function TextField({
  id,
  label,
  value,
  error,
  helperText,
  fullWidth,
  bottomMargin,
  optional,
  ...props
}) {
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      style={{
        marginBottom: bottomMargin,
      }}
    >
      <div>
        <InputLabel htmlFor={id} shrink={false} classes={{root: clsx(optional && classes.label)}}>{label}</InputLabel>
        {optional && <span className={clsx(classes.subLabel)}>optional</span>}
      </div>
      <OutlinedInput
        type="text"
        id={id}
        value={value}
        {...props}
        classes={outlinedInputClasses}
      />
      <FormHelperText>
        {helperText}
      </FormHelperText>
    </FormControl>
  )
}
