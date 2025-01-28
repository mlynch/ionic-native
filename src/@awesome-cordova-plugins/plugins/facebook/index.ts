import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface FacebookLoginResponse {
  status: string;

  authResponse: {
    accessToken: string;

    data_access_expiration_time: string;

    expiresIn: number;

    userID: string;
  };
}

export interface FacebookLimitedLoginResponse {
  status: string;

  authResponse: {
    authenticationToken: string;

    nonce: string;

    userID: string;
  };
}

/**
 * @name Facebook
 * @description
 * Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.
 *
 * Requires Cordova plugin: `cordova-plugin-facebook-connect`. For more info, please see the [Facebook Connect](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect).
 *
 * #### Installation
 *
 *  To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).
 *
 * [![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)
 *
 * Retrieve the `App ID` and `App Name`.
 *
 * [![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)
 *
 * Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.
 *
 * ```bash
 *  ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"
 * ```
 *
 * After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:
 *
 * [![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)
 *
 * Click `'Add Platform'`.
 *
 * [![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)
 *
 * At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.
 *
 * Take note of the `id` for the next step:
 * ```xml
 * <widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
 * ```
 *
 * You can also edit the `id` to whatever you'd like it to be.
 *
 * #### iOS Install
 * Under 'Bundle ID', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)
 *
 *
 * #### Android Install
 * Under 'Google Play Package Name', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)
 *
 *
 * And that's it! You can now make calls to Facebook using the plugin.
 *
 * ## Events
 *
 * App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.
 *
 * - [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
 * - [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
 * - [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success
 *
 * Activation events are automatically tracked for you in the plugin.
 *
 * Events are listed on the [insights page](https://www.facebook.com/insights/).
 *
 * For tracking events, see `logEvent` and `logPurchase`.
 * @usage
 * ```typescript
 * import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
 *
 * constructor(private fb: Facebook) { }
 *
 * ...
 *
 * this.fb.login(['public_profile', 'user_friends', 'email'])
 *   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
 *   .catch(e => console.log('Error logging into Facebook', e));
 *
 *
 * this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
 *
 * ```
 */
@Plugin({
  pluginName: 'Facebook',
  plugin: 'cordova-plugin-facebook-connect',
  pluginRef: 'facebookConnectPlugin',
  repo: 'https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect',
  install:
    'ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"',
  installVariables: ['APP_ID', 'APP_NAME'],
  platforms: ['Android', 'iOS', 'Browser'],
})
@Injectable()
export class Facebook extends AwesomeCordovaNativePlugin {
  EVENTS = {
    EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
    EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
    EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
    EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
    EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
    EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
    EVENT_NAME_SEARCHED: 'fb_mobile_search',
    EVENT_NAME_RATED: 'fb_mobile_rate',
    EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
    EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
    EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
    EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
    EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
    EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
    EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
    EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
    EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
    EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
    EVENT_PARAM_CURRENCY: 'fb_currency',
    EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
    EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
    EVENT_PARAM_CONTENT_ID: 'fb_content_id',
    EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
    EVENT_PARAM_SUCCESS: 'fb_success',
    EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
    EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
    EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
    EVENT_PARAM_LEVEL: 'fb_level',
    EVENT_PARAM_DESCRIPTION: 'fb_description',
    EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
    EVENT_PARAM_VALUE_YES: '1',
    EVENT_PARAM_VALUE_NO: '0',
  };

  /**
   * Get the current application ID
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the current application ID
   */
  @Cordova()
  getApplicationId(): Promise<string> {
    return;
  }

  /**
   * Set the application ID
   *
   * @param {string}  id application ID
   */
  @Cordova()
  setApplicationId(id: string): Promise<void> {
    return;
  }

  /**
   * Get the current application name
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the current application name
   */
  @Cordova()
  getApplicationName(): Promise<string> {
    return;
  }

  /**
   * Set the application name
   *
   * @param {string}  name application name
   */
  @Cordova()
  setApplicationName(name: string): Promise<void> {
    return;
  }

  /**
   * Login to Facebook to authenticate this app.
   *
   * ```typescript
   * {
   *   status: 'connected',
   *   authResponse: {
   *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
   *     data_access_expiration_time: '1623680244',
   *     expiresIn: 5183979,
   *     userID: '634565435'
   *   }
   * }
   *
   * ```
   *
   * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
   * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
   */
  @Cordova()
  login(permissions: string[]): Promise<FacebookLoginResponse> {
    return;
  }

  /**
   * Login to Facebook using Limited Login (iOS Only)
   *
   * ```typescript
   * {
   *   status: 'connected',
   *   authResponse: {
   *     authenticationToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
   *     nonce: 'foo',
   *     userID: '634565435'
   *   }
   * }
   *
   * ```
   *
   * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/limited-login/permissions) this app has upon logging in.
   * @param {string}    nonce       Nonce to create the configuration with.
   * @returns {Promise<FacebookLimitedLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
   */
  @Cordova()
  loginWithLimitedTracking(permissions: string[], nonce: string): Promise<FacebookLimitedLoginResponse> {
    return;
  }

  /**
   * Check if the user has approved all necessary permissions
   *
   * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) to check for
   * @returns {Promise<string>} Returns a Promise that resolves with a success string if all passed permissions are granted, or an error string if any permissions are not granted
   */
  @Cordova()
  checkHasCorrectPermissions(permissions: string[]): Promise<string> {
    return;
  }

