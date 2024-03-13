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

export const UserScoreList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="userid"/>
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

export const UserScoreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="userid"/>
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

export const UserScoreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="eventid"/>
            <TextInput source="userid"/>
            <TextInput source="questionid"/>
            <TextInput source="testcasepasstotal"/>
            <TextInput source="testcasescoretotal"/>
            <TextInput source="testcasetotal"/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);