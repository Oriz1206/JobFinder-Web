import React, {useState} from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { useRole } from './Role';
import { auth } from '../../../Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {
    const { role, toggleRole } = useRole();
    const navigate = useNavigate();
    const [ phone, setPhone ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ rePassword, setRePassword ] = useState("")
    const signup = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }
    const ClickSign = () => {
        navigate("/login");
    };

    return (
        <Components.Container>
            <Components.SeekerContainer ChangeRole={role}>
                <Components.Form onSubmit={signup}>
                    <Components.Title>Job seeker</Components.Title>
                    <Components.Paragraph>
                        <Components.Input type='username' placeholder='User name' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <Components.Input type='Phonenumber' placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <Components.Input type='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Components.Input type='re-password' placeholder='Re-enter password' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
                    </Components.Paragraph>
                    <Components.submit>
                        <Components.LoginButton onClick={ClickSign}>Login</Components.LoginButton>
                        <Components.SignUpButton type="submit" >SignUp</Components.SignUpButton>
                    </Components.submit>
                </Components.Form>
            </Components.SeekerContainer>

            <Components.RecruiterContainer ChangeRole={role}>
                <Components.Form onSubmit={signup}>
                    <Components.Title>Recruiter</Components.Title>
                    <Components.Paragraph>
                        <Components.Input type='username' placeholder='User name' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <Components.Input type='Phonenumber' placeholder='Hotline' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <Components.Input type='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Components.Input type='re-password' placeholder='Re-enter password' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
                    </Components.Paragraph>
                    <Components.submit>
                        <Components.LoginButton onClick={ClickSign}>Login</Components.LoginButton>
                        <Components.SignUpButton type="submit" >SignUp</Components.SignUpButton>
                    </Components.submit>
                </Components.Form>
            </Components.RecruiterContainer>

            <Components.OverlayContainer ChangeRole={role}>
                <Components.SignUpOverlay ChangeRole={role}>
                    <Components.LeftOverlayPanel ChangeRole={role}>
                        <Components.Title2>Welcome Recruiter!</Components.Title2>
                        <Components.Paragraph>Let's start recruiting!</Components.Paragraph>
                        <Components.SignUpGhostButton onClick={() => toggleRole(true)}>
                            SignUp Here
                        </Components.SignUpGhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel ChangeRole={role}>
                        <Components.Title2>Hello, Job Seeker!</Components.Title2>
                        <Components.Paragraph>Let's start and we'll looking a job for you!</Components.Paragraph>
                        <Components.SignUpGhostButton onClick={() => toggleRole(false)}>
                            SignUp Here
                        </Components.SignUpGhostButton>
                    </Components.RightOverlayPanel>
                </Components.SignUpOverlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default SignUp;
