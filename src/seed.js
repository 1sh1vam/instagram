// NOTE: replace '95BmlQIkJ5aRfJ3K2kM0kQYGZvo2' with your Firebase auth user id (can be taken from Firebase at the auth section! Look for User UID)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: '95BmlQIkJ5aRfJ3K2kM0kQYGZvo2',
        username: 'shivam',
        fullName: 'Shivam Mishra',
        emailAddress: 'shivam12@gmail.com ',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'shakti',
        fullName: 'Shakti Yadav',
        emailAddress: 'shakti@gmail.com',
        following: [],
        followers: ['95BmlQIkJ5aRfJ3K2kM0kQYGZvo2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'vivek',
        fullName: 'Vivek Tiwari',
        emailAddress: 'fire@heart.com',
        following: [],
        followers: ['95BmlQIkJ5aRfJ3K2kM0kQYGZvo2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'alex',
        fullName: 'Alex Navelini',
        emailAddress: 'alex@gool.com',
        following: [],
        followers: ['95BmlQIkJ5aRfJ3K2kM0kQYGZvo2'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/shakti/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'shakti',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'alex',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  