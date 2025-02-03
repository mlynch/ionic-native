import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

/**
 * @name Intercom
 * @description
 * This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/installing-intercom/cordova-phonegap/installation
 * @usage
 * ```typescript
 * import { Intercom } from '@awesome-cordova-plugins/intercom/ngx';
 *
 *
 * constructor(private intercom: Intercom) { }
 *
 * ...
 *
 * this.intercom.registerUnidentifiedUser();
 * ...
 * this.intercom.registerForPush();
 *
 * ```
 */
@Plugin({
  pluginName: 'Intercom',
  plugin: 'cordova-plugin-intercom',
  pluginRef: 'intercom',
  repo: 'https://github.com/intercom/intercom-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Intercom extends AwesomeCordovaNativePlugin {
  /**
   * Login a user with identifiable information.
   * Valid identifiers are `userId` and `email` which must be set in an object.
   * @param options The object that contains the user's `email` or `userId`.
   */
  @Cordova()
  loginUserWithUserAttributes(options: IntercomLoginUserAttributes): Promise<void> {
    return;
  }

  /**
   * Login a unidentified user.
   * This is a user that doesn't have any identifiable information such as a `userId` or `email`.
   */
  @Cordova()
  loginUnidentifiedUser(options: { [key: string]: number | string }): Promise<void> {
    return;
  }

  /**
   * Log a user out of their Intercom session.
   * This will dismiss any Intercom UI and clear Intercom's local cache.
   */
  @Cordova()
  logout(): Promise<void> {
    return;
  }

  /**
   * Determines if there is currently a user logged in.
   */
  isUserLoggedIn(): Promise<boolean> {
    return;
  }

  /**
   * Fetches the user attribtues of the currently logged in user.
   *
   * return A user registration object.
   */
  fetchLoggedInUserAttributes(): Promise<any> {
    return;
  }

  /**
   * Set `hash` string if you are using Identity Verification for your Intercom workspace.
   * @note This should be called before any user login takes place.
   *
   * Identity Verification helps to make sure that conversations between you and your users are kept private, and that one
   * user can't impersonate another. If Identity Verification is enabled for your app, Intercom will sign all requests
   * going to the Intercom servers with tokens. It requires your mobile application to have its own server which authenticates the app's users,
   * and which can store a secret.
   *
   * @see More information on Identity Verification can be found {@link https://developers.intercom.com/installing-intercom/cordova-phonegap/identity-verification/ here}
   * @param secureHash A HMAC digest of the user ID or email.
   */
  @Cordova()
  setUserHash(secureHash: string): Promise<void> {
    return;
  }

  /**
   * Update a user in Intercom with data specified in an object.
   *
   * @param attributes The object with the user data.
   */
  @Cordova()
  updateUser(attributes: IntercomUserAttributes): Promise<void> {
    return;
  }

  /**
   * Log an event with a given name and metaData.
   * You can log events in Intercom based on user actions in your app.
   *
   * @param eventName The name of the event.
   * @param metaData Metadata Objects support a few simple types that Intercom can present on your behalf,
   * @see https://developers.intercom.com/docs/references/rest-api/api.intercom.io/Data-Events/data_event/ Intercom API docs
   */
  @Cordova()
  logEvent(eventName: string, metaData: IntercomEventMetaData): Promise<void> {
    return;
  }

  /**
   * Present Intercom as a modal overlay in your app.
   * The `Home` space is displayed by default.
   */
  @Cordova()
  present(): Promise<void> {
    return;
  }

  /**
   * Present an Intercom `space` as a modal overlay in your app
   * @see {@link Space} for a list of valid spaces.
   *
   * @param space The Intercom space to be presented.
   */
  @Cordova()
  presentSpace(space: IntercomSpace): Promise<void> {
    return;
  }

  /**
   * Present Intercom content.
   *
   * An IntercomContent object.
   */
  @Cordova()
  presentContent(content: IntercomPresentContent): Promise<void> {
    return;
  }

  /**
   * Present the message composer.
   *
   * @param initialMessage An optional message that is used to pre-populate the composer with some text.
   */
  @Cordova()
  presentMessageComposer(initialMessage: string): Promise<void> {
    return;
  }

  /**
   * Fetch all Help Center collections.
   *
   * @return An array of HelpCenterCollection objects.
   */
  @Cordova()
  fetchHelpCenterCollections(): Promise<IntercomHelpCenterCollectionContent[]> {
    return;
  }

  /**
   * Fetch the contents of a Help Center collection.
   *
   * @param collectionId The ID of the Help Center collection.
   *
   * @return A HelpCenterCollectionContent object.
   */
  @Cordova()
  fetchHelpCenterCollection(collectionId: string): Promise<IntercomHelpCenterCollectionContent> {
    return;
  }

  /**
   * Search the Help Center.
   *
   * @param searchTerm The search term.
   *
   * @return An array of HelpCenterArticleSearchResult objects.
   */
  @Cordova()
  searchHelpCenter(searchTerm: string): Promise<IntercomHelpCenterArticleSearchResult> {
    return;
  }

  /**
   * Fetch the current number of unread conversations for the logged in User.
   * @return The number of unread conversations.
   */
  @Cordova()
  unreadConversationCount(): Promise<number> {
    return;
  }

  /**
   * Show or hide the Intercom Launcher in your app.
   * @note The Launcher is hidden by default.
   *
   * @param visibility A boolean indicating if the Intercom Launcher should be visible.
   */
  @Cordova()
  setLauncherVisibility(visibility: IntercomVisibility): Promise<void> {
    return;
  }

  /**
   * Show or hide the Intercom InApp Messages in your app.
   * @note All InApp Messages are visible by default.
   *
   * @param visibility A boolean indicating if the InApps should be visible.
   */
  @Cordova()
  setInAppMessageVisibility(visibility: IntercomVisibility): Promise<void> {
    return;
  }

  /**
   * Hide all Intercom windows that are currently displayed.
   * This will hide the Messenger, Help Center, Articles, and in-product messages (eg. Mobile Carousels, chats, and posts).
   */
  @Cordova()
  hideIntercom(): Promise<void> {
    return;
  }

  /**
   * Set a fixed bottom padding for in app messages and the Intercom Launcher.
   * @param bottomPadding The size of the bottom padding in points.
   */
  @Cordova()
  setBottomPadding(bottomPadding: number): Promise<void> {
    return;
  }

  /**
   * Register for push notifications
   * @note This function is only available for iOS.
   */
  @Cordova()
  registerForPush(): Promise<void> {
    return;
  }

  /**
   * Send a device token to Intercom to enable push notifications to be sent to the User.
   * @param token The device token to send to the server.
   *
   * @note This function is only available for Android.
   */
  @Cordova()
  sendPushTokenToIntercom(token: string): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  registerIdentifiedUser(options: any): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  registerUnidentifiedUser(options: any): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  reset(): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayMessenger(): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayHelpCenter(): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayMessageComposerWithInitialMessage(initialMessage: string): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayMessageComposer(): Promise<void> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayHelpCenterCollections(collectionIds: string[]): Promise<any> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayCarousel(carouselId: string): Promise<any> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displayArticle(articleId: string): Promise<any> {
    return;
  }

  /**
   * @deprecated
   */
  @Cordova()
  displaySurvey(surveyId: string): Promise<any> {
    return;
  }
}

export enum IntercomVisibility {
  VISIBLE = 'VISIBLE',
  GONE = 'GONE',
}

export enum IntercomSpace {
  Home = 'HOME',
  HelpCenter = 'HELP_CENTER',
  Messages = 'MESSAGES',
  Tickets = 'TICKETS',
}

export interface IntercomHelpCenterCollectionContent {
  collectionId: string;
  title: string;
  summary: string;
  articles: any[];
  sections: any[];
}

export enum IntercomPresentContentType {
  Article = 'ARTICLE',
  Carousel = 'CAROUSEL',
  Survey = 'SURVEY',
  HelpCenterCollections = 'HELP_CENTER_COLLECTIONS',
  Conversation = 'CONVERSATION',
}

export type IntercomPresentContent =
  | { id: string; type: IntercomPresentContentType }
  | { ids: string[]; type: IntercomPresentContentType };

export interface IntercomUserAttributes {
  email?: string;
  user_id?: string;
  name?: string;
  phone?: string;
  language_override?: string;
  signed_up_at?: string;
  unsubscribed_from_emails?: string;
  custom_attributes?: string;
  companies?: string[];
}

export interface IntercomEventMetaData {
  created_at: string;
  type?: string;
  metadata?: any;
  [key: string]: number | string | { [key: string]: number | string };
}

export type IntercomLoginUserAttributes =
  | {
      email: string;
    }
  | {
      userId: string;
    }
  | {
      email: string;
      userId: string;
    };

export interface IntercomHelpCenterArticleSearchResult {
  articleId: string;
  title: string;
  summary: string;
  matchingSnippet: string;
}
