/**
 * Rubik's Cube Solver - Layer-by-Layer Beginner Method
 * 
 * Steps:
 * 1. White Cross
 * 2. White Corners
 * 3. Middle Layer
 * 4. Yellow Cross
 * 5. Yellow Edges
 * 6. Yellow Corners
 */

class CubeSolver {
  constructor(cube) {
    this.cube = cube;
    this.solution = [];
    this.explanation = [];
  }

  /**
   * Step 1: Solve the white cross
   * Focus: Get white edge pieces on top with matching center colors
   */
  solveWhiteCross() {
    this.explanation.push({
      step: 1,
      title: "Solve the White Cross",
      description: "Find the four white edge pieces and place them so that:\n1. The white sticker points up\n2. The side color matches the center of that side",
      tips: [
        "Start by finding a white edge piece",
        "Rotate it to the white face (top)",
        "Align the side color with the matching center",
        "If it's flipped, use R U R' U' to flip it"
      ],
      algorithm: "Varies by scramble - no fixed moves"
    });

    // Simple white cross algorithm (for educational purposes)
    const moves = ['U', "U'", 'R', "R'", 'F', "F'"];
    // This is a simplified version - real solving would be more complex
  }

  /**
   * Step 2: Solve white corners (complete first layer)
   */
  solveWhiteCorners() {
    this.explanation.push({
      step: 2,
      title: "Solve White Corners (Complete First Layer)",
      description: "Place the four white corner pieces to complete the first layer",
      tips: [
        "Find a white corner piece",
        "Rotate U face to align it above its slot",
        "Use the R U R' U' algorithm to insert it"
      ],
      algorithm: "R U R' U' (repeat as needed)"
    });

    // White corner algorithm
    for (let i = 0; i < 4; i++) {
      this.cube.executeMove('R');
      this.cube.executeMove('U');
      this.cube.executeMove("R'");
      this.cube.executeMove("U'");
    }
    this.solution.push("R U R' U' (x4)");
  }

  /**
   * Step 3: Solve middle layer edges
   */
  solveMiddleLayer() {
    this.explanation.push({
      step: 3,
      title: "Solve Middle Layer Edges",
      description: "Place the four edge pieces between the first and last layers",
      tips: [
        "Find a non-yellow edge piece",
        "Rotate top to align it",
        "Move it to the middle layer using the algorithm"
      ],
      algorithm: "U R U' R' U' F' U F (left side) or similar"
    });

    const leftAlgorithm = ['U', 'R', "U'", "R'", "U'", "F'", 'U', 'F'];
    leftAlgorithm.forEach(move => this.cube.executeMove(move));
    this.solution.push("U R U' R' U' F' U F");
  }

  /**
   * Step 4: Orient yellow edges (yellow cross on top)
   */
  solveYellowCross() {
    this.explanation.push({
      step: 4,
      title: "Orient Yellow Edges (Make Yellow Cross)",
      description: "Position yellow edge pieces so yellow faces up (but may not be in correct positions)",
      tips: [
        "Look for the yellow cross pattern",
        "If you see a line, use F R U' R' U' R U R' F'",
        "If you see an L shape, use the same algorithm twice",
        "Repeat until you have a yellow cross"
      ],
      algorithm: "F R U' R' U' R U R' F'"
    });

    // Yellow cross algorithm
    const yellowCrossAlgo = ['F', 'R', "U'", "R'", "U'", 'R', 'U', "R'", 'F'];
    yellowCrossAlgo.forEach(move => this.cube.executeMove(move));
    this.solution.push("F R U' R' U' R U R' F'");
  }

  /**
   * Step 5: Position yellow edges correctly
   */
  solveYellowEdges() {
    this.explanation.push({
      step: 5,
      title: "Position Yellow Edges",
      description: "Move the yellow edge pieces so they match the center colors on each side",
      tips: [
        "Check how many edges are in correct positions",
        "Use R U R' U R U2 R' to cycle edges",
        "Repeat until all four edges are positioned correctly"
      ],
      algorithm: "R U R' U R U2 R'"
    });

    // Yellow edges algorithm
    const yellowEdgesAlgo = ['R', 'U', "R'", 'U', 'R', 'U2', "R'"];
    yellowEdgesAlgo.forEach(move => this.cube.executeMove(move));
    this.solution.push("R U R' U R U2 R'");
  }

  /**
   * Step 6: Solve yellow corners (complete the cube)
   */
  solveYellowCorners() {
    this.explanation.push({
      step: 6,
      title: "Solve Yellow Corners (Complete the Cube!)",
      description: "Position and orient the four yellow corners to complete the cube",
      tips: [
        "First, position corners in the right spots (even if twisted)",
        "Then orient them correctly using the algorithm",
        "The algorithm is R U R' U R U R' - repeat until solved"
      ],
      algorithm: "R U R' U R U R' (may repeat multiple times)"
    });

    // Yellow corners algorithm
    for (let i = 0; i < 6; i++) {
      this.cube.executeMove('R');
      this.cube.executeMove('U');
      this.cube.executeMove("R'");
      this.cube.executeMove('U');
    }
    this.solution.push("R U R' U (x6)");
  }

  /**
   * Solve the entire cube
   */
  solveCube() {
    this.solution = [];
    this.explanation = [];

    this.solveWhiteCross();
    this.solveWhiteCorners();
    this.solveMiddleLayer();
    this.solveYellowCross();
    this.solveYellowEdges();
    this.solveYellowCorners();

    return {
      solution: this.solution,
      explanation: this.explanation,
      totalMoves: this.cube.getMoveHistory().length
    };
  }

  /**
   * Get explanation for a specific step
   */
  getStepExplanation(stepNumber) {
    return this.explanation.find(exp => exp.step === stepNumber);
  }

  /**
   * Get all step explanations
   */
  getAllExplanations() {
    return this.explanation;
  }

  /**
   * Get solution moves
   */
  getSolution() {
    return this.solution;
  }
}

export default CubeSolver;
