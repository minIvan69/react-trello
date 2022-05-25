import { FunctionComponent } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "..";
import { ICommentsStorage } from "../../interfaces/interfaces";
import { actions, selectors } from "../../redux/ducks";
import { ISubmitValue } from "./interfaces";
import { StyledButton, StyledForm } from "./styles";

const AddComponent: FunctionComponent = () => {
  const dispatch = useDispatch();
  const cardId = useSelector(selectors.localCards.getLocalCards);
  const author = useSelector(selectors.authorNames.getAuthorName);

  const onSubmitAddComment = (value: string) => {
    const newComment: ICommentsStorage = {
      id: new Date().getMilliseconds(),
      cardId: cardId,
      name: author,
      comment: value,
    };
    dispatch(actions.comments.addComments({ newComment }));
  };
  const onSubmit = (values: ISubmitValue) => {
    onSubmitAddComment(values.value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
            form.reset();
          }}
        >
          <Field
            name="value"
            component={Input}
            type="text"
            placeholder="Input your comment"
          />
          {submitting || pristine ? (
            <StyledButton type="submit" disabled={true}>
              OK
            </StyledButton>
          ) : (
            <StyledButton type="submit"> OK </StyledButton>
          )}
        </StyledForm>
      )}
    />
  );
};

export default AddComponent;
