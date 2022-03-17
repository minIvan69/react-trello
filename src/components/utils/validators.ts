export const required = (value: string) =>
  value ? undefined : "Fill in the required field";

export const mustBeString = (value: any) =>
  typeof value === "string" ? undefined : `Please enter a name, not a number`;

export const minLenghtValue = (min: number) => (value: string) =>
  typeof value === "string" && value.length <= min
    ? "Please enter more than 4 characters"
    : undefined;

export const composeValidators =
  (...validators: any[]) =>
  (value: string) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
