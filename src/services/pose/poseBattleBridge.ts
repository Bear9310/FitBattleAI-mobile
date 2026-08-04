import { detectPose } from "./poseDetector";
import { recognizeExercise } from "./exerciseRecognition";

import {
  countRep
} from "@/services/exercise/exerciseCounter";


export function processPoseFrame(){

  const pose =
    detectPose(null);



  const exercise =
    recognizeExercise(pose);



  if(!exercise){

    return null;

  }



  const result =
    countRep(
      exercise.exercise as any,
      "up"
    );


  return {

    completed:
      result.completed,

    reps:
      result.reps,

    confidence:
      exercise.confidence

  };

}
