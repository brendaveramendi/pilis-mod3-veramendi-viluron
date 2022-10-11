const SERVER_DOMAIN= 'https://633edb4c0dbc3309f3bf5099.mockapi.io/colection';

export const getCards = async () => {
    try {
      const response = await fetch(`${SERVER_DOMAIN}/cards`);
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
  };
  
  export const getWeather = async (latitude,longitud) => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
      return response.json();
    } catch {
      throw new Error('could not fetch weather');
    }
  };

  export const postWeather = (card) => {
    try {
       fetch(`${SERVER_DOMAIN}/cards`,{
        method: 'POST',
        body: JSON.stringify(card),
        headers:{"Content-type": "application/json; charset=UTF-8"}
        
       });
     
    } catch {
      throw new Error('could not fetch post');
    }
  };