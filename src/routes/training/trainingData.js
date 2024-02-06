import yogaGif from "$lib/images/Yoga.gif";
import TrainingCard from "./trainingCard.svelte";
import dance from "$lib/images/dance.gif";
import running from "$lib/images/Cardio.gif";
import zumba from "$lib/images/zumba.gif";
import oldageWorkout from "$lib/images/oldAge.gif";
import Live from "$lib/images/liveExercise.gif";

export const trainingServices = [
  {
    id: 1,
    name: "Live Workout Session",
    gifSrc: Live,
    route: "liveworkoutsession",
  },
  {
    id: 2,
    name: "Yoga",
    gifSrc: yogaGif,
    route: "yoga",
  },
  {
    id: 3,
    name: "HIIT and LIIT",
    gifSrc: running,
    route: "hiitandliit(cardiovascular)",
  },
  {
    id: 4,
    name: "Dance",
    gifSrc: dance,
    route: "dance",
  },
  {
    id: 5,
    name: "Zumba",
    gifSrc: zumba,
    route: "zumba",
  },
  {
    id: 6,
    name: "Old-Age Workout",
    gifSrc: oldageWorkout,
    route: "old-ageworkout",
  },
];
