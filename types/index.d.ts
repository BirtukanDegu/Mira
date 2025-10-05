type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

type ColumnType = "draft" | "happy" | "calm" | "sad" | "angry";

type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

type CardProps = CardType & {
};

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};