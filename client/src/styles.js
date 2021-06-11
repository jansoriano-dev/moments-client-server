import { makeStyles } from '@material-ui/core/styles';
import { teal,blueGrey } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 0,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(2,134,146,1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
  mainContainer:{
    flexDirection:"column-reverse"
  }
},
palette: {
  primary: {
    main: teal[400],
  },
  secondary: {
    main: blueGrey[700],
  },
},
}));

