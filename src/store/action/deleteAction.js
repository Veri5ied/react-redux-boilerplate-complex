export const removeProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id: id,
  };
};


//using thunk for asyn await

export const deleteProject = (id) => {
  return (dispatch) => {
    //async call here
    dispatch({
      type: CREATE_PROJECT,
      id : id,
    });
  };
};
