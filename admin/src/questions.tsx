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

export const QuestionList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.qustiontext}
                    secondaryText={(record) => record.answertext}
                    tertiaryText={(record) => record.status}
                />
            ) : (
        <Datagrid>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextField source="question" />
            <TextField source="testComputeCase"/>
            <TextField source="methodSignatures"/>
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

export const QuestionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="question" minRows={5}/>
            <TextInput source="testComputeCase"/>
            <TextInput source="methodSignatures"/>
            <TextInput source="createdby"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = () => (
    <Create>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="question" minRows={5}/>
            <TextInput source="testComputeCase"/>
            <TextInput source="methodSignatures"/>
        </SimpleForm>
    </Create>
);