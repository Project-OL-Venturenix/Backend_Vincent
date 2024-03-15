package com.venturenix.cmc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.venturenix.cmc.entity.UserQuestionSubmit;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface UserQuestionSubmitRepository extends JpaRepository<UserQuestionSubmit, Long> {


    Optional<UserQuestionSubmit> findById(Long id);



    @Query(value = "SELECT * FROM userquestionsubmit WHERE eventid=?1 AND questionid=?2 AND userid=?3", nativeQuery = true)
    List<UserQuestionSubmit> findByEventid(Long eventId, Long qustionId, Long userId);



    //List<UserQuestionSubmit> findByEventid(Long id);

    List<UserQuestionSubmit> findAll();
    
    

  
}