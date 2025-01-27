import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Audio Management
 * @description
 * A Cordova plugin to manage volume of audio streams for: ring, music, notification and system. Possible
 * ringer values for those streams are: silent, vibrate and normal.
 *
 * @usage
 * ```typescript
 * constructor(public audioManagement: AudioManagement) { }
 *
 * ...
 *
 * setAudioMode() {
 *  this.audioManagement.setAudioMode(AudioMode.NORMAL)
 *    .then(() => {
 *     console.log('Device audio mode is now NORMAL');
 *    })
 *    .catch((reason) => {
 *      console.log(reason);
 *    });
 * }
 *
 * getAudioMode() {
 *  this.audioManagement.getAudioMode()
 *    .then((value: AudioModeReturn) => {
 *     console.log('Device audio mode is ' + value.label + ' (' + value.audioMode + ')');
 *    })
 *    .catch((reason) => {
 *      console.log(reason);
 *    });
 * }
 *
 * ```
 * @interfaces
 * AudioMode
 * AudioModeReturn
 * VolumeType
 */
@Plugin({
  pluginName: 'AudioManagement',
  plugin: 'clovelced-plugin-audiomanagement',
  pluginRef: 'AudioManagement',
  repo: 'https://github.com/clovelCed/cordova-plugin-audiomanagement',
  platforms: ['Android']
})
@Injectable()
export class AudioManagement extends AwesomeCordovaNativePlugin {
  /**
   * Sets the `AudioManagement.AudioMode` for the device.
   *
   * @param {AudioMode} mode the device can be set to: Silent, Normal, Vibrate
   * @returns {Promise<void>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setAudioMode(mode: AudioMode): Promise<void> {
    return;
  }

  /**
   * Gets the current `AudioMode` of the device. Thenable returns an object with
   * `label` and `audioMode` values.
   *
   * @returns {Promise<AudioModeReturn>}
   */
  @Cordova()
  getAudioMode(): Promise<AudioModeReturn> {
    return;
  }

  /**
   * Sets the specified `VolumeType` for the device with the value from `volume`.
   *
   * @param {VolumeType} type the `VolumeType` to set
   * @param {number} volume the volume value
   * @returns {Promise<void>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  setVolume(type: VolumeType, volume: number): Promise<void> {
    return;
  }

  /**
   * Gets the specified `VolumeType`'s `volume`. Thenable returns an object with
   * a numeric property for volume, `volume`.
   *
   * @param {VolumeType} type the `VolumeType` to get
   * @returns {Promise<{volume: number}>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getVolume(type: VolumeType): Promise<{ volume: number }> {
    return;
  }

  /**
   * Gets the specified `VolumeType`'s maximum `volume`. Thenable returns an
   * object with a numeric property, `maxVolume`.
   *
   * @param {VolumeType} type the `VolumeType` to get
   * @returns {Promise<{maxVolume: number}>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getMaxVolume(type: VolumeType): Promise<{ maxVolume: number }> {
    return;
  }
}


export enum AudioMode {
  SILENT = 0,
  VIBRATE,
  NORMAL
}

export enum VolumeType {
  RING = 0,
  MUSIC,
  NOTIFICATION,
  SYSTEM
}

export interface AudioModeReturn {
  audioMode: AudioMode;
  label: string;
}
