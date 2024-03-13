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

export const UserQuestionSubmitList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="questionid"/>
            <TextField source="userid"/>
            <TextField source="runtimebymsec"/>
            <TextField source="submittime"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const UserQuestionSubmitEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="questionid"/>
            <TextInput source="userid"/>
            <TextInput source="runtimebymsec"/>
            <TextInput source="submittime"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const UserQuestionSubmitCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="eventid"/>
            <TextInput source="questionid"/>
            <TextInput source="userid"/>
            <TextInput source="runtimebymsec"/>
            <TextInput source="submittime"/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);