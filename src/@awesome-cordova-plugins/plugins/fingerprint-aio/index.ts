import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

// Biometric type
export type BIOMETRIC_TYPE = 'finger' | 'face' | 'biometric';

export enum BIOMETRIC_ERRORS {
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_UNKNOWN_ERROR = -100,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_UNAVAILABLE = -101,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_AUTHENTICATION_FAILED = -102,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_SDK_NOT_SUPPORTED = -103,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_PERMISSION_NOT_GRANTED = -105,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_NOT_ENROLLED = -106,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_DISMISSED = -108,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_SCREEN_GUARD_UNSECURED = -110,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_LOCKED_OUT = -111,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_LOCKED_OUT_PERMANENT = -112,
  /**
   * Convenience constant
   *
   * @type {number}
   */
  BIOMETRIC_SECRET_NOT_FOUND = -113
}

export interface FingerprintOptions {
  /**
   * Title in biometric prompt (android only)
   *
   * @default {APP_NAME} Biometric Sign On
   */
  title?: string;

  /**
   * Subtitle in biometric Prompt (android only)
   *
   * @default null
   */
  subtitle?: string;

  /**
   * Description in biometric Prompt
   *
   * @default null
   */
  description?: string;

  /**
   * Title of fallback button.
   *
   * @default "Use Pin"
   */
  fallbackButtonTitle?: string;

  /**
   * Title for cancel button on Android
   *
   * @default "Cancel"
   */
  cancelButtonTitle?: string;

  /**
   * Disable 'use backup' option.
   *
   * @default false
   */
  disableBackup?: boolean;

  /**
   * (Android): If false user confirmation is NOT required after a biometric has been authenticated.
   *
   * @default true.
   * See https://developer.android.com/training/sign-in/biometric-auth#no-explicit-user-action
   */
  confirmationRequired?: boolean;
}

export interface FingerprintSecretOptions extends FingerprintOptions {
  /**
   * String secret to encrypt and save, use simple strings matching the regex [a-zA-Z0-9\-]+
   */
  secret: string;

  /**
   * If `true` secret will be deleted when biometry items are deleted or enrolled
   *
   * @default false
   */
  invalidateOnEnrollment?: boolean;
}

export interface FingerprintAvailableOptions {
  /**
  * (Android): If true will only return success if Class 3 (BIOMETRIC_STRONG) Biometrics are enrolled on the device. 
  * It is reccomended you use this if planning on using the registerBiometricSecret and loadBiometricSecret methods.
  */
  requireStrongBiometrics: boolean;

  /**
  * (iOS): If true checks if backup authentication option is available, e.g. passcode. 
  * Default: false, which means check for biometrics only.
  * 
  * @default false
  */
  allowBackup?: boolean;
}

/**
 * @name Fingerprint AIO
 * @description
 * Use simple fingerprint authentication on Android and iOS.
 * Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
 * @usage
 * ```typescript
 * import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
 *
 * constructor(private faio: FingerprintAIO) { }
 *
 * ...
 *
 * this.faio.show().then((result: any) => console.log(result)).catch((error: any) => console.log(error));
 *
 *  OR with options...
 *
 * this.faio.show({
 *     title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
 *     subtitle: 'Coolest Plugin ever' // (Android Only) | optional | Default: null
 *     description: 'Please authenticate' // optional | Default: null
 *     fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
 *                                        // When disableBackup is true defaults to "Cancel"
 *     disableBackup:true,  // optional | default: false
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ...
 *
 * this.faio.registerBiometricSecret({
 *      description: "Some biometric description", // optional | Default: null
 *      secret: "my-super-secret", // mandatory
 *      invalidateOnEnrollment: true, // optional | Default: false
 *      disableBackup: true, // (Android Only) | optional | always `true` on Android
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 *  ...
 *
 * this.faio.loadBiometricSecret({
 *      description: "Some biometric description", // optional | Default: null
 *      disableBackup: true, // always disabled on Android
 * })
 * .then((result: string) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * FingerprintOptions
 * FingerprintSecretOptions
 * FingerprintAvailableOptions
 */
@Plugin({
  pluginName: 'FingerprintAIO',
  plugin: 'cordova-plugin-fingerprint-aio',
  pluginRef: 'Fingerprint',
  repo: 'https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FingerprintAIO extends AwesomeCordovaNativePlugin {

  /**
   * Check if fingerprint authentication is available
   *
   * @param {FingerprintAvailableOptions} options Options for platform specific fingerprint API
   * @returns {Promise<BIOMETRIC_TYPE>} Returns a promise with result which depends on device and os.
   * iPhone X will return 'face' other Android or iOS devices will return 'finger' Android P+ will return 'biometric'
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  isAvailable(options: FingerprintAvailableOptions): Promise<BIOMETRIC_TYPE> {
    return;
  }

  /**
   * Show authentication dialogue and register secret
   *
   * @param {FingerprintSecretOptions} options Options for platform specific fingerprint API
   * @returns {Promise<void>} Returns a promise that resolves when authentication was successful
   */
  @Cordova()
  registerBiometricSecret(options: FingerprintSecretOptions): Promise<void> {
    return;
  }

  /**
   * Show authentication dialogue and load secret
   *
   * @param {FingerprintOptions} options Options for platform specific fingerprint API
   * @returns {Promise<string>} Returns a promise that resolves when authentication was successful
   */
  @Cordova()
  loadBiometricSecret(options: FingerprintOptions): Promise<string> {
    return;
  }

  /**
   * Show authentication dialogue
   *
   * @param {FingerprintOptions} options Options for platform specific fingerprint API
   * @returns {Promise<void>} Returns a promise that resolves when authentication was successful
   */
  @Cordova()
  show(options: FingerprintOptions): Promise<void> {
    return;
  }
}
