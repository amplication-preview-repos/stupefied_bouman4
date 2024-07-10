import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { DetectedMusicTitle } from "../detectedMusic/DetectedMusicTitle";

export const DetectionLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="detectedMusic.id"
          reference="DetectedMusic"
          label="DetectedMusic"
        >
          <SelectInput optionText={DetectedMusicTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
