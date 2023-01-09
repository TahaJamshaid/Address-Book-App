import axios from 'axios';


const requestUsers = async (query) => {
  try {
    const res = await axios.get(`https://randomuser.me/api/${query}`, {
      headers: {},
      params: {}
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


export default requestUsers;
