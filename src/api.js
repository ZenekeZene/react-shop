import axios from 'axios';

const getProductByIdFromCloud = (payload) => new Promise((resolve, reject) => {
  axios
    .get('http://www.mocky.io/v2/5d1f23b53100003e74ebeaee?delay=100', {})
    .then((response) => {
      resolve({
        product: response.data.products.find(
          (product) => payload.id === product._id,
        ),
      });
    })
    .catch((error) => {
      reject(error);
    });
});

export default getProductByIdFromCloud;
