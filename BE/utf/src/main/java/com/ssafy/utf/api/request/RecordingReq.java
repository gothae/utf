package com.ssafy.utf.api.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RecordingReq {

    private long lectureRoomId;
    private String id;
    private String name;
    private String sessionId;
    private long createdAt;
    private float duration;
    private String url;

}
