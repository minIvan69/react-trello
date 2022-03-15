import { FunctionComponent, useState } from "react";
import { IModalAuthorProps, ISubmitValue } from "./interfaces";
import {} from "react-cookie";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/ducks";
import { Input, Form } from "..";

const AuthorModal: FunctionComponent<IModalAuthorProps> = ({
  visibleModal,
}) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const onCancel = () => {};

  const onSubmit = (value: ISubmitValue) => {
    setVisible(false);
    visibleModal(false);
    dispatch(actions.authorNames.setAuthor(value.value));
    console.log(value.value);
  };

  return visible ? (
    // <Form
    //   onSubmit={onsubmit}
    //   render={({ handleSubmit, submitting, pristine }) => (
    //     <StyledForm onSubmit={handleSubmit}>
    //       <Field
    //         name="value"
    //         type="text"
    //         component={Input}
    //         placeholder={"Input your author name"}
    //       />

    //       {submitting || pristine ? (
    //         <DisabledButton type="submit" disabled={true}>
    //           Accept
    //         </DisabledButton>
    //       ) : (
    //         <StyledButton type="submit"> Accept </StyledButton>
    //       )}
    //     </StyledForm>
    //   )}
    // />
    <Form onSubmitForm={onSubmit} onCancel={onCancel} component={Input} />
  ) : null;
};

export default AuthorModal;
