package com.venturenix.cmc.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
@Entity
@Table(name = "groupquestionsubmit")
public class GroupQuestionSubmit {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Long eventid;
  private Long groupid;
  private Long questionid;
  private Long userid;
  private LocalDateTime submittime;
  private Double runtimebymsec;
  private String status;
  private LocalDateTime createddate;
  private Integer createdby;
  private LocalDateTime updateddate;
  private Integer updatedby;


  public GroupQuestionSubmit() {
    
  }

  public GroupQuestionSubmit(Long eventid, Long groupid, Long questionid, Long userid, LocalDateTime submittime, Double runtimebymsec,String status, LocalDateTime createddate, Integer createdby, LocalDateTime updateddate, Integer updatedby) {
    this.eventid = eventid;
    this.groupid = groupid;
    this.questionid = questionid;
    this.userid = userid;
    this.submittime = submittime;
    this.runtimebymsec = runtimebymsec;
    this.status = status;
    this.createddate = createddate;
    this.createdby = createdby;
    this.updateddate = updateddate;
    this.updatedby = updatedby;
    
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getEventid() {
    return eventid;
  }

  public void setEventid(Long eventid) {
    this.eventid = eventid;
  }

  public Long getGroupid() {
    return groupid;
  }

  public void setGroupid(Long groupid) {
    this.groupid = groupid;
  }

  public Long getUserid() {
    return userid;
  }

  public void setUserid(Long userid) {
    this.userid = userid;
  }  

  public Long getQuestionid() {
    return questionid;
  }

  public void setQuestionid(Long questionid) {
    this.questionid = questionid;
  }

  public LocalDateTime getSubmittime() {
    return submittime;
  }  

  public void setSubmittime(LocalDateTime submittime) {
    this.submittime = submittime;
  }  

  public Double getRuntimebymsec() {
    return runtimebymsec;
  }  

  public void setRuntimebymsec(Double runtimebymsec) {
    this.runtimebymsec = runtimebymsec;
  }  


  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Integer getCreatedby() {
    return createdby;
  }

  public void setCreatedby(Integer createdby) {
    this.createdby = createdby;
  }  

  public LocalDateTime getCreateddate() {
    return createddate;
  }

  public void setCreateddate(LocalDateTime createddate) {
    this.createddate = createddate;
  }  

  public Integer getUpdatedby() {
    return updatedby;
  }

  public void setUpdatedby(Integer updatedby) {
    this.updatedby = updatedby;
  }   

  public LocalDateTime getUpdateddate() {
    return updateddate;
  }

  public void setUpdateddate(LocalDateTime updateddate) {
    this.updateddate = updateddate;
  }  


}