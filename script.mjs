import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });
}

writeUserData(1, 'ebby', 'ebby@gmail.com');