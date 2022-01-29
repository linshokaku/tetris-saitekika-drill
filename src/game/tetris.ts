import { GHOST_EMPTY, MATRIX_EMPTY, TARGET_EMPTY } from './constants';

class TetrisCore {
  matrix: Array<Array<string>>;

  ghost: Array<Array<string>>;

  target: Array<Array<string>>;

  constructor() {
    this.matrix = new Array<Array<string>>(20);
    for (let i = 0; i < 20; i += 1) {
      this.matrix[i] = new Array<string>(10);
      for (let j = 0; j < 10; j += 1) {
        this.matrix[i][j] = MATRIX_EMPTY;
      }
    }

    this.ghost = new Array<Array<string>>(20);
    for (let i = 0; i < 20; i += 1) {
      this.ghost[i] = new Array<string>(10);
      for (let j = 0; j < 10; j += 1) {
        this.ghost[i][j] = GHOST_EMPTY;
      }
    }

    this.target = new Array<Array<string>>(20);
    for (let i = 0; i < 20; i += 1) {
      this.target[i] = new Array<string>(10);
      for (let j = 0; j < 10; j += 1) {
        this.target[i][j] = TARGET_EMPTY;
      }
    }
  }
}

export default TetrisCore;
