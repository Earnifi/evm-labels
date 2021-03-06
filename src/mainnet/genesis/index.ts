import genesisAll from "./all.json";
import genesisAddresses from "./addresses.json";
import { isGenesisAddress } from "./is-genesis-address";

interface AllData {
  address: string;
  nameTag: string;
}
export const genesis = {
  all: genesisAll as AllData[],
  addresses: genesisAddresses,
  isGenesisAddress,
};
