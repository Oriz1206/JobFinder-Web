import React from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { useRole } from './Role';

function SignUp() {
    const { role, toggleRole } = useRole();
    const navigate = useNavigate();

    const ClickSign = () => {
        navigate("/login");
    };

    return (
        <Components.Container>
            <Components.SeekerContainer ChangeRole={role}>
                <Components.Form>
                    <Components.Title>Job seeker</Components.Title>
                    <Components.Paragraph>
                        <Components.Input type='username' placeholder='User name' />
                        <Components.Input type='Phonenumber' placeholder='Phone number' />
                        <Components.Input type='address' placeholder='Address' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Input type='re-password' placeholder='Re-enter password' />
                    </Components.Paragraph>
                    <Components.submit>
                        <Components.LoginButton onClick={ClickSign}>Login</Components.LoginButton>
                        <Components.SignUpButton>SignUp</Components.SignUpButton>
                    </Components.submit>
                </Components.Form>
            </Components.SeekerContainer>

            <Components.RecruiterContainer ChangeRole={role}>
                <Components.Form>
                    <Components.Title>Recruiter</Components.Title>
                    <Components.Paragraph>
                        <Components.Input type='username' placeholder='User name' />
                        <Components.Input type='hotline' placeholder='Hotline' />
                        <Components.Input type='address' placeholder='Address' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Input type='re-password' placeholder='Re-enter password' />
                    </Components.Paragraph>
                    <Components.submit>
                        <Components.LoginButton onClick={ClickSign}>Login</Components.LoginButton>
                        <Components.SignUpButton>SignUp</Components.SignUpButton>
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
