export interface CameraStatus {

  ready:boolean;

  permission:boolean;

}


export const defaultCameraStatus:CameraStatus = {

  ready:false,

  permission:false

};
