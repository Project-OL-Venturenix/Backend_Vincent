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

export const TestcasescoreList = () => {
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
            <TextField source="testcasescore"/>
            <TextField source="testcasescoredesc"/>
            <TextField source="status"/>
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

export const TestcasescoreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id"/>
            <TextInput source="testcasescore"/>
            <TextInput source="testcasescoredesc"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const TestcasescoreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="testcasescore"/>
            <TextInput source="testcasescoredesc"/>
            <TextInput source="status"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Create>
);