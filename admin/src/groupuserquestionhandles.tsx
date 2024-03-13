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

export const GroupUserQuestionHandleList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="groupid"/>
            <TextField source="userid"/>
            <TextField source="questionid"/>
            <TextField source="status"/>
            <TextField source="createdDate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const GroupUserQuestionHandleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="userid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const GroupUserQuestionHandleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="eventid"/>
            <TextInput source="userid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);