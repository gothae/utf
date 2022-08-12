import { openviduInstance } from "./index.js";

const api = openviduInstance();
const OPENVIDU_SERVER_SECRET = "MY_SECRET";

async function recordingStopApi(recordingId, success, fail) {
  await api
    .post(
      `/openvidu/api/recordings/stop/${recordingId}`,
      {},
      {
        auth: {
          username: "OPENVIDUAPP",
          password: OPENVIDU_SERVER_SECRET,
        },
      }
    )
    .then(success)
    .catch(fail);
}

async function recordingStartApi(sessionId, success, fail) {
  await api
    .post(
      `/openvidu/api/recordings/start`,
      JSON.stringify({
        session: sessionId,
        name: "testRecording",
        hasAudio: false,
        hasVideo: true,
        outputMode: "COMPOSED",
        recordingLayout: "BEST_FIT",
        resolution: "1280x720",
        frameRate: 25,
        shmSize: 536870912,
        ignoreFailedStreams: false,
      }),
      {
        auth: {
          username: "OPENVIDUAPP",
          password: OPENVIDU_SERVER_SECRET,
        },
      }
    )
    .then(success)
    .catch(fail);
}

async function createSessionApi(sessionId, success, fail) {
  await api
    .post(
      `/openvidu/api/sessions`,
      JSON.stringify({
        customSessionId: sessionId,
      }),
      {
        auth: {
          username: "OPENVIDUAPP",
          password: OPENVIDU_SERVER_SECRET,
        },
      }
    )
    .then(success)
    .catch(fail);
}

async function createTokenApi(sessionId, role, success, fail) {
  await api
    .post(
      `/openvidu/api/sessions/${sessionId}/connection`,
      JSON.stringify({
        role: role,
      }),
      {
        auth: {
          username: "OPENVIDUAPP",
          password: OPENVIDU_SERVER_SECRET,
        },
      }
    )
    .then(success)
    .catch(fail);
}

export {
  createTokenApi,
  createSessionApi,
  recordingStartApi,
  recordingStopApi,
};