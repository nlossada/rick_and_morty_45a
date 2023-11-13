import Card from './Card';

export default function Cards({ characters }) {
   // al destructuring, queda un array characters [{r}, {m}, {s}..]   , si no sería {[]}
   return (
      <div>
         {
            characters && characters.map((character) =>
            // return (<Card key={character.id} character={character} > </Card>)
            (<Card
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />)
            )
         }
      </div>
   )
}
// lo dejo destructure desde acá porque si no no anda boton porque está definida la función onclose
