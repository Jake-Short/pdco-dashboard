import { makeStyles } from '@material-ui/core';
import { mobileWidthPxl, borderColor } from '../../Utils/constants';

export const useStyles = makeStyles(
  (theme) => ({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex'
    },
    month: {
      flex: 1
      // backgroundColor: 'rgba(255,255,255,0.05)'
    },
    year: {
      flex: 1
      // backgroundColor: 'rgba(255,255,255,0.05)'
    },

    count: {
      width: '100%',
      height: '100%',
      fontSize: 60,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    [`@media (max-width: ${mobileWidthPxl}px)`]: {
      container: {
        //
      }
    }
  }),
  { name: 'neo-count' }
);