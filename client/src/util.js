import axios from 'axios';

const ingredientUrl = '/api/ingredients/';
const drinkUrl = '/api/drinks/';

export const getSuggestions = async query => {
  try {
    const response = await axios.get(`${ingredientUrl}${query}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err.response.body);
  }
};

export const requestFormatter = (arr, nonAlc) => {
  const array = arr
    .filter(item => item.selected === true)
    .map(item => {
      if (item.name.indexOf(' ') !== -1) {
        return item.name.replace(' ', '_');
      }
      return item.name.trim();
    });
  const arrayString = array.join(',');
  return nonAlc ? `${arrayString}&?a=Non_Alcoholic` : arrayString;
};

export const getDrink = async id => {
  try {
    const response = await axios.get(`${drinkUrl}${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err.response.body);
  }
};

export const getTrending = async () => {
  try {
    const response = await axios.get('/api/trending');
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err.response.body);
  }
};
