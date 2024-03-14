package com.venturenix.cmc.payload.response;

import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
public class GroupScoreDTO {
    private int eventId;
    private List<GroupResult> result;

    public GroupScoreDTO() {

    }

    @Data
    @Builder
    @AllArgsConstructor
    public static class GroupResult {
        private String name;
        private Map<String, Integer> score;
        private Map<String, LocalDateTime> submittime;
        public GroupResult() {

        }
    }
}