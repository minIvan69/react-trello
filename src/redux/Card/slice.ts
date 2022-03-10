import { actions } from "./../ducks";
import { ICard } from "../../interfaces/interfaces";
import { AddCard } from "../../components/Collumns/styles";

const initialState: ICard[] = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    AddCard(
      state,
      action: PayloadAction<{
        id: number;
        collumn: number;
        title: string;
        content: string;
        author: string;
      }>
    );,
  },
});
