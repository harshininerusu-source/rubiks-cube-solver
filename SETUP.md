# Rubik's Cube Solver - Setup & Development Guide

## Quick Start

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### For Android Development
- **Android Studio** - [Download](https://developer.android.com/studio)
- **Android SDK** - Installed via Android Studio
- **Java Development Kit (JDK)** - Version 11 or higher

### For iOS Development (macOS only)
- **Xcode** - Download from App Store
- **CocoaPods** - Install via: `sudo gem install cocoapods`
- **Node.js and Watchman** - `brew install watchman`

---

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/harshininerusu-source/rubiks-cube-solver.git
cd rubiks-cube-solver
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Install React Native CLI (Optional but recommended)
```bash
npm install -g react-native-cli
```

### 4. For iOS Development (macOS only)
```bash
cd ios
pod install
cd ..
```

---

## Running the App

### Android
```bash
# Start the development server
npm start

# In another terminal, run on Android device/emulator
npm run android
# or
react-native run-android
```

### iOS (macOS only)
```bash
# Start the development server
npm start

# In another terminal, run on iOS simulator
npm run ios
# or
react-native run-ios
```

### Without Building (Development)
```bash
npm start
# This starts the Metro bundler
# Scan QR code with Expo Go app on your phone
```

---

## Project Structure

```
rubiks-cube-solver/
├── src/
│   ├── App.js                      # Main application component
│   ├── screens/
│   │   ├── HomeScreen.js           # Welcome screen
│   │   ├── TutorialScreen.js       # Step-by-step learning
│   │   ├── SolverScreen.js         # Interactive solver
│   │   └── VisualizerScreen.js     # 3D cube visualization
│   └── utils/
│       ├── cubeModel.js            # Rubik's cube data model
│       └── cubeSolver.js           # Solving algorithm
├── android/                         # Android-specific files
├── ios/                             # iOS-specific files
├── index.js                         # App entry point
├── package.json                     # Dependencies
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

---

## Understanding the Code

### App.js
The main application file that sets up navigation and theme:
- Defines bottom tab navigation
- Connects all screens
- Sets up app styling and colors

### Screens

#### HomeScreen.js
- Welcome and feature overview
- Navigation buttons to other sections
- Display of app benefits

#### TutorialScreen.js
- 6 expandable steps for learning
- Each step contains:
  - Description
  - Algorithm
  - Tips and tricks
- Difficulty badges
- Progress tracking

#### SolverScreen.js
- Cube state visualization
- Manual move input (R, U, F, D, L, B notation)
- Scramble generator
- Solution display with step-by-step guidance
- Statistics

#### VisualizerScreen.js
- 3D cube representation
- Rotation controls (X, Y, Z axes)
- Color legend
- Reset view functionality

### Utils

#### cubeModel.js
Represents the Rubik's cube internally:
- 6 faces with 9 stickers each
- Move execution (R, L, U, D, F, B rotations)
- State management

#### cubeSolver.js
Implements the solving algorithm:
- Layer-by-layer solving method
- Step explanations
- Solution generation

---

## Common Commands

```bash
# Start development server
npm start

# Run Android
npm run android

# Run iOS
npm run ios

# Run linter
npm run lint

# Run tests
npm run test

# Clean cache and rebuild
npm start -- --reset-cache
```

---

## Troubleshooting

### "Command not found: react-native"
Install React Native CLI globally:
```bash
npm install -g react-native-cli
```

### Android Build Issues
```bash
# Clear build cache
cd android
./gradlew clean
cd ..

# Rebuild
npm run android
```

### iOS Build Issues
```bash
# Clear pod cache
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..

# Rebuild
npm run ios
```

### Metro Bundler Issues
```bash
# Kill existing Metro process
lsof -ti:8081 | xargs kill -9

# Start fresh
npm start -- --reset-cache
```

### Device Not Detecting
- For Android: Enable USB debugging in developer options
- For iOS: Trust the computer in device settings
- Restart adb: `adb kill-server && adb start-server`

---

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes
- Edit relevant files in `src/` directory
- Test your changes on device/emulator

### 3. Commit Changes
```bash
git add .
git commit -m "Add your commit message"
```

### 4. Push to GitHub
```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request
- Go to GitHub repository
- Click "New Pull Request"
- Add description and submit

---

## Testing

### Manual Testing Checklist

#### HomeScreen
- [ ] All navigation buttons work
- [ ] Text is readable
- [ ] Icons display correctly

#### TutorialScreen
- [ ] All 6 steps expand/collapse
- [ ] Difficulty badges show correct colors
- [ ] Descriptions are clear

#### SolverScreen
- [ ] Cube visualization shows all colors
- [ ] Move input accepts valid notation
- [ ] Scramble generates random moves
- [ ] Solution displays correctly
- [ ] Previous/Next navigation works

#### VisualizerScreen
- [ ] Cube rotates smoothly
- [ ] All control buttons work
- [ ] Reset button restores default view
- [ ] Color legend is visible

---

## Performance Optimization

### Tips for Faster Development
1. Use Android emulator with hardware acceleration
2. Close unnecessary apps while developing
3. Use `--reset-cache` only when necessary
4. Keep dependencies up to date

### Performance Monitoring
```bash
# Monitor FPS and other metrics
npm start -- --verbose
```

---

## Building for Release

### Android Release Build
```bash
cd android
./gradlew assembleRelease
cd ..
# APK location: android/app/build/outputs/apk/release/
```

### iOS Release Build
```bash
# Using Xcode
open ios/rubiksCubeSolver.xcworkspace

# Build for distribution
# Product → Archive → Distribute App
```

---

## Debugging

### React Native Debugger
1. Install: [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
2. Open the debugger
3. Shake device or press `Ctrl+M` (Android) / `Cmd+D` (iOS)
4. Select "Debug Remote JS"

### Console Logging
```javascript
// Use console.log for debugging
console.log('Debug message:', variable);

// View logs
npm install -g react-native-cli
react-native log-android  # Android logs
react-native log-ios      # iOS logs
```

---

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Hooks Guide](https://react.dev/reference/react)

---

## Getting Help

1. **Check the README.md** for general information
2. **Search GitHub Issues** for similar problems
3. **Create a new GitHub Issue** with:
   - Detailed problem description
   - Steps to reproduce
   - Error messages/logs
   - Device and OS information

---

## Contributing Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test all changes before committing
- Write meaningful commit messages
- Keep PR descriptions clear and detailed

---

## License

MIT License - See LICENSE file for details

---

**Happy Coding! 🎉**
