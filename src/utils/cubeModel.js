/**
 * Rubik's Cube Model - Represents the state of a 3x3 cube
 * Each face has 9 stickers (3x3)
 * Faces: White (0), Yellow (1), Red (2), Orange (3), Blue (4), Green (5)
 */

class RubiksCube {
  constructor() {
    this.faces = {
      white: Array(9).fill('W'),
      yellow: Array(9).fill('Y'),
      red: Array(9).fill('R'),
      orange: Array(9).fill('O'),
      blue: Array(9).fill('B'),
      green: Array(9).fill('G'),
    };
    this.moveHistory = [];
  }

  /**
   * Rotate a face clockwise
   * Indices: 0 1 2
   *          3 4 5
   *          6 7 8
   */
  rotateFaceClockwise(face) {
    const temp = [...this.faces[face]];
    this.faces[face][0] = temp[6];
    this.faces[face][1] = temp[3];
    this.faces[face][2] = temp[0];
    this.faces[face][3] = temp[7];
    this.faces[face][4] = temp[4]; // center stays
    this.faces[face][5] = temp[1];
    this.faces[face][6] = temp[8];
    this.faces[face][7] = temp[5];
    this.faces[face][8] = temp[2];
  }

  /**
   * Rotate a face counter-clockwise
   */
  rotateFaceCounterClockwise(face) {
    const temp = [...this.faces[face]];
    this.faces[face][0] = temp[2];
    this.faces[face][1] = temp[5];
    this.faces[face][2] = temp[8];
    this.faces[face][3] = temp[1];
    this.faces[face][4] = temp[4]; // center stays
    this.faces[face][5] = temp[7];
    this.faces[face][6] = temp[0];
    this.faces[face][7] = temp[3];
    this.faces[face][8] = temp[6];
  }

  /**
   * Move: U (Up/White face clockwise)
   */
  moveU() {
    this.rotateFaceClockwise('white');
    const temp = [
      this.faces.red[0], this.faces.red[1], this.faces.red[2]
    ];
    this.faces.red[0] = this.faces.green[0];
    this.faces.red[1] = this.faces.green[1];
    this.faces.red[2] = this.faces.green[2];
    this.faces.green[0] = this.faces.orange[0];
    this.faces.green[1] = this.faces.orange[1];
    this.faces.green[2] = this.faces.orange[2];
    this.faces.orange[0] = this.faces.blue[0];
    this.faces.orange[1] = this.faces.blue[1];
    this.faces.orange[2] = this.faces.blue[2];
    this.faces.blue[0] = temp[0];
    this.faces.blue[1] = temp[1];
    this.faces.blue[2] = temp[2];
    this.moveHistory.push('U');
  }

  /**
   * Move: D (Down/Yellow face clockwise)
   */
  moveD() {
    this.rotateFaceClockwise('yellow');
    const temp = [
      this.faces.red[6], this.faces.red[7], this.faces.red[8]
    ];
    this.faces.red[6] = this.faces.blue[6];
    this.faces.red[7] = this.faces.blue[7];
    this.faces.red[8] = this.faces.blue[8];
    this.faces.blue[6] = this.faces.orange[6];
    this.faces.blue[7] = this.faces.orange[7];
    this.faces.blue[8] = this.faces.orange[8];
    this.faces.orange[6] = this.faces.green[6];
    this.faces.orange[7] = this.faces.green[7];
    this.faces.orange[8] = this.faces.green[8];
    this.faces.green[6] = temp[0];
    this.faces.green[7] = temp[1];
    this.faces.green[8] = temp[2];
    this.moveHistory.push('D');
  }

  /**
   * Move: R (Right/Red face clockwise)
   */
  moveR() {
    this.rotateFaceClockwise('red');
    const temp = [
      this.faces.white[2], this.faces.white[5], this.faces.white[8]
    ];
    this.faces.white[2] = this.faces.green[2];
    this.faces.white[5] = this.faces.green[5];
    this.faces.white[8] = this.faces.green[8];
    this.faces.green[2] = this.faces.yellow[6];
    this.faces.green[5] = this.faces.yellow[3];
    this.faces.green[8] = this.faces.yellow[0];
    this.faces.yellow[0] = this.faces.blue[8];
    this.faces.yellow[3] = this.faces.blue[5];
    this.faces.yellow[6] = this.faces.blue[2];
    this.faces.blue[2] = temp[0];
    this.faces.blue[5] = temp[1];
    this.faces.blue[8] = temp[2];
    this.moveHistory.push('R');
  }

