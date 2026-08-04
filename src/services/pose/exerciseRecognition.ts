import { PoseResult } from "./poseDetector";


export function recognizeExercise(
  pose:PoseResult
){


  if(!pose.detected){

    return null;

  }



  return {

    exercise:pose.exercise,

    confidence:pose.confidence

  };


}
