export interface FullHeightCard {
  items: FullHeightCardItem[];
  onButtonClick: (...args) => void;
}

export interface FullHeightCardItem {
  backgroundColor: string;
  icon: string;
  title: string;
  description: string;
}
