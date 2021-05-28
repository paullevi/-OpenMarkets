import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function hexToRGB(h, opacity) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length === 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length === 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgba("+ +r + "," + +g + "," + +b + "," + opacity + ")";
}

const useStyles = makeStyles(theme => ({
  root: {
    color: props => props.customColor,
    borderRadius: props => props.borderRadius || 6,
    '&:hover': {
      backgroundColor: props => props.customColor && hexToRGB(props.customColor, 0.04),
    }
  },
  label: {
    textTransform: 'none',
  },
  disabled: {
    backgroundColor: props => {
      if (props.color === "secondary") {
        return theme.palette.secondary.light
      }
    },
  },
  contained: {
    fill: theme.palette.common.white,
    color: 'white !important',
    backgroundColor: props => {
      if (props.color === "secondary") {
        return theme.palette.secondary.main
      } else {
        return props.customColor
      }
    },
    '&:hover': {
      backgroundColor: props => props.customColor && hexToRGB(props.customColor, 1),
    },
    '&$disabled': {
      color: theme.palette.common.white,
      backgroundColor: props => {
        if (props.color === "secondary") {
          return theme.palette.secondary.light
        }
      },
    },
  },
  outlined: {
    borderWidth: 2,
    backgroundColor: theme.palette.common.white,
    fill: props => {
      if (props.color === "secondary") {
        return theme.palette.secondary.main;
      } else if (props.customColor) {
        return props.customColor;
      }
    },
    borderColor: props => {
      if (props.color === "secondary") {
        return theme.palette.secondary.main;
      } else if (props.customColor) {
        return props.customColor;
      }
    },
    '&:hover': {
      borderWidth: 2,
      backgroundColor: theme.palette.common.white,
      color: props => {
        if (props.color === "secondary") {
          return theme.palette.secondary.dark;
        } else if (props.customColor) {
          return props.customColor;
        }
      },
      borderColor: props => {
        if (props.color === "secondary") {
          return theme.palette.secondary.dark;
        } else if (props.customColor) {
          return props.customColor;
        }
      },
    }
  },
  startIcon: {
    fill: props => props.customColor,
  },
  endIcon: {
    fill: props => props.customColor,
  },
  containedSizeLarge: {
    fontSize: 18,
    padding: '9px 22px',
  },
  containedSizeSmall: {
    fontSize: 14,
  },
  textSizeSmall: {
    fontSize: 14,
    lineHeight: '24px',
  },
  textSizeLarge: {
    fontSize: 18,
    lineHeight: '24px',
  },
  iconSizeSmall: {
  },
}));

export default function CustomButton(props) {
  const classes = useStyles(props);
  const { customColor, borderRadius, ...originalProps } = props;
  return (
    <Button
      {...originalProps}
      classes={classes}
    />
  )
}
