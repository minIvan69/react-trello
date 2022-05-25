import { FunctionComponent } from "react";
import { IEditProps, ISubmitValue } from "./interfaces";
import { Input, TextArea, Form } from "..";

const EditComponent: FunctionComponent<IEditProps> = ({
  onSubmitForm,
  isTextArea,
  setIsEdit,
  defaultText,
}) => {
  const onCancel = () => {
    setIsEdit(false);
  };

  const onSubmit = (values: ISubmitValue) => {
    onSubmitForm(values.value);
  };

  return (
    <Form
      onSubmitForm={onSubmit}
      onCancel={onCancel}
      component={isTextArea ? TextArea : Input}
      defaultText={defaultText}
    />
  );
};

export default EditComponent;
