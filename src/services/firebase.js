import { firebase, FieldValue } from "../lib/firebase"

export async function doesUserNameExists(username) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where('username', "==", username)
        .get()
    
    return result.docs.map(user => user.data().length > 0)
} 

export async function getUserByUserId(uid) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where('userId', '==', uid)
        .get()

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))

    return user
}

export async function getUserFollowedPhotos(userId, followingUserIds) {
    const result = await firebase
        .firestore()
        .collection("photos")
        .where("userId", "in", followingUserIds)
        .get();

    const userFollowedPhotos = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikePhoto = false;
            if(photo.likes.includes(userId)) {
                userLikePhoto = true;
            }

            const user = await getUserByUserId(photo.userId);
            const username = user[0].username
            return { username, ...photo, userLikePhoto}
        }) 
    )
    
    console.log(photosWithUserDetails)
    return photosWithUserDetails
}