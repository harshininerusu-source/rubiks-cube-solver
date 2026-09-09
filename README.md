# Rubik's Cube Solver App

A mobile application designed to teach beginners how to solve a 3x3 Rubik's cube using the **layer-by-layer (beginner) method**. The app provides step-by-step tutorials, interactive solving guides, and 3D visualization tools.

## Features

### 🎓 Educational Mode
- **6-Step Tutorial**: Learn the complete layer-by-layer solving method
- **Detailed Explanations**: Each step includes descriptions, algorithms, and helpful tips
- **Difficulty Levels**: Steps are marked as Easy, Medium, or Hard for better learning progression
- **Algorithm Breakdown**: Visual representation of each solving technique

### 🧩 Interactive Solver
- **Manual Input**: Execute moves using standard Rubik's cube notation (R, U, F, D, L, B)
- **Scramble Generator**: Create random cube scrambles for practice
- **Step-by-Step Solutions**: Get detailed solutions with explanations for each move
- **Progress Tracking**: Monitor your progress through the solution

### 📊 3D Visualizer
- **Cube Rotation**: Rotate the cube on all three axes (X, Y, Z)
- **Face Colors**: Visual representation with standard cube color scheme
- **Interactive Controls**: Easy-to-use buttons for rotating the cube
- **Spatial Awareness**: Practice understanding cube orientation

### 🏠 Home Screen
- Quick navigation to all features
- Feature overview and benefits
- Tips for beginners

## Technology Stack

- **Framework**: React Native
- **Navigation**: React Navigation (Bottom Tab Navigation)
- **UI Components**: React Native Vector Icons
- **State Management**: React Hooks (useState, useEffect)
- **Architecture**: Component-based with utility modules

## Project Structure

```
rubiks-cube-solver/
├── src/
│   ├── App.js                 # Main app component with navigation
│   ├── screens/
│   │   ├── HomeScreen.js      # Welcome & feature overview
│   │   ├── TutorialScreen.js  # Step-by-step learning
│   │   ├── SolverScreen.js    # Interactive cube solver
│   │   └── VisualizerScreen.js # 3D cube visualization
│   └── utils/
│       ├── cubeModel.js       # Cube data model & operations
│       └── cubeSolver.js      # Solving algorithm implementation
├── package.json
└── README.md
```

## The Layer-by-Layer Solving Method

This app teaches the beginner-friendly approach to solving Rubik's cubes:

### Step 1: White Cross
Get the white edge pieces on top with matching center colors on all sides.

### Step 2: White Corners
Place the four white corner pieces to complete the first layer.

### Step 3: Middle Layer
Insert the four edge pieces in the middle layer between the top and bottom.

### Step 4: Yellow Cross
Orient the yellow edge pieces to form a cross on top (may not be in correct positions yet).

### Step 5: Yellow Edges
Position the yellow edge pieces so they match the center colors on all sides.

### Step 6: Yellow Corners
Position and orient the final corner pieces to complete the cube.

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/harshininerusu-source/rubiks-cube-solver.git
cd rubiks-cube-solver

# Install dependencies
npm install
# or
yarn install

# For iOS (macOS only)
cd ios
pod install
cd ..

# Run on Android
npm run android
# or
react-native run-android

# Run on iOS (macOS only)
npm run ios
# or
react-native run-ios

# Start development server
npm start
# or
react-native start
```

## Rubik's Cube Notation

The app uses standard Rubik's cube notation:

- **R**: Rotate right face clockwise
- **L**: Rotate left face clockwise
- **U**: Rotate up (top) face clockwise
- **D**: Rotate down (bottom) face clockwise
- **F**: Rotate front face clockwise
- **B**: Rotate back face clockwise

**Modifiers:**
- **'** (Prime): Rotate counterclockwise (e.g., R')
- **2**: Rotate 180 degrees (e.g., R2)

**Examples:**
- `R` - Right face clockwise
- `U'` - Top face counterclockwise
- `F2` - Front face 180 degrees

## How to Use

### Tutorial Mode
1. Go to the **Tutorial** tab
2. Click on any of the 6 steps to expand it
3. Read the description and tips
4. Learn the algorithm and apply it to your cube
5. Progress through each step in order

### Solver Mode
1. Go to the **Solver** tab
2. Either:
   - Click **Scramble** to generate a random cube configuration
   - Manually enter moves using standard notation
3. Click **Get Solution** to solve the cube
4. Navigate through the solution using Previous/Next buttons
5. Each step shows the algorithm and explanation

### Visualizer Mode
1. Go to the **Visualizer** tab
2. Use the rotation controls to view the cube from different angles
3. Practice spatial awareness and cube orientation
4. Reference the color legend to identify each face

## Cube Model Details

The cube is represented internally using:
- 6 faces (White, Yellow, Red, Orange, Blue, Green)
- Each face has 9 stickers (3x3 grid)
- Index mapping:
  ```
  0 1 2
  3 4 5
  6 7 8
  ```

## Solving Algorithm

The app implements a layer-by-layer solving approach that's perfect for beginners:
- No prerequisites knowledge required
- Uses intuitive, easy-to-memorize algorithms
- Builds spatial reasoning skills
- Typical solving time: 2-3 minutes after practice

## Tips for Success

✅ **Do:**
- Start with the tutorial and learn one step at a time
- Practice each step repeatedly until it's automatic
- Use the visualizer to improve spatial awareness
- Scramble and solve your cube regularly

❌ **Don't:**
- Rush through the steps
- Skip the tutorial sections
- Try to memorize without understanding
- Get frustrated - practice makes perfect!

## Average Learning Time

- **First layer**: 2-3 sessions
- **Middle layer**: 2-3 sessions
- **Last layer**: 3-4 sessions
- **Total**: 1-2 weeks of regular practice

## Performance Tips

- The solving algorithm takes ~2-5 seconds to generate a solution
- 3D visualization is smooth on modern devices
- The app uses minimal memory (~50MB)

## Future Enhancements

- [ ] Full 3D cube rotation with touch gestures
- [ ] Cubing timer and statistics tracking
- [ ] Multiple solving methods (CFOP, Roux, etc.)
- [ ] Camera input to read physical cube state
- [ ] Multiplayer solving challenges
- [ ] Advanced optimization algorithms
- [ ] Dark mode support
- [ ] Offline tutorial mode

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### Development Workflow
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support & Feedback

If you encounter any issues or have suggestions for improvements:
1. Open an issue on GitHub
2. Include detailed description of the problem
3. Add screenshots if applicable
4. List your device and OS version

## Troubleshooting

### "Invalid move" error
- Check the notation (R, U, F, D, L, B only)
- Use lowercase or uppercase (both work)
- Remember modifiers: ' for reverse, 2 for double

### Visualizer not rotating smoothly
- Close other apps to free up memory
- Restart the app
- Try on a device with better performance

### App crashes on startup
- Clear app cache
- Reinstall the app
- Check that all dependencies are installed

## Credits

Developed with ❤️ using React Native and educational best practices.

Inspired by the beginner-friendly Rubik's cube solving methods taught worldwide.

---

**Happy Cubing! 🎉**
