import React, { useState, useEffect } from "react";
import './style.css'
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { useRole, useCurrentRole } from './Role';
import { auth } from '../../../Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { validate, handleInputValidation } from './validation';



function Login () {
    const currentRole = useCurrentRole();
    const { role, toggleRole } = useRole();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            email: "",
            password: ""
        });
        setErrors({});
    }, [role]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        handleInputValidation("login", e, { ...values, [name]: value });
    };

    const login = (e) =>{
        e.preventDefault();
        const validationErrors = validate("login", values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            console.log(validationErrors);

        } else {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    console.log(userCredential);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        
    }

    const ClickSign = () => {
        navigate("/signup");
    };



    return (
        <Components.Container>
            <Components.SeekerContainer ChangeRole={role}>
                <Components.Form onSubmit={login}>
                    <Components.Title>Job seeker</Components.Title>
                    <Components.Input
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("login", e, values)}
                            required
                            name="email"
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password" 
                            value={values.password}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("login", e, values)}
                            required
                            name="password"
                        />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.LoginButton type="submit">Login</Components.LoginButton>
                    <Components.SideBySide>
                        <Components.Anchor href='#'>Don't have an account? <span onClick={ClickSign}>Sign up</span></Components.Anchor>
                    </Components.SideBySide>
                </Components.Form>
            </Components.SeekerContainer>

            <Components.RecruiterContainer ChangeRole={role}>
                <Components.Form onSubmit={login}>
                    <Components.Title>Recruiter</Components.Title>
                    <Components.Input
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("login", e, values)}
                            required
                            name="email"
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("login", e, values)}
                            required
                            name="password"
                        />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.LoginButton type="submit">Login</Components.LoginButton>
                    <Components.SideBySide>
                        <Components.Anchor href='#'>Don't have an account? <span onClick={ClickSign}>Sign up</span></Components.Anchor>
                    </Components.SideBySide>
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