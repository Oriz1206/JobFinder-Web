import { checkEmailExists } from './AuthenticationCheck';

export const validate = async (type, values) => {
    const errors = {};

    if (type === "signup") {
        if (!values.username) {
            errors.username = 'User name is required';
        }
        if (!values.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(values.phone)) {
            errors.phone = 'Phone number must be 10 digits';
        }
        if (!values.address) {
            errors.address = 'Address is required';
        }

        if (values.email) {
            const emailExists = await checkEmailExists(values.email);
        if (emailExists) {
            errors.email = 'Email already registered';
        }
        }
    }

    if (type === "login" || type === "signup" || type === "forgotpass") {
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (type === "signup") {
            if (!values.rePassword) {
                errors.rePassword = 'Re-enter password is required';
            } else if (values.rePassword !== values.password) {
                errors.rePassword = 'Passwords must match';
            }
        }
    }

    return errors;
};

export const handleInputValidation = async (type, e, values) => {
    const { name, value } = e.target;
    const errors = await validate(type, { ...values, [name]: value });
    e.target.setCustomValidity(errors[name] || '');
};
