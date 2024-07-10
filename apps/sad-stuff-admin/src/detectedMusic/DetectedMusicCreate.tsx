import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DetectionLogTitle } from "../detectionLog/DetectionLogTitle";

export const DetectedMusicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="artist" source="artist" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceArrayInput
          source="detectionLogs"
          reference="DetectionLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DetectionLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