  /**
   * Check if data access has expired for the user
   *
   * @returns {Promise<string>} Returns a Promise that resolves with a success string if data access is expired, or rejects with an error
   */
  @Cordova()
  isDataAccessExpired(): Promise<string> {
    return;
  }

  /**
   * Reauthorize data access after it has expired
   *
   * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
   */
  @Cordova()
  reauthorizeDataAccess(): Promise<FacebookLoginResponse> {
    return;
  }

  /**
   * Logout of Facebook.
   *
   * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
   *
   * @returns {Promise<any>} Returns a Promise that resolves on a successful logout, and rejects if logout fails.
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
   *
   * 1) the user is logged into Facebook and has authenticated your application (connected)
   * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
   * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
   *
   * Resolves with a response like:
   *
   * ```
   * {
   *   authResponse: {
   *     userID: '12345678912345',
   *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
   *     data_access_expiration_time: '1623680244',
   *     expiresIn: '5183738'
   *   },
   *   status: 'connected'
   * }
   * ```
   *
   * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
   *
   * @returns {Promise<any>} Returns a Promise that resolves with a status, or rejects with an error
   */
  @Cordova()
  getLoginStatus(): Promise<any> {
    return;
  }

  /**
   * Get a Facebook access token for using Facebook services.
   *
   * @returns {Promise<string>} Returns a Promise that resolves with an access token, or rejects with an error
   */
  @Cordova()
  getAccessToken(): Promise<string> {
    return;
  }

  /**
   * Get profile information for the currently logged in user
   *
   * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
   */
  @Cordova()
  getCurrentProfile(): Promise<any> {
    return;
  }

  /**
   * Show one of various Facebook dialogs. Example of options for a Share dialog:
   *
   * ```
   * {
   *   method: 'share',
   *   href: 'http://example.com'
   * }
   * ```
   *
   * For more options see the [Cordova plugin docs](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
   *
   * @param {Object} options The dialog options
   * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
   */
  @Cordova()
  showDialog(options: any): Promise<any> {
    return;
  }

  /**
   * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
   *
   * For more information see:
   *
   *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
   *  Graph Explorer - https://developers.facebook.com/tools/explorer
   *  Graph API - https://developers.facebook.com/docs/graph-api
   *
   * @param {string}  requestPath Graph API endpoint you want to call
   * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
   * @param {string}  httpMethod HTTP method for the request, one of "GET", "POST", or "DELETE" (default is "GET")
   * @returns {Promise<any>} Returns a Promise that resolves with the result of the request, or rejects with an error
   */
  @Cordova()
  api(requestPath: string, permissions: string[], httpMethod?: string): Promise<any> {
    return;
  }

  /**
   * Set Data Processing Options for App events. For more information see [Facebook docs](https://developers.facebook.com/docs/app-events/guides/ccpa)
   *
   * @param {string[]}  options List of options, i.e. ["LDU"]
   * @param {number}  country The numeric identifier for the country
   * @param {number}  state The numeric identifier for the state
   */
  @Cordova()
  setDataProcessingOptions(options: string[], country?: number, state?: number): Promise<void> {
    return;
  }

  /**
   * Set user data for Advanced Matching. For more information see [Facebook docs](https://developers.facebook.com/docs/app-events/advanced-matching/)
   *
   * @param {Object}  userData An object containing data about the user
   */
  @Cordova()
  setUserData(userData: Object): Promise<void> {
    return;
  }

  /**
   * Clear user data. For more information see [Facebook docs](https://developers.facebook.com/docs/app-events/advanced-matching/)
   */
  @Cordova()
  clearUserData(): Promise<void> {
    return;
  }

  /**
   * Log an event.  For more information see the Events section above.
   *
   * @param {string}  name Name of the event
   * @param {Object}  [params] An object containing extra data to log with the event
   * @param {number}  [valueToSum] any value to be added to added to a sum on each event
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
  })
  logEvent(name: string, params?: Object, valueToSum?: number): Promise<any> {
    return;
  }

  /**
   * Enable or disable the auto log app event feature - https://developers.facebook.com/docs/app-events/gdpr-compliance/
   *
   * @param {boolean}  enabled value to be set
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  setAutoLogAppEventsEnabled(enabled: boolean): Promise<void> {
    return;
  }

  /**
   * Enable or disable collection of advertiser-id
   *
   * @param {boolean}  enabled value to be set
   */
  @Cordova()
  setAdvertiserIDCollectionEnabled(enabled: boolean): Promise<void> {
    return;
  }

  /**
   * Enable or disable advertiser tracking (iOS Only)
   *
   * @param {boolean}  enabled value to be set
   */
  @Cordova()
  setAdvertiserTrackingEnabled(enabled: boolean): Promise<void> {
    return;
  }

  /**
   * Log a purchase. For more information see the Events section above.
   *
   * @param {number}  value Value of the purchase.
   * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
   * @param {Object}  params An object containing extra data to log with the event
   * @returns {Promise<any>}
   */
  @Cordova()
  logPurchase(value: number, currency: string, params?: Object): Promise<any> {
    return;
  }

  /**
   * Returns the deferred app link
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the deep link
   */
  @Cordova()
  getDeferredApplink(): Promise<string> {
    return;
  }

  /**
   * Manually log activation events
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  activateApp(): Promise<any> {
    return;
  }
}
