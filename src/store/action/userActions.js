import {storeData, getData, clearData} from '../../helpers/asyncStorage';
import getToken from '../../helpers/getToken';

let apiUrl = 'http://localhost:3001';

export const login = (payload) => {
  console.log(payload, '<<< login payload');
  return (dispatch) => {
    dispatch({type: 'LOGIN_PENDING', payload: true});

    const {username, password} = payload;

    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<< login response');
        storeData('user', data);
        dispatch({type: 'LOGIN_SUCCESS', payload: data});
        if (data.role.toLowerCase() === 'orang tua') {
          console.log('role: orang tua');
          // navigation.navigate('Home');
        } else if (data.role.toLowerCase() === 'dokter') {
          console.log('role: dokter');
          // navigation.navigate('HomeDoctor');
        }
      })
      .catch((err) => {
        console.log(err, '<<<< error login');
        dispatch({type: 'LOGIN_ERROR', payload: err});
      })
      .finally((_) => dispatch({type: 'LOGIN_PENDING', payload: false}));
  };
};

export const fetchCurrentUserDetails = () => {
  return async (dispatch) => {
    dispatch({type: 'FETCH_USER_PENDING', payload: true});
    try {
      const token = await getToken();
      console.log('token:', token);
      const response = await fetch(apiUrl + '/user-detail', {
        method: 'GET',
        headers: {
          access_token: token,
          'Content-Type': 'application/json',
        },
      });

      const user = await response.json();

      console.log(user, '<< user details');
      dispatch({type: 'FETCH_USER_SUCCESS', payload: user});
      dispatch({type: 'FETCH_USER_PENDING', payload: false});
    } catch (error) {
      console.log(error, '<< error fetching user detail');
      dispatch({type: 'FETCH_USER_ERROR', payload: error});
      dispatch({type: 'FETCH_USER_PENDING', payload: false});
    }
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data, '<<< fetch user detail response');
    // dispatch({type: 'LOGIN_SUCCESS', payload: data});
    // })
    // .catch((err) => {
    //   console.log(err, '<<<< error fetch user detail');
    // dispatch({type: 'LOGIN_ERROR', payload: err});
    // }),
    // .finally((_) => dispatch({type: 'LOGIN_PENDING', payload: false})
    // });
  };
};

export const fetchUsers = (url) => {
  console.log({url}, '<<< fetch users');
  return (dispatch) => {
    dispatch({type: 'FETCH_USERS_PENDING', payload: true});
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<fetch users', url);
        dispatch({type: 'FETCH_USERS_SUCCESS', payload: data});
      })
      .catch((err) => {
        console.log(err, '<<<< error fetch users');
        dispatch({type: 'FETCH_USERS_ERROR', payload: err});
      })
      .finally((_) => dispatch({type: 'FETCH_USERS_PENDING', payload: false}));
  };
};

export const fetchUserById = (id) => {
  console.log('fetch user details:', id);
  return (dispatch) => {
    fetch(`${apiUrl}/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<fetch user', id);
        dispatch({type: 'SET_USER', payload: data});
      })
      .catch((err) => {
        console.log(err, '<<<< error fetch user');
      });
  };
};

export const addBaby = (newBaby) => {
  console.log('add baby:', newBaby);
  return (dispatch, getState) => {
    fetch(apiUrl + '/babies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBaby),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<< new baby');
        let newBabies = getState().babyReducer.babies.concat(data);
        dispatch({type: 'SET_BABIES', payload: newBabies});
      });
  };
};

export const editBaby = (payload) => {
  console.log('edit baby:', payload);
  const {id} = payload;
  delete payload.id;
  console.log(payload, '<< after delete id');
  return (dispatch, getState) => {
    fetch(apiUrl + '/babies/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<< updated baby');
        let updatedBabies = getState().babyReducer.babies.map((baby) => {
          if (+baby.id === +data.id) {
            return data;
          }
        });
        dispatch({type: 'SET_BABIES', payload: updatedBabies});
      });
  };
};

export const deleteBaby = (id) => {
  console.log('delete:', id);
  return (dispatch, getState) => {
    fetch(`${apiUrl}/babies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<< DELETE');
        let newBabies = getState().babyReducer.babies.filter(
          (baby) => baby.id !== id,
        );
        dispatch({type: 'SET_BABIES', payload: newBabies});
      });
  };
};
