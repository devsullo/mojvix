export class Tab {
  constructor(
    public name: string,
    public notifications: number,
    public load: boolean,
    public enabled: boolean
  ) {}
}

export class Navigation {
  constructor(
    public tabs: Tab[],
    public activeTab: number,
    public deactivatedTab: number
  ) {}
}
