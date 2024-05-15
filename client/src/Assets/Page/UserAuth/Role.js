import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(true);

    const toggleRole = (newRole) => {
        setRole(newRole);
    };

    return (
        <RoleContext.Provider value={{ role, toggleRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => {
    return useContext(RoleContext);
};
