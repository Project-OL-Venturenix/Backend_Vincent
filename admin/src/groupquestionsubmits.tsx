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

export const GroupQuestionSubmitList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="groupid"/>
            <TextField source="questionid"/>
            <TextField source="userlist"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const GroupQuestionSubmitEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="userlist"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const GroupQuestionSubmitCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="eventid"/>
            <TextInput source="userid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="runtimebymsec"/>
            <TextInput source="submittime"/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);