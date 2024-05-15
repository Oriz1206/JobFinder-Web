import React, {useState} from "react";
import './style.css'
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { useRole } from './Role';
import { auth } from '../../../Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


function Login () {
    const { role, toggleRole } = useRole();
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const login = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

    const ClickSign = () => {
        navigate("/signup");
    };



    return (
        <Components.Container>
            <Components.SeekerContainer ChangeRole={role}>
                <Components.Form onSubmit={login}>
                    <Components.Paragraph>
                        <Components.Title>Job seeker</Components.Title>
                    </Components.Paragraph>
                    <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>

                    <Components.submit>
                        <Components.SignUpButton onClick={ClickSign}>SignUp</Components.SignUpButton>
                        <Components.LoginButton type="submit">Login</Components.LoginButton>
                    </Components.submit>
                </Components.Form>
            </Components.SeekerContainer>

            <Components.RecruiterContainer ChangeRole={role}>
                <Components.Form onSubmit={login}>
                    <Components.Paragraph>
                        <Components.Title>Recruiter</Components.Title>
                    </Components.Paragraph>
                    <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.submit>
                        <Components.SignUpButton onClick={ClickSign}>SignUp</Components.SignUpButton>
                        <Components.LoginButton type="submit">Login</Components.LoginButton>
                    </Components.submit>
                </Components.Form>
            </Components.RecruiterContainer>

            <Components.OverlayContainer ChangeRole={role}>
                <Components.LoginOverlay ChangeRole={role}>
                    <Components.LeftOverlayPanel ChangeRole={role}>
                        <Components.Title2>Welcome Back Recruiter!</Components.Title2>
                        <Components.Paragraph>Glad to see you again!</Components.Paragraph>
                        <Components.LoginGhostButton onClick={() => toggleRole(true)}>
                            Login Here
                        </Components.LoginGhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel ChangeRole={role}>
                        <Components.Title2>Hello, Job Seeker!</Components.Title2>
                        <Components.Paragraph>Welcome Back to your journey!</Components.Paragraph>
                        <Components.LoginGhostButton onClick={() => toggleRole(false)}>
                            Login Here
                        </Components.LoginGhostButton>
                    </Components.RightOverlayPanel>
                </Components.LoginOverlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Login;
