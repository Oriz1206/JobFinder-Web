import React from "react";
import './style.css'
import * as Components from './Components';
import { useNavigate } from "react-router-dom";

function Login() {
    const [LoginHere, toggle] = React.useState(true);
    const navigate = useNavigate();
    const ClickSign = () => {
        navigate("/signup");
      };

    return(
        <Components.Container>
            <Components.SeekerContainer ChangeRole={LoginHere}>
                <Components.Form>
                    <Components.Paragraph>
                        <Components.Title>Job seeker</Components.Title>
                    </Components.Paragraph>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    
                    <Components.submit>
                        <Components.SignUpButton onClick={ClickSign} >SignUp</Components.SignUpButton>
                        <Components.LoginButton>Login</Components.LoginButton>
                    </Components.submit>
                    
                </Components.Form>
            </Components.SeekerContainer>

            <Components.RecruiterContainer ChangeRole={LoginHere}>
                <Components.Form>
                    <Components.Paragraph>
                        <Components.Title>Recruiter</Components.Title>
                    </Components.Paragraph>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.submit>
                        <Components.SignUpButton onClick={ClickSign} >SignUp</Components.SignUpButton>
                        <Components.LoginButton>Login</Components.LoginButton>
                    </Components.submit>

                </Components.Form>
            </Components.RecruiterContainer>

            <Components.OverlayContainer ChangeRole={LoginHere}>
                <Components.LoginOverlay ChangeRole={LoginHere}>

                <Components.LeftOverlayPanel ChangeRole={LoginHere}>
                    <Components.Title2>Welcome Back Recruiter!</Components.Title2>
                    <Components.Paragraph>
                        Glad to see you again!
                    </Components.Paragraph>
                    <Components.LoginGhostButton onClick={() => toggle(true)}>
                        Login Here
                    </Components.LoginGhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel ChangeRole={LoginHere}>
                    <Components.Title2>Hello, Job Seeker!</Components.Title2>
                    <Components.Paragraph>
                        Welcome Back to your journey!
                    </Components.Paragraph>
                    <Components.LoginGhostButton onClick={() => toggle(false)}>
                        Login Here
                    </Components.LoginGhostButton> 
                </Components.RightOverlayPanel>
                </Components.LoginOverlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default Login;