  /**
   * Move: L (Left/Orange face clockwise)
   */
  moveL() {
    this.rotateFaceClockwise('orange');
    const temp = [
      this.faces.white[0], this.faces.white[3], this.faces.white[6]
    ];
    this.faces.white[0] = this.faces.blue[0];
    this.faces.white[3] = this.faces.blue[3];
    this.faces.white[6] = this.faces.blue[6];
    this.faces.blue[0] = this.faces.yellow[8];
    this.faces.blue[3] = this.faces.yellow[5];
    this.faces.blue[6] = this.faces.yellow[2];
    this.faces.yellow[2] = this.faces.green[0];
    this.faces.yellow[5] = this.faces.green[3];
    this.faces.yellow[8] = this.faces.green[6];
    this.faces.green[0] = temp[0];
    this.faces.green[3] = temp[1];
    this.faces.green[6] = temp[2];
    this.moveHistory.push('L');
  }

  /**
   * Move: F (Front/Green face clockwise)
   */
  moveF() {
    this.rotateFaceClockwise('green');
    const temp = [
      this.faces.white[6], this.faces.white[7], this.faces.white[8]
    ];
    this.faces.white[6] = this.faces.orange[8];
    this.faces.white[7] = this.faces.orange[5];
    this.faces.white[8] = this.faces.orange[2];
    this.faces.orange[2] = this.faces.yellow[0];
    this.faces.orange[5] = this.faces.yellow[1];
    this.faces.orange[8] = this.faces.yellow[2];
    this.faces.yellow[0] = this.faces.red[8];
    this.faces.yellow[1] = this.faces.red[5];
    this.faces.yellow[2] = this.faces.red[2];
    this.faces.red[2] = temp[0];
    this.faces.red[5] = temp[1];
    this.faces.red[8] = temp[2];
    this.moveHistory.push('F');
  }

  /**
   * Move: B (Back/Blue face clockwise)
   */
  moveB() {
    this.rotateFaceClockwise('blue');
    const temp = [
      this.faces.white[0], this.faces.white[1], this.faces.white[2]
    ];
    this.faces.white[0] = this.faces.red[0];
    this.faces.white[1] = this.faces.red[3];
    this.faces.white[2] = this.faces.red[6];
    this.faces.red[0] = this.faces.yellow[8];
    this.faces.red[3] = this.faces.yellow[7];
    this.faces.red[6] = this.faces.yellow[6];
    this.faces.yellow[6] = this.faces.orange[6];
    this.faces.yellow[7] = this.faces.orange[3];
    this.faces.yellow[8] = this.faces.orange[0];
    this.faces.orange[0] = temp[2];
    this.faces.orange[3] = temp[1];
    this.faces.orange[6] = temp[0];
    this.moveHistory.push('B');
  }

  /**
   * Execute a move by notation (e.g., 'U', 'R', 'F2', "U'")
   */
  executeMove(notation) {
    const move = notation[0].toUpperCase();
    const isPrime = notation.includes("'");
    const isDouble = notation.includes("2");

    const moveMap = {
      'U': () => this.moveU(),
      'D': () => this.moveD(),
      'R': () => this.moveR(),
      'L': () => this.moveL(),
      'F': () => this.moveF(),
      'B': () => this.moveB(),
    };

    if (moveMap[move]) {
      if (isDouble) {
        moveMap[move]();
        moveMap[move]();
      } else if (isPrime) {
        moveMap[move]();
        moveMap[move]();
        moveMap[move]();
      } else {
        moveMap[move]();
      }
    }
  }

  /**
   * Get the current state of the cube
   */
  getState() {
    return JSON.parse(JSON.stringify(this.faces));
  }

  /**
   * Reset cube to solved state
   */
  reset() {
    this.faces = {
      white: Array(9).fill('W'),
      yellow: Array(9).fill('Y'),
      red: Array(9).fill('R'),
      orange: Array(9).fill('O'),
      blue: Array(9).fill('B'),
      green: Array(9).fill('G'),
    };
    this.moveHistory = [];
  }

  /**
   * Get move history
   */
  getMoveHistory() {
    return [...this.moveHistory];
  }
}

export default RubiksCube;
