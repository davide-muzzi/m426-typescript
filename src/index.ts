import { isTriplet } from "./pythagoras.js";

function findTriplets(limit: number): void {
  for (let a = 1; a <= limit; a++) {
    for (let b = a; b <= limit; b++) {
      for (let c = b; c <= limit; c++) {
        if (isTriplet(a, b, c)) {
          console.log(`Gefundenes Tripel: (${a}, ${b}, ${c})`);
        }
      }
    }
  }
}

findTriplets(50);
