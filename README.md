# HirelatamTest

## This project was generated with Angular CLI version 16.2.12.

### Development Server
npm i and ng serve to start the development server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

### Code Structure
The project follows a modular and component-based approach:

**Components**: Located in the src/app directory, representing different parts of the user interface, such as city-summary, compare-cities, and list-cities.

**Services**: Services in the src/app/services directory handle business logic and facilitate communication between components and external APIs. For instance, GeoDbCitiesService interacts with the GeoDB Cities API, while ChatGptService manages interactions with the ChatGPT API.

**Presenters and Interactors**: The application uses presenters and interactors to separate responsibilities and encourage maintainability. For example, CompareCitiesPresenter acts as a bridge between the view and interact, handling the presentation logic for city comparison.

**Models**: Entities like CityEntitie in src/domain/entities represent data structures used throughout the application.

**Routing**: The app-routing.module.ts file in src/app defines the application routes, specifying which component to load for each route.

### Environment Configuration: 
Configuration for different environments (development, production) is stored in the src/environments directory.

### Libraries and Frameworks
**Angular CLI**: The project is generated with Angular CLI version 16.2.12.

**Bootstrap**: The Bootstrap library is used for responsive styles, ensuring a consistent and visually appealing UI.

**Font Awesome**: Font Awesome icons enhance the visual experience and provide intuitive symbols.

**rxjs**: Reactive Extensions for JavaScript (rxjs) is used to handle asynchronous operations and build reactive components.

## Clean Architecture
The project adopts the principles of Clean Architecture, ensuring a clear separation of concerns and maintaining a modular, scalable, and testable codebase. Components are organized into layers, such as the presentation layer (components and presenters), business logic layer (interactors and services), and data layer (repositories and external APIs).

### Note: 
This project uses public APIs, so it has **limitations** on the number of daily requests.
