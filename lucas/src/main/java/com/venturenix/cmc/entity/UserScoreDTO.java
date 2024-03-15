package com.venturenix.cmc.payload.response;

import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
import java.io.*; 
import java.util.*; 
@Data
@Builder
@AllArgsConstructor
public class UserScoreDTO {
    private int eventId;
    private List<UserResult> result;

    public UserScoreDTO() {
        
    }

    @Data
    @Builder
    @AllArgsConstructor
    public static class UserResult {
        private String name;
        private Map<String, Integer> score;
        private Map<String, LocalDateTime> submittime;
        public UserResult() {

        }
    }
}