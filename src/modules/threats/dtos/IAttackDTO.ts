export default interface IAttack {
  location: {
    lat: number;
    lng: number;
  };

  dangerLevel: string;

  monsterName: string;
}
