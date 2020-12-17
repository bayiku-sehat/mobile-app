import {getData} from './asyncStorage';

export default async function getToken() {
  console.log('get token');
  try {
    let user = await getData('user');
    console.log(user, '<< user from asyncstorage');
    console.log('access token = ', user.access_token);
    return user.access_token;
  } catch (error) {
    console.log(error, '<< error getting token');
  }
}
