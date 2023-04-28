# Ya ganaste app test

- Mock API >>> https://dev.obtenmas.com/catom/api/challenge/banks
## Stack

- Frontend
  - [React Native](https://reactnative.dev/)
  - [Jest](https://jestjs.io/)

## Highlights

- Clean architecture
- Clean code
- Atomic design
- Singleton pattern
- Custom hooks
- Unit testing
- Custom labels in repository
- Follow guidelines

## Requeriments
Mandatory

- Node >= 14.7.3

## Local configuration
If you wish run the project in ios:

1. npm install
2. cd ios && pod install && cd ..
3. npm run ios
4. see the magic

If you wish run the project in android:

1. npm install
2. go to android folder and create the file local.properties with next line `sdk.dir=$HOME/Library/Android/sdk`
3. npm run android
4. see the magic

If you wish run the test, then:

1. npm run test

If you wish run the test with coverage, then:

1. npm run test:coverage

## Folder structure
Explanation of hierarchies in files and layers.

    ya-ganaste-app-test/
      ├── android/                         # android folder
      ├── ios/                             # ios folder
      └── src/                             # Application folder
          ├── components/                  # Components folder (Atomic design strategy)
          ├── constants/                   # General constants folder
          ├── hooks/                       # Custom hooks folder
          ├── navigators/                  # Stack screens folder
          ├── pages/                       # Screens folder
          ├── providers/                   # API provider folder
          └── utils/                       # Utilities folder

## Branches

- `main` >>> All features
- `feature/create-application-and-initial-view` >>> initial configurations and layouts with tests.
- `enhancement/get-data` >>> get data form API or local storage.
- `bugfix/readme` >>> bugfix readme file.

## Other details

- Layouts
  - BANKS
    - [IOS](https://drive.google.com/file/d/1BjO7Dx41souYvpYcCzRVqlYnv7wN4mCM/view?usp=sharing)
    - [ANDROID](https://drive.google.com/file/d/10cGRTUJRsUTv4weNlWs2puhV4VUjPj3M/view?usp=sharing)
  - BANKS DETAILS
    - [IOS](https://drive.google.com/file/d/12E7V71Due5F2g24ZLmbXfAtTK8fgwEML/view?usp=sharing)
    - [ANDROID](https://drive.google.com/file/d/1LFk2_JcVhvhqB0AUmOXrkbPnpFD4J7Ea/view?usp=sharing)
- General video
    - [IOS](https://drive.google.com/file/d/10bAmhaHB0bGlL19p9-zzqthvtBZjrPma/view?usp=sharing)
    - [ANDROID](https://drive.google.com/file/d/1VevD05jQEia7GBy40F1DOLf3LKvNX8g0/view?usp=sharing)
# License

MIT