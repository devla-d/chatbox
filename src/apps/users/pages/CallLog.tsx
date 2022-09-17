import CallLogCard from "../components/CallLogCard";
import PageHead from "../components/PageHead";

const CallLog = () => {
  return (
    <>
      <PageHead name="Call Logs" />
      <div className="p-4 call-log-list">
        <ul className="list-unstyled">
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
          <CallLogCard />
        </ul>
      </div>
    </>
  );
};

export default CallLog;
