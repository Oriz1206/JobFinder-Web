import { getDatabase, ref, get, child } from "firebase/database";

export const checkEmailExists = async (email) => {
    const db = getDatabase();
    const dbRef = ref(db);
  
    try {
      const snapshot = await get(child(dbRef, `UserBasicInfo`));
      if (snapshot.exists()) {
        const userBasicInfo = snapshot.val();
        return Object.values(userBasicInfo).some(user => user.email === email);
      } else {
        throw new Error('No user data available.');
      }
    } catch (error) {
      console.error('Error checking email:', error);
      throw error;
    }
  };