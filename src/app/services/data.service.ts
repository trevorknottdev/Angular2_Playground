export class DataService {
  items: Array<any> = [
    { id: 0, name: 'Gregg Plitt', country: 'USA'},
    { id: 1, name: 'Edward Snowden', country: 'N/A'},
    { id: 2, name: 'Arnie Shwartz', country: 'Germany'}
  ];

  getItems() {
    return this.items;
  }
}
