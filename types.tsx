import { ITask } from './components/TaskComponents/type';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Main: undefined;
  AddTask: undefined | ITask;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
