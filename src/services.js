const SERVER_DOMAIN= 'https://633edb4c0dbc3309f3bf5099.mockapi.io/colection';


export const getCards = async () => {
    try {
      const response = await fetch(`${SERVER_DOMAIN}/cards`);
      return response.json();
    } catch {
      throw new Error('could not fetch cards');
    }
  };
  