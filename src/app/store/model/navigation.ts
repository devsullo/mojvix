export interface INavigation {
  tabs: {
    name: string;
    notifications: number;
  }[];
  activeTab: string;
  deactivatedTab: string;
}
