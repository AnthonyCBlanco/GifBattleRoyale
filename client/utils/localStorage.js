export const getCreatedPostIds = () => {
    const createdPostIds = localStorage.getItem('created_post')
      ? JSON.parse(localStorage.getItem('created_post'))
      : [];
  
    return createdPostIds;
  };

  export const setCreatedPostIds = (createdPostIds) => {
    localStorage.setItem('created_post', JSON.stringify(createdPostIds));
  };

  export const RemoveCreatedPostIds = () => {
    localStorage.removeItem('created_post');
  };

  export const getUpdatedPostIds = () => {
    const updatedPostIds = localStorage.getItem('updated_post')
      ? JSON.parse(localStorage.getItem('updated_post'))
      : [];

    return updatedPostIds;
  };

  export const setUpdatedPostIds = (updatedPostIds) => {
    localStorage.setItem('updated_post', JSON.stringify(updatedPostIds));
  };

  export const RemoveUpdatedPostIds = () => {
    localStorage.removeItem('updated_post');
  };
  

  
