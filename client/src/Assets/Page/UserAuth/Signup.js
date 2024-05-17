import React, { useState, useEffect } from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { useRole, useCurrentRole } from './Role';
import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { validate, handleInputValidation } from './validation';
import { saveUserData } from './saveUserData'

function SignUp() {
    const currentRole = useCurrentRole();
    const { role, toggleRole } = useRole();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        rePassword: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            username: "",
            phone: "",
            address: "",
            email: "",
            password: "",
            rePassword: ""
        });
        setErrors({});
    }, [role]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        handleInputValidation("signup", e, { ...values, [name]: value });
    };

    

    const signup = (e) => {
        e.preventDefault();
        const validationErrors = validate("signup", values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(async (userCredential) => {
                    console.log(userCredential);
                    await saveUserData(userCredential, values, currentRole);
                    navigate("/login");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const ClickSign = () => {
        navigate("/login");
    };

    return (
        <Components.Container>
            <Components.SeekerContainer ChangeRole={role}>
                <Components.Form onSubmit={signup}>
                    <Components.Title>Job seeker</Components.Title>
                    <Components.Input
                            type="text"
                            placeholder="User name"
                            value={values.username}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="username"
                        />
                        <Components.Input
                            type="tel"
                            placeholder="Phone number"
                            value={values.phone}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="phone"
                        />
                        <Components.Input
                            type="text"
                            placeholder="Address"
                            value={values.address}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="address"
                        />
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="email"
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="password"
                        />
                        <Components.Input
                            type="password"
                            placeholder="Re-enter password"
                            value={values.rePassword}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="rePassword"
                        />
                    <Components.SignUpButton type="submit">SignUp</Components.SignUpButton>
                    <Components.SideBySide>
                        <Components.Anchor href='#'>Have an account? <span onClick={ClickSign}>Log in</span></Components.Anchor>                   
                    </Components.SideBySide>                    
                </Components.Form>
            </Components.SeekerContainer>

            <Components.RecruiterContainer ChangeRole={role}>
                <Components.Form onSubmit={signup}>
                    <Components.Title>Recruiter</Components.Title>
                    <Components.Input
                            type="text"
                            placeholder="User name"
                            value={values.username}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="username"
                        />
                        <Components.Input
                            type="tel"
                            placeholder="Hotline"
                            value={values.phone}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="phone"
                        />
                        <Components.Input
                            type="text"
                            placeholder="Address"
                            value={values.address}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="address"
                        />
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="email"
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="password"
                        />
                        <Components.Input
                            type="password"
                            placeholder="Re-enter password"
                            value={values.rePassword}
                            onChange={handleChange}
                            onInvalid={(e) => handleInputValidation("signup", e, values)}
                            required
                            name="rePassword"
                        />
                    <Components.SignUpButton type="submit">SignUp</Components.SignUpButton>
                    <Components.SideBySide>
                        <Components.Anchor href='#'>Have an account? <span onClick={ClickSign}>Log in</span></Components.Anchor>                   
                    </Components.SideBySide>                    
                </Components.Form>
            </Components.RecruiterContainer>

            <Components.OverlayContainer ChangeRole={role}>
                <Components.SignUpOverlay ChangeRole={role}>
                    <Components.LeftOverlayPanel ChangeRole={role}>
                        <Components.Title2>Welcome Recruiter!</Components.Title2>
                        <Components.Paragraph>Let's start recruiting!</Components.Paragraph>
                        <Components.SignUpGhostButton onClick={() => toggleRole(true)}>SignUp Here</Components.SignUpGhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel ChangeRole={role}>
                        <Components.Title2>Hello, Job Seeker!</Components.Title2>
                        <Components.Paragraph>Let's start and we'll looking a job for you!</Components.Paragraph>
                        <Components.SignUpGhostButton onClick={() => toggleRole(false)}>SignUp Here</Components.SignUpGhostButton>
                    </Components.RightOverlayPanel>
                </Components.SignUpOverlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default SignUp;
