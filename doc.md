#### react
    - props
    - children

#### importar imagen svg
    - crear carpeta `src/assest`
    - `import { ReactComponent as Logo} from '../assets/....'`


#### TODO router
import react-router-dom
    - `BrowserRouter` hacer el wrapping en index
    - `Switch` te crea un switch con las diferentes urls
    - `Route` crea la ruta dentro de switch 
    - `Redirect` 
    - `Link` link interno de react
            para usarlo en una funcion `props.history.push('/urlextra')` primer componente renderizado por el Route componente
            nested url `props.match.url` primer componente renderizado por el Route componente
    - `withRouter` para poder pasar las props del link Route a sus hijos es un highOrderComponent HOC

#### TODO Forms
    ```
    handleSubmit = event => {
        event.preventDefault();
        this.setState({})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})

    }

    ```

### TODO Redux 

Single Source of truth | state is read only: immutablility | changes using pure functions
    #### Flux pattern
    --->ACTIONS: click of user -Middleware-> (diferentes reducers todos se juntan en uno global)Reducer/Dispatcher: pure function (action) output return -> Store: entire state -react-> changes to the DOM 
    

    `Component` -trigger action SET_CURRENT_USER-> `{type: string, payload:any}` -Update User Reducer with payload-> UserReducer`{currentUser: {...}}`-pass currentUser as prop->

### mirar carpeta redux
`npm install redux redux-logger react-redux`
    - src/redux/store.js
      - `import {createStore, applyMiddleware} from 'redux';`
        - applyMiddleware espara cazar las acciones antes de llegar al reducer
      - `import logger from 'redux-logger';`
        - middleware para loggear
      - cremos el store
        - `export const store = createStore(rootReducer, applyMiddleware(...middlewares))` este store es el que pasamos en el <Provider>
    - src/redux/index.js
      - `import { Provider } from "react-redux";`
      - `import { store, persistor } from "./redux/store";`
        - componente que wrappea toda la app <Provider store = {store}></Provider> para tener acceso a todo relacionado con `store`
    - src/redux/root-reducer representa el estado de toda la app padre de tdos los reducers
      - `import {combineReducers} from 'redux'` para combinar diferentes reducers
    - Hacemos el ejemplo reducer user
      - src/redux/user.reducer.js
      - `import {connect} from 'react-redux';` es un HOC nos permite modificar el componente para tener acceso a redux
        - en el mapStateToProps
          - ```
            const mapStateToProps =  state => ({
                currentUser: state.user.currentUser
                nombreProp: state.reducerConcrreto.item
            })
            ```

        - en el mapDispatchProps
          - ```
          - const mapDispatchToProps = dispatch =>({
            // dentro del dispatch es lo que modifica el store y sera una action : {type: set_user, payload: manolo } estmos dispatcing
            //setCurrentUser de la izquierda es el nombre para usar en el componente y le entras () un tipo user | this.props.setCurrentUser(user)
            
            setCurrentUser: user => dispatch(setCurrentUser(payload))
            })
        - export default connect(mapStateToProps, mapDispatchToProps)(App);