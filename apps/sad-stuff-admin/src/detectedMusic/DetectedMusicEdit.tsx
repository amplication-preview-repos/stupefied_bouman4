import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DetectionLogTitle } from "../detectionLog/DetectionLogTitle";

export const DetectedMusicEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
