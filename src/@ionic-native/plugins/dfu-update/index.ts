import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Dfu Update
 * @description
 * This plugin is a Wrapper to use Nordic Semiconductor's Device Firmware Update (DFU) service to update a Bluetooth LE device.
 *
 * @usage
 * ```typescript
 * import { DfuUpdate } from '@ionic-native/dfu-update';
 *
 *
 * constructor(private dfuUpdate: DfuUpdate) { }
 *
 * ...
 *
 *
 * this.dfuUpdate.updateFirmware('fileURL', 'deviceIdentifier')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'DfuUpdate',
  plugin: 'cordova-plugin-dfu-update',
  pluginRef: 'window.DfuUpdate',
  repo: 'https://github.com/EinfachHans/cordova-plugin-dfu-update',
  install: 'ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION="1.11.0"',
  installVariables: ['ANDROID_NORDIC_VERSION'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class DfuUpdate extends IonicNativePlugin {
  /**
   * Start the Firmware-Update-Process
   * @param fileURL {string} A string that is the path to the file to use in the update. It can be either in either `cdvfile://` or `file://` format.
   * @param deviceIdentifier {string} A string that contains the identifier for the Bluetooth LE device to update. It will either be a MAC address (on Android) or a UUID (on iOS).
   * @return {Observable<any>} Returns a Observable that emits when something happens
   */
  @Cordova({
    observable: true,
    callbackOrder: 'reverse',
  })
  updateFirmware(fileURL: string, deviceIdentifier: string): Observable<any> {
    return;
  }
}
