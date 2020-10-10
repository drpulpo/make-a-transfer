# Make A Transfer

Make a Transfer is a project developed by David Nunez Ramirez as portfolio to show my skills as Angular developer to Backbase in a hiring process. I'm also a ReactJS developer but I chose Angular because was prefered by the requeriment.
I have not used CSS libraries as commanded and developed all in plain CSS as suggested. The application was designed to be responsive. When viewed in a smaller screen the two child views will wrap and appear one above the other. I was not able to accomplish all the optional tasks because of the time.

# Architecture

I have separated the UI concerns in different visual components and implemented a Transfer Service to fetch data. I've generated a main app component and generated separate header and body components. Inside the body I created a form component to be able to create transfers and a transfer catalog.
The body component keeps the state of the view and binds with inputs and outputs with the two child transfer and transfer catalog component.

## Code Downloading and Installation

Clone the repository using `git clone https://github.com/drpulpo/make-a-transfer.git` or unzip the provided file
cd make-a-transfer
npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests
