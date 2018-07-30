export class Tab {
  constructor(
    public name: string,
    public notifications: number,
    public inited: boolean,
    public disabled: boolean
  ) {}
}

export class Navigation {
  constructor(
    public tabs: Tab[],
    public activeTab: string,
    public deactivatedTab: string
  ) {}
}
