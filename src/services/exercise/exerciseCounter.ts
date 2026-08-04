export type Exercise =
  | "pushup"
  | "squat"
  | "jumpingjack";


interface ExerciseState {

  reps:number;

  stage:string;

}


const exerciseState:Record<string,ExerciseState> = {};



export function resetExercise(
  exercise:Exercise
){

  exerciseState[exercise]={
    reps:0,
    stage:"start"
  };

}




export function countRep(
  exercise:Exercise,
  pose:string
){


  if(!exerciseState[exercise]){

    resetExercise(exercise);

  }



  const state =
    exerciseState[exercise];



  let completed = false;



  if(exercise==="pushup"){


    if(
      pose==="down" &&
      state.stage==="start"
    ){

      state.stage="down";

    }


    if(
      pose==="up" &&
      state.stage==="down"
    ){

      state.reps++;

      state.stage="start";

      completed=true;

    }


  }



  return {

    reps:state.reps,

    completed

  };


}
