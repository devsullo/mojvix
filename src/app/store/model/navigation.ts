export interface INavigation {
  tabs: {
    name: string;
    notifications: number;
    inited: boolean;
    disabled: boolean;
  }[];
  activeTab: string;
  deactivatedTab: string;
}
