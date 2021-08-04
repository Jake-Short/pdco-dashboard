import { makeStyles } from '@material-ui/core';
import { borderColor, mobileWidthPxl } from '../../Utils/constants';

/**
 * Now apply these grid settings to the actual styles generator
 */
export const useStyles = makeStyles(
  () => ({
    filterSortButton: {
      '& button': {
        width: 30,
        height: 30,

        position: 'absolute',
        right: 3,
        top: 3,
        zIndex: 10,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background: '#181b2e',
        border: `3px solid ${borderColor}`,
        borderRadius: 7,
        outline: 'none',
        color: 'white',
        cursor: 'pointer',

        transition: 'ease-in-out 0.12s',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.15)'
        }
      }
    },
    filterSortDropdownContainer: {
      position: 'absolute',
      top: 40,
      right: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      zIndex: 20,

      overflowY: 'auto',

      minWidth: 150,
      minHeight: 100,
      padding: '0.7rem',

      background: '#181b2e',
      border: `3px solid ${borderColor}`,
      borderRadius: 7,
      boxShadow: 'rgba(255, 255, 255, 0.1) 0px 3px 8px',

      transition: 'ease-in-out 0.12s',
      transformOrigin: 'top'
    },
    filterSortDropdownHeader: {
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: 600,
      margin: 0
    },
    filterSortDropdownOptionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: '0.5rem 0 0 0',
      width: '100%',

      '& > div': {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '0.35rem',
        margin: '0.2rem 0',
        borderRadius: 7,
        cursor: 'pointer',

        transition: 'ease-in-out 0.12s',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)'
        },
        '& p': {
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: 500,
          margin: 0
        },
        '& div': {
          margin: '0 0 0 auto'
        }
      },
      '& > #selected': {
        background: 'rgba(255, 255, 255, 0.2)'
      }
    },
    divider: {
      margin: '0.25rem 0 0.6rem 0',

      width: '100%',
      height: '1px',

      background: 'rgba(255, 255, 255, 0.1)'
    },

    [`@media (max-width: ${mobileWidthPxl}px)`]: {
      filterSortDropdownContainer: {
        maxHeight: '160px'
      }
    }
  }),
  { name: 'main-ui' }
);
