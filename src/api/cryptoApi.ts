import axios from "axios";

export interface CryptoPriceResponse {
  bitcoin: {
    usd: number;
  };
  ethereum: {
    usd: number;
  };
}

export const getCryptoPrices = async (): Promise<CryptoPriceResponse> => {
  const response = await axios.get<CryptoPriceResponse>(
    "https://api.coingecko.com/api/v3/simple/price",
    {
      params: {
        ids: "bitcoin,ethereum",
        vs_currencies: "usd",
      },
    }
  );
  return response.data;
};
