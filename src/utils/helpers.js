import shortid from 'shortid';

export const getShortUUID = async () => {
    try {
        const uuid  = await shortid.generate();
        return uuid;
    } catch(error) {
        throw new Error('Oops!, Unable to generate uuid');
    }
};

// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016

//  router.get('/words', async (req, res) => {
//     const {userId} = req.query;
//     const snapshot = await db.ref(`words/${userId}`).once('value');
    
//     // BAD
//     res.send(snapshot.val())
    
//     // GOOD
//     const response = Object.assign({}, snapshot.val());
//     res.send(response);
//   });


// // 🔥 Node 7.6 has async/await! Here is a quick run down on how async/await works

// const axios = require('axios'); // promised based requests - like fetch()

// function getCoffee() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('☕'), 2000); // it takes 2 seconds to make coffee
//   });
// }

// async function go() {
//   try {
//     // but first, coffee
//     const coffee = await getCoffee();
//     console.log(coffee); // ☕
//     // then we grab some data over an Ajax request
//     const wes = await axios('https://api.github.com/users/wesbos');
//     console.log(wes.data); // mediocre code
//     // many requests should be concurrent - don't slow things down!
//     // fire off three requests and save their promises
//     const wordPromise = axios('http://www.setgetgo.com/randomword/get.php');
//     const userPromise = axios('https://randomuser.me/api/');
//     const namePromise = axios('https://uinames.com/api/');
//     // await all three promises to come back and destructure the result into their own variables
//     const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
//     console.log(word.data, user.data, name.data); // cool, {...}, {....}
//   } catch (e) {
//     console.error(e); // 💩
//   }
// }

// go();

/*
const makeRequest = async () => {
    console.log(await getJSON())
    return "done"
}
// this will work
makeRequest().then((result) => {
    // do something
})

*/
// https://blog.lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795