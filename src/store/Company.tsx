import { action, flow, makeObservable, observable } from 'mobx';

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Status = 'idle' | 'loading' | 'error';

export class Team {
  status: Status = 'idle';
  data: { id: number; name: string }[] = [];

  constructor() {
    makeObservable(this, {
      status: observable,
      data: observable,
      loadData: flow,
      addEmployee: action,
    });

    this.loadData();
  }

  addEmployee(name: string) {
    this.data.push({
      id: Math.random(),
      name,
    });
  }

  *loadData() {
    this.status = 'loading';
    this.data = [];

    try {
      yield sleep(1000);

      this.data = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ];
    } catch (error) {
      this.status = 'error';
    }

    this.status = 'idle';
  }
}

export class Company {
  team: Team;

  constructor() {
    makeObservable(this, {
      team: observable,
    });

    this.team = new Team();
  }
}
