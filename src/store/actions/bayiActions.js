// const baseUrl = 'http://localhost:4000/babies'

import getToken from '../../helpers/getToken';

let apiUrl = 'http://localhost:3001';

export const fetchBabies = (url = `${apiUrl}/bayi`) => {
  console.log({url}, '<<< fetch babies');
  return (dispatch) => {
    dispatch({type: 'FETCH_BABIES_PENDING', payload: true});
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<fetch babies', url);
        dispatch({type: 'FETCH_BABIES_SUCCESS', payload: data});
      })
      .catch((err) => {
        console.log(err, '<<<< error fetch babies');
        dispatch({type: 'FETCH_BABIES_ERROR', payload: err});
      })
      .finally((_) => dispatch({type: 'FETCH_BABIES_PENDING', payload: true}));
  };
};

export const fetchBabyById = (id) => {
  console.log('fetch baby details:', id);
  return async (dispatch) => {
    dispatch({type: 'FETCH_BABY_PENDING', payload: true});
    fetch(`${apiUrl}/bayi/${id}`, {
      method: 'GET',
      headers: {
        access_token: await getToken(),
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<fetch baby', id);
        dispatch({type: 'FETCH_BABY_SUCCESS', payload: data});
      })
      .catch((err) => {
        console.log(err, '<<<< error fetch baby');
        dispatch({type: 'FETCH_BABY_ERROR', payload: err});
      })
      .finally((_) => dispatch({type: 'FETCH_BABY_PENDING', payload: false}));
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

export const updatePerkembanganBayi = (payload) => {
  console.log('update perkembangan baby:', payload);
  const {id} = payload;
  delete payload.id;
  console.log(payload, '<< after delete id');
  console.log(id, '<< id');
  return async (dispatch, getState) => {
    dispatch({type: 'EDIT_BABY_PENDING', payload: true});

    console.log(apiUrl + '/bayi/' + id + '/perkembangan');

    fetch(apiUrl + '/bayi/' + id + '/perkembangan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        access_token: await getToken(),
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '<<<< updated baby');
        console.log(getState().bayiReducer.baby[id]);
        //   let updatedBabies = {...getState().bayiReducer.baby[id]}
        //   let updatedBabies = getState().bayiReducer.baby.map((el) => {
        //     if (+el.id === +data.id) {
        //       return data;
        //     }
        //   });

        //   console.log(updatedBabies);
        //   let updatedBabies = getState().babyReducer.bayi.map((baby) => {
        //     if (+baby.id === +data.id) {
        //       return data;
        //     }
        //   });
        //   dispatch({type: 'EDIT_BABY_SUCCESS', payload: updatedBabies});
      });
    // .catch((error) => {
    //   console.log(error);
    //   dispatch({type: 'EDIT_BABY_ERROR', payload: error});
    // })
    // .finally((_) => dispatch({type: 'EDIT_BABY_PENDING', payload: false}));
  };
};

export const editVerifikasiBayi = (payload) => {
  console.log('edit verifikasi baby:', payload);
  const {id} = payload;
  delete payload.id;
  console.log(payload, '<< after delete id');
  return (dispatch, getState) => {
    dispatch({type: 'EDIT_BABY_PENDING', payload: true});

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
        dispatch({type: 'EDIT_BABY_SUCCESS', payload: updatedBabies});
      })
      .catch((error) => {
        console.log(error);
        dispatch({type: 'EDIT_BABY_ERROR', payload: error});
      })
      .finally((_) => dispatch({type: 'EDIT_BABY_PENDING', payload: false}));
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
