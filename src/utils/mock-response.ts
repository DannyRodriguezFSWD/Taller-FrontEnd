import { AboutMe } from "../model/aboutme";
import { Project } from "../model/project";


export const mockLogin = (userName: string, password: string) => new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
        if (userName === "dan@threepoints.com" && password === "Thrpnts") {
            resolve(JSON.parse(
                `{
                 "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGFuQHRocmVlcG9pbnRzLmNvbSIsInBhc3N3b3JkIjoiVGhycG50cyIsImlhdCI6MTUxNjIzOTAyMn0.z57CrWsGJGzRNBud1luhSjrtTIUT6DYOL5H5-cDqifE"
                 }`
            ));
        } else {
            rejected(new Unauthorized());
        }
    }, 2000);
    
})
export interface TokenResponse {
    token: string;
}
export interface ApiError {
    description?: string;
}
export class Unauthorized implements ApiError { }



export const mockAboutme = () => new Promise<AboutMe>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `{
            "id":"12389asdfasf8",
            "name":"Danny A Rodríguez Rodríguez",
            "birthday":462024000000,
            "nationality":"Costa Rica",
            "job":"Front End Developer - ACN",
            "github":"https://github.com/DannyRodriguezFSWD"
            }`
        ));
    }, 500);

});

export const mockProjects = () => new Promise<Project[]>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `[
                {
                "id":"12349as8df90",
                "title":"MyGP-Actividad-1",
                "description":"Gestión de proyectos y gitflow",
                "version":"1.0.16",
                "link":"https://github.com/DannyRodriguezFSWD/MyGP-Actividad-1",
                "tag":"JavaScript, HTML, CSS",
                "timestamp":"1657260000"
                },
                {
                "id":"789asdfas89",
                "title":"Create React App",
                "description":"Toolchain para la creación de proyectos basados en React, contiene lo báisco para crear proyectos basados en single-page apps",
                "version":"4.0.3",
                "link":"https://create-react-app.dev",
                "tag":"Toolchain, React, Bootstraping",
                "timestamp":"765817712001"
                },
                {
                "id":"56765asdfasdf8",
                "title":"Styled components",
                "description":"Librería que permite usar template literals y css para crear estilos en componente con JavaScript",
                "version":"5.2.1",
                "link":"https://styled-components.com/docs",
                "tag":"CSS, JavaScript, Babel",
                "timestamp":"765817712002"
                },
                {
                "id":"56765asdfasdf8",
                "title":"React i18next",
                "description":"Internacionalización de nuestro proyecto en React.",
                "version":"19.9.2",
                "link":"https://react.i18next.com",
                "tag":"JavaScript, i18n, React",
                "timestamp":"765817712003"
                },
                {
                "id":"25634iuoasdf8",
                "title":"React Lottie",
                "description":"Animaciones en alta calidad que cuentan con distintos tipos de reproducción.",
                "version":"1.2.3",
                "link":"https://airbnb.design/lottie/",
                "tag":"Animation, React, Aribnb",
                "timestamp":"765817712004"
                },
                {
                "id":"7890asdf890",
                "title":"React Router",
                "description":"Navegación entre páginas dentro de nuestra web app.",
                "version":"5.2.0",
                "link":"https://reactrouter.com/web/guides/quick-start",
                "tag":"Navigation, routing",
                "timestamp":"765817712005"
                },
                {
                "id":"7890asdf890",
                "title":"Swagger",
                "description":"Herramienta para creación de especificaciones OpenAPI",
                "version":"3.0,2",
                "link":"https://swagger.io",
                "tag":"API, OpenAPI",
                "timestamp":"765817712006"
                },
                {
                "id":"7890asdf890",
                "title":"Figma",
                "description":"Herramienta de diseño vectorial y prototipado",
                "version":"-",
                "link":"https://www.figma.com/proto/3e43h8TrzwpjfKwXvFxZoP/Taller?page-id=144%3A51&node-id=308%3A1187&viewport=254%2C48%2C0.12&scaling=min-zoom&starting-point-node-id=147%3A3",
                "tag":"Vector, UX, UI",
                "timestamp":"765817712007"
                }
            ]`
        ));
    }, 500);

});