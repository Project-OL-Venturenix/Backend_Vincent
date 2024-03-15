package com.venturenix.cmc.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.venturenix.cmc.entity.GroupQuestionSubmit;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface GroupQuestionSubmitRepository extends JpaRepository<GroupQuestionSubmit, Long> {

    Optional<GroupQuestionSubmit> findById(Long id);
    @Query(value = "SELECT * FROM groupquestionsubmit WHERE eventid=?1 AND questionid=?2 AND groupid=?3", nativeQuery = true)
    List<GroupQuestionSubmit> findByEventid(Long eventId, Long qustionId, Long groupId);

    List<GroupQuestionSubmit> findAll();
  
}