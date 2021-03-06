import * as React from "react";
import { HelloComponent } from "../HelloComponent/HelloComponent";
import { containsNumber, isEmpty, isEqual } from "../Helpers/StringValidation";
import { ValidationErrors } from "../Helpers/ValidationErrors";
import { NameEditComponent } from "../NameEditComponent/NameEditComponent";
import { ValidationComponent } from "../ValidationComponent/ValidationComponent";

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
  const [errors, setErrors] = React.useState(Array<string>());

  const loadUsername = () => {
    setTimeout(() => {
      setName("async name");
      setEditingName("async name");
    }, 500);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const setUsernameState = () => {
    setName(editingName);
  };

  const isNameDisabled = () => {
    return (
      isEmpty(editingName) ||
      isEqual(editingName, name) ||
      !containsNumber(editingName)
    );
  };

  const onEditingNameUpdated = (newEditingName: string) => {
    setEditingName(newEditingName);
    validateErrors(newEditingName);
  };

  const validateErrors = (newEditingName: string) => {
    let errors: Array<string> = [];

    if (isEmpty(newEditingName)) {
      errors.push(ValidationErrors.EMPTY_STRING);
    }

    if (isEqual(newEditingName, name)) {
      errors.push(ValidationErrors.EQUAL_STRING);
    }

    if (!containsNumber(newEditingName)) {
      errors.push(ValidationErrors.NOT_CONTAINS_NUMBER);
    }

    setErrors(errors);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={onEditingNameUpdated}
        disabled={isNameDisabled()}
      />
      <ValidationComponent errors={errors} />
    </>
  );
};
