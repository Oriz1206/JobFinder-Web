import { getDatabase, ref, set } from 'firebase/database';

export const saveUserData = async (userCredential, values, role) => {
    const db = getDatabase();
    const uid = userCredential.user.uid;
    
    const userBasicInfo = {
        address: values.address,
        email: values.email,
        name: values.username,
        phone_num: values.phone,
        user_id: uid
    };

    const userRole = {
        role: role === 'BUser' ? 'BUser' : 'NUser',
        user_id: uid
    };

    try {
        // Save UserBasicInfo
        await set(ref(db, 'UserBasicInfo/' + uid), userBasicInfo);

        // Save UserRole
        await set(ref(db, 'UserRole/' + uid), userRole);

        if (role === 'BUser') {
            // Save BUserInfo
            const bUserInfo = {
                business_sector: "",
                business_type: "",
                description: "",
                tax_code: ""
            };
            await set(ref(db, 'BUserInfo/' + uid), bUserInfo);
        } else {
            // Save NUserInfo
            const nUserInfo = {
                age: "",
                gender: ""
            };
            await set(ref(db, 'NUserInfo/' + uid), nUserInfo);
        }

        console.log("User data saved successfully");
    } catch (error) {
        console.error("Error saving user data: ", error);
    }
};
