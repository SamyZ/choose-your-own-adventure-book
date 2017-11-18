type CharacterType = {
  name: string,
  characteristics: Object,
};

const Character = (name?: string) => {
  this.name = name || '';
  this.characteristics = {};
  return this;
};

export type { CharacterType };
export default Character;
