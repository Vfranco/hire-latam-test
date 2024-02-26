// environment.ts

export const environment = {
  production: false,  // Indicates whether the application is in production mode.

  // API endpoint for Geo DB Cities service
  GEO_DB_CITIES_API: 'https://wft-geo-db.p.rapidapi.com',

  // API endpoint for ChatGPT service
  CHAT_GPT_API: 'https://chatgpt-api8.p.rapidapi.com',

  // RapidAPI host for ChatGPT service
  X_CHAT_RAPID_API_HOST: 'chatgpt-api8.p.rapidapi.com',

  // RapidAPI host for Geo DB Cities service
  X_GEO_RAPID_API_HOST: 'wft-geo-db.p.rapidapi.com',

  // RapidAPI key for authentication
  X_RAPID_API_KEY: '499124de00msh789689159986054p1f2ecfjsnb3cab3bd22e7',

  // Mapbox token for Map services
  MAPBOX_TOKEN: 'pk.eyJ1IjoiZGFtYXI0NTIiLCJhIjoiY2xxY3FyZTh6MDUxYjJrcHJnZGV3NHV2MSJ9.nyTgpR_fVt8ZoLVGOtFnQA',

  // OpenAI API key for authentication
  OPENAI_API_KEY: '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'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

