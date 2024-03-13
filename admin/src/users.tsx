import {
    List,
    Datagrid,
    TextField,
    EmailField,
    SimpleList,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput, Create, EditButton
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

// export const UserList = () => (
    // <List>
    //     <Datagrid rowClick="edit">
    //         <TextField source="id" />
    //         <TextField source="name" />
    //         <TextField source="username" />
    //         <EmailField source="email" />
    //         <TextField source="address.street" />
    //         <TextField source="phone" />
    //         <TextField source="website" />
    //         <TextField source="company.name" />
    //     </Datagrid>
    // </List>

    // <List>
    //     <SimpleList
    //         primaryText={(record) => record.name}
    //         secondaryText={(record) => record.username}
    //         tertiaryText={(record) => record.email}
    //     />
    // </List>
export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="firstname" />
                    <TextField source="lastname" />
                    <TextField source="mobile" />
                    <TextField source="email" />
                    <TextField source="username" />
                    <TextField source="password" />
                    <TextField source="company" />
                    <TextField source="title" />
                    <TextField source="py_experience" />
                    <TextField source="jv_experience" />
                    <TextField source="js_experience" />
                    <TextField source="cs_experience" />
                    <TextField source="sa_experience" />
                    <TextField source="status"/>
                    <TextField source="createddate" />
                    <TextField source="createdby" />
                    <TextField source="updateddate" />
                    <TextField source="updatedby" />
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
};

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <ReferenceInput source="userId" reference="users" link="show"/>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="mobile" />
            <TextInput source="email" />
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="company" />
            <TextInput source="title" />
            <TextInput source="py_experience" />
            <TextInput source="jv_experience" />
            <TextInput source="js_experience" />
            <TextInput source="cs_experience" />
            <TextInput source="sa_experience" />
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstname" required/>
            <TextInput source="lastname" required/>
            <TextInput source="mobile" required/>
            <TextInput source="email" required/>
            <TextInput source="username" required/>
            <TextInput source="password" required/>
            <TextInput source="company" required/>
            <TextInput source="title" />
            <TextInput source="py_experience" />
            <TextInput source="jv_experience" />
            <TextInput source="js_experience" />
            <TextInput source="cs_experience" />
            <TextInput source="sa_experience" />
            <TextInput source="status"/>
        </SimpleForm>
    </Create>
);