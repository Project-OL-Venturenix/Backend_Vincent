package com.venturenix.cmc.controllers.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.venturenix.cmc.controllers.GroupScoreOperation;
import com.venturenix.cmc.entity.GroupScore;
import com.venturenix.cmc.entity.Group;
import com.venturenix.cmc.entity.GroupQuestionSubmit;
import com.venturenix.cmc.payload.request.GroupScoreRequest;
import com.venturenix.cmc.payload.response.MessageResponse;
import com.venturenix.cmc.repository.GroupScoreRepository;
import com.venturenix.cmc.payload.response.GroupScoreDTO;
import com.venturenix.cmc.repository.RoleRepository;
import com.venturenix.cmc.repository.UserRepository;
import com.venturenix.cmc.repository.GroupQuestionSubmitRepository;
import com.venturenix.cmc.security.jwt.JwtUtils;

import com.venturenix.cmc.repository.EventRepository;
import com.venturenix.cmc.repository.QuestionRepository;
import com.venturenix.cmc.repository.RoleRepository;
import com.venturenix.cmc.repository.GroupRepository;
import com.venturenix.cmc.repository.GroupScoreRepository;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class GroupScoreController implements GroupScoreOperation {
  @Autowired
  AuthenticationManager authenticationManager;


  @Autowired
  GroupRepository groupRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  GroupQuestionSubmitRepository groupquestionsubmitRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;


  @Autowired
  private EventRepository eventRepository;

  @Autowired
  private QuestionRepository questionRepository;

  @Autowired
  GroupScoreRepository groupscoreRepository;

  /*
  public ResponseEntity<?> addGroupScore(GroupScoreRequest groupscoreRequest) {
    GroupScore groupscore = new GroupScore(groupscoreRequest.getEventid(),
        groupscoreRequest.getGroupid(), groupscoreRequest.getQuestionid(),
        groupscoreRequest.getTestcasepasstotal(),
        groupscoreRequest.getTestcasescoretotal(),
        groupscoreRequest.getTestcasetotal(), groupscoreRequest.getStatus(),
        java.time.LocalDateTime.now(), groupscoreRequest.getCreatedby(),
        java.time.LocalDateTime.now(), groupscoreRequest.getUpdatedby());
    groupscoreRepository.save(groupscore);
    return ResponseEntity
        .ok(new MessageResponse("Add GroupScore successfully!"));

  }
  */
  public ResponseEntity<?> addGroupScore(GroupScoreRequest groupscoreRequest) {
    GroupScore groupscore = GroupScore.builder()
            .eventid(groupscoreRequest.getEventid())
            .groupid(groupscoreRequest.getGroupid())
            .questionid(groupscoreRequest.getQuestionid())
            .testcasePassTotal(groupscoreRequest.getTestcasepasstotal())
            .testcaseScoreTotal(groupscoreRequest.getTestcasescoretotal())
            .status(groupscoreRequest.getTestcasepasstotal() == 10 ? "Pass" : "Fail")//
            .createddate(java.time.LocalDateTime.now())
            .createdby(groupscoreRequest.getCreatedby())
            .updateddate(java.time.LocalDateTime.now())
            .updatedby(groupscoreRequest.getUpdatedby()).build();

    groupscoreRepository.save(groupscore);
    return ResponseEntity
            .ok(new MessageResponse("Add GroupScore successfully!"));

  }


  public ResponseEntity<List<GroupScore>> getAllGroupScores() {
    try {
      List<GroupScore> groupscores = new ArrayList<GroupScore>();
      groupscoreRepository.findAll().forEach(groupscores::add);
      if (groupscores.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(groupscores, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

    }

  }

  public ResponseEntity<GroupScore> getGroupScoreById(long id) {
    Optional<GroupScore> groupscoreData = groupscoreRepository.findById(id);
    if (groupscoreData.isPresent()) {
      return new ResponseEntity<>(groupscoreData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  /*
  public ResponseEntity<GroupScore> updateGroupScore(long id,
      GroupScore groupscore) {
    Optional<GroupScore> groupscoreData = groupscoreRepository.findById(id);

    if (groupscoreData.isPresent()) {
      GroupScore _groupscore = groupscoreData.get();
      _groupscore.setEventid(groupscore.getEventid());
      _groupscore.setGroupid(groupscore.getGroupid());
      _groupscore.setQuestionid(groupscore.getQuestionid());
      _groupscore.setTestcasepasstotal(groupscore.getTestcasepasstotal());
      _groupscore.setTestcasescoretotal(groupscore.getTestcasescoretotal());
      _groupscore.setTestcasetotal(groupscore.getTestcasetotal());
      _groupscore.setStatus(groupscore.getStatus());
      _groupscore.setUpdateddate(java.time.LocalDateTime.now());
      _groupscore.setUpdatedby(groupscore.getUpdatedby());
      return new ResponseEntity<>(groupscoreRepository.save(_groupscore),
          HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  */

public ResponseEntity<GroupScore> updateGroupScore(long id,
                                                   GroupScore groupscore) {
    Optional<GroupScore> groupscoreData = groupscoreRepository.findById(id);

    if (groupscoreData.isPresent()) {
      GroupScore _groupscore = groupscoreData.get();
      _groupscore.setEventid(groupscore.getEventid());
      _groupscore.setGroupid(groupscore.getGroupid());
      _groupscore.setQuestionid(groupscore.getQuestionid());
      _groupscore.setTestcasescoretotal(groupscore.getTestcasescoretotal());
      _groupscore.setStatus(groupscore.getStatus());
      _groupscore.setUpdateddate(java.time.LocalDateTime.now());
      _groupscore.setUpdatedby(groupscore.getUpdatedby());
      return new ResponseEntity<>(groupscoreRepository.save(_groupscore),
              HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }


  public ResponseEntity<?> deleteGroupScore(long id) {
    try {
      groupscoreRepository.deleteById(id);
      return ResponseEntity.ok(
          new MessageResponse("Delete GroupScore " + id + " successfully!"));
    } catch (Exception e) {
      return ResponseEntity
          .ok(new MessageResponse("HttpStatus.INTERNAL_SERVER_ERROR"));
    }
  }

  @Override
  public boolean addScore(String eventid, String groupid, String questionid,
                          String testcasePassTotal) {
    Long eventID = Long.valueOf(eventid);
    Long groupID = Long.valueOf(groupid);
    Long questionID = Long.valueOf(questionid);
    Integer testcasePass = Integer.valueOf(testcasePassTotal);
    if (eventRepository.findById(eventID).isPresent()
            && groupRepository.findById(groupID).isPresent()
            && questionRepository.findById(questionID).isPresent()) {
      groupscoreRepository.saveAndFlush(GroupScore.builder()//
              .eventid(eventID)//
              .groupid(groupID)//
              .questionid(questionID)//
              .testcasePassTotal(testcasePass)//
              .testcaseScoreTotal(0.0)//
              .status(testcasePass == 10 ? "Pass" : "Fail")//
              .createddate(LocalDateTime.now())//
              .updateddate(LocalDateTime.now())//
              .build());
      return true;
    } else {
      return false;
    }
  }

@Override
public ResponseEntity<GroupScoreDTO> getGroupTestCaseByEventId(String eventid) {
    Long eventId = Long.valueOf(eventid);
    List<GroupScore> target = groupscoreRepository.findByEventid(eventId);

    Map<Long, GroupScoreDTO.GroupResult> groupResultMap = new HashMap<>();

    for (GroupScore groupScore : target) {
        Optional<Group> groupOptional = groupRepository.findById(groupScore.getGroupid());
        Long questionId = groupScore.getQuestionid();
        Long groupId = groupScore.getGroupid();

        GroupScoreDTO.GroupResult groupResult = groupResultMap.getOrDefault(groupId, new GroupScoreDTO.GroupResult());
        if (!groupResultMap.containsKey(groupId)) {
            groupResult.setName(groupOptional.orElse(new Group()).getName()); // Assuming user id as name
            groupResult.setScore(new HashMap<>());
            groupResult.setSubmittime(new HashMap<>());
            groupResultMap.put(groupId, groupResult);
        }

        List<GroupQuestionSubmit> target1 = groupquestionsubmitRepository.findByEventid(eventId, questionId, groupId);
        //LocalDateTime submittime = LocalDateTime.now();
        LocalDateTime submittime = null;
        for (GroupQuestionSubmit groupQuestionSubmit : target1) {
            if (groupQuestionSubmit.getQuestionid() == questionId) {
                //userResult.setSubmittime(new HashMap<>());
                submittime = groupQuestionSubmit.getSubmittime();
                break;
            }
        }

        String questionKey = "Q" + groupScore.getQuestionid();
        int score = groupScore.getTestcasepasstotal();

        groupResult = groupResultMap.get(groupId);
        groupResult.getScore().put(questionKey, score);
        groupResult.getSubmittime().put(questionKey, submittime);
    }

    List<GroupScoreDTO.GroupResult> groupResults = new ArrayList<>(groupResultMap.values());

    GroupScoreDTO groupScoreDTO = new GroupScoreDTO();
    groupScoreDTO.setEventId(eventId.intValue());
    groupScoreDTO.setResult(groupResults);

    return ResponseEntity.ok(groupScoreDTO);
}

}
