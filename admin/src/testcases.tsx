import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    SimpleList,
    ReferenceInput,
    Edit,
    TextInput, Create
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

export const TestcaseList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.qustionid}
                    secondaryText={(record) => record.testcasetext}
                    tertiaryText={(record) => record.textcaseresult}
                />
            ) : (
        <Datagrid>
            <TextField source="id"/>
            <TextField source="expectedOutput"/>
            <TextField source="input1"/>
            <TextField source="input2"/>
            <TextField source="input3"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
     )}
     </List>
 );
};

export const TestcaseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <TextField source="expectedOutput"/>
            <TextField source="input1"/>
            <TextField source="input2"/>
            <TextInput source="input3"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const TestcaseCreate = () => (
    <Create>
        <SimpleForm>
            <TextField source="expectedOutput"/>
            <TextField source="input1"/>
            <TextField source="input2"/>
            <TextInput source="input3"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Create>
);