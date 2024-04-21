import {Button} from '@mui/material';
function LoginButtons({handleLogin, handleSignUp}) {
    return (
        <>
            <Button sx = {{
            marginLeft : "auto", background : "white", color : "#3c3c3c", mr : "10px",
            '&:hover': {
                color : "white",
                backgroundColor: 'green',
              },
        }} varaint = "contained" onClick={handleLogin}
        > Login </Button>
        <Button sx = {{
            marginLeft : "5 px", background : "white", color : "#3c3c3c",
            '&:hover': {
                color : "white",
                backgroundColor: 'green',
              },
            }} varaint = "contained" onClick={handleSignUp}
            > Signup </Button>
        </>
    );
}

export default LoginButtons;