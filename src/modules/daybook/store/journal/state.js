// **       LOS GETTERS SON:        **

// ** EL STATE ES REACTIVO Y CUANDO SE CAMBIA SE NOTIFICA 
// ** A TODOS LOS COMPONENTES DONDE ESTE ESCUCHANDO LOS CAMBIOS **
// ** ES DONDE SE ALMACEN LA INFORMACIÓN **


export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), 
            date: new Date().toDateString(),
            text: 'Nisi deserunt et aliquip cillum et ullamco anim ipsum. Amet ex ipsum commodo do tempor culpa nostrud est laboris aliquip. Laborum amet non voluptate non duis duis amet eu cillum dolor aliquip nulla. Dolore nostrud occaecat proident ad nulla veniam. Ea non fugiat in aliquip ex mollit velit do cupidatat voluptate labore eiusmod id. Laboris sint sit adipisicing amet consectetur deserunt sint ipsum laborum exercitation sunt. Sit esse consectetur aliquip dolor exercitation velit eu adipisicing nisi ex cupidatat.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, 
            date: new Date().toDateString(),
            text: 'Ea incididunt ex do aute nostrud. Mollit officia proident cupidatat velit qui officia. Veniam tempor laboris Lorem id qui deserunt consectetur exercitation qui commodo ut exercitation eu elit. Ipsum dolor ullamco officia ullamco eiusmod fugiat velit labore. Exercitation cillum laboris sunt amet id. Culpa et enim non duis. Veniam nisi voluptate enim sunt cupidatat consectetur.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, 
            date: new Date().toDateString(),
            text: 'Esse officia ipsum sint et enim ea nulla irure ea. Qui quis incididunt adipisicing enim aute est et dolore nostrud. Ipsum ullamco magna consequat sint id eu duis est eiusmod in incididunt aliqua. Aliqua anim sint cillum tempor ea ex eiusmod culpa. Amet adipisicing non sunt irure amet. Commodo voluptate consectetur officia sunt eiusmod excepteur nisi exercitation. Deserunt magna anim eiusmod eiusmod tempor pariatur elit.',
            picture: null
        },



    ]
})