const redux = require('redux');

const createStore = redux.createStore;

//state inicial
const initialState = {
    usuarios:[]
};

//Reducer
//define como el state va a cambiar de acuerdo acciones
//Parametros
//state (tambien por default) y accion
//Retorna nuevo state
const reducerPrincipal = ( state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_USUARIO':
            let usuarios = state.usuarios;
            usuarios.push({nombre: action.nombre, apellido: action.apellido});
            state.usuarios= usuarios;
            return state;
        default:
            return state;
    }
}

// create store y store (contiene el state de la aplicacion)
// 3 parametros, reduces, state inicial, potenciador ( applymiddleware )
const store = createStore(reducerPrincipal);

console.log(store.getState());

//Dispatch es la unica forma de cambiar el state
//type en mayuscula, string y separado por guion bajo
store.dispatch({type: 'AGREGAR_USUARIO', nombre: 'Genaro',
apellido: 'Tinoco'})

console.log(store.getState());

store.dispatch({type: 'AGREGAR_USUARIO', nombre: 'Jose',
apellido: 'Palacios'})

console.log(store.getState());

console.log(store);
