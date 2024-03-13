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

export const UserRoleList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const UserRoleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="name"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const UserRoleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required/>
            <TextInput source="status" required/>
        </SimpleForm>
    </Create>
);