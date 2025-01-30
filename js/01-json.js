// const user = {
//   firstName: 'Annie',
//   lastName: 'George',
//   age: 30,
// };

// const user = '{"firstName": "Annie","lastName": "George","age": 30}';

// console.log(user);

// const userStr = String(user);
// const userStr = user.toString();
// const userStr = JSON.stringify(user);

// console.log(userStr);

// console.log(JSON.parse(user));
//*-----------------------------------------------------------------------
// const user = [
//   { firstName: 'Max', lastName: 'Doyle', age: 30 },

//   { firstName: 'Max', lastName: 'Doyle', age: 30 },

//   { firstName: 'Max', lastName: 'Doyle', age: 30 },
// ];

// console.log(user);

// const userStr = JSON.stringify(user);

// console.log(userStr);

// console.log(JSON.parse(userStr));
//*-----------------------------------------------------------------------
console.log('Start script!');

try {
  const user = '{ "firstName": "firstName",}';

  JSON.parse(user);
} catch (err) {
  console.log(err);
}

console.log('End script!');
