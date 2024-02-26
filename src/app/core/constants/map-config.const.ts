import { environment } from 'src/environments/environment';

/**
 * Configuration settings for the Mapbox map in the application.
 */
export const mapConfig = {
  /**
   * Mapbox access token for API authentication.
   */
  accessToken: environment.MAPBOX_TOKEN,

  /**
   * Map style URL defining the appearance and features of the map.
   */
  style: 'mapbox://styles/mapbox/navigation-day-v1',

  /**
   * HTML container ID where the map will be rendered.
   */
  container: 'map',

  /**
   * Initial zoom level for the map.
   */
  zoom: 10,
};