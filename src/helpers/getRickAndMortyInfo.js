export const getRickAndMortyInfo = async( mode,page) => {

    const url = `https://rickandmortyapi.com/api/${ mode }/?page=${page}`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const characters = results.map( character => ({
        name: character.name,
        image:character.image,
        species: character.species,
        gender: character.gender,
        status: character.status,
        type: character.type,
        dimension: character.dimension
    }));
    
    return characters;
}