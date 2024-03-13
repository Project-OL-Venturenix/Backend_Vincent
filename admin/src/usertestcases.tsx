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

export const UserTestCaseList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="questionid"/>
            <TextField source="testcaseid"/>
            <TextField source="userid"/>
            <TextField source="testcasepassstatus"/>
            <TextField source="runstarttimeutc"/>
            <TextField source="runendtimeutc"/>
            <TextField source="runtimeutc"/>
            <TextField source="runstarttime"/>
            <TextField source="runendtime"/>
            <TextField source="testcasefilepath"/>
            <TextField source="filename"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const UserTestCaseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="questionid"/>
            <TextInput source="testcaseid"/>
            <TextInput source="userid"/>
            <TextInput source="testcasepassstatus"/>
            <TextInput source="runstarttimeutc"/>
            <TextInput source="runendtimeutc"/>
            <TextInput source="runtimeutc"/>
            <TextInput source="runstarttime"/>
            <TextInput source="runendtime"/>
            <TextInput source="testcasefilepath"/>
            <TextInput source="filename"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const UserTestCaseCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="eventid"/>
            <TextInput source="questionid"/>
            <TextInput source="testcaseid"/>
            <TextInput source="userid"/>
            <TextInput source="testcasepassstatus"/>
            <TextInput source="runstarttimeutc"/>
            <TextInput source="runendtimeutc"/>
            <TextInput source="runtimeutc"/>
            <TextInput source="runstarttime"/>
            <TextInput source="runendtime"/>
            <TextInput source="testcasefilepath"/>
            <TextInput source="filename"/>
            <TextInput source="status"/>
        </SimpleForm>
    </Create>
);