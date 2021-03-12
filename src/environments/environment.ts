// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* Unsplash configs */
  Unsplash_Access_key: 'YPFR1Mb1ERtX9LXaxeT0qE3o8sOUatxvaQ4H84X5YVs',
  Unsplash_Secret_Key: 'QpuQ0tSVfRoKQFcfZSm_Q_gVU434opPHYd-uFIOyA_0',
  Unsplash_Search_route: '/search/photos/',
  Unsplash_Api_Base_url: 'https://api.unsplash.com/',
  /* Foursquare */
  Foursquare_Client_Id: 'Q2YRVTQ0OY50M1KISNOOQNWEB1N4SASNEGWJN4IEUU50VZDB',
  Foursquare_Client_Secret: 'EGFZY0MOUMJLSEI1050IROASHNZN2CBL5REBOGERJZRKQSBS',
  Foursquare_Base_Url: 'https://api.foursquare.com/v2',
  Foursquare_Places_route: '/venues/explore/',
  Foursquare_location_call: 'https://api.foursquare.com/v2/venues/explore?client_id=Q2YRVTQ0OY50M1KISNOOQNWEB1N4SASNEGWJN4IEUU50VZDB&client_secret=EGFZY0MOUMJLSEI1050IROASHNZN2CBL5REBOGERJZRKQSBS&v=20180323&ll=40.7,-74&limit=20'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
