const checkProfileDatas = (profileData) => {
  let data = {};
  if (profileData.email !== '' && profileData.email !== undefined && profileData.email !== null) {
    data = {
      ...data,
      email: profileData.email,
    };
  }
  if (profileData.pseudo !== '' && profileData.pseudo !== undefined && profileData.pseudo !== null) {
    data = {
      ...data,
      pseudo: profileData.pseudo,
    };
  }
  if (profileData.picture !== '' && profileData.picture !== undefined && profileData.picture !== null) {
    data = {
      ...data,
      picture: profileData.picture,
    };
  }
  if (profileData.password === profileData.confirmpassword) {
    if (profileData.password !== '' && profileData.password !== undefined && profileData.password !== null) {
      data = {
        ...data,
        password: profileData.password,
      };
    }
  }
  return data;
};

export default checkProfileDatas;
