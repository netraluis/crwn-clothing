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

    