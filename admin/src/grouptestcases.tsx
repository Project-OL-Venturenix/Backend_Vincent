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

export const GroupTestCaseList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="groupid"/>
            <TextField source="questionid"/>
            <TextField source="runstarttimeutc"/>
            <TextField source="runendtimeutc"/>
            <TextField source="runtimeutc"/>
            <TextField source="runstarttime"/>
            <TextField source="runendtime"/>
            <TextField source="testcasefilepath"/>
            <TextField source="filename"/>
            <TextField source="testcasepassstatus"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const GroupTestCaseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="runstarttimeutc"/>
            <TextInput source="runendtimeutc"/>
            <TextInput source="runtimeutc"/>
            <TextInput source="runstarttime"/>
            <TextInput source="runendtime"/>
            <TextInput source="testcasefilepath"/>
            <TextInput source="filename"/>
            <TextInput source="testcasepassstatus"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const GroupTestCaseCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="eventid"/>
            <TextInput source="groupid"/>
            <TextInput source="questionid"/>
            <TextInput source="runstarttimeutc"/>
            <TextInput source="runendtimeutc"/>
            <TextInput source="runtimeutc"/>
            <TextInput source="runstarttime"/>
            <TextInput source="runendtime"/>
            <TextInput source="testcasefilepath"/>
            <TextInput source="filename"/>
            <TextInput source="testcasepassstatus"/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);