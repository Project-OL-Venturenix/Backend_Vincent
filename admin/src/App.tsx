import {Admin, Resource, ShowGuesser} from "react-admin";
import {authProvider} from "./authProvider";
import {dataProvider} from './dataProvider';

import {UserEdit, UserList, UserCreate} from "./users";
import {GroupCreate, GroupEdit, GroupList} from "./groups";
//import {UserRoleCreate, UserRoleEdit, UserRoleList} from "./userroles";
import {EventCreate, EventEdit, EventList} from "./events";
import {QuestionList, QuestionEdit, QuestionCreate} from "./questions";
import {TestcaseList, TestcaseEdit, TestcaseCreate} from "./testcases";
import {TestcasescoreList, TestcasescoreEdit, TestcasescoreCreate} from "./testcasescores";
import {EventUserCreate, EventUserEdit, EventUserList} from "./eventusers";
import {EventGroupCreate, EventGroupEdit, EventGroupList} from "./eventgroups";
import {EventQuestionCreate, EventQuestionEdit, EventQuestionList} from "./eventquestions";
import {GroupScoreCreate, GroupScoreEdit, GroupScoreList} from "./groupscores";
import {GroupQuestionSubmitCreate, GroupQuestionSubmitEdit, GroupQuestionSubmitList} from "./groupquestionsubmits";
import {GroupTestCaseCreate, GroupTestCaseEdit, GroupTestCaseList} from "./grouptestcases";
import {UserTestCaseCreate, UserTestCaseEdit, UserTestCaseList} from "./usertestcases";
import {GroupUserQuestionHandleCreate, GroupUserQuestionHandleEdit, GroupUserQuestionHandleList} from "./groupuserquestionhandles";
import {GroupUserCreate, GroupUserEdit, GroupUserList} from "./groupusers";
import {UserQuestionSubmitCreate, UserQuestionSubmitEdit, UserQuestionSubmitList} from "./userquestionsubmits";
import {UserScoreCreate, UserScoreEdit, UserScoreList} from "./userscores";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={ShowGuesser} recordRepresentation="name"/>
        <Resource name="groups" list={GroupList} edit={GroupEdit} create={GroupCreate} show={ShowGuesser} recordRepresentation="name"/>                  
        {/*<Resource name="userroless" list={UserRoleList} edit={UserRoleEdit} create={UserRoleCreate} show={ShowGuesser} recordRepresentation="name"/>                  */}
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} show={ShowGuesser} recordRepresentation="name"/>
        <Resource name="questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} show={ShowGuesser} recordRepresentation="name"/>
        <Resource name="testcases" list={TestcaseList} edit={TestcaseEdit} create={TestcaseCreate} show={ShowGuesser} />
        {/*<Resource name="questiontestcases" list={TestcaseList} edit={TestcaseEdit} create={TestcaseCreate} show={ShowGuesser} />*/}
        <Resource name="testcasescores" list={TestcasescoreList} edit={TestcasescoreEdit} create={TestcasescoreCreate} show={ShowGuesser} />
        <Resource name="eventusers" list={EventUserList} edit={EventUserEdit} create={EventUserCreate}  show={ShowGuesser} />
        <Resource name="eventgroups" list={EventGroupList} edit={EventGroupEdit} create={EventGroupCreate}  show={ShowGuesser} />
        <Resource name="eventquestions" list={EventQuestionList} edit={EventQuestionEdit} create={EventQuestionCreate}  show={ShowGuesser} />
        <Resource name="groupscores" list={GroupScoreList} edit={GroupScoreEdit} create={GroupScoreCreate}/>
        <Resource name="groupquestionsubmits" list={GroupQuestionSubmitList} edit={GroupQuestionSubmitEdit} create={GroupQuestionSubmitCreate}/>
        <Resource name="grouptestcases" list={GroupTestCaseList} edit={GroupTestCaseEdit} create={GroupTestCaseCreate}/>
        <Resource name="usertestcases" list={UserTestCaseList} edit={UserTestCaseEdit} create={UserTestCaseCreate}/>
        <Resource name="groupuserquestionhandles" list={GroupUserQuestionHandleList} edit={GroupUserQuestionHandleEdit} create={GroupUserQuestionHandleCreate}/>
        <Resource name="groupusers" list={GroupUserList} edit={GroupUserEdit} create={GroupUserCreate}/>
        <Resource name="userquestionsubmits" list={UserQuestionSubmitList} edit={UserQuestionSubmitEdit} create={UserQuestionSubmitCreate}/>
        <Resource name="userscores" list={UserScoreList} edit={UserScoreEdit} create={UserScoreCreate}/>
        
    </Admin>
);