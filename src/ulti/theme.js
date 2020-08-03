export default {
    palette: {
        primary: {
          main: '#f8bbd0',
        },
        secondary: {
          main: '#ec407a',
        },
    },

    spreadThis:{
      typography:{
        useNextVariants: true
      },
      form:{
        textAlign: 'center'
      },
      image:{
          margin: '20px auto 20px auto',
          imgFullWitdh: '20px'
      },
      textField:{
          margin: '10px auto 10px auto',
      },
      pageTitle:{
          margin: '20px auto 10px auto',
          fontSize: '30px'
      },
      button:{
          margin: '20px auto 10px auto',
          position: 'relative'
      },
      ErrStyle:{
          color:'red',
          fontSize: '1rem'
      },
      progress:{
          position: 'absolute',
          size: '30'
      },
        paper: {
          padding: 20
      },
      card:{
        display:'flex',
        marginBottom:20
    },
    content:{
        padding:25,
        objectFit:'cover'
    }
      },
        profile: {
          '& .img-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
              position: 'absolute',
              top: '80%',
              left: '70%'
            }
          },
          '& .profile-img': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
          },
          '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
              verticalAlign: 'middle'
            }
          },
          '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
          },
          '& svg.button': {
            '&:hover': {
              cursor: 'pointer'
            }
          }
        },
        buttons: {
          textAlign: 'center',
          '& a': {
            margin: '20px 10px'
          }
        }
      }     