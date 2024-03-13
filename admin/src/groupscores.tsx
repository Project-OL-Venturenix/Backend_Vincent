import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    ReferenceInput,
    Edit,
    TextInput, Create
} from "react-admin";

export const GroupScoreList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="groupid"/>
            <TextField source="questionid"/>
            <TextField source="testcasepasstotal"/>
            <TextField source="testcasescoretotal"/>
            <TextField source="testcasetotal"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const GroupScoreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="testcasepasstotal"/>
            <TextInput source="testcasescoretotal"/>
            <TextInput source="testcasetotal"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const GroupScoreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="eventid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="testcasepasstotal"/>
            <TextInput source="testcasescoretotal"/>
            <TextInput source="testcasetotal"/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);