import { FunctionComponent, useState } from "react";
import { IModalAuthorProps, ISubmitValue } from "./interfaces";
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
  };

  return visible ? (
    <Form onSubmitForm={onSubmit} onCancel={onCancel} component={Input} />
  ) : null;
};

export default AuthorModal;
