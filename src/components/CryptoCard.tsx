import { CryptoPriceResponse } from "@/api/cryptoApi";
import { Bitcoin } from "lucide-react";

interface CryptoCardProps {
  prices: CryptoPriceResponse;
}

const CryptoCard = ({ prices }: CryptoCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-primary/20">
          <Bitcoin className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Crypto Prices</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
              <span className="text-orange-400 font-bold text-sm">₿</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Bitcoin</p>
              <p className="text-xs text-muted-foreground">BTC</p>
            </div>
          </div>
          <p className="text-lg font-display font-bold gradient-text">
            ${prices.bitcoin.usd.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-sm">Ξ</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Ethereum</p>
              <p className="text-xs text-muted-foreground">ETH</p>
            </div>
          </div>
          <p className="text-lg font-display font-bold gradient-text">
            ${prices.ethereum.usd.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
