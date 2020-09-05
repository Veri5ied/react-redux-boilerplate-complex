export const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project: project,
  };
};

//using thunk for asyn await

export const createProject = (project) => {
  return (dispatch) => {
    //async call here
    dispatch({
      type: CREATE_PROJECT,
      project: project,
    });
  };
};
