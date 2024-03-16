


export interface Movie{
    rank: number;
    title: string;
    description?: string;
    image: string;
    big_image?: string;
    genre: string[];
    thumbnail?: string;
    rating?: string;
    id?: string;
    year: number;
    imdbid?: string;
    imdb_link?: string;
    director: string;
   }
   export type MovieResponse =
    Movie[]
     


//    export interface Pokemon {
//     abilities:                Ability[];
//     base_experience:          number;
//     forms:                    Species[];
//     game_indices:             GameIndex[];
//     height:                   number;
//     held_items:               any[];
//     id:                       number;
//     is_default:               boolean;
//     location_area_encounters: string;
//     moves:                    Move[];
//     name:                     string;
//     order:                    number;
//     past_types:               any[];
//     species:                  Species;
//     sprites:                  Sprites;
//     stats:                    Stat[];
//     types:                    Type[];
//     weight:                   number;
//   }
  
//   export interface Ability {
//     ability:   Species;
//     is_hidden: boolean;
//     slot:      number;
//   }