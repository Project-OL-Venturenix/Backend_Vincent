package com.venturenix.cmc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.venturenix.cmc.entity.GroupTestCase;
import java.util.List;

@Repository
public interface GroupTestCaseRepository extends JpaRepository<GroupTestCase, Long> {

    Optional<GroupTestCase> findById(Long id);

    List<GroupTestCase> findByEventid(Long id);

    List<GroupTestCase> findAll();
    
    

  
}