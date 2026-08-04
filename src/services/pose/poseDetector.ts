export interface PoseResult {

  detected:boolean;

  exercise:string;

  confidence:number;

}



export function detectPose(
  frame:any
):PoseResult{


  /*
    Future AI model input:

    frame
      |
      ↓
    MediaPipe / MoveNet
      |
      ↓
    landmarks
  */


  return {

    detected:false,

    exercise:"",

    confidence:0

  };


}
