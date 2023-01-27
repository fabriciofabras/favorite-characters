export const getStarWarsInfo = async( mode,page) => {

    const url = `https://swapi.dev/api/${ mode }/?page=${page}&format=json`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const items = results.map( item => ({
        name: item.name,
        weigth: item.mass,
        size: item.height,
        birthdate: item.birth_year,
        model: item.model,
        cost: item.cost_in_credits,
        team: item.starship_class
    }));
    
    return items;
}