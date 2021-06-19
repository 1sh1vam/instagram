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
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }

            const user = await getUserByUserId(photo.userId);
            const username = user[0].username
            return { username, ...photo, userLikedPhoto }
        })
    )

    return photosWithUserDetails
}

export async function getSuggestedProfiles(userId) {
    const results = await firebase.firestore().collection('users').limit(10).get();

    const [{following}] = await getUserByUserId(userId);

    return results.docs.map(user => ({...user.data(), docId: user.id}))
        .filter(profile => profile.userId !== userId && !following.includes(profile.userId))
}

export async function updateUserFollowing(docId, profileId, isFollowingProfile) {
    return firebase
        .firestore()
        .collection('users')
        .doc(docId)
        .update({
            following: isFollowingProfile ? 
                FieldValue.arrayRemove(profileId)
                : FieldValue.arrayUnion(profileId)
        })
}

export async function updateFollwedUserFollowers(docId, followingUserId, isFollowingProfile) {
    return firebase
        .firestore()
        .collection('users')
        .doc(docId)
        .update({
            following: isFollowingProfile ? 
                FieldValue.arrayRemove(followingUserId)
                : FieldValue.arrayUnion(followingUserId)
        })
}

export async function getUserByUserName(username) {
    const results =  await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

    return results.docs.map(user => ({...user.data(), docId: user.id }))
}