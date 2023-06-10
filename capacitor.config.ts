import { CapacitorConfig } from '@capacitor/cli';
import {SplashScreen} from "@capacitor/splash-screen";

// Hide the splash (you should do this on app launch)
SplashScreen.hide();

// Show the splash for an indefinite amount of time:
SplashScreen.show({
  autoHide: false,
});

// Show the splash for two seconds and then automatically hide it:
SplashScreen.show({
  showDuration: 2000,
  autoHide: true,
});

const config: CapacitorConfig = {
  appId: 'com.example.museum',
  appName: 'museum',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
      SplashScreen: {
        launchShowDuration: 0,
        launchAutoHide: true,
        launchFadeOutDuration: 3000,
        backgroundColor: "#000000",
        androidSplashResourceName: "splash",
        androidScaleType: "CENTER_CROP",
        showSpinner: true,
        androidSpinnerStyle: "large",
        iosSpinnerStyle: "small",
        spinnerColor: "#999999",
        splashFullScreen: true,
        splashImmersive: true,
        layoutName: "launch_screen",
        useDialog: true,
      }
  }
};

export default config;
