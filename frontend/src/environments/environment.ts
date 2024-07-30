// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, // true for environment.prod.ts
  api: {
    server: `http://localhost:3360/`,
    about:'http://localhost:3360/api/about',
    education:'http://localhost:3360/api/education',
    experience:'http://localhost:3360/api/experience',
    skills: 'http://localhost:3360/api/skills',
    projects:'http://localhost:3360/api/projects',
    certifications:'http://localhost:3360/api/certifications',
    achievements:'http://localhost:3360/api/achievements',
    contact: 'http://localhost:3360/api/contact',
    mapKey: '',
    googleAuthClientId: '',
    webSocketUrl: 'ws://localhost:8000/websocket'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
