export type NFT = {
  dna: string;
  name: string;
  description: string;
  image: string;
  edition: number;
  date: number;
  attributes: Attribute[];
};

export type Attribute = {
  trait_type: string;
  value: string;
};
