### Javasacript 
  -`map()` `filter()` return a new array
  - `find()` nos devuelve el valor que cumple 
  -Memoization and caching
  - [simbolos rederio](https://www.w3schools.com/charsets/ref_utf_dingbats.asp)


#### react
  - Nombre de las carpetas kebab npmbre de las clases kamel 
    - props
    - children
      - 
    - const CustomButton  = ({children, inverted, isGoogleSignIn, ...otherProps}) =>(
               <button className = {`${isGoogleSignIn ? 'google-sign-in':''} ${inverte ? 'inverted':''} custom-button`} {...otherProps}>
                  {children}
                </button>
      )

#### importar imagen svg
    - crear carpeta `src/assest`
    - `import { ReactComponent as Logo} from '../assets/....'`


#### TODO router
import react-router-dom
    - `BrowserRouter` hacer el wrapping en index
    - `Switch` te crea un switch con las diferentes urls
    - `Route` crea la ruta dentro de switch 
    - `Redirect` redirige a otro path
    - `Link` link interno de react
            para usarlo en una funcion `props.history.push('/urlextra')` primer componente renderizado por el Route componente
            nested url `props.match.url` primer componente renderizado por el Route componente
    - `withRouter` para poder pasar las props del link Route a sus hijos es un highOrderComponent HOC
      - ```
        - <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage}/>
          <Route exact path='/checkout' component = {CheckoutPage}/>
          <Route exact path='/signin' render = {
            ()=>(this.props.currentUser ? (<Redirect to = '/'/>):(<SignInsignUp/>))
          }/>
          <Route exact path='/checkout' render = {(props)=> <CollectionsOverviewWithSpinner isLoading= {loading} {...otherProps} />)}/>
          </Switch>
      - ```

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
`npm install redux redux-logger react-redux reselect`
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
      - `import { combineReducers } from 'redux'` para combinar diferentes reducers
    - Hacemos el ejemplo reducer user
      - src/redux/user.reducer.js
      - `import { connect } from 'react-redux';` es un HOC nos permite modificar el componente para tener acceso a redux
        - en el mapStateToProps: la primera opcion cada vez que se actualiza el store el reducer general vuelve a renderizar esta prop
          1 - ```
            const mapStateToProps =  (state) => ({
                currentUser: state.user.currentUser
                nombreProp: state.reducerConcrreto.item
            })
            ```
          1.2  - ```
            const mapStateToProps =  (state, propsDelComponenteWrappeado) => ({
                collection: selectCollection(ownProps.match.params.collectionId)(state) // hay que wrappear selector
                nombreProp: selector(propsDelComponenteWrappeado.path.path)(state)
            })
            ```
          2 - `import { createSelector } from 'reselect`:

              -input selector
              src/redux/cart.selector.js
                const selectCart = state => state.cart // selectores son objetos que son una parte del state
                export const selectCartItems = createSelector(
                  [selectCart], //array of selectors los parametros de abajo entran por el orden que esten aqui colocados
                  (cart) => cart.cartItems //function that return the value that we want out of this selector
                )
            
          2.1 - const mapStateToProps =  state => ({
                currentUser: selectCartItems(state) //siempre pasamos el state
            })

          2.2 - ``` unica diferencia nos ahorramos pasar el state
            `import {createStructuredSelector} from 'reselect'` 
            const mapStateToProps =  createStructuredSelector ({
                currentUser: selectCartItems
                
            })
            ```
            const mapStateToProps = createStructuredSelector({
                isLoading: state => !selectIsCollectionsLoaded(state) 
            //solamente es la antigua manera de hacerlo y se hace para poder usar !
            })

        - en el mapDispatchProps
          - ```
          - const mapDispatchToProps = dispatch =>({
            // dentro del dispatch es lo que modifica el store y sera una action : {type: set_user, payload: manolo } estamos dispatcing
            //setCurrentUser de la izquierda es el nombre para usar en el componente y le entras () un tipo user | this.props.setCurrentUser(user)
            
            `setCurrentUser: user => dispatch(setCurrentUser(payload))
            })`
        - tanto la funcion mapStateToProps como mapDispatchToProps accedemos como props
        - export default connect(mapStateToProps, mapDispatchToProps)(App);
    - ### persist
      - npm install redux-persist
      - `import { persistStore } from 'redux-persist';` usa localstorage aunque cierres la pagina se queda guardado y sessionstorage guarda hasta que la pagina no sea cerrada
        - src/redux/store.js
          - export const persistor = persistStore(store)
        - src/index.js
          - import { PersistGate } from "redux-persist/integration/react";
          - <PersistGate persistor={persistor}>
        - src/redux/root-reducer.js
          - import storage from 'redux-persist/lib/storage'; // para hacer localstorage
          - const persistConfig = {
            key:'root', // desde donde queremos guardar
            storage,
            whitelist: ['cart'] // los reducers que queremos guardar | persist
            }
          - export default persistReducer(persistConfig, rootreducer)
        - src/index.js.js //envolivendo App para dar contexto en toda la app 
          - import { PersistGate } from "redux-persist/integration/react";
          - <PersistGate persistor={persistor}>
### HOC 
  - src/component/withSpinnner

### Redux-Thunk 
  - src/redux/store.js
  - `import thunk from 'redux-thunk';`
  - es un middleware no permite devolver funciones dentro del reducer que tenga dispatch como parametro igual que MapDispatchToProps con connect

### SAGA
  - a function that runs  on a condition of a action. handle sideEffects (api call, inpure functions, async )
    - Generator functions 
      - function*
      - function* gen(i){
        - yield i; 
        - yield i + 10 
        - return 25
      - }
      - const g = gen(5)
      - const gObj = g.next() // {value : 5, done: false}
  - En materia 
    - src/redux/store.js
    - take take and action of regular redux flow
      - `takeEvery` listen for every action of a specific type
      - `takeLatest` cancells the other ones and take the last one
    - Saga runea todos los Sagas sin bloquear uno a otro 
    - `call` manera de llamar a las funciones dentro de Saga
    - `put` el dispatch de saga mete things into regular redux flow